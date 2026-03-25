import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { forwardRef, useRef } from "react";
import { array } from "astro:schema";

gsap.registerPlugin(useGSAP);

export const WindyText = () => {
    const container = useRef(null);


    return (
      <div ref={container}>
        {Array.from({ length: 101}, (_, i) => (
          <span key={`loading-char-${i}`}>{i}</span>
        ))}
      </div>
    );
  };

