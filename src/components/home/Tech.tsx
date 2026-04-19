"use client";

import Section from "./Section";
import { IconCloud } from "@/components/ui/icon-cloud";

// Proqramlaşdırma dilləri, framework-lər, tool-lar və sahələr üçün ikon slug-ları
const slugs = [
  // Languages
  "typescript",
  "javascript",
  "python",
  "java",
  "csharp",
  "cpp",
  "go",
  "php",

  // Frontend
  "react",
  "nextdotjs",
  "vue",
  "angular",
  "tailwindcss",
  "html5",
  "css3",

  // Backend / DevOps
  "nodedotjs",
  "express",
  "nestjs",
  "postgresql",
  "mongodb",
  "redis",
  "docker",
  "kubernetes",
  "nginx",
  "amazonaws",
  "vercel",
  "firebase",

  // Tools
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "postman",
  "figma",

  // 3D / Creative (SimpleIcons-da olanlar)
  "blender",
  "unrealengine",
];

export default function Tech() {
  const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`);

  return (
    <Section id="tech" title="Tech stack" subtitle="İşlədiyim texnologiyalar və alətlər.">
      <div className="rounded-2xl border p-5">
        <div className="relative h-[680px] w-full overflow-hidden rounded-2xl bg-white/60 dark:bg-black/40">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-[70vh] min-h-[520px] w-full overflow-hidden rounded-2xl border bg-white/60 dark:bg-black/40">
              <IconCloud images={images}  />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
    
   


}
