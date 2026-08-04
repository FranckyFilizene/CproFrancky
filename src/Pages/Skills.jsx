import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { FaUserCheck, FaUsers } from 'react-icons/fa'
import { MdOutlineSpeed } from 'react-icons/md'
import { FaBookOpen, FaExternalLinkAlt } from 'react-icons/fa'

const articles = [
  {
    id: 1,
    category: "PHP & BDD",
    date: "2026",
    title: "Transition de mysqli vers PDO & POO en PHP",
    desc: "Pourquoi j'ai abandonné les connexions procédurales mysqli au profit de PDO : gestion des exceptions, requêtes préparées et abstraction de la base de données.",
    tags: ["#PHP", "#PDO", "#MySQL", "#POO"]
  },
  {
    id: 2,
    category: "Front-End",
    date: "2026",
    title: "Pourquoi j'ai adopté Tailwind CSS sur mes projets",
    desc: "Retour d'expérience sur l'approche Utility-First, le gain de temps à l'intégration et la gestion des styles réutilisables.",
    tags: ["#TailwindCSS", "#React", "#UI"]
  },
  {
    id: 3,
    category: "Conception & BDD",
    date: "2026",
    title: "Modéliser une base de données avec la méthode Merise",
    desc: "De la compréhension du besoin jusqu'à la création des tables : passage du Modèle Conceptuel (MCD) au Modèle Logique de Données (MLD) pour éviter les redondances.",
    tags: ["#Merise", "#MCD", "#MLD","#dbdiagram.io", "#SQL"]
  }
]

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
      <div className='min-h-screen w-[95%] p-5 flex justify-center items-center flex-col gap-8'>

        {/* Header */}
        <div className='text-center space-y-2'>
          <h1 className='text-3xl tracking-tighter font-bold flex items-center justify-center gap-2'>
            <FaBookOpen className='text-red-600' /> Veille Technologique
          </h1>
          <p className='text-slate-400 text-sm max-w-lg'>
            Mes notes, retours d'expérience et apprentissages sur les technologies du web.
          </p>
        </div>

        {/* Grid d'articles */}
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {articles.map((item) => (
            <div
              key={item.id}
              className='bg-slate-950 p-5 rounded-xl border border-slate-900 hover:border-red-900/50 transition-all duration-300 flex flex-col justify-between group shadow-lg'
            >
              <div>
                <div className='flex justify-between items-center text-xs text-slate-500 mb-3'>
                  <span className='px-2 py-1 rounded bg-red-950/40 text-red-400 font-medium border border-red-900/30'>
                    {item.category}
                  </span>
                  <span>{item.date}</span>
                </div>

                <h2 className='text-lg font-bold text-slate-200 group-hover:text-red-500 transition-colors mb-2'>
                  {item.title}
                </h2>

                <p className='text-slate-400 text-xs leading-relaxed mb-4'>
                  {item.desc}
                </p>
              </div>

              <div>
                <div className='flex gap-2 mb-4'>
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className='text-[10px] text-slate-500 font-mono'>
                      {tag}
                    </span>
                  ))}
                </div>

                <button className='w-full py-2 bg-slate-900 hover:bg-red-900/30 text-slate-300 hover:text-white rounded-lg text-xs font-semibold flex justify-center items-center gap-2 border border-slate-800 hover:border-red-800 transition-all'>
                  Lire la note <FaExternalLinkAlt size={10} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Skills