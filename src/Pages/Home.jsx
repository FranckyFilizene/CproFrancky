import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'
import profil from '../../src/assets/porfil.png'

const Home = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background MOBILE */}
      <div className="absolute inset-0 md:hidden">
        <img
          src={profil}
          alt="profil"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-red-900/10" />
      </div>
      <div className="relative z-10 gap-2 min-h-screen w-full md:w-[95%] max-w-7xl mx-auto px-4 md:px-10 flex items-center justify-center md:justify-between">
        <div className="w-full md:w-[60%] p-6 md:p-8 rounded-3xl bg-black/30 md:bg-gray-900/90 backdrop-blur-md shadow-xl border border-gray-800">

          <div className="text-center md:text-left space-y-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-200">
              Bonjour, je suis
              <span className="block text-red-500 font-bold text-4xl md:text-5xl">
                Francky Michel
              </span>
            </h3>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              Développeur Full-Stack Junior <br />
              créant des solutions web innovantes.
            </p>
          </div>

          {/* Boutons */}
          <div className="flex flex-col items-center md:items-start space-y-6 mt-8">
            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
              <a
                href="#projet"
                className="bg-red-600 w-28 px-4 py-2.5 text-center rounded-lg font-semibold hover:bg-red-700 duration-300"
              >
                Projets
              </a>

              <a
                href="#contact"
                className="bg-white text-black w-28 px-4 py-2.5  hover:bg-slate-200 duration-300 font-semibold text-center rounded-lg"
              >
                Contact
              </a>
            </div>

            {/* Réseaux */}
            <div className="flex gap-6 text-2xl">
              <a
                href="https://www.facebook.com/FranckyFilizene"
                className="text-gray-300 hover:text-blue-500"
              >
                <FaFacebook  size={18}/>
              </a>

              <a
                href="https://wa.me/+261385382860"
                className="text-gray-300 hover:text-green-500"
              >
                <FaWhatsapp size={18}/>
              </a>

              <a
                href="https://www.github.com/FranckyFilizene"
                className="text-gray-300 hover:text-violet-500"
              >
                <BsGithub size={18}/>
              </a>
            </div>
          </div>
        </div>

        {/* Image Desktop seulement */}
        <div className="hidden md:flex w-[40%] justify-center">
          <div className="bg-gradient-to-tr from-red-800 to-slate-900 p-8 rounded-3xl shadow-2xl">
            <img
              src={profil}
              alt="Profil"
              className="w-[320px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home