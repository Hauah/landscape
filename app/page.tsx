"use client";

import Book from "@/componets/Bokk";
import DragPlane from "@/componets/DragPlane";
import HowerImage from "@/componets/HowerImage";
import Scene from "@/componets/Scene";
import { Section } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Native lock is best-effort; browsers may require fullscreen/PWA mode.
    try {
      screen.orientation?.lock?.("landscape").catch(() => {});
    } catch {
      // CSS rotation below remains the fallback.
    }
    return () => {
      try {
        screen.orientation?.unlock?.();
      } catch {
        // Ignore unsupported orientation APIs.
      }
    };
  }, []);

  return (
    <main className="landscape-app flex overflow-hidden flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Book />
      {/* <DragPlane /> */}
      {/* <Scene/> */}
      {/* <HowerImage/> */}
    </main>
  );
}
