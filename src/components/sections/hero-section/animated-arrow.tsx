import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export const AnimatedArrow = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".arrow", {
        x: "100%",
        duration: 1,
        repeat: -1,
        ease: "none",
      });
    },
    { scope: container },
  );

  return (
    <div
      className="w-31 h-31 flex animation-limit relative pointer-events-none mx-4"
      ref={container}
    >
      <div className="flex relative w-full h-full arrow">
        <img
          src="/img/arrow-icon.svg"
          alt="arrow"
          className="w-31 h-31 absolute"
        />
        <img
          src="/img/arrow-icon.svg"
          alt="arrow"
          className="w-31 h-31 absolute -translate-x-full"
        />
      </div>
    </div>
  );
};
