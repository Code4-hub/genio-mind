import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Overview } from "../tabs/overview/Overview";

export function TabsLinks() {
  return (
    <Tabs defaultValue="overview" className="w-full px-5 py-5">
      <TabsList className="bg-transparent border-b-2 flex  items-center gap-7 justify-start rounded-none bg-transparent">
        <TabsTrigger
          value="overview"
          className="pl-0 pb-2 aria-selected:border-b-2 aria-selected:border-black aria-selected:dark:border-white rounded-none text-center w-auto px-0 text-[13px]"
        >
          Overview
        </TabsTrigger>
        <TabsTrigger
          value="activity"
          className="pl-0 pb-2 aria-selected:border-b-2 aria-selected:border-black aria-selected:dark:border-white rounded-none text-center w-auto px-0 text-[13px]"
        >
          Activity
        </TabsTrigger>
        <TabsTrigger
          value="usage"
          className="pl-0 pb-2 aria-selected:border-b-2 aria-selected:border-black aria-selected:dark:border-white rounded-none text-center w-auto px-0 text-[13px]"
        >
          Usage
        </TabsTrigger>
        <TabsTrigger
          value="ai"
          className="pl-0 pb-2 aria-selected:border-b-2 aria-selected:border-black aria-selected:dark:border-white rounded-none text-center w-auto px-0 text-[13px]"
        >
          AI
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="w-full h-screen">
        <Overview />
      </TabsContent>
      <TabsContent value="activity">
        <h1>Hello from activity</h1>
      </TabsContent>
      <TabsContent value="usage">
        <h1>Hello from usage</h1>
      </TabsContent>
      <TabsContent value="ai">
        <h1>Hello from ai</h1>
      </TabsContent>
    </Tabs>
  );
}
