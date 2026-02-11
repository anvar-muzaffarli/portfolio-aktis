"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AktisLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setLoading(true);

    const res = await fetch("/api/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json().catch(() => null);
    setLoading(false);

    if (!res.ok) {
      setErr(data?.message || "Xəta baş verdi.");
      return;
    }

    router.push(data.redirectTo || "/aktis");
  }

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-sm flex-col justify-center px-4">
      <h1 className="text-3xl font-extrabold tracking-tight">AKTIS giriş</h1>
      <p className="mt-2 text-sm text-black/60">Login və şifrəni daxil et.</p>

      <form onSubmit={onSubmit} className="mt-6 grid gap-3">
        <input
          className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-black/20"
          placeholder="Login"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-black/20"
          placeholder="Şifrə"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {err && <div className="text-sm text-red-600">{err}</div>}

        <button
          disabled={loading}
          className="rounded-xl bg-black px-3 py-2 font-semibold text-white hover:opacity-90 disabled:opacity-60"
          type="submit"
        >
          {loading ? "Yoxlanır..." : "Daxil ol"}
        </button>
      </form>
    </div>
  );
}
