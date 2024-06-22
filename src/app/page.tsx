"use client";

import NetworkVisualization from "@/components/NetworkVisualization";
import { SliderWithInput } from "@/components/SliderWithInput";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-amber-50">
      <div className="flex">
        <div className="border border-black">
          <SliderWithInput defaultValue={33} min={0} max={100} />
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
