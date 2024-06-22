"use client";

import NetworkVisualization from "@/components/NetworkVisualization";
import SliderWithInput from "@/components/SliderWithInput";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import Card from "@/components/Card";
import VariableControlPanel from "@/components/VariableControlPanel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className="flex">
        <div className="border border-black p-6">
          <VariableControlPanel />
        </div>
        <div className="border border-black">
          <h1 className="font-medium text-3xl">Network Visualization</h1>
        </div>
        <div className="border border-black">Numbers</div>
      </div>

      <Button size="lg">Hello</Button>
      {/* <NetworkVisualization /> */}
    </main>
  );
}
