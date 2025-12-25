import React from "react";
import Logo from "../assets/logo.png";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="w-full  py-2 border-b-2 border-[#393e46]">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between">
          <img className="h-12 ml-3" src={Logo} alt="Logo" />

          <ul className="hidden md:flex gap-8 text-[#EEEEEE] items-center text-lg">
            <li className="hover:text-[#00ADB5] cursor-pointer">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-[#00ADB5] cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-[#00ADB5] cursor-pointer">
              <a href="#experience">Experience</a>
            </li>
            <li className="hover:text-[#00ADB5] cursor-pointer">
              <a href="#skills">Skills</a>
            </li>
            <li className="hover:text-[#00ADB5] cursor-pointer">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-[#00ADB5] cursor-pointer">
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <div className="relative md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-center h-full text-[#078086] ">
              <Menu size={36} />
            </button>

            {isOpen && (
              <div className="absolute left-[-100px] bg-[#222831] border-2 border-[#393e46] rounded-lg p-3">
              <ul className="flex flex-col gap-8 text-[#EEEEEE] items-center text-lg">
                <li className="hover:text-[#00ADB5] cursor-pointer">
                  <a href="#home">Home</a>
                </li>
                <li className="hover:text-[#00ADB5] cursor-pointer">
                  <a href="#about">About</a>
                </li>
                <li className="hover:text-[#00ADB5] cursor-pointer">
                  <a href="#experience">Experience</a>
                </li>
                <li className="hover:text-[#00ADB5] cursor-pointer">
                  <a href="#skills">Skills</a>
                </li>
                <li className="hover:text-[#00ADB5] cursor-pointer">
                  <a href="#projects">Projects</a>
                </li>
                <li className="hover:text-[#00ADB5] cursor-pointer">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
