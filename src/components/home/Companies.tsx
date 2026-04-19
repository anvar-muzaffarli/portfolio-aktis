"use client";

import Section from "./Section";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

type LogoItem = {
  name: string;
  img: string;
};

export default function Companies() {
  const [logos, setLogos] = useState<LogoItem[]>([]);

  useEffect(() => {
    const companies = [
      "Company A",
      "Company B",
      "Company C",
      "Company D",
      "Company E",
      "Company F",
    ];

    const items: LogoItem[] = companies.map((name, idx) => ({
      name,
      img: `https://picsum.photos/seed/company-logo-${idx}/200/200`,
    }));

    setLogos(items);
  }, []);

  return (
    <Section
      id="companies"
      title="Çalışdığım təhsil müəssisəsi və şirkətlər"
      subtitle="Əməkdaşlıq etdiyim və ya işlədiyim yerlər."
    >
      <div className="relative overflow-x-hidden rounded-2xl border bg-white/60 p-4 dark:bg-black/40">
        <InfiniteMovingCards
          items={logos.map(logo => ({
            quote: "",
            name: logo.name,
            title: "",
            img: logo.img, // If InfiniteMovingCards cannot receive 'img', remove this line.
          }))}
          direction="right"
          speed="fast"
        />
      </div>
    </Section>
  );
}
