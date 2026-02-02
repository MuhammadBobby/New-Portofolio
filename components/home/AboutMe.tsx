import Image from "next/image";
import SocialMedia from "./SocialMedia";
import BubbleBackground from "../BubbleBackground";

export default function AboutMe() {
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-center gap-20 mt-10 px-5 md:px-20">
        <div className="relative w-full md:w-1/3">
          <Image src={"/pas-foto.jpg"} alt="Profil" width={300} height={300} className="w-full mx-auto h-auto rounded-xl grayscale relative z-20" />
          <BubbleBackground />
        </div>

        <div className="w-full">
          <h1 className="text-5xl font-bold">Perkenalkan, </h1>
          <hr className="border-5 border-fuchsia-600 my-2 w-1/2 rounded-full" />
          <p className="font-medium mt-5">
            Saya adalah seorang Web Developer yang fokus di pengembangan front-end menggunakan Laravel, Next.js, dan Tailwind CSS. Selama masa kuliah dan magang, saya telah mengerjakan lebih dari 20 proyek berbasis website — mulai dari
            landing page, dashboard, hingga aplikasi berbasis sistem manajemen.
          </p>
          <p className="font-medium mt-5">
            Saya adalah seorang Web Developer yang fokus di pengembangan front-end menggunakan Laravel, Next.js, dan Tailwind CSS. Selama masa kuliah dan magang, saya telah mengerjakan lebih dari 20 proyek berbasis website — mulai dari
            landing page, dashboard, hingga aplikasi berbasis sistem manajemen.
          </p>

          {/* skill dan interest */}
          <SocialMedia />
        </div>
      </div>
    </section>
  );
}
