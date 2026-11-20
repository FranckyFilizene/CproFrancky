
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'Projets', href: '#projet' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/[0.06] bg-slate-900/90 backdrop-blur-xl">

      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">

        {/* LOGO */}
        <a
          href="#home"
          onClick={() => setIsOpen(false)}
          className="group relative flex items-center gap-1.5"
        >
          <div className="relative flex items-center">

            <div className="absolute -right-1.5 -top-1 h-3.5 w-3.5 rounded-full bg-slate-400"></div>

            <img
              src="/monlogo.webp"
              alt="Logo Francky"
              className="relative z-10 h-10 w-10 rounded-full object-cover ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105"
            />

          </div>

          <span className="relative z-10 text-xl font-bold tracking-tight text-white">
            Franck<span className="text-red-500">y</span>
          </span>
        </a>

        {/* NAVIGATION DESKTOP */}
        <div className="hidden items-center gap-2 md:flex">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative px-4 py-2.5 text-[14px] font-medium text-slate-300 transition-colors duration-300 hover:text-white"
            >
              {link.name}

              <span className="absolute bottom-0 left-4 right-4 h-[2px] origin-left scale-x-0 rounded-full bg-red-500 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          ))}

          {/* BOUTON CONTACT */}
          <a
            href="#contact"
            className="ml-4 rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-500 hover:shadow-red-500/30 active:scale-95"
          >
            Discutons
          </a>

        </div>

        {/* BOUTON MENU MOBILE */}
        <button
          onClick={toggleMenu}
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-all duration-300 hover:border-red-500/40 hover:bg-red-500/10 md:hidden"
        >
          {isOpen ? (
            <FaTimes size={19} />
          ) : (
            <FaBars size={19} />
          )}
        </button>

      </div>

      {/* NAVIGATION MOBILE */}
      <div
        className={`grid overflow-hidden border-t border-white/[0.06] bg-slate-900/95 transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">

          <div className="mx-auto max-w-7xl space-y-1 px-5 py-4 sm:px-8">

            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms' }}
                className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-300 ${
                  isOpen
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-3 opacity-0'
                } text-slate-300 hover:bg-white/[0.05] hover:text-red-400`}
              >
                {link.name}

                <span className="h-1.5 w-1.5 rounded-full bg-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              </a>
            ))}

            {/* CONTACT MOBILE */}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 flex items-center justify-center rounded-xl bg-red-600 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-600/20 transition-all duration-300 hover:bg-red-500 active:scale-[0.98]"
            >
              Discutons de votre projet
            </a>

          </div>

        </div>
      </div>

    </nav>
  );
}

export default Navbar;
