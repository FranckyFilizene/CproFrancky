import React from 'react'
import { BsBootstrap, BsClaude, BsDatabase, BsOpenai } from 'react-icons/bs'
import { FaHtml5, FaJs, FaLaravel, FaPhp, FaVuejs } from 'react-icons/fa'
import { GrReactjs } from 'react-icons/gr'
import { SiGooglegemini, SiTailwindcss } from 'react-icons/si'
import ticketing from '../../src/assets/ticketing.png'
import visiteur from '../../src/assets/visiter.png'
import sout from '../../src/assets/soutenance.png'
import { BsGithub } from 'react-icons/bs'
import { FcNext } from 'react-icons/fc'
import { GiGemini } from 'react-icons/gi'
import { DiMysql } from 'react-icons/di'
import { FaCss } from 'react-icons/fa6'
import skills from "../data/skillsData.js";

const Projet = () => {
  return (
    <div className='min-h-screen w-[95%] p-5 flex justify-center items-center flex-col'>

      <div className='flex justify-center items-center flex-col gap-5 w-full h-[50%] p-5'>
        <h2 className='text-3xl text-white font-bold tracking-tighter'>Mes Projects</h2>
        <div className='md:flex justify-center items-start flex-wrap gap-5 w-full h-full space-y-5'>

          <div className='bg-slate-100 border border-gray-600  shadow-lg rounded-lg w-full md:w-[30%] h-full flex flex-col justify-start items-center pt-2 gap-2'>
            <img src={ticketing} alt=".." className='w-full max-w-75 h-auto rounded shadow-lg' />
            <div className='bg-slate-950 w-full p-2 text-white rounded-b-lg shadow-lg'>
              <div className='flex justify-between items-center'>
                <p className='text-left text-[10px] text-slate-500 font-bold'>webApp.2026</p>
                <div className='flex justify-center items-center gap-1.5'>
                  <FaLaravel className='text-red-500' />
                  <SiTailwindcss className='text-sky-400' />
                </div>
              </div>
              <p className='text-xl text-slate-200 font-bold'>Ticketing project</p>
              <p className='text-[13px] text-gray-500'>Plateforme d'assitant interne en laravel.<br />
                Création,suivi et cloture de tickets avec roles <br />
                admin,agent,client</p>
              <div className='flex justify-between items-center gap-2 w-full p-2'>
                <button className='w-32 bg-slate-900 rounded text-white hover:bg-slate-800 transition-all'>
                  <a href="https://github.com/Rdelys/vaha-admin" className='flex justify-center items-center gap-2 p-2'><BsGithub />
                    Github
                  </a>
                </button>
                <button className='w-32 bg-blue-800 rounded text-white hover:bg-blue-600 transition-all'>
                  <a href="" className='flex justify-center items-center gap-2 p-2'>
                    Voir
                    <FcNext className='text-white' />
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className='bg-slate-100 border-gray-600  shadow-lg border rounded-lg w-full md:w-[30%] h-full flex flex-col justify-start items-center pt-2 gap-2'>
            <img src={visiteur} alt=".." className='w-full max-w-[320px] h-auto rounded shadow-lg' />
            <div className='bg-slate-950 w-full p-2 text-white rounded-b-lg shadow-lg'>
              <div className='flex justify-between items-center'>
                <p className='text-left text-[10px] text-slate-500 font-bold'>webApp.2026</p>
                <div className='flex justify-center items-center gap-1.5'>
                  <GrReactjs className='text-sky-500' />
                  <SiTailwindcss className='text-sky-400' />
                  <FaPhp className='text-blue-700' />
                </div>
              </div>
              <p className='text-xl text-slate-100 font-bold'>M.visiteurs</p>
              <p className='text-[13px] text-gray-500'>Application single page ReactJS pour<br />
                enregistrer et suivre les visiteur .<br />
                Interface rapide sans rechargement</p>
              <div className='flex justify-between items-center gap-2 w-full p-2'>
                <button className='w-32 bg-slate-900 rounded text-white hover:bg-slate-800 transition-all'>
                  <a href="https://github.com/FranckyFilizene/SPAvisiteursReact" className='flex justify-center items-center gap-2 p-2'><BsGithub />
                    Github
                  </a>
                </button>
                <button className='w-32 bg-blue-800 rounded text-white hover:bg-blue-600 transition-all'>
                  <a href="https://sp-avisiteurs-react.vercel.app/" className='flex justify-center items-center gap-2 p-2'>
                    Voir
                    <FcNext className='text-white' />
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className='bg-slate-100 border border-gray-600  shadow-lg rounded-lg w-full md:w-[30%] h-full flex flex-col justify-start items-center pt-2 gap-2'>
            <img src={sout} alt=".." className='w-full max-w-[350px] h-auto rounded shadow-lg' />
            <div className='bg-slate-950 w-full p-2 text-white rounded-b-lg shadow-lg'>
              <div className='flex justify-between items-center'>
                <p className='text-left text-[10px] text-slate-500 font-bold'>webApp.2026</p>
                <div className='flex justify-center items-center gap-1.5'>
                  <GrReactjs className='text-sky-500' />
                  <SiTailwindcss className='text-sky-400' />
                  <FaPhp className='text-blue-700' />
                </div>
              </div>
              <p className='text-xl text-slate-100 font-bold'>Gestion de Soutenance</p>
              <p className='text-[13px] text-gray-500'>Plateforme Full Stack pour digitaliser les<br />
                soutenances. CRUD ,planing auto, dashboard <br />
                stats et export  pdf</p>
              <div className='flex justify-between items-center gap-2 w-full p-2'>
                <button className='w-32 bg-slate-900 rounded text-white hover:bg-slate-800 transition-all'>
                  <a href="" className='flex justify-center items-center gap-2 p-2'><BsGithub />
                    Github
                  </a>
                </button>
                <button className='w-32 bg-blue-800 rounded text-white hover:bg-blue-600 transition-all'>
                  <a href="" className='flex justify-center items-center gap-2 p-2'>
                    Voir
                    <FcNext className='text-white' />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full flex justify-center items-center flex-col space-y-2'>
        <h1 className='text-2xl font-bold tracking-tighter'>Competence clés</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          {skills.map((skill) => (
            <div
              key={skill.id}
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
                  <div
                    className="h-full rounded-full bg-red-600"
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>

                <span className="text-xs font-semibold text-slate-400">
                  {skill.progress}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projet
