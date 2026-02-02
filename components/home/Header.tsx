import BubbleBackground from "@/components/BubbleBackground";
import Image from "next/image";
import Link from "next/link";

export default function HeaderHome() {
  return (
    <section className="relative py-24 px-6 overflow-hidden h-screen flex items-center">
      <BubbleBackground />
      <div className="relative mx-auto">
        <div className="backdrop-blur-xl bg-white/60 dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded-3xl p-5 md:p-12 shadow-2xl h-auto text-left flex flex-col md:flex-row justify-center gap-5">
          <div>
            <h1 className="text-2xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 whitespace-nowrap">
              Muhammad <span className="text-fuchsia-600 bg-white px-2 text-shadow-2xs ">Bobby!_</span>
            </h1>
            <span className="block w-fit text-[0.5rem] md:text-xs font-semibold tracking-widest text-white bg-fuchsia-800 p-2 ">PROGRAMMER | FULLSTACK DEVELOPER</span>
            <span className="block w-fit text-[0.8rem] md:text-xs font-semibold tracking-widest text-fuchsia-500 py-2 mb-4">FRONT END SPECIALIST</span>

            <p className="md:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
              seorang Web Developer yang bersemangat membangun website modern, responsif, dan fokus pada pengalaman pengguna. Selamat datang di portofolio saya — di sini saya tunjukkan beberapa karya terbaik yang telah saya bangun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://wa.me/6282277448525" target="_blank" className="w-full sm:w-auto px-8 py-4 bg-fuchsia-600 text-white font-semibold rounded-xl hover:bg-fuchsia-700 transition-colors shadow-lg text-center md:text-left">
                Hubungi saya!
              </Link>
            </div>
          </div>

          {/* foto */}
          <div className="self-end w-full px-5 md:w-1/2 md:justify-self-center hidden md:block">
            <div className="relative -mt-4">
              <Image src="/profil.png" alt="Profil" width={300} height={300} className="max-w-full mx-auto h-auto" />

              <span className="absolute block pt-20 -translate-x-1/2 bottom-0 -z-10 left-1/2">
                <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="oklch(66.7% 0.295 322.15)"
                    d="M24.2,-47.9C32.3,-37.3,40.4,-32.6,49.3,-25.6C58.1,-18.7,67.8,-9.3,70.5,1.6C73.3,12.5,69.2,25.1,59.5,30.5C49.7,36,34.3,34.4,23.5,43.6C12.6,52.8,6.3,72.7,-3.4,78.6C-13.1,84.5,-26.3,76.4,-39.9,68.8C-53.5,61.2,-67.7,54.2,-70.8,42.9C-73.8,31.5,-65.9,15.7,-62.5,1.9C-59.1,-11.9,-60.4,-23.7,-58.2,-36.7C-56.1,-49.7,-50.5,-63.8,-40.2,-73.2C-30,-82.6,-15,-87.4,-3.5,-81.4C8.1,-75.4,16.1,-58.6,24.2,-47.9Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
