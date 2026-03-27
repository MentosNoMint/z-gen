export const About = () => {
  return (
    <div className="text-base font-gramatika-slanted tracking-tight flex mt-10 w-1/2 justify-between">
      <div className="flex flex-col">
        <h1 className="opacity-80 mb-2">Обо мне</h1>
        <span className="max-w-100 font-gramatika leading-4">
          Я Кирилл, мне 21. Делаю веб, в основном чтобы оправдать покупку Макбука. Пишу
          на React, Next.js и Astro. Умею центрировать div с классом fixed без
          подсказок. А что еще нужно для проффесионала?
        </span>
      </div>
      <div className="flex flex-col">
        <h1 className="opacity-80 mb-2">Мой стек</h1>
        <span className="max-w-90 font-gramatika leading-4">
          GSAP ✹ Three.js ✹ tailwind - Вот тут я делаю грязь, Мои сайты
          получаются громкими, потому что у юзеров начинают гудеть кулеры на
          ноутах. Strapi, TypeScript, React, Next.js - Дефолтная база.
        </span>
      </div>
    </div>
  );
};
