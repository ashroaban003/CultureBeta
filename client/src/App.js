import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./web/pages/home/Home";
import Login from "./web/pages/login/Login";
import Signin from "./web/pages/login/Signin";
import Userpost from "./web/pages/Userpost/Userpost";
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
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signin />} />
        <Route path="/userpost" element={<Userpost />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/model" element={<Model />} />
        <Route path="/TN" element={<TN />} />
        <Route path="/AP" element={<AP />} />
        <Route path="/WB" element={<WB />} />
        <Route path="/Telangana" element={<Telangana />} />
        <Route path="/Assam" element={<Assam />} />
        <Route path="/Maharashtra" element={<Maharashtra />} />
        <Route path="/Punjab" element={<Punjab />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
