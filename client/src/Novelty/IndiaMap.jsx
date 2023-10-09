/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 IndiaMap.glb 
*/
import { Link } from "react-router-dom";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useNavigate } from "react-router-dom";

export function IndiaMap(props) {
  const Navigate = useNavigate();
  const { nodes, materials } = useGLTF("/IndiaMap.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        position={[0, 0, 4.611]}
      />
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials.Material}
        position={[0, 0, 0.222]}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials.IndiaMap}
        position={[0, 0, 4.611]}
      />

      <mesh
        geometry={nodes.TN.geometry}
        material={materials.IndiaMap}
        onClick={() => {
          Navigate("/TN");
        }}
        position={[0, 0, 4.611]}
      />

      <mesh
        geometry={nodes.Kerala.geometry}
        material={materials.IndiaMap}
        position={[0, 0, 4.611]}
      />
      <mesh
        geometry={nodes.AP.geometry}
        material={materials.IndiaMap}
        onClick={() => {
          Navigate("/AP");
        }}
        position={[0, 0, 4.611]}
      />
      <mesh
        geometry={nodes.Karnataka.geometry}
        material={materials.IndiaMap}
        position={[0, 0, 4.611]}
      />
      <mesh
        geometry={nodes.Telangana.geometry}
        material={materials.IndiaMap}
        onClick={() => {
          Navigate("/Telangana");
        }}
        position={[0, 0, 4.611]}
      />
      <mesh
        geometry={nodes.Maharashtra.geometry}
        material={materials.IndiaMap}
        onClick={() => {
          Navigate("/Maharashtra");
        }}
        position={[0, 0, 4.611]}
      />
      <mesh
        geometry={nodes.Gujarath.geometry}
        material={materials.IndiaMap}
        position={[0, 0, 4.611]}
      />
      <mesh
        geometry={nodes.Rajasthan.geometry}
        material={materials.IndiaMap}
        position={[0, 0, 4.611]}
      />
      <mesh
        geometry={nodes.MP.geometry}
        material={materials.IndiaMap}
        position={[0, 0, 4.611]}
      />
      <mesh
        geometry={nodes.Chhattisgarh.geometry}
        material={materials.IndiaMap}
        position={[0, 0, 4.611]}
      />
      <mesh
        geometry={nodes.Odisha.geometry}
        material={materials.IndiaMap}
        position={[0, 0, 4.611]}
      />
      <mesh
        geometry={nodes.WB.geometry}
        material={materials.IndiaMap}
        onClick={() => {
          Navigate("/WB");
        }}
        position={[0, 0, 4.611]}
      />
      <mesh
        geometry={nodes.Jharkandh.geometry}
        material={materials.IndiaMap}
        position={[0, 0, 4.611]}
      />
      <mesh
        geometry={nodes.Bihar.geometry}
        material={materials.IndiaMap}
        position={[0, 0, 4.611]}
      />
      <mesh
        geometry={nodes.UP.geometry}
        material={materials.IndiaMap}
        position={[0, 0, 4.611]}
      />
      <mesh
        geometry={nodes.Haryana.geometry}
        material={materials.IndiaMap}
        position={[0, 0, 4.611]}
      />
      <mesh
        geometry={nodes.Uttarakandh.geometry}
        material={materials.IndiaMap}
        position={[0, 0, 4.611]}
      />
      <mesh
        geometry={nodes.Punjab.geometry}
        material={materials.IndiaMap}
        onClick={() => {
          Navigate("/Punjab");
        }}
        position={[0, 0, 4.611]}
      />
      <mesh
        geometry={nodes.HP.geometry}
        material={materials.IndiaMap}
        position={[0, 0, 4.611]}
      />
      <mesh
        geometry={nodes.JK.geometry}
        material={materials.IndiaMap}
        position={[0, 0, 4.611]}
      />
      <mesh
        geometry={nodes.Meghalaya.geometry}
        material={materials.IndiaMap}
        position={[0, 0, 4.611]}
      />
      <mesh
        geometry={nodes.Assam.geometry}
        material={materials.IndiaMap}
        onClick={() => {
          Navigate("/Assam");
        }}
        position={[0, 0, 4.611]}
      />
      <mesh
        geometry={nodes.Arunachal_Pradesh.geometry}
        material={materials.IndiaMap}
        position={[0, 0, 4.611]}
      />
      <mesh
        geometry={nodes.Sikkim.geometry}
        material={materials.IndiaMap}
        position={[0, 0, 4.611]}
      />
    </group>
  );
}

useGLTF.preload("/IndiaMap.glb");
