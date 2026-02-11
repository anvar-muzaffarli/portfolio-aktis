import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminClient from "./AdminClient";
import { getCookieName, verifySessionCookie } from "@/shared/auth/session.node";

export default async function AdminPage() {
  const cookieStore = cookies();
  const cookieName = getCookieName();
  const cookie = (await cookieStore).get(cookieName);
  const token = cookie?.value;
  const secret = process.env.SESSION_SECRET || "";
  const session = verifySessionCookie(token, secret);

  if (!session) redirect("/aktis/login");
  if (session.role !== "admin") redirect("/aktis");

  return <AdminClient />;
}
