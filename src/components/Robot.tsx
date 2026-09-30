"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Robot() {
  const { scene } = useGLTF("/robot.glb");

  const robotRef = useRef<THREE.Group>(null);

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;

      mouse.current.y = (event.clientY / window.innerHeight) * 2 - 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame(() => {
    if (!robotRef.current) return;

    const targetY = mouse.current.x * 0.25;
    const targetX = -mouse.current.y * 0.12;

    robotRef.current.rotation.y = THREE.MathUtils.lerp(
      robotRef.current.rotation.y,
      targetY,
      0.06,
    );

    robotRef.current.rotation.x = THREE.MathUtils.lerp(
      robotRef.current.rotation.x,
      targetX,
      0.06,
    );
  });

  return (
    <group
      ref={robotRef}
      scale={4}
      rotation={[0, -0.25, 0]}
      position={[2, -1.6, 0]}
    >
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/robot.glb");
