"use client";

import { CometCard } from "@/components/ui/comet-card";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-12">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Sol tərəf: Mətn hissəsi */}
        <div className="space-y-6">
          <h2 className="text-3xl font-black tracking-tight text-neutral-900 md:text-5xl">
            {profile.name}
          </h2>

          <p className="text-sm font-bold uppercase tracking-widest text-blue-600 md:text-base">
            {profile.titleLine}
          </p>

          <p className="max-w-xl text-base leading-relaxed text-neutral-700 md:text-lg">
            {profile.bio}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#courses"
              className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-neutral-900/20 transition-all hover:bg-neutral-800 active:scale-[0.98]"
            >
              Kurslara bax
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-white border border-neutral-200 px-6 py-3.5 text-sm font-semibold text-neutral-900 shadow-sm transition-all hover:bg-neutral-50 active:scale-[0.98]"
            >
              Əlaqə
            </a>
          </div>
        </div>

        {/* Sağ tərəf: Professional Kart */}
        <div className="mx-auto w-full max-w-[420px]">
          <CometCard>
            <div
              className="my-6 flex w-full flex-col items-stretch rounded-[24px] border border-white/10 bg-[#1A1C1C] p-3 shadow-2xl md:my-0 md:p-5"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative flex-1">
                <div className="relative aspect-3/4 w-full overflow-hidden rounded-[18px]">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover transition-all duration-700 hover:scale-105"
                    alt={profile.name}
                    src={profile.photoSrc}
                    style={{ 
                      filter: "brightness(1.05) contrast(1.1)", // Şəkli daha canlı edir
                      opacity: 1 
                    }}
                  />
                  {/* Şəklin üzərinə zəif gradient qatı (premium görünüş üçün) */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-60" />
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between px-2 pb-2 font-mono text-white">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-tighter opacity-40">Instructor</span>
                  <div className="text-xs font-medium tracking-widest">{profile.cardLabel}</div>
                </div>
                <div className="text-[10px] font-light text-gray-400 opacity-60">
                  {profile.cardCode}
                </div>
              </div>
            </div>
          </CometCard>

          <div className="mt-4 text-center">
            <span className="inline-block rounded-full bg-neutral-100 px-3 py-1 text-[10px] font-medium text-neutral-500 border border-neutral-200">
              {profile.photoSrc}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}