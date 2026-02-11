import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AktisClient from "./AktisClient";
import { getCookieName, verifySessionCookie } from "@/shared/auth/session.node";

export default async function AktisPage() {
  const cookieStore = cookies();
  const cookieName = getCookieName();
  const token = (await cookieStore).get(cookieName)?.value;
  const secret = process.env.SESSION_SECRET || "";
  const session = verifySessionCookie(token, secret);

  // session yoxdursa loginə at
  if (!session) redirect("/aktis/login");

  // admin buraya gəlibsə admin panelə at
  if (session.role === "admin") redirect("/admin");

  return <AktisClient />;
}
