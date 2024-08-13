import { Button } from "@/components/ui/button";
import { BsStars } from "react-icons/bs";

import Google from "@/assets/Google.svg";
import Microsoft from "@/assets/Microsoft.svg";
import Github from "@/assets/GitHub.svg";
import Uber from "@/assets/Uber.svg";
import Notion from "@/assets/Notion.svg";

export const Hero = () => {
  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center h-[70vh]">
        <h1 className="font-extrabold lg:text-7x md:text-6xl text-5xl max-w-4xl text-center mb-8">
          Generate Brilliant Ideas with{" "}
          <span className="pacifico-regular gradient-text ">GenioMind</span>
        </h1>
        <p className="max-w-lg text-center mb-4 text-muted-foreground">
          We help turn your ideas into reality using powerful AI insights and
          guidance.
        </p>

        <div className="my-8 border md:w-[500px] mx-5 h-[50px] flex items-center justify-between p-2 rounded-[20px] pl-5">
          <input
            placeholder="Enter your SaaS idea here..."
            className="bg-transparent flex-1 outline-none text-sm"
          />
          <Button className="flex items-center gap-2 py-5 rounded-[20px]">
            <p>Generate</p>
            <BsStars />
          </Button>
        </div>
      </div>

      <div className="rounded-xl ">
        <img
          src="https://www.notion.so/front-static/pages/product/super-duper/notion-hero-v3.png"
          className="rounded-xl w-full lg:max-w-[1200px] border shadow-lg m-auto"
        />
      </div>
      <div className="my-40">
        <div className="flex items-center md:gap-10  gap-5 flex-wrap justify-between">
          <img src={Google} alt="google logo" className="grayscale size-30" />
          <img
            src={Microsoft}
            alt="microsoft logo"
            className="grayscale size-30"
          />
          <img src={Github} alt="github logo" className="grayscale size-30" />
          <img src={Uber} alt="uber logo" className="text-white size-39" />
          <img src={Notion} alt="notion logo" className="grayscale size-30" />
        </div>
      </div>
    </div>
  );
};
