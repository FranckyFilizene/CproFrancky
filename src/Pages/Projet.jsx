import React from 'react'
import { motion } from 'framer-motion'
import skills from "../data/skillsData.js";
import CardProject from "../Components/CardProject/CardProject.jsx";
import project from "../data/projectData.js";
import { useState } from 'react';

const Projet = () => {

  const [activeFilter, setActiveFilter] = useState("tout");

  const menu = [
    { name: "tout", libelle: "Tout" },
    { name: "gestion", libelle: "Gestion" },
    { name: "landing", libelle: "Landing" },
    { name: "logiciel", libelle: "Logiciel" },
    { name: "portfolio", libelle: "Portfolios" }
  ]

  const filteredProject = activeFilter === "tout" ? project : project.filter(item => item.categorie.trim() === activeFilter.trim());

  return (
    <div className='min-h-screen w-[95%] p-4 flex justify-center items-center flex-col'>


      <div className="w-full">

        {/* Titre */}
        <div className='font-bold mb-4'>
          <h2 className="text-4xl font-bold text-slate-100 font-mono tracking-wide">
            Mes <span className="text-red-600">Projets</span>
          </h2>

          <p className='font-normal text-[14px]'>
            Chaque projet, une solution et un apprentissage.
          </p>
        </div>

        <div className='mb-4 flex items-center space-x-1 text-sm'>
          {
            menu.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveFilter(item.name)}
                className={`px-3 py-2 rounded-xl duration-300 text-[12px] md:text-sm ${activeFilter === item.name ? 'bg-red-600 shadow-lg' : 'bg-slate-700 hover:bg-slate-500'}`}
              >
                {item.libelle}
              </button>
            ))
          }
        </div>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">

          {filteredProject.map((project) => (
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

              /* =========================
                 ANIMATION D'APPARITION
              ========================= */

              initial={{
                opacity: 0,
                y: 60
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

              /* =========================
                 ANIMATION AU HOVER
              ========================= */

              whileHover={{
                y: -8,
                scale: 1.02,
                transition: {
                  duration: 0.3,
                  ease: "easeOut"
                }
              }}

              className="
        group
        relative
        flex
        flex-col
        justify-between
        min-h-[220px]
        bg-slate-950
        rounded-xl
        border
        border-slate-800
        p-5
        overflow-hidden
        transition-all
        duration-300
        hover:border-red-500
        hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]
      "
            >

              {/* =========================
          GLOW AU HOVER
      ========================= */}

              <div
                className="
          pointer-events-none
          absolute
          -top-24
          -right-24
          w-48
          h-48
          rounded-full
          bg-red-600/10
          blur-3xl
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
        "
              />

              {/* =========================
          NUMÉRO
      ========================= */}

              <div
                className="
          absolute
          top-3
          right-3
          flex
          items-center
          justify-center
          w-10
          h-10
          rounded-full
          bg-slate-800
          text-white
          font-bold
          transition-all
          duration-300
          group-hover:bg-red-600
          group-hover:scale-110
        "
              >
                {skill.id}
              </div>


              {/* =========================
          TITRE
      ========================= */}

              <h2
                className="
          relative
          text-sm
          md:text-base
          font-semibold
          tracking-[4px]
          uppercase
          transition-colors
          duration-300
          group-hover:text-red-500
        "
              >
                {skill.title}
              </h2>


              {/*ICÔNES*/}

              <div className="relative flex flex-wrap items-center gap-4 text-3xl my-8">

                {skill.icons.map(({ Icon, Style }, index) => (

                  <motion.div
                    key={index}

                    whileHover={{
                      y: -5,
                      scale: 1.15,
                      rotate: 3
                    }}

                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15
                    }}
                  >

                    <Icon
                      className={`
                ${Style}
                transition-all
                duration-300
                group-hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.25)]
              `}
                    />

                  </motion.div>

                ))}

              </div>


              {/*BARRE DE PROGRESSION*/}

              <div className="relative flex items-center gap-3">

                <div
                  className="
            flex-1
            h-0.5
            bg-slate-800
            rounded-full
            overflow-hidden
          "
                >

                  <motion.div
                    initial={{
                      width: 0
                    }}

                    whileInView={{
                      width: `${skill.progress}%`
                    }}

                    transition={{
                      duration: 1,
                      delay: skill.id * 0.12 + 0.3,
                      ease: "easeOut"
                    }}

                    className="
              h-full
              rounded-full
              bg-red-600
            "
                  />

                </div>

                <span
                  className="
            text-xs
            font-semibold
            text-slate-400
            transition-colors
            duration-300
            group-hover:text-red-400
          "
                >
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
