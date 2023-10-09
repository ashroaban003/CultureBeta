import React, { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ImageLoader } from "three";
import { IndiaMap } from "./IndiaMap";
import { OrbitControls } from "@react-three/drei";
import "./IndiaMap.css";
const Model = () => {
  // const [image, setImage] = useState(null);

  // useFrame(() => {
  //   // Update the image loader if the image has changed
  //   if (image) {
  //     const imageLoader = new ImageLoader();
  //     imageLoader.load(image, (texture) => {
  //       setImage(texture);
  //     });
  //   }
  // });

  return (
    <Canvas
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        overflow: "hidden",
      }}
    >
      <OrbitControls enablePan={true} enableRotate={true} />
      <ambientLight intensity={0.5} />
      <IndiaMap />
    </Canvas>
  );
};

export default Model;
