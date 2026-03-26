import { useState, useEffect } from "react";

const fontClasses = [
  "font-gramatika",
  "font-gramatika-slanted",
  "font-gramatika-bold-slanted",
  "font-gramatika-shifted",
  "font-gramatika-bold-shifted",
];

interface GlitchFontTextProps {
  text: string;
  className?: string;
  interval?: number;
}

const GlitchChar = ({ char, interval }: { char: string; interval: number }) => {
  const [currentClass, setCurrentClass] = useState(fontClasses[0]);

  useEffect(() => {
    const jitteredInterval = interval + Math.random() * (interval * 0.5);

    const timer = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * fontClasses.length);
      setCurrentClass(fontClasses[randomIndex]);
    }, jitteredInterval);
    return () => clearInterval(timer);
  }, [interval]);

  return (
    <span className={`${currentClass} transition-all duration-75`}>{char}</span>
  );
};

export const GlitchFontText = ({
  text,
  className = "",
  interval = 500,
}: GlitchFontTextProps) => {
  return (
    <span className={`inline-flex whitespace-pre ${className}`}>
      {text.split("").map((char, index) => (
        <GlitchChar
          key={`${char}-${index}`}
          char={char}
          interval={interval}
        />
      ))}
    </span>
  );
};
