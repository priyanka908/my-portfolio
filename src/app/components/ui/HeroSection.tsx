import Link from "next/link"

function HeroSection() {
  return (
    <div
    className="w-full rounded-md flex flex-col items-center
    justify-center relative overflow-hidden mx-auto py-10 md:py-0">

        <div className="p-4 relative z-10 w-full text-center mt-5">
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl
            font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
               Front-End Developer</h1>
            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
              I'm a frontend developer.I specialize in creating intuitive, high-performance web
              applications that deliver exceptional user experiences.</p>
                  <div className="mt-4"> 
                    <Link href={"/projects"}>Explore More</Link>
                  </div>
             </div>
    </div>
  )
}

export default HeroSection
