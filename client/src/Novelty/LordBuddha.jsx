/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 LordBuddha.glb 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function LordBuddha(props) {
  const { nodes, materials } = useGLTF("/LordBuddha.glb");
  return (
    <group
      {...props}
      dispose={null}
      scale={0.1}
      position-y={-9.5}
      position-z={0}
      position-x={0}
      rotation-y={3.2}
    >
      <pointLight
        intensity={0.5}
        position-y={3}
        position-z={-5}
        position-x={-3}
      />
      <pointLight
        intensity={0.5}
        position-y={3}
        position-z={2}
        position-x={-3}
      />
      <pointLight
        intensity={0.5}
        position-y={3}
        position-z={2}
        position-x={4}
      />
      <pointLight
        intensity={0.5}
        position-y={3}
        position-z={-5}
        position-x={4}
      />
      <group rotation={[0, Math.PI / 2, 0]}>
        <mesh
          geometry={nodes["12333_statue_v1_l2_1"].geometry}
          material={materials["12333_Statue_1"]}
        />
        <mesh
          geometry={nodes["12333_statue_v1_l2_2"].geometry}
          material={materials["12333_Statue_base"]}
          
        />
        <mesh
          geometry={nodes["12333_statue_v1_l2_3"].geometry}
          material={materials["12333_Statue"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/LordBuddha.glb");
