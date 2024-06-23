import React, { useMemo } from "react";

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
  type: "uni" | "bi";
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
  const EDGE_SPACING = 6;
  const ARROW_SIZE = 5;
  const DASH_LENGTH = 6;
  const GAP_LENGTH = 4;
  const VIEWBOX_BUFFER = 10; // New constant for viewBox buffer
  const COLOR_STOP_0 = { r: 220, g: 38, b: 38 }; // Red
  const COLOR_STOP_05 = { r: 250, g: 204, b: 21 }; // Yellow
  const COLOR_STOP_1 = { r: 16, g: 185, b: 149 }; // Green

  // Helper function to interpolate between two colors
  const interpolateColor = (
    color1: typeof COLOR_STOP_0,
    color2: typeof COLOR_STOP_0,
    factor: number
  ) => {
    return {
      r: Math.round(color1.r + factor * (color2.r - color1.r)),
      g: Math.round(color1.g + factor * (color2.g - color1.g)),
      b: Math.round(color1.b + factor * (color2.b - color1.b)),
    };
  };

  const getColorForValue = (value: number) => {
    // Ensure value is between 0 and 1
    value = Math.max(0, Math.min(1, value));

    let interpolatedColor;

    if (value < 0.5) {
      // Interpolate between COLOR_STOP_0 and COLOR_STOP_05
      interpolatedColor = interpolateColor(
        COLOR_STOP_0,
        COLOR_STOP_05,
        value * 2
      );
    } else {
      // Interpolate between COLOR_STOP_05 and COLOR_STOP_1
      interpolatedColor = interpolateColor(
        COLOR_STOP_05,
        COLOR_STOP_1,
        (value - 0.5) * 2
      );
    }

    return `rgb(${interpolatedColor.r}, ${interpolatedColor.g}, ${interpolatedColor.b})`;
  };

  const { translatedNodes, viewBox } = useMemo(() => {
    // Find the bounds of the network
    const xValues = nodes.map((n) => n.position.x);
    const yValues = nodes.map((n) => n.position.y);
    const minX = Math.min(...xValues);
    const maxX = Math.max(...xValues);
    const minY = Math.min(...yValues);
    const maxY = Math.max(...yValues);

    // Calculate the center of the network
    const centerX = (minX + maxX) / 2;
    const centerY = (minY + maxY) / 2;

    // Calculate the size of the network
    const width = maxX - minX + NODE_RADIUS * 2 + VIEWBOX_BUFFER * 2;
    const height = maxY - minY + NODE_RADIUS * 2 + VIEWBOX_BUFFER * 2;

    // Calculate the translation needed to center the network
    const translateX = -centerX;
    const translateY = -centerY;

    // Apply translation to nodes
    const translatedNodes = nodes.map((node) => ({
      ...node,
      position: {
        x: node.position.x + translateX,
        y: node.position.y + translateY,
      },
    }));

    // Set the viewBox to fit the entire network with buffer
    const viewBox = `${-width / 2} ${-height / 2} ${width} ${height}`;

    return { translatedNodes, viewBox };
  }, [nodes]);

  const renderNode = (node: Node) => {
    const { id, type, position } = node;
    return (
      <circle
        key={id}
        cx={position.x}
        cy={position.y}
        r={NODE_RADIUS}
        className={`${
          type === "solid"
            ? "fill-slate-400"
            : "fill-slate-100 stroke-slate-400"
        } stroke-2`}
      />
    );
  };

  const renderEdge = (edge: Edge) => {
    const FLOW_SPEED = edge.value * 100; // pixels per second
    const source = translatedNodes.find((n) => n.id === edge.source);
    const target = translatedNodes.find((n) => n.id === edge.target);

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

    if (edge.type === "uni") {
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
            source,
            target,
            `${edge.id}-backward`,
            EDGE_SPACING / 2,
            true
          )}
        </>
      );
    }
  };

  return (
    <svg
      className="w-full h-full"
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid meet"
    >
      <g>
        {edges.map(renderEdge)}
        {translatedNodes.map(renderNode)}
      </g>
    </svg>
  );
};

export default Network;
