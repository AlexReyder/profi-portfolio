import Aboutfooter from "@/components/Aboutfooter";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { User2 } from "lucide-react";

const page = () => {

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <User2 className="h-4 w-4" />
        Обо мне
      </Badge>
      <div className="flex flex-col gap-5">
        <Heading>
         Я fullstack-разработчик с 5-летним опытом 👨‍💻
        </Heading>

        <FramerWrapper y={0} x={100}>
          <p className=" font-poppins text-xl w-full text-primary max-sm:text-lg mb-4">
           За свою карьеру  реализовал и запустил более 25 проектов — от лендингов, корпоративных сайтов и интернет-магазинов до веб-приложений, админ-панелей и CRM-систем. Также разрабатываю Telegram-ботов и интегрирую проекты с внешними сервисами: API, платежными системами, CRM и сервисами уведомлений. Имею 2 года коммерческого опыта в компании, поэтому в работе ориентируюсь не только на код, но и на бизнес-цели: помогаю уточнить задачу, подобрать оптимальное решение и довести проект до результата. Работаю по понятному процессу — от брифинга и оценки сроков до поэтапной разработки, тестирования, запуска и дальнейшей поддержки.
          </p>
            <p className=" font-poppins text-xl w-full text-primary max-sm:text-lg mb-4">
              2 года коммерческого опыта в компании 🏢 помогли мне сформировать практический подход к работе: я думаю не только о технической реализации, но и о бизнес-результате. Уточняю задачу, предлагаю оптимальное решение и довожу проект до запуска и дальнейшего развития ✅
            </p>
             <p className=" font-poppins text-xl w-full text-primary max-sm:text-lg ">
              Работаю системно и прозрачно 📌: брифинг, оценка сроков, поэтапная разработка, тестирование, запуск и поддержка 🔧
             </p>
        </FramerWrapper>
      </div>

    </div>
  );
};

export default page;
