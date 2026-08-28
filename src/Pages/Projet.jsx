import React from 'react'
import { BsBootstrap, BsClaude, BsDatabase, BsOpenai } from 'react-icons/bs'
import { FaHtml5, FaJs, FaLaravel, FaPhp, FaVuejs } from 'react-icons/fa'
import { GrReactjs } from 'react-icons/gr'
import { SiGooglegemini, SiPostman, SiTailwindcss } from 'react-icons/si'
import ticketing from '../../src/assets/ticketing.png'
import visiteur from '../../src/assets/visiter.png'
import sout from '../../src/assets/soutenance.png'
import boxia from '../../src/assets/box-ia.png'
import { BsGithub } from 'react-icons/bs'
import {motion} from 'framer-motion'
import { FcNext } from 'react-icons/fc'
import { GiGemini } from 'react-icons/gi'
import { DiMysql } from 'react-icons/di'
import { FaCss } from 'react-icons/fa6'
import skills from "../data/skillsData.js";

import CardProject from "../Components/CardProject/CardProject.jsx";
import project from "../data/projectData.js";

const Projet = () => {
  return (
    <div className='min-h-screen w-[95%] p-5 flex justify-center items-center flex-col'>


      <div className="w-full">

        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 text-center mb-8">
          Mes <span className="text-red-600">Projets</span>
        </h2>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">

          {project.map((project) => (
            <CardProject
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>

      <div className="w-full flex justify-center items-center flex-col space-y-2 mt-10">

        <h1 className="text-2xl font-bold tracking-tighter">
          Competence clés
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">

          {skills.map((skill) => (

            <motion.div
              key={skill.id}

              initial={{
                opacity: 0,
                y: 80
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              viewport={{
                once: true,
                amount: 0.2
              }}

              transition={{
                duration: 0.6,
                delay: skill.id * 0.12,
                ease: "easeOut"
              }}

              className="relative flex flex-col justify-between min-h-[220px] bg-slate-950 rounded-xl border border-slate-800 p-5 hover:border-red-500 transition-all duration-300"
            >

              {/* Numéro */}
              <div className="absolute top-3 right-3 flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-white font-bold">
                {skill.id}
              </div>

              {/* Titre */}
              <h2 className="text-sm md:text-base font-semibold tracking-[4px] uppercase">
                {skill.title}
              </h2>

              {/* Icônes */}
              <div className="flex flex-wrap items-center gap-4 text-3xl my-8">

                {skill.icons.map(({ Icon, Style }, index) => (

                  <Icon
                    key={index}
                    className={Style}
                  />

                ))}

              </div>

              {/* Barre de progression */}
              <div className="flex items-center gap-3">

                <div className="flex-1 h-0.5 bg-slate-800 rounded-full overflow-hidden">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.progress}%` }}
                    transition={{
                      duration: 1,
                      delay: skill.id * 0.12 + 0.3,
                      ease: "easeOut"
                    }}
                    className="h-full rounded-full bg-red-600"
                  />

                </div>

                <span className="text-xs font-semibold text-slate-400">
                  {skill.progress}%
                </span>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default Projet
