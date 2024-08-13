import React from "react";
import {
  Rabbit,
  Bell,
  Settings,
  Cloud,
  Shield,
  Download,
  BellDot,
} from "lucide-react";
import { DropAccount } from "./DropAccount";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ProfileMenu } from "./ProfileMenu";

function PoopverNotifications() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size={"icon"}
          className="rounded-full text-muted-foreground transition-all duration-200 ease-in-out hover:dark:text-white hovr:text-black lg:flex hidden"
        >
          {" "}
          <BellDot size={18} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[320px] p-0 mt-2 mr-5">
        <div>
          <div className="p-2 flex items-center justify-between">
            <p className="text-sm mb-4 text-muted-foreground">Notifications</p>
            <Button variant={"ghost"} size={"icon"}>
              <Settings size={18} />
            </Button>
          </div>
          <Alert className="rounded-none text-green-500">
            <Cloud className="h-4 w-4" />
            <AlertTitle className="text-md">Service Deployed!</AlertTitle>
            <AlertDescription className="text-xs text-muted-foreground">
              Your new instance is up and running smoothly.
            </AlertDescription>
          </Alert>

          <Alert className="rounded-none">
            <Shield className="h-4 w-4" />
            <AlertTitle className="text-md text-yellow-500">
              Security Update
            </AlertTitle>
            <AlertDescription className="text-xs text-muted-foreground">
              We've patched a potential vulnerability. Please review the update
              details.
            </AlertDescription>
          </Alert>

          <Alert className="rounded-none">
            <Download className="h-4 w-4" />
            <AlertTitle className="text-md text-blue-500">
              Backup Complete
            </AlertTitle>
            <AlertDescription className="text-xs text-muted-foreground">
              Your latest backup was successfully completed.
            </AlertDescription>
          </Alert>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export const NavbarDashBoard = () => {
  return (
    <div className="flex items-center px-5 pt-5 pb-3 justify-between">
      <div className="flex items-center gap-5">
        <h1 className="text-2xl font-bold pacifico-regular">GenioMind</h1>
      </div>

      <div className="flex items-center gap-5">
        <Link
          to="/"
          className="text-sm text-muted-foreground border px-5 py-2 rounded-md lg:flex hidden"
        >
          Feedback
        </Link>
        <Link to="/" className="text-sm text-muted-foreground lg:flex hidden">
          Help
        </Link>

        <PoopverNotifications />
        <ProfileMenu />
      </div>
    </div>
  );
};
