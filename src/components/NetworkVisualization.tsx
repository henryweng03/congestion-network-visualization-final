import React from "react";
import ReactFlow from "reactflow";
import CityNode from "./CityNode";
import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "node1",
    type: "cityNode",
    draggable: false,
    selectable: false,
    position: { x: 0, y: 0 },
  },
  {
    id: "node2",
    type: "cityNode",
    draggable: false,
    selectable: false,
    position: { x: 0, y: 100 },
  },
];
const initialEdges = [{ id: "e1-2", source: "node1", target: "node2" }];

const nodeTypes = {
  cityNode: CityNode,
};

const edgeOptions = {
  animated: true,
  style: {
    stroke: "white",
  },
};

const proOptions = { hideAttribution: true };

export default function NetworkVisualization() {
  return (
    <div className="relative w-96 h-96 pointer-events-none select-none cursor-default">
      <div className="bg-transparent w-96 h-96 absolute z-50"></div>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        defaultEdgeOptions={edgeOptions}
        proOptions={proOptions}
        nodeTypes={nodeTypes}
        style={{
          backgroundColor: "#D3D2E5",
        }}
      />
    </div>
  );
}
