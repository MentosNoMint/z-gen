export const Header = () => {
  return (
    <div className="w-full flex">
      <div className="w-1/2 h-50 border-2 border-black flex items-center justify-center cursor-pointer">
        <a href="/projects" className="text-8xl font-gramatika leading-28 tracking-tight">
          Проектики
        </a>
      </div>
      <div className="w-1/2 h-50 border-2 border-black -ml-0.5 flex items-center justify-center cursor-pointer">
        <a href="/job" className="text-8xl font-gramatika leading-28 tracking-tight">
          Гоу работать
        </a>
      </div>
    </div>
  );
};