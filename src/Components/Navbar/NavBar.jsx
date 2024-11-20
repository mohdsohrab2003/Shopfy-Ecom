import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "#",
  },
  {
    id: 3,
    name: "Kid Wear",
    link: "#",
  },
  {
    id: 4,
    name: "",
    link: "#",
  },
  {
    id: 5,
    name: "Men Wear",
    link: "#",
  },
  {
    id: 6,
    name: "Electronic",
    link: "#",
  },
];
const Dropdown = [
  {
    id: 1,
    name: "Trending Product",
    link: "#",
  },
  {
    id: 2,
    name: "Best Seller",
    link: "#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "#",
  },
];
const NavBar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper NavBar */}
      <div className="bg-primary/40  py-2">
        <div className=" container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              Shopsy
            </a>
          </div>
          {/* Search Bar  */}
          <div className=" flex justify-between items-center gap-4">
            <div className=" relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className=" w-[200px] sm:w-[200px] group-hover:w-[300px] rounded-full transition-all duration-200 border border-gray-300 py-2 px-4 focus:outline-none focus:border-orange-400 dark:border-gray-00 dark:bg-gray-800  "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            {/* Order Button */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r  from-primary
           to-secondary transition-all duration-200 text-white py-1 px-4  rounded-full flex items-center gap-3 group "
            >
              <span className=" group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            {/* Dark Mode  Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* Lower NavBar */}
      <div className="flex justify-center " data-aos="zoom-in">
        <ul className="sm:flex  hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-3 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}

          {/* Dropdown link */}
          <li className="relative group cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Tranding Product
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black my-0.7 dark:bg-gray-950 dark:text-white">
              {Dropdown.map((data) => (
                <li key={data.id}>
                  <a
                    href={data.link}
                    className="inline-block w-full rounded-md p-2 hover:bg-primary/20 dark:hover:bg-primary/60"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
