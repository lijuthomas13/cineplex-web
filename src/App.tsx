import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import MyTickets from "./pages/MyTickets";
import NavBar from "./components/NavBar";
import MovieDetails from "./pages/MovieDetails";
import ShowDetails from "./pages/ShowDetails";

function App() {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-tickets" element={<MyTickets />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/movie/:id/show/:showId" element={<ShowDetails />} />
      </Routes>
    </div>
  );
}

export default App;
