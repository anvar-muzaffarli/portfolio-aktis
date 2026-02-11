import { NextRequest, NextResponse } from "next/server";
import { getCookieNameEdge, verifySessionCookieEdge } from "@/shared/auth/session.edge";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const token = req.cookies.get(getCookieNameEdge())?.value;
  const secret = process.env.SESSION_SECRET || "";
  const session = await verifySessionCookieEdge(token, secret);

  // Admin /aktis-ə girəndə birbaşa /admin-ə keçsin
  if (pathname === "/aktis" && session?.role === "admin") {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  // Login səhifəsi: login olubsa içəri at
  if (pathname === "/aktis/login") {
    if (session?.role === "admin") return NextResponse.redirect(new URL("/admin", req.url));
    if (session?.role === "student") return NextResponse.redirect(new URL("/aktis", req.url));
    return NextResponse.next();
  }

  // AKTIS bölməsi: login tələb olunur
  if (pathname.startsWith("/aktis")) {
    if (!session) return NextResponse.redirect(new URL("/aktis/login", req.url));
  }

  // Admin bölməsi: yalnız admin
  if (pathname.startsWith("/admin")) {
    if (!session) return NextResponse.redirect(new URL("/aktis/login", req.url));
    if (session.role !== "admin") return NextResponse.redirect(new URL("/aktis", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/aktis/:path*", "/admin/:path*"],
};
