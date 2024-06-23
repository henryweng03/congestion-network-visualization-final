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
      id: "source_1",
      type: "solid",
      position: { x: -50, y: 200 },
    },
    {
      id: "source_2",
      type: "solid",
      position: { x: 100, y: -50 },
    },
    {
      id: "source_3",
      type: "solid",
      position: { x: 250, y: 50 },
    },
    {
      id: "source_4",
      type: "solid",
      position: { x: 250, y: 450 },
    },
    {
      id: "1",
      type: "outline",
      position: { x: 0, y: 0 },
    },
    {
      id: "2",
      type: "outline",
      position: { x: 100, y: 0 },
    },
    {
      id: "3",
      type: "outline",
      position: { x: 200, y: 0 },
    },
    {
      id: "4",
      type: "outline",
      position: { x: 0, y: 100 },
    },
    {
      id: "5",
      type: "outline",
      position: { x: 100, y: 100 },
    },
    {
      id: "6",
      type: "outline",
      position: { x: 200, y: 100 },
    },
    {
      id: "7",
      type: "outline",
      position: { x: 0, y: 200 },
    },
    {
      id: "8",
      type: "outline",
      position: { x: 100, y: 200 },
    },
    {
      id: "9",
      type: "outline",
      position: { x: 200, y: 200 },
    },
    {
      id: "10",
      type: "outline",
      position: { x: 0, y: 300 },
    },
    {
      id: "11",
      type: "outline",
      position: { x: 100, y: 300 },
    },
    {
      id: "12",
      type: "outline",
      position: { x: 200, y: 300 },
    },
    {
      id: "13",
      type: "outline",
      position: { x: 0, y: 400 },
    },
    {
      id: "14",
      type: "outline",
      position: { x: 100, y: 400 },
    },
    {
      id: "15",
      type: "outline",
      position: { x: 200, y: 400 },
    },
  ];

  const edges: Edge[] = [
    {
      id: "e1-2",
      type: "bi",
      source: "1",
      target: "2",
      value: 0,
    },
    {
      id: "e2-3",
      type: "bi",
      source: "2",
      target: "3",
      value: 0.3,
    },
    {
      id: "e1-4",
      type: "bi",
      source: "1",
      target: "4",
      value: 0.4,
    },
    {
      id: "e2-5",
      type: "bi",
      source: "2",
      target: "5",
      value: 0.4,
    },
    {
      id: "e3-6",
      type: "bi",
      source: "3",
      target: "6",
      value: 0.25,
    },
    {
      id: "e4-5",
      type: "bi",
      source: "4",
      target: "5",
      value: 0.2,
    },
    {
      id: "e5-6",
      type: "bi",
      source: "5",
      target: "6",
      value: 0.6,
    },
    {
      id: "e4-7",
      type: "bi",
      source: "4",
      target: "7",
      value: 0.7,
    },
    {
      id: "e5-8",
      type: "bi",
      source: "5",
      target: "8",
      value: 0.8,
    },
    {
      id: "e6-9",
      type: "bi",
      source: "6",
      target: "9",
      value: 0.9,
    },
    {
      id: "e7-8",
      type: "bi",
      source: "7",
      target: "8",
      value: 1,
    },
    {
      id: "e8-9",
      type: "bi",
      source: "8",
      target: "9",
      value: 0.3,
    },
    {
      id: "e7-10",
      type: "bi",
      source: "7",
      target: "10",
      value: 0.1,
    },
    {
      id: "e8-11",
      type: "bi",
      source: "8",
      target: "11",
      value: 0.1,
    },
    {
      id: "e9-12",
      type: "bi",
      source: "9",
      target: "12",
      value: 0.6,
    },
    {
      id: "e10-11",
      type: "bi",
      source: "10",
      target: "11",
      value: 0.48,
    },
    {
      id: "e11-12",
      type: "bi",
      source: "11",
      target: "12",
      value: 0.35,
    },
    {
      id: "e10-13",
      type: "bi",
      source: "10",
      target: "13",
      value: 0.2,
    },
    {
      id: "e11-14",
      type: "bi",
      source: "11",
      target: "14",
      value: 0.3,
    },
    {
      id: "e12-15",
      type: "bi",
      source: "12",
      target: "15",
      value: 0.5,
    },
    {
      id: "e13-14",
      type: "bi",
      source: "13",
      target: "14",
      value: 0.7,
    },
    {
      id: "e14-15",
      type: "bi",
      source: "14",
      target: "15",
      value: 0.9,
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
