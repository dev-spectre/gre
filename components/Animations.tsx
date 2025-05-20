"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function HeroAnimation() {
  return (
    <DotLottieReact
      src="/animations/hero-animation.lottie"
      loop
      autoplay
      className="w-[70%] mx-auto"
    />
  );
}
