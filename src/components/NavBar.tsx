import { Link, NavLink, useNavigate } from "react-router-dom";
import { RiMovie2Line } from "react-icons/ri";
import { BsTicketPerforatedFill } from "react-icons/bs";
import { MdDarkMode, MdHome } from "react-icons/md";
import { useGlobalStore } from "../store/useGlobalStore";
import { CiLight } from "react-icons/ci";
import { FaCircleChevronLeft } from "react-icons/fa6";

const NavBar = () => {
  const { theme, setTheme } = useGlobalStore();
  const navigate = useNavigate();
  return (
    <header className="position:sticky top-0 flex flex-col justify-between whitespace-nowrap">
      <section className="border-b border-solid border-gray-300 dark:border-neutral-700 flex justify-between items-center  px-4 sm:px-6 lg:px-10 py-3">
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
