"use client";

import { useGLTF } from "@react-three/drei";

export default function Model() {
  const { scene } = useGLTF("/models/mac.glb");

  return (
    <primitive
      object={scene}
      scale={0.8}
      position={[0, 0, 0]}
    />
  );
}


