import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import MyTickets from "./pages/MyTickets";
import NavBar from "./components/NavBar";
import MovieDetails from "./pages/MovieDetails";
import ShowDetails from "./pages/ShowDetails";
import { useGlobalStore } from "./store/useGlobalStore";

function App() {
  const { theme } = useGlobalStore();
  return (
    <div
      className={`h-screen overflow-hidden flex flex-col ${
        theme == "dark" ? "dark dark:bg-gray-900" : ""
      } `}
    >
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
