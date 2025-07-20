import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
      let cookie = request.cookies.get('nextjs')
      //console.log(cookie?.value)

    const dummyUser = {
        role : "admin",
        email : "test@gmail.com"
    }
    const isProductsPage = request.nextUrl.pathname.startsWith(("/products"));
    const isAdmin = dummyUser?.role == "admin";

    if(isProductsPage && !isAdmin)
        return NextResponse.redirect(new URL("/", request.url))
        // return NextResponse.rewrite(new URL("/", request.url))
    
  return NextResponse.next()
}

// origianl middleware from nextjs website
// import { NextResponse } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function middleware(request) {
//   return NextResponse.redirect(new URL('/', request.url))
// }
 
// export const config = {
//   matcher: '/about/:path*',
// }