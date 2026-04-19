"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import {
  Home,
  Info,
  Building2,
  Cpu,
  BookOpen,
  BarChart3,
  MessageSquareQuote,
  FileText,
  HelpCircle,
  Mail,
  KeyRound,
} from "lucide-react";

const navItems = [
  { title: "Hero", href: "#hero", icon: <Home className="h-full w-full" /> },
  { title: "Haqqımızda", href: "#about", icon: <Info className="h-full w-full" /> },
  { title: "Şirkətlər", href: "#companies", icon: <Building2 className="h-full w-full" /> },
  { title: "Tech", href: "#tech", icon: <Cpu className="h-full w-full" /> },
  { title: "Kurslar", href: "#courses", icon: <BookOpen className="h-full w-full" /> },
  { title: "Stat", href: "#stats", icon: <BarChart3 className="h-full w-full" /> },
  { title: "Feedback", href: "#feedbacks", icon: <MessageSquareQuote className="h-full w-full" /> },
  { title: "Sillabus", href: "#syllabus", icon: <FileText className="h-full w-full" /> },
  { title: "FAQ", href: "#faq", icon: <HelpCircle className="h-full w-full" /> },
  { title: "Əlaqə", href: "#contact", icon: <Mail className="h-full w-full" /> },
  { title: "AKTIS", href: "/aktis", icon: <KeyRound className="h-full w-full" /> },
];

export default function Navbar() {
  return (
    <>
      {/* Üstdə minimal brand (istəsən silərik) */}
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#hero" className="font-extrabold tracking-tight hover:opacity-80">
            Anvar Khalid
          </a>
          <div className="text-xs text-black/60">
            Dock menyu altda
          </div>
        </div>
      </header>

      {/* Floating Dock: Desktop bottom center, Mobile bottom right */}
      <FloatingDock
        items={navItems}
        desktopClassName="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
        mobileClassName="fixed bottom-6 right-6 z-50"
      />
    </>
  );
}
