import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <>
        <div className="h-screen overflow-hidden">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/quiz" element={<Quiz/>} />
{/* Directory route */}
          </Routes>
        </div>
    </>
  );
}

export default App;
