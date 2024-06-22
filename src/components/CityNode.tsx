import React, { memo } from "react";
import { Handle, useStore, Position } from "reactflow";

const CityNode = memo(({ id }: { id: string }) => {
  const label = useStore((s) => {
    const node = s.nodeInternals.get(id);

    if (!node) {
      return null;
    }

    return "";
  });

  return <div className="p-3 bg-white rounded-full">{label}</div>;
});

CityNode.displayName = "CityNode";

export default CityNode;
