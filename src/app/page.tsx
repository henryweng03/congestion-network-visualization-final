"use client";

import NetworkVisualization from "@/components/NetworkVisualization";
import SliderWithInput from "@/components/SliderWithInput";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import Card from "@/components/Card";
import VariableControlPanel from "@/components/VariableControlPanel";
import StatCard from "@/components/StatCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className="flex space-x-6">
        <div>
          <VariableControlPanel />
        </div>
        <div>
          <Card className="p-8 shadow-sm max-w-[18rem]">
            <h1 className="text-4xl font-medium mb-2">984 million</h1>
            <p className="text-slate-800 leading-5">
              Annual hrs saved vs no toll
            </p>
          </Card>{" "}
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
