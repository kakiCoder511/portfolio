import { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const dots = [
  { id: 1, title: "Newsroom Director", x: 100, y: 120 },
  { id: 2, title: "Videographer", x: 250, y: 80 },
  { id: 3, title: "Visual Content Creator", x: 400, y: 140 },
  { id: 4, title: "Communication Officer", x: 550, y: 100 },
  { id: 5, title: "Bus Driver", x: 700, y: 150 },
  { id: 6, title: "Junior Software Engineer", x: 850, y: 90 }
];

const jitterColors = ["#D77EFF", "#7F9CFF", "#FF9AD6", "#FFD86F"];

export default function ConnectingDotsGraph() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="w-full h-[300px] md:h-[400px] relative">
      <svg viewBox="0 0 1000 300" className="w-full h-full">
        {dots.map((dot, index) => {
          const next = dots[index + 1];
          return (
            next && (
              <motion.line
                key={`line-${dot.id}-${next.id}`}
                x1={dot.x}
                y1={dot.y}
                x2={next.x}
                y2={next.y}
                stroke="#8884d8"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              />
            )
          );
        })}

        {dots.map((dot, i) => (
          <motion.circle
            key={dot.id}
            cx={dot.x}
            cy={dot.y}
            r={hoveredId === dot.id ? 10 : 8}
            fill={jitterColors[i % jitterColors.length]}
            animate={{
              x: hoveredId === dot.id ? 0 : [0, 2, -2, 0],
              y: hoveredId === dot.id ? 0 : [0, -2, 2, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            onMouseEnter={() => setHoveredId(dot.id)}
            onMouseLeave={() => setHoveredId(null)}
          />
        ))}
      </svg>

      {dots.map((dot) => (
        hoveredId === dot.id && (
          <div
            key={dot.id}
            className="absolute text-sm md:text-base text-white bg-black bg-opacity-70 px-3 py-1 rounded-md"
            style={{ top: dot.y - 40, left: dot.x - 40 }}
          >
            {dot.title}
          </div>
        )
      ))}
    </div>
  );
}
