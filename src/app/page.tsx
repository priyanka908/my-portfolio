"use client";
import { useEffect } from "react";
import HeroSection from "@/app/components/HeroSection";
import ProjectsTemp from "./components/ProjectsTemp";
import Footer from "./components/Footer";
import SkillsSection from "./components/Skills";
import QualificationsSection from "./components/Qualifitions";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <main
      id="home"
      className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] 
      flex flex-col items-center justify-start scroll-smooth"
    >
      <HeroSection />
      <div className="w-full px-4 md:px-8">
        <SkillsSection />
        <ProjectsTemp />
        <QualificationsSection />
      </div>
      <Footer />
    </main>
  );
}
