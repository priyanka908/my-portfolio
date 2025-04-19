import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/app/components/Sidebar";
import { SidebarProvider } from "@/app/components/ui/SidebarContext";
import ContentWrapper from "@/app/components/ui/ContentWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Showcasing my projects and skills in web development",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} antialiased bg-black text-white`}>
        <SidebarProvider>
          <Sidebar />
          <ContentWrapper>{children}</ContentWrapper>
        </SidebarProvider>
      </body>
    </html>
  );
}
