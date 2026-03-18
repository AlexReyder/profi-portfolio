import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { LightbulbIcon } from "lucide-react";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { portfolioConfig } from "@/config/portfolio.config";

const skillPage = () => {
  return (
    // SKILLS PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <LightbulbIcon className="w-4 h-4" />
        Технологии
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>Мой стек технологий.</Heading>
        <FramerWrapper y={0} x={200}>
          <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
           Я full-stack разработчик с глубоким пониманием того, как создавать современные веб-приложения на всех уровнях — от визуальной части и пользовательского опыта до сложной бизнес-логики, архитектуры и серверной части. Специализируюсь на разработке сайтов и веб-приложений с использованием JavaScript, TypeScript, React, Next.js и Node.js, уделяя внимание не только качеству интерфейса, но и масштабируемости, производительности и удобству дальнейшей поддержки проекта.
          </p>
        </FramerWrapper>
        <FramerWrapper y={100} delay={0.3} className="block w-full">
          <h2 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
            Языки программирования
          </h2>
          <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
            <SkillsFooter items={portfolioConfig.skills.programmingLanguages} />
          </div>
        </FramerWrapper>
        <FramerWrapper className="block w-full" y={100} delay={0.32}>
          <h2 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
            Фреймворки и библиотеки
          </h2>
          <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
            <SkillsFooter items={portfolioConfig.skills.frameworks} />
          </div>
        </FramerWrapper>
        <FramerWrapper className="block w-full" y={100} delay={0.34}>
          <h2 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
            Инструменты
          </h2>
          <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
            <SkillsFooter items={portfolioConfig.skills.tools} />
          </div>
        </FramerWrapper>
      </div>
    </div>
  );
};

export default skillPage;
