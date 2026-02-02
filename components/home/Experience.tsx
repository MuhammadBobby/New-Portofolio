export const experiences = [
  {
    id: 1,
    role: "Krani Personalia - Front-End Web Developer Intern",
    company: "PTPN IV Regional 2 - Divisi Personalia",
    period: "Okt 2025 - Now",
    description:
      "Berkontribusi di Divisi Personalia dengan fokus membantu digitalisasi pada Divisi Personalia, serta terlibat dalam pembangunan dan pengelolaan website Absensi Karyawan dan Sistem Manajemen Karyawan untuk mendukung digitalisasi proses internal.",
  },
  {
    id: 2,
    role: "Front-End Web Developer Intern",
    company: "PTPN IV Regional 2",
    period: "Sep 2024 - Okt 2025",
    description:
      "Berkontribusi dalam proses digitalisasi sistem internal SDM PTPN IV melalui pengembangan berbagai aplikasi berbasis Laravel dan Tailwind CSS. Membangun sistem seperti ujian online, pelacakan dokumen keuangan, dan dashboard manajemen karyawan yang digunakan oleh seluruh unit kebun dan PKS.",
  },
  {
    id: 3,
    role: "Freelance Web Developer & UI Designer",
    company: "Freelance",
    period: "2022 - Now",
    description:
      "Mengembangkan lebih dari 10 proyek website untuk klien UMKM dan individu, mulai dari landing page hingga dashboard sistem. Bertanggung jawab penuh dalam proses analisis kebutuhan, desain, pengembangan, hingga deployment dan maintenance. Proyek dibangun menggunakan Laravel, Tailwind, dan Next.js.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="relative w-full px-5 md:px-20 py-20 text-white">
      {/* Header */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold uppercase">Experience</h2>
        <div className="mt-4 h-2 w-72 bg-sky-500" />
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left - Role List */}
        <div className="space-y-5 md:space-y-24">
          {experiences.map((exp) => (
            <div key={exp.id} className="flex gap-6">
              {/* Arrow */}
              <div className="text-fuchsia-500 text-4xl font-bold leading-none">»</div>

              {/* Info */}
              <div>
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="mt-2 text-fuchsia-500">{exp.company}</p>
                <p className="text-gray-300 text-sm">{exp.period}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right - Description */}
        <div className="space-y-20 hidden md:block">
          {experiences.map((exp) => (
            <p key={exp.id} className=" text-gray-300 leading-relaxed">
              {exp.description}
            </p>
          ))}
        </div>
      </div>

      {/* Year Big Text */}
      <div className="absolute top-10 right-10 hidden lg:block">
        <span className="text-[120px] font-bold tracking-widest text-white/10">2022 - NOW</span>
      </div>
    </section>
  );
}
