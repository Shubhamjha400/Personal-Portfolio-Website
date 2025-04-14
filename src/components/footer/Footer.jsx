import React from 'react';
import { Link } from 'react-scroll';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { TbFileCv } from 'react-icons/tb';
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";

const Footer = () => {
  return (
    <div className="w-full bg-bodyColor py-8 border-t border-gray-950">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-8">

        {/* Left - Logo & Social Icons */}
        <div className="flex flex-col items-center md:items-start">
          <img className="w-32" src={logo} alt="logo" />
          <div className="flex gap-4 mt-4">
          <a href="https://github.com/Shubhamjha400" target="blank">
                              <span className="bannerIcon">
                                <FaGithub />
                              </span>
                            </a>
                            <a
                              href="https://www.linkedin.com/in/shubhamjha400/"
                              target="blank"
                            >
                              <span className="bannerIcon">
                                <FaLinkedinIn />
                              </span>
                            </a>
                            <a
                              href="https://drive.google.com/file/d/1mbNgGhPJlKh7pUBIfZGIIJkJs3FtMAT7/view?usp=sharing"
                              target="blank"
                            >
                              <span className="bannerIcon">
                                <TbFileCv />
                              </span>
                            </a>
          </div>
        </div>

        {/* Right - Navigation Links */}
        <ul className="flex flex-wrap gap-6 mt-6 md:mt-0">
          {navLinksdata.map(({ _id, title, link }) => (
            <li key={_id}>
              <Link
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-lg text-gray-400 hover:text-designColor transition-all duration-300 cursor-pointer"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <hr className="mt-20 border-black" />
      <hr className="w-full bg-bodyColor py-8 border-t border-gray-950" />
    </div>
  );
}

export default Footer;
