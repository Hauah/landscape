"use client";

import { useRef } from "react";
import Draggable from "react-draggable";

interface Props {
  children: React.ReactNode;
  x?: number;
  y?: number;
}

export default function DraggableItem({
  children,
  x = 0,
  y = 0
 
}: Props) {
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <Draggable
      nodeRef={nodeRef}
      bounds="parent"
      defaultPosition={{ x, y }}
    >
      <div
        ref={nodeRef}
        className="absolute bg-amber-300 cursor-move"
        // style={{
        //   width,
        //   height,
        // }}

          style={{
          width: "fit-content",
          height: "fit-content",
        }}
      >
        {children}
      </div>
    </Draggable>
  );
}