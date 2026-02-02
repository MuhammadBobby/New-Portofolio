export default function Marquee({ text }: { text: string }) {
  return (
    <div className="w-full overflow-hidden bg-white py-3">
      <div className="flex w-max animate-marquee gap-6">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="mx-6 flex items-center gap-2 text-fuchsia-800 font-semibold text-xl uppercase whitespace-nowrap">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
