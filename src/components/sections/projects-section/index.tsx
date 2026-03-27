import { AnimatedArrow } from "../../ui/animation/animated-arrow";
import { ProjectList } from "./project-list";

const ProjectsSection = () => {
  return (
    <div className="w-full flex flex-col mt-2">
      <div className="flex">
        <div className="flex flex-col">
          <div className="text-9xl flex text-nowrap font-gramatika-slanted leading-28 tracking-tight">
            <span className="font-gramatika-bold-slanted">Код</span>, который
            <span className="font-gramatika ml-5">чудом</span>
            <span className="font-gramatika-slanted ml-5">не</span>
          </div>
          <div className="text-9xl flex text-nowrap font-gramatika-slanted leading-28 tracking-tight -mt-4">
            <span className="font-gramatika-bold">развалился</span>
            <span className="font-gramatika ml-5">на</span>
            <span className="font-gramatika-bold-slanted ml-5">проде</span>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <AnimatedArrow
            rotate={true}
            size={1.2}
          />
          <AnimatedArrow
            rotate={true}
            size={1.2}
          />
          <AnimatedArrow
            rotate={true}
            size={1.2}
          />
        </div>
      </div>
      <div className="w-full flex flex-col text-7xl font-gramatika-slanted tracking-tight mt-6">
        <ProjectList />
      </div>
    </div>
  );
};

export default ProjectsSection;
