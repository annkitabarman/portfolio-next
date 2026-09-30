"use client";

import { Canvas } from "@react-three/fiber";
import Robot from "./Robot";

export default function RobotScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{
          position: [0, 0.8, 9],
          fov: 35,
        }}
      >
        <ambientLight intensity={1.5} />

        <directionalLight position={[3, 5, 5]} intensity={3} />

        <pointLight position={[-3, 2, 3]} color="#b98cff" intensity={6} />

        <pointLight position={[3, 1, 2]} color="#ff75c3" intensity={4} />

        <Robot />
      </Canvas>
    </div>
  );
}
