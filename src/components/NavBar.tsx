import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsTicketPerforatedFill } from "react-icons/bs";
import { MdDarkMode, MdHome } from "react-icons/md";
import { useGlobalStore } from "../store/useGlobalStore";
import { CiLight } from "react-icons/ci";
import { FaCircleChevronLeft } from "react-icons/fa6";

const NavBar = () => {
  const { theme, setTheme } = useGlobalStore();
  const navigate = useNavigate();
  return (
    <header className="position:sticky top-0 flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 px-4 sm:px-6 lg:px-10 py-3">
      <div className="flex items-center gap-6">
        <FaCircleChevronLeft
          className="text-4xl text-primary cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <Link to="/">
          <div className="flex items-center gap-4 text-black">
            <h2 className="text-black text-lg font-bold  dark:text-white">
              Cineplex
            </h2>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-9">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-primary text-sm "
                : "text-black text-sm  hover:text-primary  dark:text-white"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/my-tickets"
            className={({ isActive }) =>
              isActive
                ? "text-primary text-sm"
                : "text-black text-sm  hover:text-primary  dark:text-white"
            }
          >
            My Tickets
          </NavLink>
        </nav>
        <nav className="flex md:hidden items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-primary "
                : "text-gray-600 hover:text-primary  dark:text-white"
            }
          >
            <MdHome className="text-2xl" />
          </NavLink>

          <NavLink
            to="/my-tickets"
            className={({ isActive }) =>
              isActive
                ? "text-primary"
                : "text-gray-600 hover:text-primary  dark:text-white"
            }
          >
            <BsTicketPerforatedFill className="text-2xl" />
          </NavLink>
        </nav>
      </div>
      <div className="flex flex-1 justify-end items-center gap-4 sm:gap-6">
        {theme == "light" && (
          <MdDarkMode
            onClick={() => setTheme("dark")}
            className="text-4xl text-gray-800"
          />
        )}
        {theme == "dark" && (
          <CiLight
            onClick={() => setTheme("light")}
            className="text-4xl text-white"
          />
        )}
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCfQrrVg9rVBzddYUKWnWfXklcdBYtQwioZaMocG_wOu5QHngsAen2YLsiHCfp0IZ6NhtYwthE8HLs66MnSNR01BKyZJ7PR4tL0JWk72pnBcsxONy66ixdZQPI9ZAppw-wIoLwsYJImJKJjfnahdqBLoxo8xoEh1kj9rSN7CnARitG880Oh7yhQo_iIB0tcvxcM_BwkcKMQG9a2VyPGaHaCUVoyTR3HNwSqLofMjjfxMi-D8rBbzvwrLjFZx-aq_1Np0hiGrHxIGHs")',
          }}
        />
      </div>
    </header>
  );
};

export default NavBar;
