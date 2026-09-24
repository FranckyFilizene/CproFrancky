import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { FaUserCheck, FaUsers } from 'react-icons/fa'
import { MdOutlineSpeed } from 'react-icons/md'
import { motion } from 'framer-motion'
import { FaBookOpen, FaExternalLinkAlt } from 'react-icons/fa'

const Skills = () => {
  return (
    <div className="min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-center items-center flex-col gap-4">

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl tracking-tighter font-bold text-center"
      >
        Soft Skills & Savoir-être
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-sm sm:text-base text-slate-400 text-center max-w-2xl"
      >
        Je m’appuie sur des qualités humaines et professionnelles qui me permettent de mieux collaborer, m’adapter et livrer des solutions fiables.
      </motion.p>

      <div className="w-full flex flex-col lg:flex-row justify-center items-stretch gap-3 lg:gap-4">

        <div className="flex justify-center items-center w-full flex-col gap-3">

          {/* Autonomie */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: "easeOut"
            }}
            className="w-full h-full bg-slate-950 p-4 rounded-lg shadow-lg border border-red-950 relative overflow-hidden"
          >

            <div className="absolute -top-5 -left-5 w-40 h-40 rounded-[50%] bg-red-900/40 z-0 blur-xl"></div>

            <div className="flex flex-col z-10 relative">
              <FaUserCheck
                size={50}
                className="text-red-500 mb-2"
              />

              <h2 className="text-xl font-bold tracking-tighter text-slate-200 mb-1">
                Autonomie
              </h2>

              <p className="text-slate-400 font-normal text-xs leading-relaxed">
                Capable de chercher des solutions par moi-même, de lire la
                documentation officielle et de débloquer rapidement des problèmes
                techniques sans attendre systématiquement de l'aide.
              </p>
            </div>

          </motion.div>


          {/* Dynamisme & Proactivité */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: "easeOut"
            }}
            className="w-full h-full bg-slate-950 p-4 rounded-lg shadow-lg border border-red-950 relative overflow-hidden"
          >

            <div className="absolute -top-5 -left-5 w-40 h-40 rounded-[50%] bg-red-900/40 z-0 blur-xl"></div>

            <div className="flex flex-col z-10 relative">
              <MdOutlineSpeed
                size={50}
                className="text-red-500 mb-2"
              />

              <h2 className="text-xl font-bold tracking-tighter text-slate-200 mb-1">
                Dynamisme & Proactivité
              </h2>

              <p className="text-slate-400 font-normal text-xs leading-relaxed">
                Toujours motivé à m'investir pleinement dans les projets.
                Je m'adapte vite aux changements, j'aime relever des défis et faire
                avancer les tâches efficacement.
              </p>
            </div>

          </motion.div>

        </div>


        <div className="w-full flex justify-center items-center flex-col gap-3">

          {/* Esprit d'équipe */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: "easeOut"
            }}
            className="w-full h-full bg-slate-950 p-4 rounded-lg shadow-lg border border-red-950 relative overflow-hidden"
          >

            <div className="absolute -top-5 -left-5 w-40 h-40 rounded-[50%] bg-red-900/40 z-0 blur-xl"></div>

            <div className="flex flex-col z-10 relative">
              <FaUsers
                size={50}
                className="text-red-500 mb-2"
              />

              <h2 className="text-xl font-bold tracking-tighter text-slate-200 mb-1">
                Esprit d'équipe
              </h2>

              <p className="text-slate-400 font-normal text-xs leading-relaxed">
                À l'aise dans le travail collaboratif (Git, revues de code,
                communication). J'aime partager mes connaissances, écouter les
                retours et avancer ensemble vers un objectif commun.
              </p>
            </div>

          </motion.div>


          {/* Curiosité Technique */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: "easeOut"
            }}
            className="w-full h-full bg-slate-950 p-4 rounded-lg shadow-lg border border-red-950 relative overflow-hidden"
          >

            <div className="absolute -top-5 -left-5 w-40 h-40 rounded-[50%] bg-red-900/40 z-0 blur-xl"></div>

            <div className="flex flex-col z-10 relative">
              <BiSearchAlt
                size={50}
                className="text-red-500 mb-2"
              />

              <h2 className="text-xl font-bold tracking-tighter text-slate-200 mb-1">
                Curiosité Technique
              </h2>

              <p className="text-slate-400 font-normal text-xs leading-relaxed">
                En veille permanente sur les nouvelles technologies et bonnes
                pratiques. Passionné par l'apprentissage continu et
                l'expérimentation de nouveaux frameworks ou outils.
              </p>
            </div>

          </motion.div>

        </div>

      </div>

    </div>

  )
}

export default Skills