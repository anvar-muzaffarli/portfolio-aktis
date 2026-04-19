"use client";

import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import Section from "./Section";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";

// --- Vərəq Komponenti ---
const Page = React.forwardRef((props: any, ref: any) => {
  return (
    <div 
      className="bg-[#FDFBF7] border-l border-black/5 shadow-[inset_10px_0px_15px_rgba(0,0,0,0.02)] p-6 flex flex-col h-full overflow-hidden" 
      ref={ref}
    >
      <div className="flex-1">
        <h4 className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-3 border-b border-stone-100 pb-1 flex items-center gap-2">
          <BookOpen size={10} /> {props.courseTitle}
        </h4>
        <div className="aspect-3/4 w-full bg-stone-100/50 rounded-sm border border-stone-200/40 overflow-hidden">
          {props.image ? (
            <img src={props.image} alt="page" className="object-cover w-full h-full opacity-90" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-stone-50/50">
               <span className="text-[9px] text-stone-300 italic">Mövzu şəkli</span>
            </div>
          )}
        </div>
        <p className="mt-4 text-[13px] leading-relaxed text-stone-600 font-serif italic">
          {props.content}
        </p>
      </div>
      <div className="text-[9px] text-right text-stone-300 font-mono mt-2">
        {props.pageNum}
      </div>
    </div>
  );
});
Page.displayName = "Page";

const CourseBook = ({ course }: { course: any }) => {
  const bookRef = useRef<any>(null);

  return (
    <div className="flex flex-col items-center w-full max-w-[400px]">
      <h3 className="mb-4 text-lg font-semibold tracking-tight text-stone-800">{course.title}</h3>
      
      <div className="relative group">
        <div className="absolute -bottom-2 w-[80%] h-2 bg-black/5 blur-md rounded-[100%] mx-auto left-0 right-0" />
        
        {/* @ts-ignore */}
        <HTMLFlipBook
          width={300}
          height={400}
          size="stretch"
          minWidth={250}
          maxWidth={350}
          minHeight={350}
          maxHeight={500}
          showCover={true}
          className="shadow-2xl"
          ref={bookRef}
          useMouseEvents={true}
          maxShadowOpacity={0.15}
          flippingTime={800}
        >
          {/* Üz Qabığı */}
          <div className="bg-[#2D2D2D] text-stone-200 p-8 flex flex-col justify-center items-center h-full border-r-[6px] border-black/20 shadow-[inset_-4px_0_12px_rgba(0,0,0,0.3)]">
            <div className="border border-stone-500/20 p-5 flex flex-col items-center w-full h-full justify-center">
                <h2 className="text-xl font-serif tracking-widest text-center uppercase leading-snug">{course.title}</h2>
                <div className="mt-4 h-px w-8 bg-stone-600" />
                <BookOpen size={18} className="mt-4 opacity-20" />
                <p className="mt-auto text-[9px] uppercase tracking-[0.3em] opacity-30">2026 Edition</p>
            </div>
          </div>

          {/* Daxili Səhifə */}
          <div className="bg-[#FDFBF7] border-r border-stone-200 h-full p-8 flex items-center justify-center">
             <div className="opacity-20 flex flex-col items-center">
                <BookOpen size={30} strokeWidth={1} />
                <span className="text-[8px] uppercase tracking-tighter mt-2 italic text-stone-500">Mündəricat</span>
             </div>
          </div>

          {course.pages.map((p: any, i: number) => (
            <Page key={i} pageNum={i + 1} courseTitle={course.title} content={p.content} image={p.image} />
          ))}
        </HTMLFlipBook>
      </div>

      <div className="mt-5 flex gap-8 items-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          onClick={() => bookRef.current.pageFlip().flipPrev()}
          className="flex items-center gap-1 text-[10px] font-bold tracking-widest text-stone-400 hover:text-black transition-all"
        >
          <ChevronLeft size={14} strokeWidth={3} /> GERİ
        </button>

        <button 
          onClick={() => bookRef.current.pageFlip().flipNext()}
          className="flex items-center gap-1 text-[10px] font-bold tracking-widest text-stone-400 hover:text-black transition-all"
        >
          İRƏLİ <ChevronRight size={14} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
};

export default function Syllabus() {
  const coursesData = [
    {
      title: "Front-end Development",
      pages: [
        { content: "JavaScript ES6+: Arrow functions, Destructuring, Promises və müasir JS standartları.", image: "/sillabus/front/front-1.png" },
        { content: "Tailwind CSS: Utility-first yanaşması ilə sürətli və responsive interfeys dizaynı.", image: "/sillabus/front/front-2.png" },
        { content: "React.js: Virtual DOM, Hooks (useState, useEffect) və komponent əsaslı sistemlər.", image: "/sillabus/front/front-3.png" }
      ]
    },
    {
      title: "Back-end Development",
      pages: [
        { content: "Node.js & Express.js: Server-side proqramlaşdırma və RESTful API-ların qurulması.", image: "/sillabus/back/back-1.png" },
        { content: "MongoDB & Mongoose: NoSQL verilənlər bazası strukturu və kompleks modelləşdirmə.", image: "/sillabus/back/back-2.png" },
        { content: "Redux Toolkit (RTK): Qlobal state idarəetməsi və RTK Query ilə data fetching.", image: "/sillabus/back/back-3.png" }
      ]
    },
    {
      title: "Fullstack Development",
      pages: [
        { content: "JavaScript ES6+: Arrow functions, Destructuring, Promises və müasir JS standartları.", image: "/sillabus/fullstack/front-1.png" },
        { content: "Tailwind CSS: Utility-first yanaşması ilə sürətli və responsive interfeys dizaynı.", image: "/sillabus/fullstack/front-2.png" },
        { content: "React.js: Virtual DOM, Hooks (useState, useEffect) və komponent əsaslı sistemlər.", image: "/sillabus/fullstack/front-3.png" },
        { content: "Node.js & Express.js: Server-side proqramlaşdırma və RESTful API-ların qurulması.", image: "/sillabus/fullstack/back-1.png" },
        { content: "MongoDB & Mongoose: NoSQL verilənlər bazası strukturu və kompleks modelləşdirmə.", image: "/sillabus/fullstack/back-2.png" },
        { content: "Redux Toolkit (RTK): Qlobal state idarəetməsi və RTK Query ilə data fetching.", image: "/sillabus/fullstack/back-3.png" }
      ]
    },
    {
      title: "Azure Fundamentals",
      pages: [
        { content: "Cloud Computing: IaaS, PaaS və SaaS modellərinin biznesdə tətbiqi.", image: "/sillabus/azure/900-1.png" },
        { content: "Azure Core Servisləri: Networking, Virtual Machines və Storage həlləri.", image: "/sillabus/azure/900-2.png" },
        
      ]
    },
    {
      title: "AZ-204: Azure Solutions",
      pages: [
        { content: "Azure App Service & Functions: Serverless hesablama həllərinin hazırlanması.", image: "/sillabus/azure/204-1.png" },
        { content: "Azure Cosmos DB: Qlobal miqyaslı verilənlər bazası proqramlaşdırılması.", image: "/sillabus/azure/204-2.png" },
        { content: "Monitorinq: Azure Monitor və Application Insights ilə debugging.", image: "/sillabus/azure/204-3.png" },
      ]
    }
  ];

  return (
    <Section id="syllabus" title="Sillabuslar" subtitle="Hər bir kursun proqramını vərəqləyərək tanış olun.">
      <div className="grid gap-y-10 gap-x-4 md:grid-cols-2 lg:grid-cols-3 mt-4 justify-items-center">
        {coursesData.map((course, index) => (
          <CourseBook key={index} course={course} />
        ))}
      </div>
    </Section>
  );
}