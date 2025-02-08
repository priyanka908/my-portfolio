import Image from "next/image";
import logo from "@/app/images/logo.png"; 
import HeroSection from "./components/ui/HeroSection";

export default function Home() {
    return (
        <main className="min-h-screen bg-black/[0.96] 
        antialiased bg-grid-white/[0.02] flex flex-col
         items-center justify-start pt-12">
          
            <div className="mt-20 w-40 h-40 rounded-full
             overflow-hidden border-4 border-white transition-all
              duration-300 hover:scale-125 hover:animate-float shadow-lg">
                <Image 
                    src={logo} 
                    alt="Logo"
                    width={160} 
                    height={160} 
                    className="object-cover"
                    priority 
                />
            </div>
            <h1 className="text-2xl text-center text-white mt-4 mb-1 transition-all
             duration-300 transform hover:text-grafient-400 hover:shadow-lg hover:scale-110">
                Hi! This is Priyanka Mishra </h1>
            <HeroSection/>
        </main>
    );
}
