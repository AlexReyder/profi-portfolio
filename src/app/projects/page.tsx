import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";

const projectsPage = () => {
  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <Layers className="h-4 w-4" />
        Проекты
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>Мои проекты</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
           Здесь вы найдете подборку моих  работ. Каждый проект — это результат поиска новых решений, практики, экспериментов и постоянного развития. Ознакомьтесь с этим портфолио, в котором отражены мои навыки, подход к работе и увлеченность своим делом.
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {portfolioConfig.projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
