import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Canvas } from "@react-three/fiber";
import { MeshNormalMaterial } from "three";
import Model from "./Model";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { OrbitControls } from "@react-three/drei";
import TN from "./TN";
import Telangana from "./Telangana";
import Punjab from "./Punjab";
import Maharashtra from "./Maharashtra";
import Assam from "./Assam";
import WB from "./WB";
import AP from "./AP";
import Karnataka from "/Karnataka";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Canvas>
    <BrowserRouter>
      <OrbitControls enablePan={true} enableRotate={true} />
      <ambientLight intensity={0.5} />

      <Routes>
        <Route path="/" element={<Model />} />
        <Route path="/TN" element={<TN />} />
        <Route path="/Telangana" element={<Telangana />} />
        <Route path="/AP" element={<AP />} />
        <Route path="/WB" element={<WB />} />
        <Route path="/Assam" element={<Assam />} />
        <Route path="/Maharashtra" element={<Maharashtra />} />
        <Route path="/Punjab" element={<Punjab />} />
        <Route path="/Karnataka" element={<Karnataka />} />
      </Routes>
    </BrowserRouter>
  </Canvas>
);
