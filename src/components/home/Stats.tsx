"use client";

import Section from "./Section";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Users, Briefcase, BookOpen, Star } from "lucide-react";

const stats = [
  { 
    value: 789, 
    suffix: "+", 
    label: "Məzun Tələbə", 
    icon: <Users className="w-6 h-6" />,
    color: "text-blue-600",
    bgColor: "bg-blue-500/10"
  },
  { 
    value: 123, 
    suffix: "+", 
    label: "Real Layihə", 
    icon: <Briefcase className="w-6 h-6" />,
    color: "text-emerald-600",
    bgColor: "bg-emerald-500/10"
  },
  { 
    value: 25, 
    suffix: "+", 
    label: "Material Paketi", 
    icon: <BookOpen className="w-6 h-6" />,
    color: "text-purple-600",
    bgColor: "bg-purple-500/10"
  },
  { 
    value: 4.9, 
    decimal: 1, 
    label: "Məmnuniyyət", 
    icon: <Star className="w-6 h-6 fill-current" />,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10"
  },
];

export default function Stats() {
  return (
    <Section
      id="stats"
      title="Rəqəmlərlə Biz"
      subtitle="Tədris keyfiyyətimizin və tələbə uğurumuzun qısa göstəriciləri."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, idx) => (
          <div 
            key={s.label} 
            className="group relative flex flex-col items-center justify-center rounded-3xl border border-neutral-200/60 bg-white p-10 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 dark:bg-[#1A1C1C] dark:border-white/5"
          >
            {/* Üst tərəfdəki ikon dairəsi */}
            <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${s.bgColor} ${s.color} transition-transform duration-500 group-hover:rotate-360`}>
              {s.icon}
            </div>

            {/* Rəqəmlər */}
            <div className="flex items-baseline text-5xl font-black tracking-tighter text-neutral-900 dark:text-white">
              <NumberTicker 
                value={s.value} 
                decimalPlaces={s.decimal || 0} 
              />
              {s.suffix && (
                <span className={`ml-1 text-2xl font-bold ${s.color}`}>
                  {s.suffix}
                </span>
              )}
            </div>

            {/* Etiket */}
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
              {s.label}
            </p>

            {/* Kartın altındakı rəngli xətt animasiyası */}
            <div className={`absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full transition-all duration-500 group-hover:w-1/2 ${s.bgColor.replace('/10', '')}`} />
          </div>
        ))}
      </div>
    </Section>
  );
}