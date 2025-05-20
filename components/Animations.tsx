"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function HeroAnimation() {
  return (
    <DotLottieReact
      src="/animations/hero-animation.lottie"
      loop
      autoplay
      className="mx-auto aspect-video w-[120%] -ml-16"
    />
  );
}
