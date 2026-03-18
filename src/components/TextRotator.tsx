import React from "react";
import { portfolioConfig } from "@/config/portfolio.config";

function TextRotator() {
  return (
    <div className="py-4  rounded-md flex flex-col justify-center items-center overflow-hidden">
      <div className="font-poppins text-base sm:text-2xl [text-wrap:balance] text-gray-700">
        Я являюсь {portfolioConfig.title} & <span className="text-[#2f7df4] font-rubik text-lg sm:text-3xl leading-tight ">Фрилансером</span>
        
      </div>
    </div>
  );
}

export default TextRotator;
