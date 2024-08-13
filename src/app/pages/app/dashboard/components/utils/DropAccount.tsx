import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CirclePlus } from "lucide-react";
import Avatar from "./Avatar";

export function DropAccount() {
  return (
    <Select>
      <SelectTrigger className="w-[240px]">
        <SelectValue
          placeholder="Select a Team"
          defaultValue={"current-acount"}
          className=""
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel className="text-xs text-muted-foreground">
            Teams
          </SelectLabel>
          <SelectItem value="current-acount" className="my-2">
            <div className="flex items-center gap-3">
              <Avatar size={22} />{" "}
              <span className="text-sm mr-5">Code4-hub's projects</span>
            </div>
          </SelectItem>
          <SelectItem value="create-account">
            <div className="flex items-center gap-3">
              <CirclePlus size={18} className="text-blue-500" />
              <span className="text-sm mr-5">Create Team</span>{" "}
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
