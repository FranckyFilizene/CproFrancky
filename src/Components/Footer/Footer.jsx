
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className="w-full border-t border-white/[0.06] bg-slate-950 text-slate-400">

            <div className="mx-auto w-[90%] max-w-7xl py-10">

                {/* FOOTER PRINCIPAL */}
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

                    {/* IDENTITÉ */}
                    <div className="flex flex-col items-center gap-3 md:items-start">

                        <h2 className="text-xl font-bold tracking-tight text-white">
                            RM Franck<span className="text-red-500">y</span>
                        </h2>

                        <p className="max-w-xs text-center text-xs leading-relaxed text-slate-500 md:text-left">
                            Développeur passionné par la création de solutions
                            modernes et innovantes.
                        </p>

                        {/* RÉSEAUX SOCIAUX */}
                        <div className="mt-1 flex items-center gap-3">

                            <a
                                href="https://www.facebook.com/FranckyFilizene"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03] text-slate-400 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-500"
                            >
                                <FaFacebook size={16} />
                            </a>

                            <a
                                href="https://wa.me/261385382860"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03] text-slate-400 transition-all duration-300 hover:border-green-500/30 hover:bg-green-500/10 hover:text-green-500"
                            >
                                <FaWhatsapp size={17} />
                            </a>

                            <a
                                href="https://github.com/FranckyFilizene"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03] text-slate-400 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
                            >
                                <BsGithub size={16} />
                            </a>

                        </div>

                    </div>

                    {/* NAVIGATION */}
                    <div className="flex flex-col items-center gap-4">

                        <h3 className="text-sm font-semibold text-white">
                            Navigation
                        </h3>

                        <div className="flex flex-wrap justify-center gap-5 text-xs sm:gap-7">

                            <a href="#home" className="transition-colors duration-300 hover:text-red-500">
                                Accueil
                            </a>

                            <a href="#skills" className="transition-colors duration-300 hover:text-red-500">
                                Skills
                            </a>

                            <a href="#projet" className="transition-colors duration-300 hover:text-red-500">
                                Projets
                            </a>

                            <a href="#contact" className="transition-colors duration-300 hover:text-red-500">
                                Contact
                            </a>

                        </div>

                    </div>

                    {/* CONTACT */}
                    <div className="flex flex-col items-center gap-3 md:items-start">

                        <h3 className="text-sm font-semibold text-white">
                            Me contacter
                        </h3>

                        <a
                            href="mailto:ranaivomananafrancky@gmail.com"
                            className="flex items-center gap-2 text-xs transition-colors duration-300 hover:text-red-500"
                        >
                            <MdEmail size={16} className="text-red-500" />
                            ranaivomananafrancky@gmail.com
                        </a>

                        <p className="text-xs text-slate-500">
                            Toliara, Madagascar
                        </p>

                    </div>

                </div>

                {/* COPYRIGHT */}
                <div className="mt-9 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 text-center text-[11px] sm:flex-row">

                    <p className="text-slate-500">
                        © 2026 <span className="font-medium text-slate-300">Francky RM</span>.
                        Tous droits réservés.
                    </p>

                    <p className="text-slate-600">
                        Designed & Developed by{' '}
                        <span className="font-medium text-red-500">
                            Francky
                        </span>
                    </p>

                </div>

            </div>

        </footer>
    );
};

export default Footer;
