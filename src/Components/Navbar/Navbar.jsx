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
          <img src={logo} alt="" className='rounded-4xl'/>
          <span className='text-white z-50'>Franck<span className='text-red-600'>y</span></span>
        </h1>
        <button
          onClick={toogleMenu}
          className='md:hidden text-red-600 focus:outline-none z-50'
          aria-label='toggle menu'>
          {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </button>
        <ul className={`
          flex space-x-6 items-center transition-all duration-300 ease-in-out
          /* Styles Mobile */
          absolute md:static top-15 right-0 h-screen md:h-auto w-2/3 md:w-auto  bg-slate-800 md:bg-transparent
          flex-col md:flex-row pt-24 md:pt-0 space-y-6 md:space-y-0 shadow-2xl md:shadow-none
          ${isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
        `}>
          <li className='flex justify-center items-center gap-1 hover:text-red-400 transition'>
            <FaHome size={20} />
            <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-red-400 transition">A propos</a>
          </li>
          <li className='flex justify-center items-center gap-1 hover:text-red-400 transition'>
            <GrProjects />
            <a href="#projet" onClick={() => setIsOpen(false)} className="hover:text-red-400 transition">Projets</a>
          </li>
          <li className='flex justify-center items-center gap-1 hover:text-red-400 transition'>
            <GiSkills />
            <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-red-400 transition">Skills</a>
          </li>
          <li className='flex justify-center items-center gap-1 hover:text-red-400 transition'>
            <GrContact />
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-red-400 transition">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;