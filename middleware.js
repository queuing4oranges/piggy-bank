import { NextResponse } from "next/server";

// runs on every request
export function middleware(req) {
  // read auth cookie
  const auth = req.cookies.get("auth")?.value;

  // check if route is protected
  const isProtected = req.nextUrl.pathname.startsWith("/make-transaction");

  // block access if not logged in
  if (isProtected && auth !== "true") {
    return NextResponse.redirect(new URL("/locked", req.url));
  }

  // allow request
  return NextResponse.next();
}

// apply middleware only to this route
export const config = {
  matcher: ["/make-transaction/:path*"],
};
