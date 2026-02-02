import BubbleBackground from "../BubbleBackground";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

export const contacts = [
  {
    id: 1,
    title: "Phone & Whatsapp",
    icon: "FaWhatsapp",
    lines: ["0822-7744-8525"],
  },
  {
    id: 2,
    title: "Email & Website",
    icon: "MdOutlineMailOutline",
    lines: ["m.bobbyoktaviano@gmail.com", "https://muhammadbobby.github.io/portfolio-muhammad-bobby"],
  },
  {
    id: 3,
    title: "Address",
    icon: "CiLocationOn",
    lines: ["Jl. Amal, Sunggal, Medan,", "Sumatera Utara"],
  },
];

export default function ContactSection() {
  return (
    <section className="w-full px-5 py-5 md:px-10 md:py-24 text-white relative">
      <BubbleBackground />

      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold uppercase">Contact Me</h2>
        <p className="mt-3 text-sky-400 italic tracking-wide">Let&apos;s Work Together</p>
      </div>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-16 text-center">
        {contacts.map((item) => (
          <div key={item.id} className="space-y-1 md:space-y-6">
            <div className="flex justify-center">
              {item.icon === "FaWhatsapp" && <FaWhatsapp className="text-fuchsia-400 text-3xl" />}
              {item.icon === "MdOutlineMailOutline" && <MdOutlineMailOutline className="text-fuchsia-400 text-3xl" />}
              {item.icon === "CiLocationOn" && <CiLocationOn className="text-fuchsia-400 text-3xl" />}
            </div>

            <h3 className="text-xl font-bold">{item.title}</h3>

            <div className="space-y-1 text-gray-300">
              {item.lines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="flex items-center gap-6 my-10 md:my-24">
        <span className="h-px w-full bg-white/40" />
        <span className="w-3 h-3 border border-white rounded-full" />
        <span className="h-px w-full bg-white/40" />
      </div>

      {/* Footer Text */}
      <div className="text-center space-y-4">
        <h3 className="text-xl md:text-6xl font-bold tracking-widest text-white/10">MUHAMMAD BOBBY</h3>
        <p className="text-sm tracking-[0.3em] text-gray-300">PORTFOLIO {new Date().getFullYear()}</p>
      </div>
    </section>
  );
}
