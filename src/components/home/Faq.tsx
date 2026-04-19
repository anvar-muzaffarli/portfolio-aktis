"use client";

import { useState } from "react";
import { 
  Plus, 
  Minus, 
  CreditCard, 
  Award, 
  GraduationCap, 
  Clock, 
  Users, 
  Wallet, 
  Code2, 
  ShieldCheck, 
  Briefcase, 
  PlayCircle,
  MessageCircle,
  Zap
} from "lucide-react";

const faqs = [
  { 
    q: "Kursların qiyməti nə qədərdir?", 
    a: "Qiymətlərimiz istiqamətə görə dəyişir: Frontend aylıq 180 AZN, Backend 200 AZN-dir. Fullstack paketini seçdiyiniz halda hər iki modul üçün aylıq cəmi 180 AZN ödəyirsiniz.",
    icon: <CreditCard size={20} className="text-blue-500" />
  },
  { 
    q: "Azure (AZ-900 və AZ-204) hazırlığı neçəyədir?", 
    a: "Microsoft Certified Trainer tərəfindən keçirilən beynəlxalq sertifikasiya hazırlığı AZ-900 üçün 200 AZN, AZ-204 üçün isə 300 AZN təşkil edir.",
    icon: <Zap size={20} className="text-yellow-500" />
  },
  { 
    q: "MCT (Microsoft Certified Trainer) təlimçinin üstünlüyü nədir?", 
    a: "Bu status təlim proqramının Microsoft-un qlobal standartlarına uyğun olduğunu və təlimçinin həm texniki, həm də pedaqoji cəhətdən beynəlxalq səviyyədə təsdiqləndiyini göstərir.",
    icon: <ShieldCheck size={20} className="text-red-500" />
  },
  { 
    q: "Dərslər hansı formatda keçirilir?", 
    a: "Dərslər online keçirilir və bütün dərslər qeydə alınır. Həmçinin AKTIS (Tədris İdarəetmə Sistemi) vasitəsilə 7/24 materiallara çıxışınız təmin olunur.",
    icon: <PlayCircle size={20} className="text-rose-500" />
  },
  { 
    q: "Real layihələr üzərində işləyəcəyik?", 
    a: "Bəli, təlimlərimiz 80% praktika üzərində qurulub. Kurs müddətində real iş mühitinə uyğun ən azı 3-4 professional layihə hazırlayıb portfolionıza əlavə edəcəksiniz.",
    icon: <Code2 size={20} className="text-indigo-500" />
  },
  { 
    q: "Ödənişi hissə-hissə etmək mümkündür?", 
    a: "Bəli, kurs ödənişləri aylıq olaraq qəbul edilir. Tam məbləği əvvəlcədən ödəmək tələb olunmur.",
    icon: <Wallet size={20} className="text-green-500" />
  },
  { 
    q: "Node.js bilən biri AZ-204 kursuna yazıla bilər?", 
    a: "Mütləq! AZ-204 proqramı həm .NET, həm də Node.js proqramçıları üçün nəzərdə tutulub. Azure xidmətləri hər iki dili tam dəstəkləyir.",
    icon: <GraduationCap size={20} className="text-cyan-500" />
  },
  { 
    q: "Karyera dəstəyi və işə düzəlmə yardımı varmı?", 
    a: "Uğurlu tələbələrə CV hazırlığı, LinkedIn profilinin optimizasiyası və tərəfdaş şirkətlərimizə tövsiyə məktublarının göndərilməsi sahəsində dəstək veririk.",
    icon: <Briefcase size={20} className="text-stone-500" />
  },
  { 
    q: "Həftədə neçə dəfə dərs olur?", 
    a: "Dərslər həftədə 2 dəfə, hər məşğələ 2 saat olmaqla keçirilir. Hər həftəsonu isə mentor dəstəyi ilə praktiki saatlarımız olur.",
    icon: <Clock size={20} className="text-purple-500" />
  },
  { 
    q: "Kurs bitdikdən sonra dəstək davam edir?", 
    a: "Bəli, məzun olduqdan sonra da xüsusi icma qruplarımızda suallarınızı verə və karyera məsləhətləri ala bilərsiniz.",
    icon: <MessageCircle size={20} className="text-emerald-500" />
  }
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black tracking-tight text-neutral-900 md:text-5xl">
            FAQ
          </h2>
          <p className="mt-4 text-neutral-500 text-lg">
            Kurslar, sertifikatlar və qiymətlər barədə ən çox verilən suallar.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((f, idx) => {
            const isOpen = open === idx;
            return (
              <div 
                key={f.q} 
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen ? "border-blue-200 bg-blue-50/20 shadow-md" : "border-neutral-200 bg-white"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className={`transition-colors ${isOpen ? "text-blue-600" : "text-neutral-400"}`}>
                      {f.icon}
                    </span>
                    <span className={`font-bold md:text-base text-sm transition-colors ${
                      isOpen ? "text-blue-900" : "text-neutral-800"
                    }`}>
                      {f.q}
                    </span>
                  </div>
                  <div className={`shrink-0 rounded-full p-1 transition-transform duration-300 ${
                    isOpen ? "bg-blue-600 text-white rotate-180" : "bg-neutral-100 text-neutral-500"
                  }`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-sm leading-relaxed text-neutral-600 md:text-base md:ml-10">
                      <div className="h-px w-full bg-blue-100/50 mb-4" />
                      {f.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}