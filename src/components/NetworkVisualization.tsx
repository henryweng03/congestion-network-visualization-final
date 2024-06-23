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
  const NODE_RADIUS = 7;
  const EDGE_SPACING = 10;
  const ARROW_SIZE = 5;
  const FLOW_SPEED = 50; // pixels per second
  const DASH_LENGTH = 4;
  const GAP_LENGTH = 4;

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

    const renderSingleEdge = (
      start: Node,
      end: Node,
      id: string,
      offset: number = 0,
      reverse: boolean = false
    ) => {
      let actualStart = reverse ? end : start;
      let actualEnd = reverse ? start : end;

      const dx = actualEnd.position.x - actualStart.position.x;
      const dy = actualEnd.position.y - actualStart.position.y;
      const angle = Math.atan2(dy, dx);
      const perpendicular = angle + Math.PI / 2;

      const distance = Math.sqrt(dx * dx + dy * dy);
      const edgeLength = distance - NODE_RADIUS * 2; // Subtract radius for both nodes

      const startX =
        actualStart.position.x +
        Math.cos(angle) * NODE_RADIUS +
        Math.cos(perpendicular) * offset;
      const startY =
        actualStart.position.y +
        Math.sin(angle) * NODE_RADIUS +
        Math.sin(perpendicular) * offset;
      const endX = startX + Math.cos(angle) * edgeLength;
      const endY = startY + Math.sin(angle) * edgeLength;

      const dashArray = `${DASH_LENGTH},${GAP_LENGTH}`;
      const dashOffset = DASH_LENGTH + GAP_LENGTH;
      const animationDuration = edgeLength / FLOW_SPEED;

      return (
        <g key={id}>
          <marker
            id={`arrowhead-${id}`}
            markerWidth={ARROW_SIZE}
            markerHeight={ARROW_SIZE * 0.7}
            refX={ARROW_SIZE * 0.8}
            refY={ARROW_SIZE * 0.35}
            orient="auto"
          >
            <polygon
              points={`0 0, ${ARROW_SIZE} ${ARROW_SIZE * 0.35}, 0 ${
                ARROW_SIZE * 0.7
              }`}
              fill={color}
            />
          </marker>
          <line
            x1={startX}
            y1={startY}
            x2={endX}
            y2={endY}
            stroke={color}
            strokeWidth={2}
            strokeDasharray={dashArray}
            markerEnd={`url(#arrowhead-${id})`}
          >
            <animate
              attributeName="stroke-dashoffset"
              from={dashOffset}
              to={0}
              dur={`${animationDuration}s`}
              repeatCount="indefinite"
            />
          </line>
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
            -EDGE_SPACING / 2,
            true
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
