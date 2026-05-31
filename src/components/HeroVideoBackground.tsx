"use client";

import { useEffect, useRef, useState } from "react";

const LOCAL_VIDEO = "/videos/hero-bg.mp4";

export function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const video = videoRef.current;
    if (!video) return;

    const onReady = () => setVideoReady(true);
    video.addEventListener("canplay", onReady);
    video.play().catch(() => {});

    return () => video.removeEventListener("canplay", onReady);
  }, [reduceMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          videoReady && !reduceMotion ? "opacity-0" : "opacity-100 animate-ken-burns"
        }`}
        style={{ backgroundImage: "url(/images/hero-poster.jpg)" }}
        aria-hidden
      />

      {!reduceMotion && (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero-poster.jpg"
          aria-hidden
        >
          <source src={LOCAL_VIDEO} type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-itc-slate/75 dark:bg-itc-slate/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-itc-slate via-itc-slate/80 to-itc-green-dark/60" />
      <div className="absolute inset-0 bg-mesh-green opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-t from-itc-slate-light via-transparent to-itc-slate/40 dark:from-[#0a0f14]" />
    </div>
  );
}
