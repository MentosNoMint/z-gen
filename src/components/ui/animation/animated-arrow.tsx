import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP);

export const AnimatedArrow = ({
  rotate,
  size,
}: {
  rotate?: boolean;
  size?: number;
}) => {
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
      className={cn(
        "w-31 h-31 flex animation-limit relative pointer-events-none mx-4",
        rotate && "rotate-90",
      )}
      ref={container}
      style={{ scale: size }}
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
