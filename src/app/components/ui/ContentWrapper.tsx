"use client";
import { useSidebarContext } from "./SidebarContext";

export default function ContentWrapper({ children }: { children: React.ReactNode }) {
  const { isSidebarHovered } = useSidebarContext();

  return (
    <div
      className={`transition-all duration-500 ease-in-out min-h-screen pt-28 md:pt-24 ${
        isSidebarHovered ? "md:pl-[240px]" : "md:pl-[70px]"
      }`}
    >
      <main className="relative z-10 px-4 md:px-8 pb-16">{children}</main>
    </div>
  );
}
