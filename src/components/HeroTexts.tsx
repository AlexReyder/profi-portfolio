import TextRotator from "./TextRotator";
import { portfolioConfig } from "@/config/portfolio.config";

const HeroTexts = () => {
  return (
    <>
      <h3 className="font-poppins text-2xl max-sm:text-xl">Меня зовут</h3>
      <h1 className="font-rubik text-8xl name_underline text-primary max-sm:text-6xl ">
       Александр.
      </h1>
      <TextRotator />
    </>
  );
};
export default HeroTexts;
