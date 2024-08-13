import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { FaGoogle } from "react-icons/fa";

export const Login = () => {
  return (
    <div className="w-full h-screen flex lg:flex-row flex-col dark:bg-white bg-black font-regular">
      <div className="lg:w-[45%] lg:h-full h-[300px]  bg-[#191919] p-5 flex items-center justify-center ">
        <div className="text-center max-w-xl text-white lg:text-6xl text-5xl">
          <span className="gradient-text pacifico-regular">
            {" "}
            Log in and let's go!
          </span>
        </div>
      </div>
      <div className="lg:w-[55%] h-full bg-white lg:rounded-l-xl rounded-t-[24px] p-5 flex flex-col ">
        <div className="flex justify-end items-center gap-4">
          <p className="text-muted-foreground text-sm">
            {" "}
            Don't have an account?
          </p>
          <Button variant={"outline"} size={"sm"} className="bg-transparent text-black">
            Sign Up
          </Button>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center gap-5">
          <h1 className="text-2xl font-bold pacifico-regular text-3xl">
            GenioMind
          </h1>
          <p className=" max-w-[600px] text-center text-[24px] text-muted-foreground font-light leading-loose">
            Turn your ideas into reality with just a login!
          </p>

          <div>
            <Button className="font-regular w-[270px] py-6 text-black bg-white border border-black rounded-lg text-sm gap-5 hover:bg-black hover:text-white">
              <FaGoogle size={20} />
              <span>Log in with Google</span>
            </Button>

            <div className="my-6 text-center">OR</div>

            <Button className="font-regular w-[270px] py-6 text-white bg-black border border-black rounded-lg text-sm gap-5 hover:bg-white hover:text-black hover:border-black ">
              <span>Log in with email</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
