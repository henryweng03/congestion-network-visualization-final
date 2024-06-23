"use client";

import NetworkVisualization, {
  Edge,
  Node,
} from "@/components/NetworkVisualization";
import SliderWithInput from "@/components/SliderWithInput";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import Card from "@/components/Card";
import VariableControlPanel from "@/components/VariableControlPanel";
import StatCard from "@/components/StatCard";

export default function Home() {
  const nodes: Node[] = [
    {
      id: "1",
      type: "solid",
      position: { x: 10, y: 10 },
    },
    {
      id: "2",
      type: "outline",
      position: { x: 10, y: 100 },
    },
    {
      id: "3",
      type: "outline",
      position: { x: 100, y: 100 },
    },
    {
      id: "4",
      type: "outline",
      position: { x: 100, y: 10 },
    },
  ];

  const edges: Edge[] = [
    {
      id: "e1-2",
      type: "unidirectional",
      source: "1",
      target: "2",
      value: 0,
    },
    {
      id: "e2-3",
      type: "bidirectional",
      source: "2",
      target: "3",
      value: 1,
    },
    {
      id: "e3-4",
      type: "unidirectional",
      source: "3",
      target: "4",
      value: 0.2,
    },
    {
      id: "e4-2",
      type: "bidirectional",
      source: "4",
      target: "2",
      value: 0.5,
    },
    {
      id: "e4-1",
      type: "bidirectional",
      source: "4",
      target: "1",
      value: 0.5,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className="flex space-x-6">
        <div>
          <VariableControlPanel />
        </div>
        <div>
          <Card>
            <NetworkVisualization nodes={nodes} edges={edges} />
          </Card>
        </div>
        <div className="space-y-6">
          <StatCard header="984 million" text="Annual hrs saved vs no toll" />
          <StatCard header="$33.4m" text="Annual toll revenue" />
          <StatCard header="$15.7m" text="Payment to taxicabs" />
        </div>
      </div>
    </main>
  );
}
