import Image from "next/image";
import BubbleBackground from "../BubbleBackground";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Aplikasi Absensi Karyawan N4R2",
    year: "2026",
    image: "/project/N4R2ABSENSI.png",
    description: "Aplikasi absensi karyawan berbasis PWA yang dikembangkan untuk mendukung digitalisasi sistem absensi di seluruh unit PTPN IV Regional 2, sehingga proses absensi menjadi lebih praktis dan efisien.",
    link: "https://regional-2-absensi.vercel.app",
  },
  {
    id: 2,
    title: "N4Hire",
    year: "2025",
    image: "/project/N4HIRE.png",
    description: "Website psikotes online yang digunakan sebagai sistem pendukung proses seleksi karyawan di PTPN IV Regional 2.",
    link: "https://n4hire.com",
  },
  {
    id: 3,
    title: "Sistem Manajemen Karyawan",
    year: "2024",
    image: "/project/EV4HRIS.png",
    description: "Sistem manajemen karyawan yang dikembangkan sebagai pembaruan (re-build) dan dirancang menjadi super-app untuk mengintegrasikan berbagai aplikasi SDM di PTPN IV Regional 2.",
    link: "https://ev4hris.com",
  },
  {
    id: 4,
    title: "Tracking Document PTPN",
    year: "2025",
    image: "/project/TDS.png",
    description: "Aplikasi berbasis web untuk melakukan pelacakan dokumen internal yang berjalan di lingkungan PTPN IV Regional 2.",
    link: null,
  },
  {
    id: 5,
    title: "OK Laundry",
    year: "2023",
    image: "/project/OKLAUNDRY.png",
    description: "Website pemesanan dan pengelolaan layanan laundry yang terintegrasi dengan Payment Gateway Midtrans untuk memudahkan proses transaksi.",
    link: "https://github.com/MuhammadBobby/Laundry",
  },
  {
    id: 6,
    title: "Apotek Dashboard",
    year: "2024",
    image: "/project/APOTEK.png",
    description: "Dashboard manajemen apotek untuk pencatatan barang masuk dan keluar, serta terintegrasi dengan Payment Gateway dan API WhatsApp.",
    link: "https://github.com/MuhammadBobby/apotek_kimia_farma",
  },
];

export default function ProjectSelected() {
  return (
    <section className="relative w-full min-h-screen text-white px-5 md:px-20 pb-10 pt-20 overflow-hidden">
      <BubbleBackground />

      {/* Judul */}
      <div className="mb-10">
        <h2 className="text-5xl font-bold uppercase">Selected Projects</h2>
        <div className="mt-4 h-2 w-72 bg-sky-500" />
      </div>

      {/* Project List */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 z-20">
        {projects.map((project) => (
          <div key={project.id} className="backdrop-blur-xl bg-white/60 dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded-3xl shadow-2xl h-auto p-2 flex flex-col justify-between">
            <div>
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

            <Link
              href={project.link || "#"}
              target="_blank"
              aria-disabled={project.link ? false : true}
              className="block w-full border-fuchsia-500 border bg-transparent hover:bg-fuchsia-500 text-fuchsia-500 hover:text-white font-medium py-2 px-4 rounded-full mt-4 text-center z-auto"
            >
              {project.link ? "View Project" : "Project Not Available"}
            </Link>
          </div>
        ))}
      </div>

      {/* Tahun Vertikal */}
      <div className="absolute -right-20 top-1/2 rotate-90 Z-0">
        <span className="text-8xl font-bold tracking-widest text-white/20">2022 - {new Date().getFullYear()}</span>
      </div>
    </section>
  );
}
