import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export const Preloader = () => {
  const container = useRef<HTMLDivElement>(null);

  const steps = [
    { moveLeft: 4045, intensity: 0.55, amplitude: 2 },
    { moveLeft: 1500, intensity: 0.3, amplitude: 0.5 },
    { moveLeft: 800, intensity: 0.3, amplitude: 0.5 },
  ];

  useGSAP(
    () => {
      const tl = gsap.timeline();
      const skewer = gsap.quickSetter(".gsap-char", "skewX", "deg");
      const shifter = gsap.quickSetter(".gsap-char", "x", "px");
      const trackSetter = gsap.quickSetter(".ticker-track", "x", "px");

      const proxy = { skew: 0, x: 0, trackX: 0 };

      steps.forEach((step) => {
        tl.to(proxy, {
          skew: -78,
          x: -40,
          trackX: "-=100",
          duration: 0.8,
          ease: "power2.in",
        }).to(proxy, {
          skew: 0,
          x: 0,
          duration: 1.5,
          trackX: `-=${step.moveLeft}`,
          ease: `elastic.out(${step.amplitude}, ${step.intensity})`,
        });
      });

      const update = () => {
        skewer(proxy.skew);
        shifter(proxy.x);
        trackSetter(proxy.trackX);
      };
      gsap.ticker.add(update);
      return () => gsap.ticker.remove(update);
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="fixed w-full h-screen bg-white font-bold flex items-center justify-center"
    >
      <div className="max-w-60 animation-limit">
        <div className="flex gap-4 text-9xl text-black font-semibold ticker-track">
          {Array.from({ length: 101 }, (_, i) => (
            <span
              key={`loading-char-${i}`}
              className="gsap-char"
            >
              {i}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
