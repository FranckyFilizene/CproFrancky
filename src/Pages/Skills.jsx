import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { FaUserCheck, FaUsers } from 'react-icons/fa'
import { MdOutlineSpeed } from 'react-icons/md'
import { FaBookOpen, FaExternalLinkAlt } from 'react-icons/fa'

const Skills = () => {
  return (
    <div className='min-h-screen w-[95%] p-5 flex justify-center items-center flex-col gap-4'>
      <h1 className='text-3xl tracking-tighter font-bold'>Soft Skills & Savoir-être</h1>

      <div className='w-full md:flex justify-center items-center gap-2 space-y-2 md:space-y-0'>

        {/* Colonne Gauche */}
        <div className='flex justify-center items-center w-full flex-col gap-2'>

          {/* Autonomie */}
          <div className='w-full h-full bg-slate-950 p-4 rounded-lg shadow-lg border border-red-950 relative overflow-hidden'>
            <div className='absolute -top-5 -left-5 w-40 h-40 rounded-[50%] bg-red-900/40 z-0 blur-xl'></div>
            <div className='flex flex-col z-10 relative'>
              <FaUserCheck size={50} className='text-red-500 mb-2' />
              <h2 className='text-xl font-bold tracking-tighter text-slate-200 mb-1'>Autonomie</h2>
              <p className='text-slate-400 font-normal text-xs leading-relaxed'>
                Capable de chercher des solutions par moi-même, de lire la documentation officielle
                et de débloquer rapidement des problèmes techniques sans attendre systématiquement de l'aide.
              </p>
            </div>
          </div>

          {/* Dynamisme & Réactivité */}
          <div className='w-full h-full bg-slate-950 p-4 rounded-lg shadow-lg border border-red-950 relative overflow-hidden'>
            <div className='absolute -top-5 -left-5 w-40 h-40 rounded-[50%] bg-red-900/40 z-0 blur-xl'></div>
            <div className='flex flex-col z-10 relative'>
              <MdOutlineSpeed size={50} className='text-red-500 mb-2' />
              <h2 className='text-xl font-bold tracking-tighter text-slate-200 mb-1'>Dynamisme & Proactivité</h2>
              <p className='text-slate-400 font-normal text-xs leading-relaxed'>
                Toujours motivé à m'investir pleinement dans les projets.
                Je m'adapte vite aux changements, j'aime relever des défis et faire avancer les tâches efficacement.
              </p>
            </div>
          </div>

        </div>

        <div className='w-full flex justify-center items-center flex-col gap-2'>

          {/* Esprit d'équipe */}
          <div className='w-full h-full bg-slate-950 p-4 rounded-lg shadow-lg border border-red-950 relative overflow-hidden'>
            <div className='absolute -top-5 -left-5 w-40 h-40 rounded-[50%] bg-red-900/40 z-0 blur-xl'></div>
            <div className='flex flex-col z-10 relative'>
              <FaUsers size={50} className='text-red-500 mb-2' />
              <h2 className='text-xl font-bold tracking-tighter text-slate-200 mb-1'>Esprit d'équipe</h2>
              <p className='text-slate-400 font-normal text-xs leading-relaxed'>
                À l'aise dans le travail collaboratif (Git, revues de code, communication).
                J'aime partager mes connaissances, écouter les retours et avancer ensemble vers un objectif commun.
              </p>
            </div>
          </div>

          {/* Curiosité Technique */}
          <div className='w-full h-full bg-slate-950 p-4 rounded-lg shadow-lg border border-red-950 relative overflow-hidden'>
            <div className='absolute -top-5 -left-5 w-40 h-40 rounded-[50%] bg-red-900/40 z-0 blur-xl'></div>
            <div className='flex flex-col z-10 relative'>
              <BiSearchAlt size={50} className='text-red-500 mb-2' />
              <h2 className='text-xl font-bold tracking-tighter text-slate-200 mb-1'>Curiosité Technique</h2>
              <p className='text-slate-400 font-normal text-xs leading-relaxed'>
                En veille permanente sur les nouvelles technologies et bonnes pratiques.
                Passionné par l'apprentissage continu et l'expérimentation de nouveaux frameworks ou outils.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Skills