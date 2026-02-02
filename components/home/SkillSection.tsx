"use client";

import {
  SiLaravel,
  SiPhp,
  SiMysql,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiGit,
  SiGithub,
  SiPostman,
  SiCanva,
  SiFigma,
  SiHtml5,
  SiC,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiComposer,
  SiCodeigniter,
  SiFirebase,
  SiEslint,
  SiKotlin,
  SiVite,
  SiDiscord,
  SiAndroidstudio,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

export default function SkillsSection() {
  return (
    <section className="relative w-full p-5 py-8 md:py-24 md:px-20 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* LEFT */}
        <div className="mt-10">
          <h2 className="text-4xl font-extrabold tracking-wide">SKILLS</h2>
          <div className="mt-4 h-1 w-40 bg-sky-400" />

          <p className="mt-6 max-w-md text-gray-300 leading-relaxed">
            Berikut adalah beberapa teknologi dan tools yang saya kuasai maupun sedang saya pelajari dalam proses pengembangan web. Kemampuan ini saya peroleh melalui pengalaman proyek, magang, serta pembelajaran mandiri.
          </p>
        </div>

        {/* RIGHT */}
        <div className="relative">
          {/* Year watermark */}
          <div className="absolute -top-12 right-0 text-6xl md:text-7xl font-bold text-white/10 tracking-widest hidden md:block">2022 - NOW</div>

          {/* Web Dev */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
            <div className="flex flex-wrap items-center gap-5 text-4xl">
              <SiHtml5 className="text-orange-500" />
              <SiCss3 className="text-blue-500" />
              <SiJavascript className="text-yellow-400" />
              <SiNodedotjs className="text-green-500" />
              <SiComposer />
              <SiLaravel className="text-red-500" />
              <SiCodeigniter className="text-red-500" />
              <SiPhp className="text-indigo-400" />
              <SiMysql className="text-blue-400" />
              <SiFirebase className="text-yellow-400" />
              <SiNextdotjs />
              <SiReact className="text-cyan-400" />
              <SiTypescript className="text-blue-500" />
              <SiEslint className="text-red-500" />
              <SiKotlin className="text-blue-500" />
              <SiTailwindcss className="text-sky-400" />
              <SiVite className="text-pink-500" />
            </div>
          </div>

          {/* Tools */}
          <div className="mt-5">
            <h3 className="text-2xl font-semibold mb-4">Tools</h3>
            <div className="flex flex-wrap items-center gap-5 text-4xl">
              <BiLogoVisualStudio className="text-blue-400" />
              <SiGit className="text-orange-500" />
              <SiGithub />
              <SiDiscord className="text-blue-500" />
              <SiPostman className="text-orange-400" />
              <SiAndroidstudio className="text-yellow-500" />
            </div>
          </div>

          {/* Design */}
          <div className="mt-5">
            <h3 className="text-2xl font-semibold mb-4">Design & Other</h3>
            <div className="flex flex-wrap items-center gap-5 text-4xl">
              <SiCanva className="text-sky-400" />
              <SiFigma className="text-pink-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
