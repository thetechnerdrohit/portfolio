import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../contants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const createMenu = (mobile: boolean = false) => {
    return (
      <ul
        className={`list-none ${
          mobile
            ? "flex justify-end items-start flex-col gap-4"
            : "hidden sm:flex flex-row gap-10"
        }`}
      >
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`${
              active === link.title ? "text-white" : "text-secondary"
            } ${
              mobile
                ? "font-poppins text-[16px]"
                : "hover:text-white text-[18px]"
            } font-medium cursor-pointer`}
            onClick={() => {
              setActive(link.title);
              setToggle(!toggle);
            }}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
    );
  };
  return (
    <nav
      className={`${styles.paddingX} w-full flex item-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="flex text-white text-[18px] font-bold cursor-pointer">
            Rohit&nbsp;
            <span className="sm:block hidden">| Software Engineer</span>
          </p>
        </Link>
        {createMenu()}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
          >
            {createMenu(true)}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
