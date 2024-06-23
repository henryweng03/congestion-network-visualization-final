import React from "react";

interface Position {
  x: number;
  y: number;
}

export interface Node {
  id: string;
  type: "solid" | "outline";
  position: Position;
}

export interface Edge {
  id: string;
  type: "unidirectional" | "bidirectional";
  source: string;
  target: string;
  value: number;
}

interface NetworkProps {
  nodes: Node[];
  edges: Edge[];
}

const Network: React.FC<NetworkProps> = ({ nodes, edges }) => {
  const NODE_RADIUS = 7; // Increased node size
  const EDGE_SPACING = 10; // Spacing between bidirectional edges

  const getColorForValue = (value: number) => {
    const r = Math.max(0, Math.min(255, Math.round(255 * (1 - value))));
    const g = Math.max(0, Math.min(255, Math.round(255 * value)));
    return `rgb(${r}, ${g}, 0)`;
  };

  const renderNode = (node: Node) => {
    const { id, type, position } = node;
    return (
      <circle
        key={id}
        cx={position.x}
        cy={position.y}
        r={NODE_RADIUS}
        className={`${
          type === "solid" ? "fill-blue-500" : "fill-white stroke-blue-500"
        } stroke-2`}
      />
    );
  };

  const renderEdge = (edge: Edge) => {
    const source = nodes.find((n) => n.id === edge.source);
    const target = nodes.find((n) => n.id === edge.target);

    if (!source || !target) return null;

    const color = getColorForValue(edge.value);

    const angle = Math.atan2(
      target.position.y - source.position.y,
      target.position.x - source.position.x
    );
    const perpendicular = angle + Math.PI / 2;

    const renderSingleEdge = (
      start: Node,
      end: Node,
      id: string,
      offset: number = 0
    ) => {
      const startX = start.position.x + Math.cos(perpendicular) * offset;
      const startY = start.position.y + Math.sin(perpendicular) * offset;
      const endX = end.position.x + Math.cos(perpendicular) * offset;
      const endY = end.position.y + Math.sin(perpendicular) * offset;

      return (
        <g key={id}>
          <marker
            id={`arrowhead-${id}`}
            markerWidth={10}
            markerHeight={7}
            refX={8}
            refY={3.5}
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill={color} />
          </marker>
          <line
            x1={startX}
            y1={startY}
            x2={endX}
            y2={endY}
            stroke={color}
            strokeWidth={2}
            strokeDasharray="4"
            markerEnd={`url(#arrowhead-${id})`}
          />
        </g>
      );
    };

    if (edge.type === "unidirectional") {
      return renderSingleEdge(source, target, edge.id);
    } else {
      return (
        <>
          {renderSingleEdge(
            source,
            target,
            `${edge.id}-forward`,
            EDGE_SPACING / 2
          )}
          {renderSingleEdge(
            target,
            source,
            `${edge.id}-backward`,
            -EDGE_SPACING / 2
          )}
        </>
      );
    }
  };

  return (
    <svg className="w-full h-full">
      <g>
        {edges.map(renderEdge)}
        {nodes.map(renderNode)}
      </g>
    </svg>
  );
};

export default Network;
