import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHeart,
  faShoppingCart,
  faSearch,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ toggleSidebar }) => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          setShow(false);
        } else {
          setShow(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    const handleScroll = () => {
      controlNavbar();
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`flex items-center justify-between p-4 bg-white shadow-md fixed w-full z-30 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center space-x-4">
        <button className="text-xl" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <span className="text-2xl font-bold">Bearbone</span>
      </div>
      <div className="flex items-center space-x-4">
        <FontAwesomeIcon icon={faSearch} className="text-xl cursor-pointer" />
        <FontAwesomeIcon icon={faUser} className="text-xl cursor-pointer" />
        <FontAwesomeIcon icon={faHeart} className="text-xl cursor-pointer" />
        <FontAwesomeIcon
          icon={faShoppingCart}
          className="text-xl cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
