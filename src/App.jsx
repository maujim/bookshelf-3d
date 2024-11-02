import React, { useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Box from './Box.jsx';
import { Canvas, useFrame } from '@react-three/fiber';

import * as THREE from 'three';

function App() {
  const [count, setCount] = useState(0);


  const scaling = 7;

  const x = 3 * scaling;
  const y = 3 * scaling;

  const spacing = 1.5 / scaling;
  const boxSize = 1 / scaling;

  const isEven = k => k % 2 === 0;
  const top = k => isEven(k) ? k / 2 :  (k - 1) / 2;
  const bottom = k => -1 * top(k);

  const grid = [];
  for (let xx = bottom(x); xx <= top(x); xx++) {
    for (let yy = bottom(y); yy <= top(y); yy++) {
      grid.push([xx * spacing , yy * spacing , 0]);
    }
  }

  console.log(grid);
  return (
    <>
      <Canvas style={{ height: window.innerHeight, width: window.innerWidth }}>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

        {grid.map(pos => (
          <Box key={pos} position={pos} boxSize={boxSize} />
        ))}
      </Canvas>
    </>
  );
}

export default App;
