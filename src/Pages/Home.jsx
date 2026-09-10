import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'
import profil from '../../src/assets/porfil.webp'
import { BiLocationPlus } from 'react-icons/bi'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const Home = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background MOBILE */}
      <div className="absolute inset-0 md:hidden">
        <img
          src={profil}
          alt="profil"
          loading='lazy'
          decoding='async'
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-red-900/10" />
      </div>
      <div className="relative z-10 gap-2 min-h-screen w-full md:w-[95%] max-w-7xl mx-auto px-4 md:px-10 flex items-center justify-center md:justify-between">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full md:w-[60%] p-6 md:p-8 rounded-3xl bg-black/30 md:bg-gray-900/90 backdrop-blur-md shadow-xl border border-gray-800">

          <div className="text-center md:text-left space-y-2">
            <motion.h3
              variants={itemVariants} className="text-sm font-medium tracking-[0.2em] text-[#991414]">
              BONJOUR, JE SUIS
              <motion.span
              variants={itemVariants}
              className="block text-slate-200 font-bold text-4xl md:text-5xl">
                Francky Michel
              </motion.span>
            </motion.h3>

            <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg tracking-tight md:text-md text-gray-300 leading-relaxed">
              Développeur Full-Stack Junior <br />
              créant des solutions web innovantes.
            </motion.p>
          </div>

          {/* Boutons */}
          <div className="flex flex-col items-center md:items-start space-y-6 mt-8">
            <motion.div
            variants={itemVariants}
             className="flex gap-4 flex-wrap justify-center md:justify-start">
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
            </motion.div>

            {/* Réseaux */}
            <motion.div 
            variants={itemVariants}
            className="flex gap-6 text-2xl">
              <a
                href="https://www.facebook.com/FranckyFilizene"
                className="text-gray-300 hover:text-blue-500"
              >
                <FaFacebook size={18} />
              </a>

              <a
                href="https://wa.me/+261385382860"
                className="text-gray-300 hover:text-green-500"
              >
                <FaWhatsapp size={18} />
              </a>

              <a
                href="https://www.github.com/FranckyFilizene"
                className="text-gray-300 hover:text-violet-500"
              >
                <BsGithub size={18} />
              </a>
            </motion.div>
          </div>
        </motion.div>

      {/* Image Desktop seulement */}
      <div className="hidden md:flex w-[40%] justify-center">
        <div className="bg-gradient-to-tr from-red-800 to-slate-900 p-8 rounded-3xl shadow-2xl relative">
          <div className='absolute flex justify-center items-center gap-1 text-gray-500 font-extrabold top-2 right-4'>
            <BiLocationPlus size={20} /> Toliara
          </div>
          <img
            src={profil}
            alt="Profil"
            loading='lazy'
            decoding='async'
            className="w-[320px] object-cover"
          />
        </div>
      </div>
    </div>
    </section >
  )
}

export default Home