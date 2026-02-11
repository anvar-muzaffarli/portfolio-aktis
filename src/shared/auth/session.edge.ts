const COOKIE_NAME = "aktis_session";

function base64urlToBytes(b64url: string) {
  const b64 = b64url.replaceAll("-", "+").replaceAll("_", "/") + "===".slice((b64url.length + 3) % 4);
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

function bytesToBase64url(bytes: ArrayBuffer) {
  const arr = new Uint8Array(bytes);
  let bin = "";
  for (let i = 0; i < arr.length; i++) bin += String.fromCharCode(arr[i]);
  const b64 = btoa(bin);
  return b64.replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}

async function hmacSha256Base64url(message: string, secret: string) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(message));
  return bytesToBase64url(sig);
}

export type SessionPayload = {
  role: "admin" | "student";
  user: string;
  exp: number;
};

export async function verifySessionCookieEdge(value: string | undefined, secret: string): Promise<SessionPayload | null> {
  if (!value) return null;
  const [payloadB64, sig] = value.split(".");
  if (!payloadB64 || !sig) return null;

  const expected = await hmacSha256Base64url(payloadB64, secret);
  if (sig !== expected) return null;

  try {
    const bytes = base64urlToBytes(payloadB64);
    const json = new TextDecoder().decode(bytes);
    const data = JSON.parse(json) as SessionPayload;

    if (!data?.exp || data.exp < Math.floor(Date.now() / 1000)) return null;
    if (data.role !== "admin" && data.role !== "student") return null;

    return data;
  } catch {
    return null;
  }
}

export function getCookieNameEdge() {
  return COOKIE_NAME;
}
