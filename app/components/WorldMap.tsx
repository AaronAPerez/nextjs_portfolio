'use client';

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import DottedMap from "dotted-map"; 

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

export function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const { theme } = useTheme();

  // Create map instance
  const map = new DottedMap({
    height: 100,
    grid: "diagonal",
    tileWidth: 8,
    tileHeight: 8,
    spacing: 1
  });

  const svgMap = map.getSVG({
    radius: 0.22,
    color: theme === "dark" ? "#FFFFFF40" : "#00000040",
    shape: "circle",
    backgroundColor: "transparent",
  });

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg relative font-sans">
      {/* Map Base Layer */}
      <div className="absolute inset-0">
        <Image
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
          className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
          alt="world map"
          width={800}
          height={400}
          priority
        />
      </div>

      {/* Connections Layer */}
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`connection-${i}`}>
              {/* Connection Line */}
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: i * 0.5 }}
              />

              {/* Start Point */}
              <motion.circle
                cx={startPoint.x}
                cy={startPoint.y}
                r="4"
                fill={lineColor}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.5 }}
              >
                <animate
                  attributeName="r"
                  values="4;6;4"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </motion.circle>

              {/* End Point */}
              <motion.circle
                cx={endPoint.x}
                cy={endPoint.y}
                r="4"
                fill={lineColor}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: (i * 0.5) + 1 }}
              >
                <animate
                  attributeName="r"
                  values="4;6;4"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </motion.circle>
            </g>
          );
        })}
      </svg>
    </div>
  );
}