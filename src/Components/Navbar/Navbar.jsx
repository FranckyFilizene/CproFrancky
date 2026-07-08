import React from 'react';
import { useState } from 'react';
import { FaBars, FaHome, FaTimes } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { GrContact, GrProjects } from 'react-icons/gr';
import logo from '../../../public/monlogo.png'

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toogleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-800/80 backdrop-blur-md z-50 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-red-600 tracking-tighter flex justify-center items-center relative">
          <div className='w-5 h-5 bg-slate-400 absolute -right-2 -top-[0.2px] rounded-[50%]'></div>
          <img src={logo} alt="" className='rounded-4xl' />
          <span className='text-white z-50'>Franck<span className='text-red-600'>y</span></span>
        </h1>
        <button
          onClick={toogleMenu}
          className='md:hidden text-slate-100 focus:outline-none z-50'
          aria-label='toggle menu'>
          {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </button>
        <ul
          className={`
            flex transition-all duration-300 ease-in-out

            absolute md:static
            top-16 right-0
            h-screen md:h-auto
            w-72 md:w-auto

            bg-slate-900 md:bg-transparent

            flex-col md:flex-row

            pt-8 md:pt-0
            px-5 md:px-0

            gap-3 md:gap-2

            shadow-2xl md:shadow-none
            border-l border-slate-700 md:border-none

            ${isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}
          `}
        >
          <li
            className="
    flex items-center

    gap-4 md:gap-2

    px-4 py-3
    md:px-3 md:py-2

    rounded-xl md:rounded-lg

    w-full md:w-auto

    hover:bg-slate-800
    md:hover:bg-transparent

    hover:text-red-400
    transition-all
    duration-300
"
          >
            <FaHome size={20} />
            <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-red-400 transition">Acceuil</a>
          </li>
          <li
  className="
    flex items-center

    gap-4 md:gap-2

    px-4 py-3
    md:px-3 md:py-2

    rounded-xl md:rounded-lg

    w-full md:w-auto

    hover:bg-slate-800
    md:hover:bg-transparent

    hover:text-red-400
    transition-all
    duration-300
"
>
            <GrProjects />
            <a href="#projet" onClick={() => setIsOpen(false)} className="hover:text-red-400 transition">Projets</a>
          </li>
          <li
  className="
    flex items-center

    gap-4 md:gap-2

    px-4 py-3
    md:px-3 md:py-2

    rounded-xl md:rounded-lg

    w-full md:w-auto

    hover:bg-slate-800
    md:hover:bg-transparent

    hover:text-red-400
    transition-all
    duration-300
"
>
            <GiSkills />
            <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-red-400 transition">Skills</a>
          </li>
          <li
  className="
    flex items-center

    gap-4 md:gap-2

    px-4 py-3
    md:px-3 md:py-2

    rounded-xl md:rounded-lg

    w-full md:w-auto

    hover:bg-slate-800
    md:hover:bg-transparent

    hover:text-red-400
    transition-all
    duration-300
"
>
            <GrContact />
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-red-400 transition">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;