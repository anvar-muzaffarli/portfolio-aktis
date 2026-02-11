import crypto from "node:crypto";

const COOKIE_NAME = "aktis_session";

function base64url(input: Buffer | string) {
  const buf = Buffer.isBuffer(input) ? input : Buffer.from(input);
  return buf.toString("base64").replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}

function sign(payloadB64: string, secret: string) {
  const h = crypto.createHmac("sha256", secret).update(payloadB64).digest();
  return base64url(h);
}

export type SessionPayload = {
  role: "admin" | "student";
  user: string;
  exp: number;
};

export function createSessionCookie(payload: Omit<SessionPayload, "exp">, secret: string, ttlHours = 12) {
  const exp = Math.floor(Date.now() / 1000) + ttlHours * 3600;
  const full: SessionPayload = { ...payload, exp };

  const payloadB64 = base64url(JSON.stringify(full));
  const sig = sign(payloadB64, secret);
  return `${payloadB64}.${sig}`;
}

export function verifySessionCookie(value: string | undefined, secret: string): SessionPayload | null {
  if (!value) return null;
  const [payloadB64, sig] = value.split(".");
  if (!payloadB64 || !sig) return null;

  const expected = sign(payloadB64, secret);
  if (sig !== expected) return null;

  try {
    const json = Buffer.from(payloadB64.replaceAll("-", "+").replaceAll("_", "/"), "base64").toString("utf8");
    const data = JSON.parse(json) as SessionPayload;

    if (!data?.exp || data.exp < Math.floor(Date.now() / 1000)) return null;
    if (data.role !== "admin" && data.role !== "student") return null;

    return data;
  } catch {
    return null;
  }
}

export function getCookieName() {
  return COOKIE_NAME;
}
