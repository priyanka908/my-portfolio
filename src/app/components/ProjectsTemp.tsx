import Image from "next/image";
import React from "react";
import { Timeline } from "@/app/components/ui/timeline";
import projectData from "@/app/data/project.json";

interface Project {
  timeline: string;
  projectName: string;
  headline1?: string;
  headline2?: string;
  designation: string;
  skills: string;
  companyName: string;
  clientName?: string;
  cover?: string;
  rank?: string;
  link?: { linkUrl: string; linkText?: string } | null;
  images?: { fileName: string; fileUrl: string }[];
}

export function ProjectsTimeline() {
  const projects: Project[] = projectData.projectsInfo.projects.map((project) => ({
    ...project,
    link: typeof project.link === "string" ? null : project.link,
  }));

  const data = projects.map((project) => ({
    title: project.timeline,
    content: (
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-white">{project.projectName}</h3>
        <p className="text-sm text-gray-300 font-medium">
          {project.designation} @ {project.companyName}
        </p>
        <p className="text-sm text-gray-400">
          <span className="font-medium text-gray-300">Skills:</span> {project.skills}
        </p>

        {project.headline1 && (
          <p className="text-sm text-gray-400 italic">"{project.headline1}"</p>
        )}
        {project.headline2 && (
          <p className="text-sm text-gray-400 italic">"{project.headline2}"</p>
        )}

        {project.images && project.images.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {project.images.map((image, index) => (
              <Image
                key={index}
                src={image.fileUrl}
                alt={image.fileName}
                width={500}
                height={500}
                className="rounded-xl object-cover h-24 md:h-44 lg:h-56 w-full shadow-md hover:scale-[1.02] transition-transform duration-300"
              />
            ))}
          </div>
        )}

        {project.link?.linkUrl && (
          <a
            href={project.link.linkUrl}
            className="inline-block mt-4 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-semibold transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.link.linkText || "View Project"}
          </a>
        )}
      </div>
    ),
  }));

  return (
    <section id="projects">
      <div className="w-full bg-black px-4 sm:px-6 py-10">
        
        <Timeline data={data} />
      </div>
    </section>
  );
}

export default ProjectsTimeline;
