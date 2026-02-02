import Image from "next/image";
import BubbleBackground from "../BubbleBackground";

export const projects = [
  {
    id: 1,
    title: "N4Hire",
    year: "2025",
    image: "/project/N4Hire.png",
    description: "N4HIRE merupakan website psikotes online yang dibuat sebagai sarana pendukung untuk seleksi karyawan di PTPN IV Regional 2.",
  },
  {
    id: 2,
    title: "Sistem Manajemen Karyawan",
    year: "2024",
    image: "/project/EV4HRIS.png",
    description: "Website yang digunakan sebagai pembaharuan (Re-build) untuk pengelolaan data karyawan di PTPN IV dan akan digunakan oleh Divisi SDM.",
  },
  {
    id: 3,
    title: "Sistem Manajemen Karyawan",
    year: "2024",
    image: "/project/N4R2ABSENSI.png",
    description: "Website yang digunakan sebagai pembaharuan (Re-build) untuk pengelolaan data karyawan di PTPN IV dan akan digunakan oleh Divisi SDM.",
  },
  {
    id: 4,
    title: "Sistem Manajemen Karyawan",
    year: "2024",
    image: "/project/TDS.png",
    description: "Website yang digunakan sebagai pembaharuan (Re-build) untuk pengelolaan data karyawan di PTPN IV dan akan digunakan oleh Divisi SDM.",
  },
  {
    id: 5,
    title: "Sistem Manajemen Karyawan",
    year: "2024",
    image: "/project/OKLAUNDRY.png",
    description: "Website yang digunakan sebagai pembaharuan (Re-build) untuk pengelolaan data karyawan di PTPN IV dan akan digunakan oleh Divisi SDM.",
  },
  {
    id: 6,
    title: "Sistem Manajemen Karyawan",
    year: "2024",
    image: "/project/APOTEK.png",
    description: "Website yang digunakan sebagai pembaharuan (Re-build) untuk pengelolaan data karyawan di PTPN IV dan akan digunakan oleh Divisi SDM.",
  },
];

export default function ProjectSelected() {
  return (
    <section className="relative w-full min-h-screen text-white px-5 md:px-20 pb-10 pt-20 overflow-hidden">
      {/* Judul */}
      <div className="mb-10">
        <h2 className="text-5xl font-bold uppercase">Selected Project</h2>
        <div className="mt-4 h-2 w-72 bg-sky-500" />
      </div>

      {/* Project List */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 z-20">
        {projects.map((project) => (
          <div key={project.id} className="backdrop-blur-xl bg-white/60 dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded-3xl shadow-2xl h-auto p-2">
            {/* Image */}
            <div className="rounded-xl overflow-hidden bg-white shadow-2xl">
              <Image src={project.image} alt={project.title} width={900} height={500} className="w-full object-cover z-50" />
            </div>

            {/* Text */}
            <h3 className="mt-6 text-lg font-bold uppercase">
              {project.title} | {project.year}
            </h3>

            <p className="mt-3 text-sm text-gray-300 leading-relaxed max-w-xl">{project.description}</p>
          </div>
        ))}
      </div>

      {/* Tahun Vertikal */}
      <div className="absolute -right-20 top-1/2 rotate-90 Z-0">
        <span className="text-8xl font-bold tracking-widest text-white/20">2022 - {new Date().getFullYear()}</span>
      </div>

      <BubbleBackground />
    </section>
  );
}
