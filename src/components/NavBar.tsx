import { Link, NavLink } from "react-router-dom";
import { RiMovie2Line } from "react-icons/ri";
import { BsTicketPerforatedFill } from "react-icons/bs";
import { MdHome } from "react-icons/md";

const NavBar = () => {
  return (
    <header className="position:sticky top-0 flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 px-4 sm:px-6 lg:px-10 py-3">
      <div className="flex items-center gap-6">
        <Link to="/">
          <div className="flex items-center gap-4 text-black">
            <RiMovie2Line className="text-primary text-2xl hidden md:block" />
            <h2 className="text-black text-lg font-bold">Cineplex</h2>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-9">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-primary text-sm "
                : "text-black text-sm  hover:text-primary "
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/my-tickets"
            className={({ isActive }) =>
              isActive
                ? "text-primary text-sm"
                : "text-black text-sm  hover:text-primary "
            }
          >
            My Tickets
          </NavLink>
        </nav>
        <nav className="flex md:hidden items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-gray-600 hover:text-primary"
            }
          >
            <MdHome className="text-2xl" />
          </NavLink>

          <NavLink
            to="/my-tickets"
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-gray-600 hover:text-primary"
            }
          >
            <BsTicketPerforatedFill className="text-2xl" />
          </NavLink>
        </nav>
      </div>
      <div className="flex flex-1 justify-end gap-4 sm:gap-6">
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
