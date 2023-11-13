/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 AP.glb 
*/
// import { Charminar } from "./Charminar";
import React, { useEffect, useRef, useState } from "react";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { PositionalAudio } from "@react-three/drei";
import { PositionalAudioProps } from "@react-three/fiber";
import { Church } from "./StMarksChurchBangalore";
import { Kite } from "./Kite";
// import { Pongal } from "./PongalSetup";
// import { Fireworks } from "./Fireworks";
import { LordBuddha } from "./LordBuddha";
import { MOUSE } from "three";
const AP = (props) => {
  const v1 = [
    "./Photos/AP/Dance/d1.jpg",
    "./Photos/AP/Dance/d2.jpg",
    "./Photos/AP/Dance/d3.jpeg",
    "./Photos/AP/Dance/d4.jpeg",
  ];

  const v2 = [
    "./Photos/AP/festivals/f1.jpg",
    "./Photos/AP/festivals/f2.jpeg",
    "./Photos/AP/festivals/f3.jpeg",
    "./Photos/AP/festivals/f4.jpeg",
  ];

  const v3 = [
    "./Photos/AP/Food/f1.jpeg",
    "./Photos/AP/Food/f2.jpg",
    "./Photos/AP/Food/f3.jpg",
    "./Photos/AP/Food/f4.webp",
  ];

  const v4 = [
    "./Photos/AP/Temple/t1.jpeg",
    "./Photos/AP/Temple/t2.avif",
    "./Photos/AP/Temple/t3.png",
    "./Photos/AP/Temple/t4.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % v1.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const texture = useTexture(v1[currentIndex]);
  const texture1 = useTexture(v2[currentIndex]);
  const texture2 = useTexture(v3[currentIndex]);
  const texture3 = useTexture(v4[currentIndex]);

  const { nodes, materials } = useGLTF("/AP.glb");
  console.log("dummy");
  return (
    <>
      <OrbitControls
        enablePan={true}
        enableRotate={true}
        autoRotate={true}
        panSpeed={0.5}
        autoRotateSpeed={1}
        maxDistance={130}
        mouseButtons={{
          LEFT: MOUSE.LEFT,
          UP: MOUSE.UP,
          RIGHT: MOUSE.RIGHT,
          BOTTOM: MOUSE.BOTTOM,
        }}
      />
      <directionalLight intensity={0.5} color={"white"} />
      <ambientLight intensity={0.5} />:
      <Kite />
      <LordBuddha />
      <group {...props} dispose={null}>
        <PositionalAudio autoplay loop url="/APBGM.mp3" distance={1.5} />
        <mesh
          geometry={nodes.Cube.geometry}
          material={materials.Material}
          position={[20, 0, 0]}
          rotation-x={Math.PI}
          scale={20}
        />

        {/* <mesh
          geometry={nodes.Cube002.geometry}
          material={materials["Material.001"]}
          position={[20, 0, 0]}
          rotation-x={Math.PI}
          scale={20}

/> */}
        <mesh scale={41} position={[3, 10, 20]} rotation-y={1 * Math.PI}>
          <planeGeometry />
          <meshBasicMaterial />
          <Decal
            position={[0, 0, 0]} // Position of the decal
            rotation={[0, 0, 0]} // Rotation of the decal (can be a vector or a degree in radians)
            scale={1} // Scale of the decal
          >
            <meshBasicMaterial map={texture1} />
          </Decal>
        </mesh>

        {/* <mesh
          geometry={nodes.Cube003.geometry}
          material={materials["Material.002"]}
          position={[20, 0, 0]}
          rotation-x={Math.PI}
          scale={20}
        > */}
        <mesh scale={41} position={[3, 10, -20]}>
          <planeGeometry />
          <meshBasicMaterial />
          <Decal
            // Makes "bounding box" of the decal visible
            position={[0, 0, 0]} // Position of the decal
            rotation={[0, 0, 0]} // Rotation of the decal (can be a vector or a degree in radians)
            scale={1} // Scale of the decal
            // The mesh should take precedence over the original
          >
            <meshBasicMaterial
              // scale={5}
              map={texture}
              // polygonOffset
              // polygonOffsetFactor={-1}
            />
          </Decal>
        </mesh>

        {/* <mesh
          geometry={nodes.Cube004.geometry}
          material={materials["Material.003"]}
          position={[20, 0, 0]}
          rotation-x={Math.PI}
          scale={20}
        /> */}

        <mesh scale={41} position={[23, 10, 0]} rotation-y={1.5 * Math.PI}>
          <planeGeometry />
          <meshBasicMaterial />
          <Decal
            // Makes "bounding box" of the decal visible
            position={[0, 0, 0]} // Position of the decal
            rotation={[0, 0, 0]} // Rotation of the decal (can be a vector or a degree in radians)
            scale={1} // Scale of the decal
            // The mesh should take precedence over the original
          >
            <meshBasicMaterial
              // scale={5}
              map={texture2}
              // polygonOffset
              // polygonOffsetFactor={-1}
            />
          </Decal>
        </mesh>

        {/* <mesh
          geometry={nodes.Cube005.geometry}
          material={materials["Material.004"]}
          position={[20, 0, 0]}
          rotation-x={Math.PI}
          scale={20}
        /> */}
        <mesh scale={41} position={[-16.5, 10, 0]} rotation-y={2.5 * Math.PI}>
          <planeGeometry />
          <meshBasicMaterial />
          <Decal
            // Makes "bounding box" of the decal visible
            position={[0, 0, 0]} // Position of the decal
            rotation={[0, 0, 0]} // Rotation of the decal (can be a vector or a degree in radians)
            scale={1} // Scale of the decal
            // The mesh should take precedence over the original
          >
            <meshBasicMaterial
              // scale={5}
              map={texture3}
              // polygonOffset
              // polygonOffsetFactor={-1}
            />
          </Decal>
        </mesh>
      </group>
    </>
    // </Canvas>
  );
};

useGLTF.preload("/AP.glb");
export default AP;
