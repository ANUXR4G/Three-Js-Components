"use client";

import React, { useRef, useReducer, useMemo, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, MeshTransmissionMaterial, Environment, Lightformer } from '@react-three/drei';
import { CuboidCollider, BallCollider, Physics, RigidBody } from '@react-three/rapier';
import { EffectComposer, N8AO } from '@react-three/postprocessing';
import { easing } from 'maath';

const accents = [
  'hsl(222, 100%, 50%)',
  'hsl(78, 100%, 55%)',
  'hsl(355, 100%, 55%)',
  'hsl(270, 100%, 50%)',
  'hsl(51, 100%, 60%)'
];

// Create static connectors (2 black and 2 white) and dynamic ones (colored)
const createConnectors = (accent = 0) => {
  const staticConnectors = [
    { color: '#444', roughness: 0.1, isStatic: true },
    { color: '#444', roughness: 0.75, isStatic: true },
    { color: 'white', roughness: 0.1, isStatic: true },
    { color: 'white', roughness: 0.75, isStatic: true }
  ];

  const dynamicConnectors = [
    { color: accents[accent], roughness: 0.1, isStatic: false, accent: true },
    { color: accents[accent], roughness: 0.75, isStatic: false, accent: true },
    { color: accents[accent], roughness: 0.1, isStatic: false },
    { color: accents[accent], roughness: 0.75, isStatic: false },
    { color: accents[accent], roughness: 0.1, isStatic: false },
    { color: accents[accent], roughness: 0.2, isStatic: false },
    { color: accents[accent], roughness: 0.5, isStatic: false },
    { color: accents[accent], roughness: 0.3, isStatic: false },
    { color: accents[accent], roughness: 0.9, isStatic: false },
    { color: accents[accent], roughness: 0.4, isStatic: false }
  ];

  return [...staticConnectors, ...dynamicConnectors];
};

export const PipeConnectorsScene = () => (
  <div className="lg:px-18 lg:h-[40rem] p-8">
    <div className="nav">
      <h1 className="label" />
      <div />
      <span className="caption" />
      <div />
    </div>
    <Scene style={{ borderRadius: 20 }} />
  </div>
);

function Scene(props: React.HTMLAttributes<HTMLDivElement>) { // Fixed type here
  const [accent, click] = useReducer((state) => ++state % accents.length, 0);
  const [lastClicked, setLastClicked] = useState<number | null>(null);
  const connectors = useMemo(() => createConnectors(accent), [accent]);

  const handleClick = (event: React.MouseEvent) => {
    click();
    setLastClicked(Date.now());
  };

  return (
    <Canvas onClick={handleClick} shadows dpr={[1, 1.5]} gl={{ antialias: false }} camera={{ position: [0, 0, 15], fov: 17.5, near: 1, far: 30 }} {...props}>
      <color attach="background" args={['#141622']} />
      <ambientLight intensity={0.4} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <Physics gravity={[0, 0, 0]}>
        <Pointer />
        {connectors.map((props, i) => <Connector key={i} {...props} lastClick={lastClicked} />)}
        <Connector position={[10, 10, 5]} lastClick={lastClicked} isStatic={false}>
          <Model color={accents[accent]}>
            <MeshTransmissionMaterial clearcoat={1} thickness={0.1} anisotropicBlur={0.1} chromaticAberration={0.1} samples={8} resolution={512} />
          </Model>
        </Connector>
      </Physics>
      <EffectComposer disableNormalPass multisampling={8}>
        <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
      </EffectComposer>
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer form="circle" intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} />
        </group>
      </Environment>
    </Canvas>
  );
}

type ConnectorProps = {
  position?: [number, number, number];
  children?: React.ReactNode;
  vec?: THREE.Vector3;
  scale?: number;
  r?: typeof THREE.MathUtils.randFloatSpread;
  accent?: boolean;
  color?: string;
  lastClick?: number | null;
  isStatic?: boolean;
  roughness?: number;
};

function Connector({
  position,
  children,
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  accent,
  color,
  lastClick,
  isStatic = false,
  roughness = 0,
  ...props
}: ConnectorProps) {
  const api = useRef();
  const pos = useMemo(() => position || [r(10), r(10), r(10)], []);

  const impulseVec = useMemo(() => new THREE.Vector3(r(5), r(5), r(5)).normalize().multiplyScalar(15), []);

  useFrame((state, delta) => {
    delta = Math.min(0.1, delta);
    if (api.current) {
      api.current.applyImpulse(vec.copy(api.current.translation()).negate().multiplyScalar(0.2));
    }
  });

  const lastClickRef = useRef(null);
  useFrame(() => {
    if (lastClick && lastClick !== lastClickRef.current && api.current) {
      api.current.applyImpulse(impulseVec);
      api.current.applyTorqueImpulse(new THREE.Vector3(r(3), r(3), r(3)).multiplyScalar(7));
      lastClickRef.current = lastClick;
    }
  });

  return (
    <RigidBody
      linearDamping={4}
      angularDamping={1}
      friction={0.1}
      position={pos}
      ref={api}
      colliders={false}
    >
      <CuboidCollider args={[0.38, 1.27, 0.38]} />
      <CuboidCollider args={[1.27, 0.38, 0.38]} />
      <CuboidCollider args={[0.38, 0.38, 1.27]} />
      {children ? children : <Model color={color} roughness={roughness} isStatic={isStatic} {...props} />}
      {accent && <pointLight intensity={4} distance={2.5} color={color} />}
    </RigidBody>
  );
}

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef();
  useFrame(({ mouse, viewport }) => {
    if (ref.current) {
      ref.current.setNextKinematicTranslation(vec.set((mouse.x * viewport.width) / 2, (mouse.y * viewport.height) / 2, 0));
    }
  });

  return (
    <RigidBody position={[0, 0, 0]} type="kinematicPosition" colliders={false} ref={ref}>
      <BallCollider args={[1]} />
    </RigidBody>
  );
}

type ModelProps = {
  children?: React.ReactNode;
  color?: string;
  roughness?: number;
  isStatic?: boolean;
};

function Model({ children, color = 'white', roughness = 0, isStatic = false, ...props }: ModelProps) {
  const ref = useRef();
  const { nodes, materials } = useGLTF('/c-transformed.glb');

  useFrame((state, delta) => {
    if (ref.current && !isStatic) {
      easing.dampC(ref.current.material.color, color, 0.2, delta);
    }
  });

  return (
    <mesh ref={ref} castShadow receiveShadow scale={10} geometry={nodes.connector.geometry}>
      <meshStandardMaterial metalness={0.2} roughness={roughness} color={color} />
      {children}
    </mesh>
  );
}
