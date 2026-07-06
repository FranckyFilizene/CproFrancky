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
        <div className='flex justify-center items-center flex-col gap-2 md:w-[50%] w-full space-y-3 bg-slate-950 py-5 rounded-xl shadow-lg'>

          <div className='flex flex-col items-center justify-center w-full px-2'>
            <h2 className='w-full text-[13px] font-semibold tracking-[5px]'>Mes Framework</h2>
            <span className='flex items-center gap-2 w-full'>
              <GrReactjs className='text-sky-500' />
              <FaLaravel className='text-red-600' />
              <FaVuejs className='text-green-800' />
            </span>
            <div className='flex justify-center items-center gap-2 w-full'>
              <div className='w-full h-1 bg-gray-700'>
                <div className='w-[57%] h-1 bg-red-400 rounded-r-xl'></div>
              </div>
              <p className='text-[10px] font-bold text-gray-400'>57%</p>
            </div>
          </div>

          <div className='flex flex-col justify-center items-center w-full px-2'>
            <h2 className='w-full text-[13px] font-semibold tracking-[5px]'>Mes langages</h2>
            <span className='flex items-center gap-2 w-full'>
              <FaJs className='text-yellow-300' />
              <FaPhp className='text-blue-800' />
            </span>
            <div className='flex justify-center items-center gap-2 w-full'>
              <div className='w-full h-1 bg-gray-700'>
                <div className='w-[75%] h-1 bg-red-400 rounded-r-xl'></div>
              </div>
              <p className='text-[10px] font-bold text-gray-400'>75%</p>
            </div>
          </div>

          <div className='flex flex-col justify-center items-center w-full px-2'>
            <h2 className='w-full text-[13px] font-semibold tracking-[5px]'>Base de données</h2>
            <span className='flex items-center gap-2 w-full'>
              <DiMysql className='text-sky-700' />
            </span>
            <div className='flex justify-center items-center gap-2 w-full'>
              <div className='w-full h-1 bg-gray-700'>
                <div className='w-[80%] h-1 bg-red-400 rounded-r-xl'></div>
              </div>
              <p className='text-[10px] font-bold text-gray-400'>80%</p>
            </div>
          </div>

          <div className='flex flex-col justify-center items-center w-full px-2'>
            <h2 className='w-full text-[13px] font-semibold tracking-[5px]'>Technologies Web</h2>
            <span className='flex items-center gap-2 w-full'>
              <FaHtml5 className='text-red-600' />
              <FaCss className='text-violet-700' />
              <SiTailwindcss className='text-sky-500' />
              <BsBootstrap className='text-violet-950' />
            </span>
            <div className='flex justify-center items-center gap-2 w-full'>
              <div className='w-full h-1 bg-gray-700'>
                <div className='w-[80%] h-1 bg-red-400 rounded-r-xl'></div>
              </div>
              <p className='text-[10px] font-bold text-gray-400'>80%</p>
            </div>
          </div>

          <div className='flex flex-col justify-center items-center w-full px-2'>
            <h2 className='w-full text-[13px] font-semibold tracking-[5px]'>Outils IA</h2>
            <span className='flex items-center gap-2 w-full'>
              <BsClaude className='text-orange-800' />
              <BsOpenai />
              <SiGooglegemini />
            </span>
            <div className='flex justify-center items-center gap-2 w-full'>
              <div className='w-full h-1 bg-gray-700'>
                <div className='w-[70%] h-1 bg-red-400 rounded-r-xl'></div>
              </div>
              <p className='text-[10px] font-bold text-gray-400'>70%</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Projet
