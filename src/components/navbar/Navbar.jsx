import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      {/* Logo with smooth scrolling */}
      <div>
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer"
        >
          <img className="w-60" src={logo} alt="logo" />
        </Link>
      </div>

      {/* Navbar Links */}
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>

        {/* Mobile Menu */}
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              {/* Mobile Logo */}
              <div>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer"
                  onClick={() => setShowMenu(false)}
                >
                  <img className="w-32" src={logo} alt="logo" />
                </Link>
                <p className="text-sm text-gray-400 mt-2">
                  I am a skilled and passionate web developer with experience in
                  creating visually appealing and user-friendly websites.
                </p>
              </div>

              {/* Mobile Menu Links */}
              <ul className="flex flex-col gap-4">
                {navLinksdata.map(({ _id, title, link }) => (
                  <li
                    key={_id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <a href="https://github.com/Shubhamjha400" target="_blank" rel="noopener noreferrer">
                    <span className="bannerIcon">
                      <FaGithub />
                    </span>
                  </a>
                  <a href="https://www.linkedin.com/in/shubhamjha400/" target="_blank" rel="noopener noreferrer">
                    <span className="bannerIcon">
                      <FaLinkedinIn />
                    </span>
                  </a>
                  <a href="https://drive.google.com/file/d/1mbNgGhPJlKh7pUBIfZGIIJkJs3FtMAT7/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <span className="bannerIcon">
                      <TbFileCv />
                    </span>
                  </a>
                </div>
              </div>

              {/* Close Button */}
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
