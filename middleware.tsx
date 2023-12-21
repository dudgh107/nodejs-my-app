import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log('미들웨어 실행22233434343!!!');

  if ( request.nextUrl.pathname.startsWith('/products/1004')) {
    console.log('미들웨어 redirect');
    return NextResponse.redirect(new URL('/products', request.url))
  }
    //return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/products/:path*',
}