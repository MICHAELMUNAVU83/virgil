import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("black");
  const [shadow, setShadow] = useState("");

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setColor("white");
        setTextColor("black");
        setShadow("md");
      } else {
        setColor("transparent");
        setTextColor("black");
        setShadow("");
      }
    };
    window.addEventListener("scroll", changeBackground);
  }, []);

  const toggleNav = () => {
    setNav(!nav);
  };
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className={`fixed left-0 top-0 w-full z-10 ease-in duration-300 shadow-${shadow}`}
    >
      <div className="max-w-[1240px] m-auto flex lexend justify-between items-center p-2 text-white">
        <Link to="/">
          <img src="/logoo.png" alt="logo" className="w-24 object-cover" />
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <a href="/#services">
            <li className="p-4">Our Services</li>
          </a>
          <a href="/#why_us">
            <li className="p-4">Why Us</li>
          </a>
          <a href="/#clients">
            <li className="p-4">Clients</li>
          </a>
          <a href="/#projects">
            <li className="p-4">Projects</li>
          </a>
          <a href="/#testimonials">
            <li className="p-4">Testimonials</li>
          </a>
        </ul>

        <ul className="hidden sm:flex">
          <a
            href="https://calendar.app.google/kpakc9snjHMMzssv6"
            target="_blank"
            rel="noreferrer"
            class="p-2 font-semibold bg-[#4285F4] rounded-md text-white "
          >
            Book A Call
          </a>
        </ul>

        {/*Mobile button /> */}
        <div className="sm:hidden block z-10">
          {nav ? (
            <AiOutlineClose
              className="text-4xl"
              onClick={toggleNav}
              style={{ color: `${textColor}` }}
            />
          ) : (
            <AiOutlineMenu
              className="text-4xl"
              onClick={toggleNav}
              style={{ color: `${textColor}` }}
            />
          )}
        </div>
        {/*Mobile menu /> */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center  w-full h-screen bg-black  text-white duration-300 ease-in-out"
              : "sm:hidden absolute top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-black text-white duration-300 ease-in-out"
          }
        >
          <ul className="text-3xl" onClick={toggleNav}>
            <li className="p-4  hover:text-gray-500">
              <a href="/">Home</a>
            </li>
            <li className="p-4  hover:text-gray-500">
              <a href="/#services">Services</a>
            </li>
            <li className="p-4 hover:text-gray-500">
              <a href="/#clients">Clients</a>
            </li>
            <li className="p-4  hover:text-gray-500">
              <a href="/#projects">Projects</a>
            </li>
            <li className="p-4  hover:text-gray-500">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
