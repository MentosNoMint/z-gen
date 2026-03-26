import { GlitchFontText } from "../../ui/glitch-font-text";
import { AnimatedArrow } from "./animated-arrow";

export const HeroSection = () => {
  return (
    <div className="w-full flex flex-col overflow-hidden mt-2">
      <div className="w-full flex">
        <span className="text-9xl font-gramatika-bold-slanted leading-28 tracking-tight">
          Хеллоу
        </span>
        <AnimatedArrow />
        <div className="text-9xl font-gramatika-slanted leading-28 tracking-tight flex">
          вы
          <span className="font-gramatika">не</span>
          <span className="font-gramatika-bold-slanted">поверите</span>
        </div>
        <div className="text-9xl font-gramatika-slanted leading-28 tracking-tight flex ml-5">
          (но <span className="font-gramatika-bold ml-5">я</span>
          <img
            src="/img/cat.png"
            alt="cat"
            className="h-26.5 w-auto ml-5"
          />
          )
        </div>
      </div>
      <div className="text-9xl font-gramatika-slanted leading-28 tracking-tight flex gap-5 -mt-4">
        <span className="font-gramatika">натянул</span>
        <span className="font-gramatika-slanted">сюда</span>
        <img
          src="/img/sock.jpg"
          alt="sock"
          className="h-30 w-auto rounded-2xl mx-2.5 sock-rotate pointer-events-none select-none"
        />
        <span className="font-gramatika-bold">GSAP</span>
        <div>
          <span className="text-nowrap">чисто</span>
          <span className="text-nowrap font-gramatika">чтоб</span>
        </div>
      </div>
      <div className="text-9xl font-gramatika-slanted leading-28 tracking-tight flex -mt-4">
        <GlitchFontText
          text="буквы"
          interval={400}
          className="font-gramatika-bold-slanted max-w-88 w-full"
        />
        <span className="font-gramatika-bold">прикольно</span>
        <span className="font-gramatika-slanted ml-5">дергались</span>
        <img
          src="/img/gif/durov.gif"
          alt="durov"
          className="h-28.5 w-auto ml-8 mt-1 rounded-xl"
        />
      </div>
    </div>
  );
};
