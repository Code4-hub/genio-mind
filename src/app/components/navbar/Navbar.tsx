import React from "react";
import { Rabbit } from "lucide-react";
import { Link } from "react-router-dom";
import { MobileBar } from "./MobileBar";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../utils/mode-togle";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-5 container">
      <div className="flex gap-2 items-center">
        <h1 className="text-2xl font-bold pacifico-regular">GenioMind</h1>
      </div>

      <div className="hidden md:flex items-center ">
        <Link
          to="/pricing"
          className="px-4 text-md text-muted-foreground transition-all duration-200 ease-in-out hover:dark:text-white"
        >
          Pricing
        </Link>

        <Link
          to="/about"
          className="px-4 text-md text-muted-foreground transition-all duration-200 ease-in-out hover:dark:text-white"
        >
          About
        </Link>

        <Link
          to="/blog"
          className="px-4 text-md text-muted-foreground transition-all duration-200 ease-in-out hover:dark:text-white"
        >
          Blog
        </Link>
        <Link
          to="/contact"
          className="px-4 text-md text-muted-foreground transition-all duration-200 ease-in-out hover:dark:text-white"
        >
          Contact
        </Link>
      </div>

      <div className="hidden md:flex  items-center gap-2">
        <ModeToggle />
        <Button
          onClick={() => window.location.assign("/login")}
          className="text-md  rounded-xl text-sm"
          variant={"ghost"}
        >
          Log In
        </Button>
        <Button
          onClick={() => window.location.assign("/signup")}
          className="text-md  rounded-xl text-sm"
        >
          Sign Up
        </Button>
      </div>
      <MobileBar />
    </nav>
  );
};
