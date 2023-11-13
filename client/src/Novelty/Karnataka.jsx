/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 Karnataka.glb 
*/

import React, { useRef } from "react";
import {
  Decal,
  Html,
  PositionalAudio,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import { Charminar } from "./Charminar";
// import { CharminarTry } from "./Charminartry";
// import { CharminarNew } from "./CharminarNew";
// import { IndiaGateTry2 } from "./IndiaGateTry2";
import { MOUSE } from "three";
import { Church } from "./StMarksChurchBangalore";
import { useEffect } from "react";
import { useState } from "react";

const Karnataka = (props) => {
  const { nodes, materials } = useGLTF("/Karnataka.glb");

  const v1 = [
    "./Photos/Karnataka/Dance/d1.jpg",
    "./Photos/Karnataka/Dance/d2.jpg",
    "./Photos/Karnataka/Dance/d3.jpg",
    "./Photos/Karnataka/Dance/d4.jpg",
  ];

  const v2 = [
    "./Photos/Karnataka/Festival/f1.jpg",
    "./Photos/Karnataka/Festival/f2.webp",
    "./Photos/Karnataka/Festival/f3.jpg",
    "./Photos/Karnataka/Festival/f4.webp",
  ];

  const v3 = [
    "./Photos/Karnataka/Food/f1.jpg",
    "./Photos/Karnataka/Food/f2.jpg",
    "./Photos/Karnataka/Food/f3.jpg",
    "./Photos/Karnataka/Food/f4.jpg",
  ];

  const v4 = [
    "./Photos/Karnataka/Temples/t1.jpg",
    "./Photos/Karnataka/Temples/t2.jpg",
    "./Photos/Karnataka/Temples/t3.jpg",
    "./Photos/Karnataka/Temples/t4.jpg",
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

  // console.log("dummy");
  return (
    // <Canvas
    //   style={{
    //     width: "100%",
    //     height: "100%",
    //     position: "fixed",
    //     top: 0,
    //     left: 0,
    //     overflow: "hidden",
    //   }}
    //   camera={{ position: [-20, 0, 0] }}
    // >
    <>
      <PositionalAudio autoplay loop url="/Karnataka.mp3" distance={1.5} />
      <OrbitControls
        enablePan={true}
        enableRotate={true}
        autoRotate={true}
        panSpeed={0.5}
        autoRotateSpeed={1}
        maxDistance={18}
        mouseButtons={{
          LEFT: MOUSE.LEFT,
          UP: MOUSE.UP,
          RIGHT: MOUSE.RIGHT,
          BOTTOM: MOUSE.BOTTOM,
        }}
      />
      <directionalLight intensity={0.5} color={"white"} />
      <ambientLight intensity={0.5} />:
      <Church />
      <group {...props} dispose={null}>
        <mesh
          geometry={nodes.Cube.geometry}
          material={materials.Material}
          position={[20, 0, 0]}
          rotation-x={Math.PI}
          scale={20}
          onClick={() => {
            console.log("fdsfdfs");
          }}
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
          <meshBasicMaterial onClick={console.log("fsdfds")} />
          <Decal
            position={[0, 0, 0]} // Position of the decal
            rotation={[0, 0, 0]} // Rotation of the decal (can be a vector or a degree in radians)
            scale={1} // Scale of the decal
            // onClick={console.log("fsfsd")}
          >
            <meshBasicMaterial map={texture1} onClick={console.log("Fsfdfs")} />
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

useGLTF.preload("/Karnataka.glb");
export default Karnataka;
