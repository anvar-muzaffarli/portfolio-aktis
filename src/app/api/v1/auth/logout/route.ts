import { NextResponse } from "next/server";
import { getCookieName } from "@/shared/auth/session.node";

export async function POST() {
  const res = NextResponse.json({ ok: true });
  const name = getCookieName();

  res.cookies.set(name, "", {
    path: "/",
    maxAge: 0,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  return res;
}
