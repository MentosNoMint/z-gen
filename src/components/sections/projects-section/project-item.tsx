export const ProjectItem = ({number, text }: { number: string; text: string }) => {
  return (
    <div className="border-t-8 border-black h-60 w-full leading-14 flex items-center cursor-pointer">
      <div className="flex gap-5">
        <span className="font-gramatika-bold">{number}</span>
        <span className="font-gramatika">
          ➔ {text}
        </span>
      </div>
    </div>
  );
};