"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const skillsInfo = {
  displayName: "Specialization",
  skills: [
    { name: "Content Marketing", rating: 8.5 },
    { name: "Social Media Marketing", rating: 9.0 },
    { name: "Search Engine Marketing", rating: 6.5 },
    { name: "Search Engine Optimization", rating: 7.0 },
    { name: "Conversion Rate Optimization", rating: 9.5 },
    { name: "Web Analytics", rating: 8.0 },
    { name: "Email Marketing", rating: 10.0 },
    { name: "Marketing Automation", rating: 8.5 },
  ],
};

export default function SkillsSection() {
  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-center bg-black px-4 sm:px-6 py-12 w-full scroll-mt-28"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-10 mt-[-32px]">
        {skillsInfo.displayName}
      </h2>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsInfo.skills.map((skill, index) => (
          <SkillBar key={index} name={skill.name} rating={skill.rating} />
        ))}
      </div>
    </div>
  );
}

function SkillBar({ name, rating }: { name: string; rating: number }) {
  const [value, setValue] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      let current = 0;
      const interval = setInterval(() => {
        current += 0.1;
        if (current >= rating) {
          current = rating;
          clearInterval(interval);
        }
        setValue(parseFloat(current.toFixed(1)));
      }, 10);
      return () => clearInterval(interval);
    } else {
      setValue(0);
    }
  }, [inView, rating]);

  return (
    <div
      ref={ref}
      className="bg-black rounded-xl p-5 shadow-lg border border-gray-700 hover:shadow-blue-500/50 transition-all duration-300"
    >
      <h3 className="text-white text-lg font-semibold mb-2">{name}</h3>

      <div className="relative w-full bg-gray-700 rounded-full h-2 overflow-hidden">
        <div
          className="h-2 bg-blue-500 rounded-full transition-all duration-700 ease-out"
          style={{ width: `${(value / 10) * 100}%` }}
        />
      </div>

      <div className="flex justify-between text-xs text-gray-400 mt-1">
        {[0, 2, 4, 6, 8, 10].map((num) => (
          <span key={num}>{num}</span>
        ))}
      </div>

      <p className="text-gray-300 text-sm mt-1">{value}/10</p>
    </div>
  );
}
