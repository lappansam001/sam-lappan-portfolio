import { Marquee } from "@/components/shadcn-space/animations/marquee";

export default function DemoBanner() {
  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 border-y border-blue-100 bg-blue-50">
      <Marquee className="[--duration:25s] py-5" pauseOnHover repeat={6}>
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className="flex items-center gap-4 whitespace-nowrap px-4 text-base font-bold uppercase tracking-widest text-blue-700"
          >
            Interactive demo below
            <span className="text-blue-300" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
