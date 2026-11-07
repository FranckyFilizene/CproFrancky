import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaFacebook, FaWhatsapp, FaLaptopCode, FaRegCalendarCheck } from 'react-icons/fa'
import profil from '../../src/assets/porfil.webp'
import { BiLocationPlus } from 'react-icons/bi'
import { motion, useReducedMotion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/FranckyFilizene', Icon: FaFacebook, hover: 'hover:text-blue-400' },
  { label: 'WhatsApp', href: 'https://wa.me/261385382860', Icon: FaWhatsapp, hover: 'hover:text-green-400' },
  { label: 'GitHub', href: 'https://www.github.com/FranckyFilizene', Icon: BsGithub, hover: 'hover:text-violet-400' },
]

const facts = [
  { label: 'Développeur web', value: '2 ans d’expérience', Icon: FaLaptopCode },
  { label: 'Disponibilité', value: 'Toute la semaine', Icon: FaRegCalendarCheck },
]

const Home = () => {
  const reduce = useReducedMotion()

  return (
    <section id="accueil" className="relative min-h-screen w-full overflow-hidden bg-slate-950">
      {/* Photo en fond sur mobile */}
      <div className="absolute inset-0 md:hidden">
        <img
          src={profil}
          alt=""
          decoding="async"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="relative z-10 mx-auto min-h-screen w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex min-h-screen flex-col items-center justify-center gap-10 py-24 md:flex-row md:justify-between">
          {/* Texte */}
          <motion.div
            variants={containerVariants}
            initial={reduce ? 'visible' : 'hidden'}
            animate="visible"
            className="w-full rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-2xl backdrop-blur-md sm:p-8 md:w-[58%] md:bg-slate-900/90 md:p-10"
          >
            <motion.div
              variants={itemVariants}
              className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-200 md:mx-0"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              Disponible pour de nouveaux projets
            </motion.div>

            <div className="space-y-3 text-center md:text-left">
              <motion.p variants={itemVariants} className="text-sm font-medium text-red-500">
                Bonjour, je suis
              </motion.p>

              <motion.h1
                variants={itemVariants}
                className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                  Francky Michel
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="mx-auto max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg md:mx-0"
              >
                Développeur Full-Stack Junior, je crée des solutions web
                modernes, rapides et faciles à utiliser.
              </motion.p>
            </div>

            {/* BAC+2 et disponibilité */}
            <motion.ul
              variants={itemVariants}
              className="mt-8 grid gap-3 sm:grid-cols-2"
            >
              {facts.map(({ label, value, Icon }) => (
                <li
                  key={label}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-600/15 text-red-500">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs text-gray-400">{label}</span>
                    <span className="block text-lg font-semibold text-white">{value}</span>
                  </span>
                </li>
              ))}
            </motion.ul>

            <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
              <motion.div variants={itemVariants} className="flex w-full flex-wrap justify-center gap-3 sm:w-auto md:justify-start">
                <a
                  href="#projet"
                  className="w-full rounded-lg bg-red-600 px-6 py-2.5 text-center font-semibold text-white transition duration-300 hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 sm:w-auto"
                >
                  Voir mes projets
                </a>
                <a
                  href="#contact"
                  className="w-full rounded-lg bg-white px-6 py-2.5 text-center font-semibold text-black transition duration-300 hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
                >
                  Me contacter
                </a>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-5">
                {socials.map(({ label, href, Icon, hover }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`text-gray-300 transition-colors ${hover}`}
                  >
                    <Icon size={22} />
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Portrait (bureau) */}
          <div className="hidden w-[36%] justify-center md:flex">
            <div className="relative">
              <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[2rem] bg-red-700/30" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl">
                <img
                  src={profil}
                  alt="Portrait de Francky Michel"
                  decoding="async"
                  className="block w-[320px] object-cover"
                />
              </div>
              <div className="absolute -left-4 bottom-8 flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-sm font-medium text-gray-200 shadow-lg">
                <BiLocationPlus size={18} className="text-red-500" aria-hidden="true" />
                Madagascar
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home