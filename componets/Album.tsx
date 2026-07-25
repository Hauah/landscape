"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface TrailItem {
  id: number;
  x: number;
  y: number;
  child: ReactNode;
  rotation: number;
}

interface Props {
  children: ReactNode;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function ImageTrail({
  children,
  containerRef,
}: Props) {
  const items = Array.isArray(children) ? children : [children];

  const [trail, setTrail] = useState<TrailItem[]>([]);

  const index = useRef(0);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const handleMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();

      const id = Date.now() + Math.random();

      const item: TrailItem = {
        id,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        child: items[index.current],
        rotation: (Math.random() - 0.5) * 30,
      };

      index.current = (index.current + 1) % items.length;

      setTrail((prev) => [...prev, item]);

      setTimeout(() => {
        setTrail((prev) => prev.filter((i) => i.id !== id));
      }, 600);
    };

    container.addEventListener("mousemove", handleMove);

    return () => {
      container.removeEventListener("mousemove", handleMove);
    };
  }, [containerRef, items]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <AnimatePresence>
        {trail.map((item) => (
          <motion.div
            key={item.id}
            initial={{
              opacity: 1,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="absolute"
            style={{
              left: item.x,
              top: item.y,
              rotate: item.rotation,
              transform: "translate(-50%, -50%)",
            }}
          >
            {item.child}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}