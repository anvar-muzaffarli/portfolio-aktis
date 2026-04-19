"use client";

import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";

type LatLng = { lat: number; lng: number };
type Dot = { start: LatLng; end: LatLng };

const BAKU: LatLng = { lat: 34.4093, lng: 49.8671 };

const capitals: Array<{ name: string; lat: number; lng: number }> = [
  { name: "Madrid", lat: 40.4168, lng: -3.7038 },
  { name: "Lisbon", lat: 38.7223, lng: -9.1393 },
  { name: "Amsterdam", lat: 52.3676, lng: 4.9041 },
  { name: "Brussels", lat: 50.8503, lng: 4.3517 },
  { name: "Vienna", lat: 48.2082, lng: 16.3738 },
  { name: "Prague", lat: 50.0755, lng: 14.4378 },
  { name: "Warsaw", lat: 52.2297, lng: 21.0122 },
  { name: "Washington, D.C.", lat: 38.9072, lng: -77.0369 },
  { name: "Ottawa", lat: 45.4215, lng: -75.6972 },
  { name: "Mexico City", lat: 19.4326, lng: -99.1332 },
  { name: "Brasília", lat: -15.7975, lng: -47.8919 },
  { name: "Buenos Aires", lat: -34.6037, lng: -58.3816 },
  { name: "Santiago", lat: -33.4489, lng: -70.6693 },
  { name: "Bogotá", lat: 4.711, lng: -74.0721 },
  { name: "Lima", lat: -12.0464, lng: -77.0428 }
];

const dots: Dot[] = capitals.map((c) => ({
  start: BAKU,
  end: { lat: c.lat, lng: c.lng },
}));

export default function Hero() {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-white">
      {/* Əsas konteyner: max-w-full və px-4 daşmanın qarşısını alır */}
      <div className="flex min-h-dvh w-full flex-col items-center px-4 py-10 md:px-8 md:py-20">
        
        {/* Mətn hissəsi */}
        <div className="z-10 flex w-full max-w-4xl flex-col items-center text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 md:text-xs"
          >
            Təlimlərimizə qoşularaq
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 w-full text-balance text-2xl font-black leading-tight text-neutral-900 sm:text-4xl md:text-6xl"
          >
            Bu sahəyə tam praktiki və beynəlxalq dərəcəli mütəxəssis kimi qoşulun
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 max-w-2xl text-pretty text-sm leading-relaxed text-neutral-600 md:text-lg"
          >
            Real layihələr, təhlükəsiz veb yanaşması, düzgün arxitektura, deployment və DevOps məntiqi.
          </motion.p>

          {/* Düymələr: Mobildə alt-alta, Tabletdə yan-yana */}
          <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#courses"
              className="flex h-12 w-full items-center justify-center rounded-xl bg-neutral-900 px-8 text-sm font-bold text-white transition-transform active:scale-95 sm:w-auto"
            >
              Təlim proqramı
            </a>
            <div className="flex w-full gap-2 sm:w-auto">
              <a
                href="https://t.me/yourhandle"
                className="flex h-12 flex-1 items-center justify-center rounded-xl bg-neutral-100 px-6 text-sm font-bold text-neutral-900 sm:flex-none"
              >
                Telegram
              </a>
              <a
                href="/aktis"
                className="flex h-12 flex-1 items-center justify-center rounded-xl border border-neutral-200 bg-white px-6 text-sm font-bold text-neutral-900 sm:flex-none"
              >
                AKTIS
              </a>
            </div>
          </div>
        </div>

        {/* Xəritə: w-full və relative hündürlük daşmanı həll edir */}
        <div className="relative mt-12 w-full flex-1 md:mt-16">
          <div className="mx-auto h-[250px] w-full max-w-[100vw] sm:h-[400px] md:h-[500px]">
            <WorldMap dots={dots} />
          </div>
          
          {/* Alt hissədəki xətt izahı */}
          <p className="mt-4 text-center text-[10px] font-medium uppercase tracking-widest text-neutral-400">
            Bakı mərkəzli qlobal bağlantılar
          </p>
        </div>

      </div>
    </section>
  );
}