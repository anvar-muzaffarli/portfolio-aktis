"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Section from "./Section";

const reviews = [
  {
    quote:
      "Next.js kursu sayəsində sıfırdan fullstack layihə yığmağı öyrəndim. Materiallar çox detallı və anlaşıqlı idi. Praktik tapşırıqlar biliklərimi möhkəmləndirdi.",
    name: "Aysel Məmmədova",
    title: "Next.js Tələbəsi",
  },
  {
    quote:
      "3D Pipeline dərsləri möhtəşəmdir. Blender və Unreal Engine arasındakı iş axınını (workflow) bu qədər sadə izah edən başqa resurs tapmamışdım.",
    name: "Rəşad Əliyev",
    title: "3D Artist / Tələbə",
  },
  {
    quote:
      "Web proqramlaşdırma üzrə real layihələr üzərində işləmək mənə böyük təcrübə qazandırdı. Artıq öz portfoliom var və müştərilərlə işləməyə hazıram.",
    name: "Nicat Həsənov",
    title: "Frontend Developer",
  },
  {
    quote:
      "Kursun ən bəyəndiyim cəhəti material paketləridir. Hər dərsdən sonra hazır kodlar və assetlər verilməsi öyrənməni sürətləndirir.",
    name: "Leyla Vəliyeva",
    title: "Web Dizayner",
  },
  {
    quote:
      "Mürəkkəb mövzuları sadə dildə izah etmək bacarığı kursu digərlərindən fərqləndirir. Hər kəsə tövsiyə edirəm!",
    name: "Elvin Qasımov",
    title: "Fullstack Tələbəsi",
  },
];

export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      title="Tələbə Rəyləri"
      subtitle="Kursu bitirən tələbələrin real təcrübələri."
    >
      <div className="h-100 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={reviews}
          direction="left"
          speed="slow"
        />
      </div>
    </Section>
  );
}