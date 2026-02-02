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
            Saya adalah fresh graduate Web Developer dengan fokus utama pada pengembangan front-end, khususnya menggunakan React.js, Next.js, dan Tailwind CSS. Saya terbiasa membangun antarmuka yang responsif, modern, dan berorientasi pada
            pengalaman pengguna. Selain front-end, saya juga terbiasa menangani pengembangan full-stack, terutama menggunakan Laravel untuk kebutuhan backend dan integrasi API.
          </p>
          <p className="font-medium mt-5">
            Selama masa perkuliahan, magang, dan proyek mandiri, saya telah mengerjakan lebih dari 20 proyek nyata berbasis website dan android, mulai dari landing page hingga dashboard dan sistem manajemen. Saya terbiasa bekerja dalam tim,
            menyusun dokumentasi, serta mengelola pengembangan proyek dari perencanaan hingga deployment. Bagi saya, membangun website bukan hanya soal teknis, tetapi tentang menciptakan solusi digital yang efektif, mudah digunakan, dan
            berdampak nyata.
          </p>

          {/* sosial media*/}
          <SocialMedia />
        </div>
      </div>
    </section>
  );
}
