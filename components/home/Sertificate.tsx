import Image from "next/image";
import BubbleBackground from "../BubbleBackground";

const certificates = [
  {
    title: "BNSP Junior Web Developer",
    image: "/certificates/bnspJWD.png",
    penerbit: "BNSP (Badan Nasional Sertifikasi Profesi)",
  },
  {
    title: "Bangkit Academy Mobile Developer",
    image: "/certificates/bangkitMobile.png",
    penerbit: "Bangkit Academy (Google, Goto, Traveloka)",
  },
  {
    title: "VSGA Junior Web Developer",
    image: "/certificates/vsgaJWD.png",
    penerbit: "VSGA (Vocational School Graduate Academy)",
  },
  {
    title: "Dicoding Web Intermediate",
    image: "/certificates/dicodingWebIntermediate.png",
    penerbit: "Dicoding Academy",
  },
  {
    title: "Dicoding React Web",
    image: "/certificates/dicodingReact.png",
    penerbit: "Dicoding Academy",
  },
  {
    title: "Dicoding Front-End Web",
    image: "/certificates/dicodingFrontEnd.png",
    penerbit: "Dicoding Academy",
  },
  {
    title: "Dicoding Back-End Web",
    image: "/certificates/dicodingBackEnd.png",
    penerbit: "Dicoding Academy",
  },
  {
    title: "Dicoding Machine Learning untuk Android",
    image: "/certificates/dicodingMLAndroid.png",
    penerbit: "Dicoding Academy",
  },
  {
    title: "Dicoding Android Intermediate",
    image: "/certificates/dicodingAndroidIntermediate.png",
    penerbit: "Dicoding Academy",
  },
  {
    title: "Fundamental Laravel",
    image: "/certificates/codepolitanLaravel.png",
    penerbit: "Codepolitan Academy",
  },
];

export default function SertificateSelection() {
  return (
    <section className="relative w-full min-h-screen text-white px-5 md:px-20 pb-10 pt-20 overflow-hidden">
      <BubbleBackground />

      {/* Judul */}
      <div className="mb-10">
        <h2 className="text-5xl font-bold uppercase">Selected Certificates</h2>
        <div className="mt-4 h-2 w-72 bg-sky-500" />
      </div>

      {/* Project List */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 z-20">
        {certificates.map((certificate, i) => (
          <div key={i} className="backdrop-blur-xl bg-white/60 dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded-3xl shadow-2xl h-auto p-2">
            {/* Image */}
            <div className="rounded-xl overflow-hidden bg-white shadow-2xl">
              <Image src={certificate.image} alt={certificate.title} width={900} height={500} className="w-full object-cover z-50" />
            </div>

            {/* Text */}
            <h3 className="mt-6 text-lg font-bold uppercase">{certificate.title}</h3>
            <p className="text-xs font-bold text-fuchsia-500 my-1">{certificate.penerbit}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
