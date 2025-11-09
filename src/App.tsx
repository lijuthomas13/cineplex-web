import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import MyTickets from "./pages/MyTickets";
import NavBar from "./components/NavBar";
import MovieDetails from "./pages/MovieDetails";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-tickets" element={<MyTickets />} />
         <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
