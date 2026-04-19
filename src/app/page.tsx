import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Companies from "@/components/home/Companies";
import Tech from "@/components/home/Tech";
import Courses from "@/components/home/Courses";
import Stats from "@/components/home/Stats";
import Feedbacks from "@/components/home/Feedbacks";
import Syllabus from "@/components/home/Syllabus";
import Faq from "@/components/home/Faq";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";
import { MessengerAI } from "@/components/home/AnimatedList";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar />

      <main className="mx-auto grid max-w-6xl gap-10 px-4 py-10">
        <Hero />
        <About />
        {/* <Companies /> */}
        <Tech />
        <Courses />
        <Stats />
        {/* <Feedbacks /> */}
        <Syllabus />
        <Faq />
        <Contact />
        <MessengerAI />
      </main>

      <Footer />
    </div>
  );
}
