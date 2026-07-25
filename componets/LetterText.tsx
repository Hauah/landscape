"use client";

import Image from "next/image";

interface LetterTextProps {
  text: string;
  className?: string;
  letterClassName?: string;
  width?: number;
  height?: number;
}

export default function LetterText({
  text,
  className = "",
  letterClassName = "",
  width = 40,
  height = 40,
}: LetterTextProps) {
  return (
    <div className={`flex flex-wrap items-center ${className}`}>
      {text.toLowerCase().split("").map((char, index) => {
        // Handle spaces
        if (char === " ") {
          return <div key={index} style={{ width: width / 2 }} />;
        }

        // Ignore unsupported characters
        if (!/[a-z0-9]/.test(char)) return null;

        return (
          <Image
            key={index}
            src={`/letters/${char}.png`}
            alt={char}
            width={width}
            height={height}
            draggable={false}
            className={letterClassName}
          />
        );
      })}
    </div>
  );
}