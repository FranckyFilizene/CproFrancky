import React from 'react'
import { BiPhone } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { FaFacebook ,FaWhatsapp} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
const Footer = () => {
    return (
        <footer className="w-full bg-slate-950 text-slate-400 border-t border-slate-800">

            <div className="w-[95%] mx-auto py-10">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    <div className="flex flex-col gap-3">

                        <h1 className="text-2xl font-bold tracking-tighter">
                            <span className="text-white">rm.</span>
                            <span className="text-red-600">Francky</span>
                        </h1>

                        <p className="text-xs leading-relaxed max-w-xs">
                            Développeur passionné par la création d'applications modernes,
                            performantes et adaptées aux besoins réels.
                        </p>

                        {/* Réseaux sociaux */}
                        <div className="flex items-center gap-5 mt-2">

                            <a
                                href="https://www.facebook.com/FranckyFilizene"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-500 transition-colors duration-300"
                            >
                                <FaFacebook size={18} />
                            </a>

                            <a
                                href="https://wa.me/+261385382860"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-green-500 transition-colors duration-300"
                            >
                                <FaWhatsapp size={18} />
                            </a>

                            <a
                                href="https://www.github.com/FranckyFilizene"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors duration-300"
                            >
                                <BsGithub size={18} />
                            </a>

                        </div>

                    </div>


                    {/* ================= NAVIGATION ================= */}
                    <div className="flex flex-col gap-3">

                        <h2 className="text-lg text-white font-semibold">
                            Navigation
                        </h2>

                        <div className="flex flex-col gap-2 text-xs">

                            <a
                                href="#home"
                                className="hover:text-red-500 transition-colors duration-300"
                            >
                                Accueil
                            </a>

                            <a
                                href="#skills"
                                className="hover:text-red-500 transition-colors duration-300"
                            >
                                Compétences
                            </a>

                            <a
                                href="#projet"
                                className="hover:text-red-500 transition-colors duration-300"
                            >
                                Projets
                            </a>

                            <a
                                href="#contact"
                                className="hover:text-red-500 transition-colors duration-300"
                            >
                                Contact
                            </a>

                        </div>

                    </div>


                    {/* ================= CONTACT ================= */}
                    <div className="flex flex-col gap-3">

                        <h2 className="text-lg text-white font-semibold">
                            Contact
                        </h2>

                        <div className="flex flex-col gap-2 text-xs">

                            <span className="flex items-center gap-2">
                                <CiLocationOn
                                    size={17}
                                    className="text-red-500"
                                />
                                Toliara, Madagascar
                            </span>

                            <a
                                href="mailto:ranaivomananafrancky@gmail.com"
                                className="flex items-center gap-2 hover:text-red-500 transition-colors duration-300"
                            >
                                <MdEmail
                                    size={17}
                                    className="text-red-500"
                                />
                                ranaivomananafrancky@gmail.com
                            </a>

                            <a
                                href="tel:+261385382860"
                                className="flex items-center gap-2 hover:text-red-500 transition-colors duration-300"
                            >
                                <BiPhone
                                    size={17}
                                    className="text-red-500"
                                />
                                +261 38 538 2860
                            </a>

                        </div>

                    </div>

                </div>


                {/* ================= SÉPARATION ================= */}
                <div className="border-t border-slate-800 my-8"></div>


                {/* ================= BAS DU FOOTER ================= */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-[10px]">

                    <p>
                        © 2025–2026 <span className="text-white">Francky RM</span>.
                        Tous droits réservés.
                    </p>

                    <p className="text-slate-600">
                        Designed & Developed by
                        <span className="text-red-600 ml-1">
                            Francky RM
                        </span>
                    </p>

                </div>

            </div>

        </footer>

    )
}

export default Footer
