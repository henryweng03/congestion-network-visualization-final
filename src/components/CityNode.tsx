import React, { memo } from "react";
import { Handle, useStore, Position } from "reactflow";

const CityNode = ({ id }: { id: string }) => {
  const label = useStore((s) => {
    const node = s.nodeInternals.get(id);

    if (!node) {
      return null;
    }

    return "";
  });

  return (
    <div className="p-3 bg-white rounded-full">
      <Handle type="target" position={Position.Bottom} id="t" isConnectable />
      <p> {label}</p>
      <Handle type="target" position={Position.Top} id="b" isConnectable />
    </div>
  );
};

CityNode.displayName = "CityNode";

export default CityNode;
