import { Rabbit, Settings, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

const labels = [
  "feature",
  "bug",
  "enhancement",
  "documentation",
  "design",
  "question",
  "maintenance",
];
export const ProjectView = () => {
  const [label, setLabel] = useState("feature");
  const [open, setOpen] = useState(false);

  return (
    <div className="dark:bg-[#0a0a0a] shadow-md dark:shadow-none my-5 p-4 border rounded-lg flex items-center gap-5 cursor-pointer justify-between">
      <div className="flex items-center gap-5">
        <Rabbit size={25} />
        <div className="flex flex-col ">
          <div className="text-sm">verceli-next</div>
          <p className="text-xs text-muted-foreground truncate ">
            This is a Next.js project created with Vercel CLI.
          </p>
        </div>
      </div>

      <div>
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <DotsHorizontalIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            <DropdownMenuGroup>
              <DropdownMenuItem className="justify-between">
                Manage
                <Settings size={16} />
              </DropdownMenuItem>

              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600 flex justify-between">
                Delete
                <Trash size={16} />
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
