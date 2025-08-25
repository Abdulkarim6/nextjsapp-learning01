## Nested routes [folder name is route link name]
### folder	- [Route segment]
### folder/folder - [Nested route segment]

## Nested routes [folder name is route link name]
### [folder/id] - [Dynamic route segment]
### [...folder/id] - [Catch-all route segment]

## Route Groups and private folders 
### (folder) - [Group routes without affecting routing]
### _folder - [Opt folder and all child segments out of routing]

## builtIn function and component
1. () => signIn();
2. () => signIn("credentials", { email, password }) [credentials]
   () => signIn("Google"); [social]
3. () => signOut()

## Navber
1. callaing "getServerSession" calling with pass "outhOptions" as perameter for finding current user information.

## LoginButton 
2. use builtIn "signIn" function to signIn with NextAuth.js sign-in page.(1)
3. If we want to signIn with custom page, pass "providers and info" as perameter.(2)

## LogOutButton 
4. If we want to singOut, only called signOut builtIn function.(3)

## ProductsPage 
5. 
* created 'getProducts' function outside of the body of a function component, fetching data, then return the data.
* calls the 'getProducts' function inside of the body of a function component, and accept the data
6. 
* created a nested route page for fetching a single product by id

## aboutPage 
7. 
* logically send another route
* use custom css

## UsersPage 
8. 
* use custom json data of users, fetching data.
* create dynamic route for load a single user. get user id by params from 'UsersPage'. then load single user data by matching id using "find()" function.

## MealsPage 
9. 
* In main meals page, it's server component. calls a client component inside the server component for handle user activity.
* when an user search"s an item, the search value set's on 'URl Query Parameter' on browser address bar "using usePathname() and useRouter()" hook of nextjs by client component. 
* Then In main meals page, gets the search value by "{searchParams}" perameter. then fetch function again fetching data using search value.
10. 
* For fetching a single meal item, uses Link like <Link href="/meals/${meal?.idMeal}">Details</Link>
* Then the passed value of id found using params in single meal route page, and fetching single meal data using the id.
* use
'images: {
    remotePatterns: [new URL("https://www.themealdb.com/**")],
}' configuration in next.config file for using "Image" component of NextJs to load image from external or mealdb website.

## CartsPage 
11. https://nextjs.org/docs/app/getting-started/route-handlers-and-middleware
* At first, data fetching using custom route handler api[folder name api\carts][commented]
* use conditionally "redirect"(worked only inside the server component) navigation on a route [commented]

* second time(good ways), data fetching using 'server action'(worked only inside the server component).[folder name actions\carts]
## addToCartPage [nested route]
12. 
* calls a client component[<InputCart/>] for handling user activity.
13. inside the InputCart
*  At first, data posting using custom route handler api[folder name api\carts][commented].
  
* second time(good ways), data posting using 'server action'(worked only inside the server component).[folder name actions\carts]

## dashboardPage
14. 
* handling conditionally user and admin dashboard

## RegisterForm [client component] 
15. 
* used server action to post user data in database[folder name api\auth]

## middleware 
16. 
* used NextJs 'middleware' to show or protect conditionally a route.

## SessionProvider 
17. 
* use 'NextAuthSessionProvider' to observe current login user. The 'NextAuthSessionProvider' wraped main layout.
* get current user info by calling 'getServerSession' function with authOptions perameter from "next-auth"

## authOptions folder 
18. 
* Inside of authOptions object declared 'CredentialsProvider' for login with name, email and password
* for login with google, declared GoogleProvider inside the provider object.
* for login with github, declared GitHubProvider inside the provider object.

* In callbacks inside the authOptions;
* "jwt" function get current login user, set user info in token.
* then "session" function stored user info from token.
* signIn calls when an user login with social like google and github.

## cookies or token send in server from client
19. 
* does not have directly cookies access of server components.
* pass headers option with fetching api for access cookies/token;
   const res = await fetch("https://dummyjson.com/products", {
    neaders : new Headers(await headers())
   });
   why do?
   when need user information using nextJs function 'getServerSession(authOptions)'.
   getServerSession function collects user info using token from cookies.

