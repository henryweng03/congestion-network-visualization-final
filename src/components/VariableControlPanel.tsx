import { cn } from "@/lib/utils";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import SliderWithInput from "./SliderWithInput";
import Card from "./Card";
export default function VariableControlPanel() {
  return (
    <Tabs defaultValue="account" className="w-[400px] shadow-sm bg-white">
      <TabsList className="grid w-full grid-cols-2 bg-whiterounded-lg rounded-b-none border border-b-0 p-4 -mb-8">
        <TabsTrigger
          value="current-proposal"
          className="py-2.5 rounded-md border border-r-0 rounded-r-none data-[state=inactive]:bg-slate-200/60 data-[state=inactive]:shadow-inner"
        >
          Current proposal
        </TabsTrigger>
        <TabsTrigger
          value="new-proposal"
          className=" py-2.5 rounded-md border  border-l-0 rounded-l-none data-[state=inactive]:bg-slate-200/60 data-[state=inactive]:shadow-inner"
        >
          New proposal
        </TabsTrigger>
      </TabsList>
      <TabsContent value="current-proposal">
        <Card className="space-y-16 rounded-t-none border-t-0">
          <SliderWithInput
            defaultValue={33}
            min={0}
            max={100}
            labelName="Taxi toll ($ per entry)"
          />
          <SliderWithInput
            defaultValue={33}
            min={0}
            max={100}
            labelName="Commuter toll ($ per entry)"
          />
          <SliderWithInput
            defaultValue={33}
            min={0}
            max={100}
            labelName="% revenue rebated to taxi"
          />
        </Card>
      </TabsContent>
      <TabsContent value="new-proposal">
        <Card className="space-y-16 rounded-t-none border-t-0">
          <SliderWithInput
            defaultValue={33}
            min={0}
            max={100}
            labelName="Taxi toll ($ per mile)"
          />
          <SliderWithInput
            defaultValue={33}
            min={0}
            max={100}
            labelName="Commuter toll ($ per entry)"
          />
          <SliderWithInput
            defaultValue={33}
            min={0}
            max={100}
            labelName="% revenue rebated to taxi"
          />
        </Card>
      </TabsContent>
    </Tabs>
  );
}
