import AboutMe from "@/components/home/AboutMe";
import ContactSection from "@/components/home/Contact";
import ExperienceSection from "@/components/home/Experience";
import HeaderHome from "@/components/home/Header";
import ProjectSelected from "@/components/home/Project";
import SkillsSection from "@/components/home/SkillSection";
import Marquee from "@/components/Marquee";

export default function Home() {
  const now = new Date();

  return (
    <div className="bg-linear-to-br from-gray-900 to-gray-800 pb-10 overflow-x-hidden">
      {/* // header */}
      <HeaderHome />

      {/* About me */}
      <Marquee text="About Me" />

      <AboutMe />

      {/* line */}
      <div className="flex items-center text-white px-5 md:px-20 my-5">
        <span className="font-bold">O</span>
        <hr className="border-2 w-full rounded-full" />
        <span className="whitespace-nowrap ms-5 text-xl font-medium tracking-wider">Portofolio {now.getFullYear()}</span>
      </div>

      {/* skill */}
      <SkillsSection />

      {/* Project */}
      <Marquee text="Project" />
      <ProjectSelected />

      {/* line */}
      <div className="flex items-center text-white px-5 md:px-20 my-5">
        <span className="font-bold">O</span>
        <hr className="border-2 w-full rounded-full" />
        <span className="whitespace-nowrap ms-5 text-xl font-medium tracking-wider">Portofolio {now.getFullYear()}</span>
      </div>

      {/* experience */}
      <ExperienceSection />

      {/* line */}
      <div className="flex items-center text-white px-5 md:px-20 my-5">
        <hr className="border-2 w-full rounded-full" />
        <span className="font-bold">O</span>
      </div>

      {/* contact */}
      <ContactSection />
    </div>
  );
}
