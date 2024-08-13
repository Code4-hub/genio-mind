import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectView } from "./ProjectView";

export const Overview = () => {
  return (
    <div className="mt-10 container">
      <div className="flex justify-end">
        <Button className="gap-2">
          New Project
          <Plus size={16} />
        </Button>
      </div>

      <ProjectView />
      <ProjectView />
      <ProjectView />
      <ProjectView />
    </div>
  );
};
