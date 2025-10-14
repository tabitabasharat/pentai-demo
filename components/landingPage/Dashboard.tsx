import Image from "next/image";
import { Container } from "@/components/ui/Container";

type Props = {
  imageSrc: string;
  imageAlt?: string;
};

export function DashboardShowcase({
  imageSrc,
  imageAlt = "Product dashboard",
}: Props) {
  return (
    <div className="pb-16">
      <Container>
        <div className="text-center">
          <h2 className="text-[30px] sm:text-[36px] md:text-[44px] leading-[1.15] font-semibold tracking-tight">
            <span className="text-zinc-300 animate-text-reveal opacity-0">
              Lorem
            </span>{" "}
            <span className="text-white animate-text-reveal opacity-0 animation-delay-100">
              ipsum dolor sit amet
            </span>
            <br />
            <span className="text-white animate-text-reveal opacity-0 animation-delay-200">
              consectetur.
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[14px] text-zinc-300/85 animate-text-reveal opacity-0 animation-delay-300">
            Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla
          </p>
        </div>
        <div className="relative mx-auto mt-8 w-full max-w-5xl">
          <div className="rounded-2xl border-none p-px shadow-[0_40px_120px_-20px_rgba(0,0,0,0.55)] animate-dashboard-float">
            <div className="overflow-hidden rounded-xl bg-zinc-900">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={1240}
                height={760}
                className="h-auto w-full animate-button-enter opacity-0"
                priority
              />
            </div>
          </div>
          {/* Subtle glow effect */}
          <div className="absolute inset-0 -z-10 mx-auto w-[90%] rounded-2xl bg-purple-500/10 blur-3xl animate-glow-pulse" />
        </div>
      </Container>
    </div>
  );
}
