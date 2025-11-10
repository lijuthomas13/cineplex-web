import { Link, NavLink, useNavigate } from "react-router-dom";
import { RiMovie2Line } from "react-icons/ri";
import { BsTicketPerforatedFill } from "react-icons/bs";
import { MdHome } from "react-icons/md";
import { useGlobalStore } from "../store/useGlobalStore";
import { FaCircleChevronLeft } from "react-icons/fa6";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import themeButton from "../assets/themeButton.json";
import { useEffect, useRef } from "react";
import { RxAvatar } from "react-icons/rx";

const NavBar = () => {
  const { theme, setTheme } = useGlobalStore();
  const navigate = useNavigate();
  const lottieRef = useRef<LottieRefCurrentProps>(null);
    useEffect(() => {
    const localTheme = localStorage.getItem("cineplex_theme");
    if (localTheme && localTheme == "light" && lottieRef.current) {
      lottieRef.current.play();
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme == "dark" ? "light" : "dark";
    setTheme(newTheme);
    if (lottieRef.current) {
      lottieRef.current.setDirection(newTheme == "dark" ? -1 : 1);
      lottieRef.current.play();
    }
  };

  return (
    <header className="position:sticky top-0 flex flex-col justify-between whitespace-nowrap">
      <section className="border-b border-solid border-gray-300 dark:border-neutral-700 flex justify-between items-center  px-4 sm:px-6 lg:px-10 md:py-2">
        <div className="flex items-center gap-6">
          <Link to="/">
            <div className="flex items-center gap-2 text-black">
              <RiMovie2Line className="text-4xl text-primary" />
              <h2 className="text-black text-lg font-bold  dark:text-white">
                Cine Plex
              </h2>
            </div>
          </Link>
        </div>
        <div className="flex flex-1 justify-end items-center gap-2 sm:gap-4">
          <button
            onClick={() => toggleTheme()}
            className="w-16 h-16 cursor-pointer scale-150"
          >
            <Lottie
              lottieRef={lottieRef}
              animationData={themeButton}
              loop={false}
              autoplay={false}
            />
          </button>
          <RxAvatar className="text-5xl text-primary" />
        </div>
      </section>
      <section className="border-b border-solid border-gray-200 dark:border-neutral-500 flex gap-4 md:gap-8 items-center  px-4 sm:px-6 lg:px-10 py-3">
        <FaCircleChevronLeft
          className="text-2xl text-primary cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <nav className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-primary "
                : "text-gray-600 hover:text-primary  dark:text-white"
            }
          >
            <div className="flex items-center gap-2 text-sm">
              <MdHome className="text-xl" />
              <p>Now Showing</p>
            </div>
          </NavLink>

          <NavLink
            to="/my-tickets"
            className={({ isActive }) =>
              isActive
                ? "text-primary"
                : "text-gray-600 hover:text-primary  dark:text-white"
            }
          >
            <div className="flex items-center gap-2 text-sm">
              <BsTicketPerforatedFill className="text-xl" />
              <p>My Tickets</p>
            </div>
          </NavLink>
        </nav>
      </section>
    </header>
  );
};

export default NavBar;
