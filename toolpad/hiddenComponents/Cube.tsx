import * as React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { createComponent } from '@mui/toolpad/browser';
import {} from '@mui/toolpad-components'

function Box({ position, color }) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = React.useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = React.useState(false);
  const [clicked, click] = React.useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta;
  });
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      position={position}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color ?? 'hotpink'} />
    </mesh>
  );
}
interface CubeProps {
  positionX: number;
  positionY: number;
  positionZ: number;
  color: string;
}

function Cube({ positionX, positionY, positionZ, color }: CubeProps) {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[positionX, positionY, positionZ]} color={color} />
    </Canvas>
  );
}

export default createComponent(Cube, {
  argTypes: {
    positionX: {
      type: 'number',
      default: 0,
    },
    positionY: {
      type: 'number',
      default: 0,
    },
    positionZ: {
      type: 'number',
      default: 0,
    },

    color: {
      type: 'string',
      default: 'orange',
    },
  },
});
