import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks=<>
        <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-left bg-inherit md:py-[6px] px-3 font-bold rounded-md text-[#bc986b]"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
        <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-left bg-inherit md:py-[6px] px-3 rounded-md text-[#bc986b] font-bold"
              : ""
          }
        >
          About Us
        </NavLink>
      </li>
    </>
    return (
        <div>
            <div className="bg-black flex justify-between p-3 text-white items-center">
                <h1 className="font-bold text-3xl">Dreamkeys</h1>
                <div>
                    <Link to="/login"><button className="bg-[#bc986b]  text-white py-[6px] w-[100px] mr-5 font-semibold">Login</button></Link>
                    <Link to="/register"><button className="bg-[#bc986b]  text-white py-[6px] w-[100px] font-semibold">Register</button></Link>
                </div>
            </div>
            <div className="flex justify-center  mx-auto border-b shadow-[0px_4px_6px_rgba(0,0,0,0.1)] rounded-b-xl">
                <ul
                className={`md:grid md: grid-cols-3 text-lg font-medium lg:flex gap-2 lg:gap-6 text-center text-gray-500 bg-zinc-700 md:bg-inherit p-4 rounded-md order-last md:order-none absolute md:static right-7 duration-1000 ${
                open ? "top-8" : "hidden"}`}>
                    {navLinks}
                </ul>
                <hr />
            </div>
            {/* <div className="border-[2px] border-black bg-blac max-w-7xl mx-auto"><hr /></div> */}
        </div>
    );
};

export default Navbar;