import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mission from "./components/Mission";
import InformationTech from "./components/InformationTech";
import ChatBot from "./components/Chat";
import Chat from "@mui/icons-material/Chat";
import Login from "./components/Login";
import Display from "./components/Display";
import Register from "./components/Register";
import ABC from "./components/Chatbox";
import Dashboard from './components/Mailer'
import FormPagee from "./components/Sendmailspage";
import AuthForm from "./components/manitejlogin";
import Events from "./components/Events";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/display" element={<Display/>} />
          <Route path="/about/mission" element={<Mission />} />
          <Route path="/departments/information-technology" element={<InformationTech />} />
          <Route path="/departments/information-technology/chat" element={<ChatBot/>} />
          <Route path="/departments/information-technology/login" element={<Login/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/register" element ={<Register/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/dashboard" element ={<Dashboard/>} />
          <Route path="/sendmail" element ={<FormPagee/>} />
         

         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
