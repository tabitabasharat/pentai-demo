import Image from "next/image";
import { Container } from "@/components/ui/Container";

type Stat = { value: string; caption: string };

const DEFAULT: Stat[] = [
  { value: "23%", caption: "Consequat netus consequat tortor vitae cursus nullam tincidunt urna. Tristique leo" },
  { value: "23%", caption: "Consequat netus consequat tortor vitae cursus nullam tincidunt urna. Tristique leo" },
  { value: "23%", caption: "Consequat netus consequat tortor vitae cursus nullam tincidunt urna. Tristique leo" },
];

function StatCard({ value, caption, index }: Stat & { index: number }) {
  return (
    <div
      className="
        group relative overflow-hidden rounded-2xl
        border border-white/12 ring-1 ring-white/10
        bg-black/40 backdrop-blur-[1px]
        shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)]
        animate-card-float
      "
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div
        aria-hidden
        className="
          absolute inset-x-0 bottom-[-30%] -z-20 h-[160%]
          [background:radial-gradient(85%_55%_at_50%_80%,rgba(255,255,255,0.22),rgba(255,255,255,0.10)_45%,transparent_70%)]
          blur-[18px]
          animate-glow-pulse
        "
      />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/images/Union.png"           
          alt=""
          fill
          className="object-cover object-bottom opacity-100 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
      </div>

      <div
        aria-hidden
        className="
          absolute inset-0 -z-20
          bg-[radial-gradient(130%_120%_at_50%_120%,rgba(255,255,255,0.06),transparent_55%)]
        "
      />
      <div className="px-6 py-7 sm:px-7 sm:py-8">
        <div className="flex min-h-[138px] items-center justify-center">
          <span
            className="
              text-white text-[56px] sm:text-[64px] leading-none font-extrabold tracking-tight
              drop-shadow-[0_2px_10px_rgba(255,255,255,0.25)]
              animate-number-reveal
            "
            style={{ animationDelay: `${index * 200 + 300}ms` }}
          >
            {value}
          </span>
        </div>
        <p 
          className="mt-3 text-[13px] leading-relaxed text-zinc-300/85 animate-text-reveal"
          style={{ animationDelay: `${index * 200 + 500}ms` }}
        >
          {caption}
        </p>
      </div>
    </div>
  );
}

type Props = {
  titleTop?: string;
  titleMain?: string;
  titleBottom?: string;
  stats?: Stat[];
  className?: string;
};
export function FeatureStats({
  titleTop = "Lorem",
  titleMain = "ipsum dolor sit amet",
  titleBottom = "consectetur.",
  stats = DEFAULT,
  className = "",
}: Props) {
  return (
    <section className={`relative isolate py-14 sm:py-20 ${className}`}>
      <Container>
        <div className="text-center">
          <h2 className="text-[28px] sm:text-[34px] md:text-[42px] leading-[1.15] font-semibold tracking-tight">
            <span className="text-zinc-300 animate-text-reveal opacity-0">Lorem</span>{" "}
            <span className="text-white animate-text-reveal opacity-0 animation-delay-100">ipsum dolor sit amet</span>
            <br />
            <span className="text-white animate-text-reveal opacity-0 animation-delay-200">consectetur.</span>
          </h2>
        </div>
        {/* cards */}
        <div className="mt-8 grid gap-6 sm:gap-8 sm:grid-cols-3">
          {stats.map((s, i) => (
            <StatCard key={i} value={s.value} caption={s.caption} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}