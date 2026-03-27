import { ProjectItem } from "./project-item";

const projects = [
  {
    number: "01",
    text: "sielom.ru [официальный сайт института. теперь я уважаемый человек]",
  },
  {
    number: "02",
    text: "Среда (ЛК) [Целая SaaS платформа для студентов/преподов. 3D тут нет, зато есть 10к компонентов]",
  },
  {
    number: "03",
    text: "За Жизнь [Милый лендинг позволяющий сохранить жизни, больше нечего добавить]",
  },
  {
    number: "04",
    text: "Лендинг для профсоюза [серьезные дяди делают бизнес, а я делаю тексты в дивах]",
  },
  {
    number: "05",
    text: "Геймдев Лендос [институтский проект, где мне разрешили легально баловаться с WebGL]",
  },
  {
    number: "06",
    text: "Интерактивная панель [в будущем спасу людей от блужданий по коридорам]",
  },
];

export const ProjectList = () => {
  return (
    <div>
      {projects.map((project) => (
        <ProjectItem
          key={project.number}
          number={project.number}
          text={project.text}
        />
      ))}
    </div>
  );
};
