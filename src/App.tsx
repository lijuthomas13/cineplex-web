import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import MyTickets from "./pages/MyTickets";
import NavBar from "./components/NavBar";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <div className={dark ? "dark" : ""}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-tickets" element={<MyTickets />} />
      </Routes>
    </div>
  );
}

export default App;
