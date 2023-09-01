import React, { Suspense, useRef, useEffect, useLayoutEffect } from "react";
import { Canvas } from '@react-three/fiber';
import { useGLTF, Html, useAnimations, OrbitControls, Stage } from '@react-three/drei';
import Model from './Model';

export default function App() {

  return (
      <Canvas
        gl={{ preserveDrawingBuffer: true }}
        shadows={true}
        dpr={[1, 1.5]}
        camera={{ position: [0, 20, 100], fov: 50 }}
        style={{
          backgroundColor: '#111a21',
          width: '100vw',
          height: '100vh',
        }}
      >
        <ambientLight intensity={0.25} />
        <Suspense fallback={null}>
          <Stage
            adjustCamera intensity={0.5}
          >
          <Model />
          </Stage>
        </Suspense>
        <OrbitControls />
      </Canvas>
  );
}

useGLTF.preload('https://models.readyplayer.me/64eff5301db75f90dcfd6832.glb');
