import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import MyTickets from "./pages/MyTickets";
import NavBar from "./components/NavBar";
import MovieDetails from "./pages/MovieDetails";
import ShowDetails from "./pages/ShowDetails";
import { useGlobalStore } from "./store/useGlobalStore";
import { useEffect } from "react";

function App() {
  const { theme, setTheme } = useGlobalStore();
  useEffect(() => {
    const localTheme = localStorage.getItem("cineplex_theme");
    if (localTheme) {
      setTheme(localTheme as "light" | "dark");
    } else {
      localStorage.setItem("cineplex_theme", theme);
    }
  }, []);
  return (
    <div
      className={`h-[100dvh] overflow-hidden flex flex-col ${
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
