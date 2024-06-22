"use client";

import NetworkVisualization from "@/components/NetworkVisualization";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-amber-50">
      <Button size="lg">Hello</Button>
      <Slider defaultValue={[33]} max={100} step={1} />
      <NetworkVisualization />
    </main>
  );
}
