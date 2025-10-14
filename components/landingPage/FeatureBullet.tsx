"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export type Feature = {
  id: string | number;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
};

type Props = {
  heading?: string;
  features: Feature[];
  defaultImageSrc: string;
  defaultImageAlt?: string;
  className?: string;
};

export function FeatureBulletsShowcase({
  heading = "Lorem ipsum dolor",
  features,
  defaultImageSrc,
  defaultImageAlt = "Product screenshot",
  className = "",
}: Props) {
  const [active, setActive] = useState(features[0]?.id ?? 0);
  const activeFeature = features.find((f) => f.id === active) ?? features[0];

  return (
    <section className={`relative isolate py-12 sm:py-16 ${className}`}>
      <Container>
        <h2 className="text-center text-[32px] sm:text-[48px] font-semibold tracking-tight text-[#ECEDEE]">
          {heading}
        </h2>

        <div className="mt-8 grid gap-[32px] lg:grid-cols-2">
          {/* Left feature list */}
          <div className="mx-auto w-full max-w-xl">
            <ul className="flex flex-col gap-4">
              {features.map((f, idx) => {
                const isActive = f.id === active;
                return (
                  <li key={f.id}>
                    <button
                      type="button"
                      onClick={() => setActive(f.id)}
                      className={[
                        "group w-full rounded-[6px] px-[16px] py-[8.33px] text-left transition-all duration-300 relative overflow-hidden",
                        "backdrop-blur-sm",
                        isActive
                          ? "bg-[#282828] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)]"
                          : "bg-zinc-900/50 hover:bg-[#1C1C1C] border border-white/10 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.6)]",
                      ].join(" ")}
                      aria-current={isActive ? "true" : undefined}
                    >
                      {/* Gradient border using pseudo-element */}
                      <div
                        className={`absolute inset-0 rounded-[6px] transition-opacity duration-300 ${
                          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`}
                        style={{
                          background: "linear-gradient(304.54deg, #8E4EC8 -0.44%, #B77DDD 35.09%, #F7ECFC 72%)",
                          padding: "1px",
                          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                          WebkitMaskComposite: "xor",
                          maskComposite: "exclude",
                        }}
                      />
                      
                      <div className="relative z-10  rounded-[10px] h-full">
                        <div className="text-[20px] font-semibold text-white">
                          {f.title || `Feature ${idx + 1}`}
                        </div>
                        <p className="mt-1 text-[16px] leading-relaxed text-zinc-300/85">
                          {f.description}
                        </p>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right screenshot */}
          <div className="mx-auto w-full max-w-2xl">
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl ">
              <Image
                src={activeFeature?.imageSrc ?? defaultImageSrc}
                alt={activeFeature?.imageAlt ?? defaultImageAlt}
                fill
                priority
                className="object-fill object-center"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_50%,transparent_50%,rgba(0,0,0,0.35))]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}