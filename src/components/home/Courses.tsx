"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Section from "./Section";

// Backend-dən gələcək datanın tipini təyin edirik
interface Course {
  title: string;
  desc: string;
  level: string;
  duration: string;
  format: string;
  image?: string; // Şəkil üçün opsional sahə
}

const courses: Course[] = [
  {
    title: "Front-end Development",
    desc: "HTML, CSS, JavaScript və modern UI framework-ləri ilə peşəkar interfeyslərin qurulması.",
    level: "Beginner",
    duration: "3 ay",
    format: "Online / Offline",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Back-end Development",
    desc: "Server tərəfli proqramlaşdırma, API dizaynı, verilənlər bazası və təhlükəsizlik əsasları.",
    level: "Intermediate",
    duration: "3 ay",
    format: "Online",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Fullstack Development",
    desc: "Həm front-end, həm back-end bacarıqlarını birləşdirərək tam miqyaslı tətbiqlərin yaradılması.",
    level: "Beginner to Advanced",
    duration: "6 ay",
    format: "Online / Offline",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Microsoft Azure Fundamentals",
    desc: "Cloud computing əsasları, Azure servisləri və sertifikasiya imtahanına hazırlıq.",
    level: "Beginner",
    duration: "2 ay",
    format: "Online",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "AZ-204: Developing Solutions for Azure",
    desc: "Azure-da proqram təminatı hazırlamaq, test etmək və idarə etmək üçün dərinləşdirilmiş hazırlıq.",
    level: "Advanced",
    duration: "4 ay",
    format: "Online",
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=2000&auto=format&fit=crop",
  }
];


export default function Courses() {
  return (
    <Section
      id="courses"
      title="Tədris etdiyim kurslar"
      subtitle="Kurslar praktik yönümlüdür, layihə ilə bitir."
    >
      {/* gap-y-0 və ya gap-y-2 ilə yuxarıdan aşağı boşluğu daraltdıq */}
      <div className="grid gap-x-6 gap-y-2 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <CardContainer key={index} className="inter-var py-4"> 
            {/* py-4 əlavə edərək 3D konteynerin öz daxili şaquli boşluğunu azaltdıq */}
            
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/10 dark:bg-black dark:border-white/20 border-black/10 w-auto sm:w-88 h-auto rounded-xl p-6 border transition-all duration-200">
              
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {course.title}
              </CardItem>
              
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 h-10 line-clamp-2"
              >
                {course.desc}
              </CardItem>

              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={course.image || "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2000"}
                  height="600"
                  width="600"
                  className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={course.title}
                />
              </CardItem>

              <div className="mt-6 grid grid-cols-3 gap-2">
                <CardItem translateZ={40} className="rounded-lg border px-2 py-1 text-[10px] text-center dark:border-white/10">
                  <div className="font-bold text-[8px] uppercase">Level</div>
                  <div className="text-neutral-500">{course.level}</div>
                </CardItem>
                <CardItem translateZ={50} className="rounded-lg border px-2 py-1 text-[10px] text-center dark:border-white/10">
                  <div className="font-bold text-[8px] uppercase">Müddət</div>
                  <div className="text-neutral-500">{course.duration}</div>
                </CardItem>
                <CardItem translateZ={60} className="rounded-lg border px-2 py-1 text-[10px] text-center dark:border-white/10">
                  <div className="font-bold text-[8px] uppercase">Format</div>
                  <div className="text-neutral-500">{course.format}</div>
                </CardItem>
              </div>

              <div className="flex justify-between items-center mt-8"> 
                {/* mt-10-dan mt-8-ə saldıq */}
                <CardItem
                  translateZ={20}
                  as="a"
                  href="#faq"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:underline"
                >
                  Suallar →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="a"
                  href="#contact"
                  className="px-4 py-2 rounded-lg bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Yazıl
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </Section>
  );
}