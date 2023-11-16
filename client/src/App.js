import React, { createContext, useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./web/pages/home/Home";
// import Login from "./web/pages/login/Login";
// import Signin from "./web/pages/login/Signin";
// import Userpost from "./web/pages/Userpost/Userpost";
import Short from "./web/components/dhana&machi/short/short";
// import Quiz from "./web/pages/quiz/Quiz";
// import ChatBot from "./web/pages/chatBot/ChatBot";
// import Model from "./Novelty/Model";
// import TN from "./Novelty/TN";
// import AP from "./Novelty/AP";
// import Punjab from "./Novelty/Punjab";
// import WB from "./Novelty/WB";
// import Assam from "./Novelty/Assam";
// import Maharashtra from "./Novelty/Maharashtra";
// import Telangana from "./Novelty/Telangana";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ReactSwitch from "react-switch";
import ProfilePage from "./web/pages/ProfilePage/ProfilePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./web/pages/home/Home";
import Login from "./web/pages/login/Login";
import Signin from "./web/pages/login/Signin";
import Userpost from "./web/pages/Userpost/Userpost";
import UserpostShort from "./web/pages/Userpost/UserpostShort";
import Quiz from "./web/pages/quiz/Quiz";
import ChatBot from "./web/pages/chatBot/ChatBot";
import Model from "./Novelty/Model";
import TN from "./Novelty/TN";
import AP from "./Novelty/AP";
import Punjab from "./Novelty/Punjab";
import WB from "./Novelty/WB";
import Assam from "./Novelty/Assam";
import Maharashtra from "./Novelty/Maharashtra";
import Telangana from "./Novelty/Telangana";
import Delhi from "./Novelty/Delhi";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
import UttarPradesh from "./Novelty/UttarPradesh";
import Karnataka from "./Novelty/Karnataka";
import ShortFeed from "./web/components/dhana&machi/short/ShortFeed";
import PostprofilePage from "./web/pages/ProfilePage/Postprofilepage";

export let ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("colorThemeOfCultureHub")
      ? localStorage.getItem("colorThemeOfCultureHub")
      : "dark"
  );
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    localStorage.setItem(
      "colorThemeOfCultureHub",
      theme === "light" ? "dark" : "light"
    );
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <div style={{ position: "fixed", bottom: "2%", right: "1%" }}>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signin />} />
            <Route path="/userpost" element={<Userpost />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/chatbot" element={<ChatBot />} />
            <Route path="/model" element={<Model />} />
            <Route path="/PostShort" element={<UserpostShort />} />
            <Route path="/profile/:id" element={<PostprofilePage />} />
           
            {/* <Route path="/TN" element={<TN />} /> */}
            <Route
              path="/AP"
              element={
                <Canvas
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    overflow: "hidden",
                  }}
                  camera={{ position: [-20, 0, 0] }}
                >
                  <AP />
                </Canvas>
              }
            />
            <Route
              path="/WB"
              element={
                <Canvas
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    overflow: "hidden",
                  }}
                  camera={{ position: [-20, 0, 0] }}
                >
                  <WB />
                </Canvas>
              }
            />
            <Route
              path="/Telangana"
              element={
                <Canvas
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    overflow: "hidden",
                  }}
                  camera={{ position: [-20, 0, 0] }}
                >
                  <Telangana />
                </Canvas>
              }
            />
            <Route
              path="/Assam"
              element={
                <Canvas
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    overflow: "hidden",
                  }}
                  camera={{ position: [-20, 0, 0] }}
                >
                  <Assam />
                </Canvas>
              }
            />
            <Route
              path="/Maharashtra"
              element={
                <Canvas
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    overflow: "hidden",
                  }}
                  camera={{ position: [-20, 0, 0] }}
                >
                  <Maharashtra />
                </Canvas>
              }
            />
            <Route
              path="/Punjab"
              element={
                <Canvas
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    overflow: "hidden",
                  }}
                  camera={{ position: [-20, 0, 0] }}
                >
                  <Punjab />
                </Canvas>
              }
            />
            <Route
              path="/Delhi"
              element={
                <Canvas
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    overflow: "hidden",
                  }}
                  camera={{ position: [-20, 0, 0] }}
                >
                  <Delhi />
                </Canvas>
              }
            />
            <Route
              path="/UttarPradesh"
              element={
                <Canvas
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    overflow: "hidden",
                  }}
                  camera={{ position: [-20, 0, 0] }}
                >
                  <UttarPradesh />
                </Canvas>
              }
            />
            <Route
              path="/Karnataka"
              element={
                <Canvas
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    overflow: "hidden",
                  }}
                  camera={{ position: [-20, 0, 0] }}
                >
                  <Karnataka />
                </Canvas>
              }
            />
            <Route
              path="/Punjab"
              element={
                <Canvas
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    overflow: "hidden",
                  }}
                  camera={{ position: [-20, 0, 0] }}
                >
                  <Punjab />
                </Canvas>
              }
            />

            <Route
              path="/TN"
              element={
                <Canvas
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    overflow: "hidden",
                  }}
                  camera={{ position: [-20, 0, 0] }}
                >
                  <TN />
                </Canvas>
              }
            />
            {/* </Canvas> */}
            <Route path="/shorts" element={<ShortFeed />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
