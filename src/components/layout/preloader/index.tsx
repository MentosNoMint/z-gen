import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { GlitchFontText } from "@/components/ui/glitch-font-text";

gsap.registerPlugin(useGSAP);

export const Preloader = () => {
  const container = useRef<HTMLDivElement>(null);

  const steps = [
    { moveLeft: 3945, intensity: 2, amplitude: 0.5 },
    { moveLeft: 1515, intensity: 0.3, amplitude: 0.5 },
    { moveLeft: 1030, intensity: 0.3, amplitude: 0.5 },
    { moveLeft: 12300, intensity: 2, amplitude: 0.5 },
    { moveLeft: 8580, intensity: 2, amplitude: 0.5 },
  ];

  useGSAP(
    () => {
      const tl = gsap.timeline({delay: 2});
      const skewer = gsap.quickSetter(".gsap-char", "skewX", "deg");
      const shifter = gsap.quickSetter(".gsap-char", "x", "px");
      const trackSetter = gsap.quickSetter(".ticker-track", "x", "px");

      const proxy = { skew: 0, x: 0, trackX: 0 };

      steps.forEach((step, index) => {
        tl.to(proxy, {
          skew: -75,
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
        if (index === steps.length - 1) {
          tl.to(
            ".animation-limit",
            {
              clipPath: "polygon(-2000% 0, 100% 0, 100% 100%, -2000% 100%)",
              duration: 0.7,
              ease: "power3.inOut",
            },
            "<0.6",
          );
        }
        tl.to({}, { duration: 0.5 });
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
      <div className="max-w-65 animation-limit">
        <div className="flex gap-5 text-9xl text-black font-semibold ticker-track ml-12">
          {Array.from({ length: 101 }, (_, i) => {
            if (i === 100) {
              return (
                <GlitchFontText
                  key={`loading-char-${i}`}
                  text={`1${"0".repeat(16)}`}
                  interval={400}
                  className="gsap-char font-bold"
                />
              );
            }
            return (
              <span
                key={`loading-char-${i}`}
                className="gsap-char font-gramatika font-bold whitespace-nowrap"
              >
                {i}%
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
