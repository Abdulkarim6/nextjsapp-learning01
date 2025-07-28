import { getToken } from 'next-auth/jwt';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(req) {
      let cookie = req.cookies.get('nextjs')
      //console.log(cookie?.value);

      const token = await getToken({req});
      const isTokenOk = Boolean(token) // if found token, return true. otherwise false
      const isAdmin = token?.role == "Admin";
      const isAdminSpecificRoute = req.nextUrl.pathname.startsWith("/carts/addToCart");

      if (isAdminSpecificRoute && !isAdmin) {
        //** go signin page
        //  return NextResponse.redirect(new URL("/api/auth/signin", req.url)) 
         
        //** After signin, goes back the pathe, where was wanted to go
        const callbackUrl = decodeURIComponent(req.nextUrl.pathname)
        return NextResponse.redirect(new URL(`/api/auth/signin?callbackUrl=${callbackUrl}`, req.url)) // go signin page
      }

    // const dummyUser = {
    //     role : "admin",
    //     email : "test@gmail.com"
    // }
    // const isProductsPage = req.nextUrl.pathname.startsWith("/products");
    // const isAdmin = dummyUser?.role == "admin";

    // if(isProductsPage && !isAdmin)
    //     return NextResponse.redirect(new URL("/", req.url))
        // return NextResponse.rewrite(new URL("/", req.url))
    
  return NextResponse.next()
}

// origianl middleware from nextjs website
// import { NextResponse } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function middleware(req) {
//   return NextResponse.redirect(new URL('/', req.url))
// }
 
// export const config = {
//   matcher: '/about/:path*',
// }



// ***https://nextjs.org/docs/app/api-reference/file-conventions/middleware
// ***https://nextjs.org/docs/app/api-reference/file-conventions/middleware#matcher