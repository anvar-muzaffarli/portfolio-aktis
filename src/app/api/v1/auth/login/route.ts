import { NextResponse } from "next/server";
import { createSessionCookie, getCookieName } from "@/shared/auth/session.node";
import { mustEnv } from "@/shared/lib/env";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const username = String(body?.username || "").trim();
  const password = String(body?.password || "");

  const secret = mustEnv("SESSION_SECRET");

  const adminUser = mustEnv("AKTIS_ADMIN_USER");
  const adminPass = mustEnv("AKTIS_ADMIN_PASS");

  const studentUser = mustEnv("AKTIS_STUDENT_USER");
  const studentPass = mustEnv("AKTIS_STUDENT_PASS");

  let role: "admin" | "student" | null = null;

  if (username === adminUser && password === adminPass) role = "admin";
  else if (username === studentUser && password === studentPass) role = "student";

  if (!role) {
    return NextResponse.json({ ok: false, message: "Login və ya şifrə yanlışdır." }, { status: 401 });
  }

  const token = createSessionCookie({ role, user: username }, secret, 12);

  const res = NextResponse.json({
    ok: true,
    role,
    redirectTo: role === "admin" ? "/admin" : "/aktis",
  });

  res.cookies.set(getCookieName(), token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });
  

  return res;
}
