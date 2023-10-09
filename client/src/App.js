import{
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from "./web/pages/home/Home";
import Login from "./web/pages/login/Login";
import Signin from "./web/pages/login/Signin";
import Userpost from './web/pages/Userpost/Userpost';
import Quiz from './web/pages/quiz/Quiz';
import ChatBot from './web/pages/chatBot/ChatBot';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Signin/>}/>
          <Route path='/userpost' element={<Userpost/>}/>
          <Route path='/quiz' element={<Quiz/>}/>
          <Route path='/chatbot' element={<ChatBot />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
