/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 StMarksChurchBangalore.glb 
Author: prabindh (https://sketchfab.com/prabindh)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/st-marks-cathedral-bengaluru-bangalore-1e5a733b84614725b5db99abf2e373f2
Title: St Marks Cathedral Bengaluru Bangalore
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Church(props) {
  const { nodes, materials } = useGLTF("/StMarksChurchBangalore.glb");
  return (
    <group
      {...props}
      dispose={null}
      scale={0.15}
      position-y={-9.5}
      position-z={10}
    >
      <directionalLight intensity={10} position-y={-10} />
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials["Scene_-_Root"]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/StMarksChurchBangalore.glb");
