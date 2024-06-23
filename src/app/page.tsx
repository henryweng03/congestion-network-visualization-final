"use client";

import Network, { Edge, Node } from "@/components/Network";
import Card from "@/components/Card";
import VariableControlPanel from "@/components/VariableControlPanel";
import StatCard from "@/components/StatCard";
import Image from "next/image";

export default function Home() {
  // @Mike: This is dummy data that should be fetched from the server
  const edgeValues = {
    "eSource1-4": 0.8,
    "eSource1-10": 0.2,
    "eSource2-1": 0.5,
    "eSource2-2": 0.6,
    "eSource2-3": 0.5,
    "eSource3-3": 0.3,
    "eSource3-6": 0.7,
    "eSource4-12": 0.4,
    "eSource4-14": 0.9,
    "eSource4-15": 1,
    "e1-2": 0.1,
    "e2-3": 0.3,
    "e1-4": 0.4,
    "e2-5": 0.4,
    "e3-6": 0.25,
    "e4-5": 0.2,
    "e5-6": 0.6,
    "e4-7": 0.7,
    "e5-8": 0.8,
    "e6-9": 0.9,
    "e7-8": 1,
    "e8-9": 0.3,
    "e7-10": 0.1,
    "e8-11": 0.1,
    "e9-12": 0.6,
    "e10-11": 0.48,
    "e11-12": 0.35,
    "e10-13": 0.2,
    "e11-14": 0.3,
    "e12-15": 0.5,
    "e13-14": 0.7,
    "e14-15": 0.9,
  };

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
      id: "eSource1-4",
      type: "uni",
      source: "source_1",
      target: "4",
      value: edgeValues["eSource1-4"],
    },
    {
      id: "eSource1-10",
      type: "uni",
      source: "source_1",
      target: "10",
      value: edgeValues["eSource1-10"],
    },
    {
      id: "eSource2-1",
      type: "uni",
      source: "source_2",
      target: "1",
      value: edgeValues["eSource2-1"],
    },
    {
      id: "eSource2-2",
      type: "uni",
      source: "source_2",
      target: "2",
      value: edgeValues["eSource2-2"],
    },
    {
      id: "eSource2-3",
      type: "uni",
      source: "source_2",
      target: "3",
      value: edgeValues["eSource2-3"],
    },
    {
      id: "eSource3-3",
      type: "uni",
      source: "source_3",
      target: "3",
      value: edgeValues["eSource3-3"],
    },
    {
      id: "eSource3-6",
      type: "uni",
      source: "source_3",
      target: "6",
      value: edgeValues["eSource3-6"],
    },
    {
      id: "eSource4-12",
      type: "uni",
      source: "source_4",
      target: "12",
      value: edgeValues["eSource4-12"],
    },
    {
      id: "eSource4-14",
      type: "uni",
      source: "source_4",
      target: "14",
      value: edgeValues["eSource4-14"],
    },
    {
      id: "eSource4-15",
      type: "uni",
      source: "source_4",
      target: "15",
      value: edgeValues["eSource4-15"],
    },
    {
      id: "e1-2",
      type: "bi",
      source: "1",
      target: "2",
      value: edgeValues["e1-2"],
    },
    {
      id: "e2-3",
      type: "bi",
      source: "2",
      target: "3",
      value: edgeValues["e2-3"],
    },
    {
      id: "e1-4",
      type: "bi",
      source: "1",
      target: "4",
      value: edgeValues["e1-4"],
    },
    {
      id: "e2-5",
      type: "bi",
      source: "2",
      target: "5",
      value: edgeValues["e2-5"],
    },
    {
      id: "e3-6",
      type: "bi",
      source: "3",
      target: "6",
      value: edgeValues["e3-6"],
    },
    {
      id: "e4-5",
      type: "bi",
      source: "4",
      target: "5",
      value: edgeValues["e4-5"],
    },
    {
      id: "e5-6",
      type: "bi",
      source: "5",
      target: "6",
      value: edgeValues["e5-6"],
    },
    {
      id: "e4-7",
      type: "bi",
      source: "4",
      target: "7",
      value: edgeValues["e4-7"],
    },
    {
      id: "e5-8",
      type: "bi",
      source: "5",
      target: "8",
      value: edgeValues["e5-8"],
    },
    {
      id: "e6-9",
      type: "bi",
      source: "6",
      target: "9",
      value: edgeValues["e6-9"],
    },
    {
      id: "e7-8",
      type: "bi",
      source: "7",
      target: "8",
      value: edgeValues["e7-8"],
    },
    {
      id: "e8-9",
      type: "bi",
      source: "8",
      target: "9",
      value: edgeValues["e8-9"],
    },
    {
      id: "e7-10",
      type: "bi",
      source: "7",
      target: "10",
      value: edgeValues["e7-10"],
    },
    {
      id: "e8-11",
      type: "bi",
      source: "8",
      target: "11",
      value: edgeValues["e8-11"],
    },
    {
      id: "e9-12",
      type: "bi",
      source: "9",
      target: "12",
      value: edgeValues["e9-12"],
    },
    {
      id: "e10-11",
      type: "bi",
      source: "10",
      target: "11",
      value: edgeValues["e10-11"],
    },
    {
      id: "e11-12",
      type: "bi",
      source: "11",
      target: "12",
      value: edgeValues["e11-12"],
    },
    {
      id: "e10-13",
      type: "bi",
      source: "10",
      target: "13",
      value: edgeValues["e10-13"],
    },
    {
      id: "e11-14",
      type: "bi",
      source: "11",
      target: "14",
      value: edgeValues["e11-14"],
    },
    {
      id: "e12-15",
      type: "bi",
      source: "12",
      target: "15",
      value: edgeValues["e12-15"],
    },
    {
      id: "e13-14",
      type: "bi",
      source: "13",
      target: "14",
      value: edgeValues["e13-14"],
    },
    {
      id: "e14-15",
      type: "bi",
      source: "14",
      target: "15",
      value: edgeValues["e14-15"],
    },
  ];

  return (
    <main className="flex min-h-screen flex-col justify-center p-12 pt-6 bg-slate-100">
      <div className="mx-auto">
        <Image
          src="/GSB-logo.png"
          alt="Stanford GSB Logo"
          height={200}
          width={200}
          className="mb-6"
        />
        <div className="flex space-x-8">
          <div>
            <VariableControlPanel />
          </div>
          <div className="shrink-0">
            <Card className="p-5 pt-8">
              <h1 className="text-3xl tracking-tight font-medium text-center mb-4">
                NYC Traffic Visualization
              </h1>
              <div className="h-[35rem]">
                <Network nodes={nodes} edges={edges} />
              </div>
            </Card>
          </div>
          <div className="space-y-8">
            <StatCard header="984 million" text="Annual hrs saved vs no toll" />
            <StatCard header="$33.4m" text="Annual toll revenue" />
            <StatCard header="$15.7m" text="Payment to taxicabs" />
          </div>
        </div>
      </div>
    </main>
  );
}
