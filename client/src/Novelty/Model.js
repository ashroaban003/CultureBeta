import React, { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ImageLoader } from "three";
import { IndiaMap } from "./IndiaMap";
import { Html, OrbitControls } from "@react-three/drei";
import "./IndiaMap.css";
import { useNavigate } from "react-router";
import backArrow from "../../src/images/backarrow.svg"
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

  const navigate = useNavigate();

  return (
    <>
    <div className="button" onClick={()=>navigate('/')}style={{backgroundColor:"white", zIndex:"100", position:"absolute",top:"0.5rem",left:"1rem", fontSize:"1.3rem", backgroundColor:"#007bff"}}><img src={backArrow} style={{width:"1.3rem", height:"1.3rem", margin: "0 0.5rem 0 -0.5rem"}}></img>Back To Home</div>
    
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
      <OrbitControls
        enablePan={false}
        enableRotate={false}
        maxDistance={5}
        minDistance={5}
      />
      <ambientLight intensity={0.5} />
      <IndiaMap />
      
    </Canvas>
    
    </>
  );
};

export default Model;
