"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const qualificationInfo = {
  displayName: "Qualifications",
  qualifications: [
    {
      timeline: "2022-25",
      courseName: "Bachelor of Computer Application",
      instituteName: "Graphic Era Ubiversity, Uttarakhand",
      specializedIn: "Mathematics, Physics, Chemistry",
      yearPassout: "2025",
      headline1: "",
      headline2: "",
      cgpa: "9.5",
      link: {
        linkText: "View Degree",
        linkUrl: "https://github.com/",
      },
      images: [
        {
          fileName: "cartoon_professional_girl_who_is_indian_sitting.jpeg",
          fileUrl:
            "https://raw.githubusercontent.com/templatesfarm/placement-pro/master/images/cartoon_professional_girl_who_is_indian_sitting.jpeg",
        },
        {
          fileName: "cartoon_male_who_is_professional_sitting_at.jpeg",
          fileUrl:
            "https://raw.githubusercontent.com/templatesfarm/placement-pro/master/images/cartoon_male_who_is_professional_sitting_at.jpeg",
        },
      ],
      rank: "3",
    },
  ],
};

export default function QualificationsSection() {
  return (
    <div
      id="qual"
      className="flex flex-col items-center justify-center py-16 bg-black px-4 sm:px-6 w-full scroll-mt-24"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-12">
        {qualificationInfo.displayName}
      </h2>

      <div className="w-full max-w-5xl space-y-10">
        {qualificationInfo.qualifications.map((qual, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-[#1d1c20] border border-gray-700 p-6 rounded-2xl shadow-md hover:shadow-blue-500/40 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex gap-4 flex-wrap justify-center md:justify-start">
                {qual.images.map((img, imgIndex) => (
                  <Image
                    key={imgIndex}
                    src={img.fileUrl}
                    alt={img.fileName}
                    width={80}
                    height={80}
                    className="rounded-lg shadow-sm border border-gray-700"
                  />
                ))}
              </div>

              <div className="flex-1 space-y-1">
                <h3 className="text-white text-2xl font-semibold">
                  {qual.courseName}
                </h3>
                <p className="text-gray-400 text-lg">{qual.instituteName}</p>
                <p className="text-gray-500 text-sm">
                  <span className="font-medium text-gray-300">Specialized In:</span>{" "}
                  {qual.specializedIn}
                </p>
                <p className="text-gray-500 text-sm">
                  <span className="font-medium text-gray-300">CGPA:</span> {qual.cgpa}
                </p>
                <p className="text-gray-500 text-sm">
                  <span className="font-medium text-gray-300">Year of Completion:</span>{" "}
                  {qual.yearPassout}
                </p>
                <p className="text-gray-400 italic mt-3">{qual.headline1}</p>
                <p className="text-gray-400 italic">{qual.headline2}</p>

                {qual.link?.linkUrl && (
                  <a
                    href={qual.link.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-blue-400 hover:underline text-sm"
                  >
                    {qual.link.linkText} ↗
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
