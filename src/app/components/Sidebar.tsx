"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Home,
  Mail,
  Menu,
  X,
  BarChart2,
  LayoutDashboard,
  GraduationCap,
} from "lucide-react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconFileCv,
} from "@tabler/icons-react";
import Link from "next/link";
import { useSidebarContext } from "@/app/components/ui/SidebarContext";

export default function Sidebar() {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const { setIsSidebarHovered } = useSidebarContext();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setHovered(false);
      setMobileOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      setTheme(stored as "dark" | "light");
      document.documentElement.classList.toggle("dark", stored === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setHovered(true);
      setIsSidebarHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHovered(false);
      setIsSidebarHovered(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (isMobile) setMobileOpen(false);
  };

  const contactMe = () => {
    const footerSection = document.getElementById("contact");
    if (footerSection) {
      footerSection.scrollIntoView({ behavior: "smooth" });
    }
    window.location.href = "mailto:kiara@example.com";
    if (isMobile) setMobileOpen(false);
  };

  const width = isMobile
    ? mobileOpen
      ? 260
      : 0
    : hovered
    ? 220
    : 70;

  if (!mounted) return null;

  return (
    <>
      {isMobile && (
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="fixed top-4 left-4 z-[999] bg-black text-white p-2 rounded-full"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      )}

      {!isMobile && (
        <div
          className="fixed top-0 left-0 h-full w-5 z-50"
          onMouseEnter={handleMouseEnter}
        />
      )}

      <motion.aside
        ref={sidebarRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={{ width }}
        transition={{ type: "spring", stiffness: 250, damping: 24 }}
        className="fixed top-0 left-0 h-full z-40 bg-black bg-opacity-90 backdrop-blur border-r border-gray-700 overflow-hidden flex flex-col justify-between"
      >
        {/* Sidebar Content */}
        <div className="px-3 pt-24 flex flex-col gap-1">
          {/* Navigation Section */}
          <div className="flex flex-col gap-1">
            <SidebarItem
              icon={<Home size={20} />}
              label="Home"
              onClick={scrollToTop}
              visible={isMobile ? mobileOpen : hovered}
            />
            <SidebarItem
              icon={<BarChart2 size={20} />}
              label="Skills"
              onClick={() => {
                const el = document.getElementById("skills");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                if (isMobile) setMobileOpen(false);
              }}
              visible={isMobile ? mobileOpen : hovered}
            />
            <SidebarItem
              icon={<LayoutDashboard size={20} />}
              label="Projects"
              onClick={() => {
                const el = document.getElementById("projects");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                if (isMobile) setMobileOpen(false);
              }}
              visible={isMobile ? mobileOpen : hovered}
            />
            <SidebarItem
              icon={<GraduationCap size={20} />}
              label="Qualification"
              onClick={() => {
                const el = document.getElementById("qual");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                if (isMobile) setMobileOpen(false);
              }}
              visible={isMobile ? mobileOpen : hovered}
            />
            <SidebarItem
              icon={<IconFileCv size={20} />}
              label="CV"
              href="/priyankaresume3.pdf"
              visible={isMobile ? mobileOpen : hovered}
              newTab
            />
          </div>

          <div className="flex flex-col gap-1">
            <SidebarItem
              icon={<Mail size={20} />}
              label="Contact Me"
              onClick={contactMe}
              visible={isMobile ? mobileOpen : hovered}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-4">
          <div className="flex flex-col items-center border-t border-gray-700 pt-8 gap-5">
            {(hovered || isMobile) && (
              <div className="flex gap-5">
                <a
                  href="https://github.com/priyanka908"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandGithub className="text-white hover:text-blue-400" size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/priyanka-mishra-16b67624b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandLinkedin className="text-white hover:text-blue-400" size={20} />
                </a>
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandX className="text-white hover:text-blue-400" size={20} />
                </a>
              </div>
            )}
            {(hovered || isMobile) && (
              <p className="text-sm text-white font-medium">PRIYANKA</p>
            )}
          </div>
        </div>
      </motion.aside>
    </>
  );
}

function SidebarItem({
  icon,
  label,
  href,
  onClick,
  visible,
  newTab = false,
}: {
  icon: React.ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
  visible: boolean;
  newTab?: boolean;
}) {
  const content = (
    <div
      className="flex items-center gap-3 p-3 hover:bg-blue-500/10 
      rounded-lg transition-all cursor-pointer w-full"
    >
      <div className="text-white">{icon}</div>
      {visible && (
        <span className="text-white font-medium text-sm whitespace-nowrap">
          {label}
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} target={newTab ? "_blank" : "_self"} rel="noopener noreferrer">
        {content}
      </Link>
    );
  }

  return <div onClick={onClick}>{content}</div>;
}
