"use client";

import { useRouter } from "next/navigation";

export default function AktisClient() {
  const router = useRouter();

  async function logout() {
    await fetch("/api/v1/auth/logout", { method: "POST" });
    router.push("/");
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">AKTIS tələbə paneli</h1>
          <p className="mt-2 text-black/60">Xoş gəldiniz.</p>
        </div>

        <button
          onClick={logout}
          className="rounded-xl border border-black px-4 py-2 font-semibold hover:bg-black hover:text-white"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
