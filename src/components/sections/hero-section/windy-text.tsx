import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface WindyTextProps {
  words?: string[];
  separator?: string;
  duration?: number;
}

export const WindyText = ({
  words = [],
  separator = "✺",
  duration = 140,
}: WindyTextProps) => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;

      const skewer = gsap.quickSetter(".gsap-char", "skewX", "deg");
      const shifter = gsap.quickSetter(".gsap-char", "x", "px");
      const proxy = { skew: 0, x: 0 };

      const marquee = gsap.to(".ticker-track", {
        xPercent: -50,
        ease: "none",
        duration: duration,
        repeat: -1,
      });

      gsap
        .timeline({ repeat: -1, repeatDelay: 0.5 })
        .to(proxy, {
          skew: -65,
          x: -15,
          duration: 1.2,
          ease: "power2.inOut",
          onUpdate: () => {
            marquee.timeScale(1 + Math.abs(proxy.skew / 20));
          },
        })
        .to(proxy, {
          skew: 0,
          x: 0,
          duration: 2.5,
          ease: "elastic.out(0.7, 0.1)",
          onUpdate: () => {
            marquee.timeScale(Math.max(1, 1 + Math.abs(proxy.skew / 20)));
          },
        });

      const update = () => {
        skewer(proxy.skew);
        shifter(proxy.x);
      };

      gsap.ticker.add(update);

      return () => {
        gsap.ticker.remove(update);
      };
    },
    { scope: container, dependencies: [words, duration] },
  );

  const fullText =
    words.length > 0 ? words.join(` ${separator} `) + ` ${separator} ` : "";

  const displayChars = fullText.repeat(4).split("");

  return (
    <div
      ref={container}
      className="w-full overflow-hidden bg-white flex items-center"
    >
      <div className="ticker-track flex whitespace-nowrap">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="flex text-[22rem] font-black uppercase text-black px-4 leading-none select-none -mt-2"
          >
            {displayChars.map((c, j) => (
              <span
                key={`${i}-${j}`}
                className="gsap-char inline-block origin-bottom whitespace-pre will-change-transform"
              >
                {c}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
