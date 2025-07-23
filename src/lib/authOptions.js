import dbConnect from "@/lib/dbConnect";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
  CredentialsProvider({
    // The name to display on the sign in form (e.g. "Sign in with...")
    name: "Credentials",
    // `credentials` is used to generate a form on the sign in page.
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
      name: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials, req) {
      
      // Add logic here to look up the user from the credentials supplied
      // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
      const {name, password} = credentials;
      const user = await dbConnect("users").findOne({name});
      // console.log("credentials",credentials);

      const isPasswordOk = password == user.password;

      if (isPasswordOk) {
        // Any object returned will be saved in `user` property of the JWT
        return user;
      } else {
        // If you return null then an error will be displayed advising the user to check their details.
        return null

        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      }
    }
  }),
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  }),
  GitHubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET
  })
],
/**  use if we want nextAuth default page Ui in our custom UI, just add our custom page link
pages: {
  signIn: '/signin', //custom page link
  signOut: '/signout',
  error: '/auth/error', // Error code passed in query string as ?error=
  verifyRequest: '/auth/verify-request', // (used for check email message)
  newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
},
*/
callbacks: {
  async signIn({ user, account }) {
    if(account){
      try {
        const {name, email, image} = user;
        const {provider, providerAccountId} = account;
        const payload = {role:"user", name, email, image, provider, providerAccountId};
  
        const usersCollection = dbConnect("users");
        const isExistingUser = await usersCollection.findOne({providerAccountId});
  
        if(!isExistingUser){
          const res = await usersCollection.insertOne(payload);
          console.log(res);
        }
      } catch (error) {
        console.log(error);
        return false;
      }
    }
    return true
  },
    async session({ session, user, token }) {
      if(token){
        session.user.name = token.userName;
        session.user.role = token.role;
        // can add others information
      }
      return session;
    },
    //At signIn time, jwt found user info from CredentialsProvider[email and pass login] or signIn()[social login].
    //After jwt() executed, save the user info via session() using token.
    
    //jwt calls every time of reload or render page, without signIn actions jwt() not found current login user info.
    //if changes any document via database, then need to again set user info from database via query using token info. 
    async jwt({ token, user, account, profile, isNewUser }) { 
      if(user){   
        token.userName = user.name;
        // token.role = user.role ;
        token.role = user.role || "user"; // Default role
        // can add others information
      }
      else {
       // For OAuth login, fetch from DB // need if we change any document via database manually
        if (!user && token.email) {
          // const {name, email, role} = token;
          const user = await dbConnect("users").findOne({name : token?.name});
          token.userName = user.name;
          token.role = user.role || "user";
        }
      }

      return token
    }
}
}