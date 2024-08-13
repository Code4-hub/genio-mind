import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";

export function MobileBar() {
  return (
    <Sheet>
      <SheetTrigger asChild className="flex md:hidden">
        <Button variant="ghost" size={"sm"}>
          <Menu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>
            {" "}
            <h1 className="text-2xl font-bold pacifico-regular">ThinkUp</h1>
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 flex flex-col gap-5 mt-10">
          <Link
            to="/pricing"
            className="text-3xl text-muted-foreground transition-all duration-200 ease-in-out hover:dark:text-white hover:text-black"
          >
            Pricing
          </Link>

          <Link
            to="/about"
            className="text-3xl text-muted-foreground transition-all duration-200 ease-in-out hover:dark:text-white hover:text-black"
          >
            About
          </Link>

          <Link
            to="/blog"
            className="text-3xl text-muted-foreground transition-all duration-200 ease-in-out hover:dark:text-white hover:text-black"
          >
            Blog
          </Link>
        </div>
        <SheetFooter className="w-full">
          <SheetClose asChild>
            <Button className="w-full py-6 rounded-lg text-md" variant={'default'}>Sign In</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
