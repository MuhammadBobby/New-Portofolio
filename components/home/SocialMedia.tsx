import Link from "next/link";

export default function SocialMedia() {
  const skill = [
    {
      label: "Linkedin - Muhammad Bobby Oktaviano",
      route: "https://www.linkedin.com/in/MuhammadBobby30",
    },
    {
      label: "Github - Muhammad Bobby",
      route: "https://github.com/MuhammadBobby",
    },
    {
      label: "Instagram - @muhammad_bobby_o",
      route: "https://instagram.com/muhammad_bobby_o",
    },
  ];

  return (
    <div className="mt-10">
      <h1 className="text-2xl font-extrabold tracking-wide">Sosial Media</h1>

      <div className="flex flex-wrap gap-3 mt-4">
        {skill.map((item, index) => (
          <Link
            href={item.route}
            key={index}
            className="relative inline-flex items-center justify-center py-0.5 overflow-hidden text-sm font-medium text-heading rounded-base group focus:outline-none border-2 even:border-fuchsia-500 odd:border-gray-100 rounded-full"
          >
            <span
              className={`relative px-4 py-2.5 transition-all ease-in duration-75 bg-neutral-primary-soft rounded-base group-hover:bg-transparent group-hover:dark:bg-transparent leading-5 ${index % 2 ? "text-fuchsia-500" : " text-white"} `}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
