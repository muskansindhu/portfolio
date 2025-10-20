"use client";

import Image from "next/image";
import skills from "@/data/skills.json";

export default function Skills() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="title text-left text-xl sm:text-2xl">tech stack</h2>

      <div className="grid grid-cols-5 justify-items-center gap-3 sm:grid-cols-7 sm:gap-4 md:grid-cols-10">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group flex flex-col items-center justify-center"
          >
            <div className="flex size-10 items-center justify-center rounded-full border border-gray-300 bg-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-md sm:size-12 dark:border-gray-700 dark:bg-[#0e0f17] dark:hover:bg-[#1a1b25]">
              <Image
                src={skill.logo}
                alt={skill.name}
                width={22}
                height={22}
                className="object-contain"
              />
            </div>

            <p className="mt-1 text-[10px] font-medium text-gray-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:text-xs dark:text-gray-400">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
