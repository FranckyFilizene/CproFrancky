import React from 'react'
import { BiCode } from 'react-icons/bi'
import { BsDatabase } from 'react-icons/bs'
import { DiResponsive } from 'react-icons/di'
import { GrOptimize } from 'react-icons/gr'

const Skills = () => {
  return (
    <div className='min-h-screen w-[95%] p-5 flex justify-center items-center flex-col gap-4'>
      <h1 className='text-3xl tracking-tighter font-bold'>Skills</h1>
      <div className='w-full md:flex justify-center items-center gap-2 space-y-2'>
        <div className='flex justify-center items-center w-full flex-col gap-2'>
          <div className='w-full h-full bg-slate-950 p-3 rounded-lg shadow-lg border border-red-950 relative overflow-hidden'>
            <div className='absolute -top-5 -left-5 w-40 h-40 rounded-[50%] bg-red-900 z-0'></div>
            <div className='flex flex-col z-40'>
              <h1 className='z-40 text-2xl font-bold tracking-tighter text-slate-200'><BiCode size={60} className='text-slate-50' />Développement Full Stack</h1>
              <p className='text-slate-400 z-40 font-thin text-[12px]'>
                Pour moi, il est important de connaitre tout <br />
                les aspects du processus de developpement web. <br />
                J'apprends toutes les technologies qui m'aideront a créer <br />
                des applications qui améliorent la vie des gens
              </p>
            </div>
          </div>
          <div className='w-full h-full bg-slate-950 p-3 rounded-lg shadow-lg border border-red-950 relative overflow-hidden'>
            <div className='absolute -top-5 -left-5 w-40 h-40 rounded-[50%] bg-red-900 z-0'></div>
            <div className='flex flex-col z-40'>
              <h1 className='z-40 text-2xl font-bold tracking-tighter text-slate-200'><DiResponsive size={60} className='text-slate-50' />Responsive & Accecssibilité</h1>
              <p className='text-slate-400 z-40 font-thin text-[12px]'>
                Je code des sites qui s’adaptent à tous les écrans.  <br />
                Je respecte les normes WCAG pour que tout le monde, <br />
                 y compris les personnes en situation de <br />
                  handicap, puisse naviguer facilement.
              </p>
            </div>
          </div>
        </div>

        <div className='w-full flex justify-center items-center flex-col gap-2'>
          <div className='w-full h-full bg-slate-950 p-3 rounded-lg shadow-lg border border-red-950 relative overflow-hidden'>
            <div className='absolute -top-5 -left-5 w-40 h-40 rounded-[50%] bg-red-900 z-0'></div>
            <div className='flex flex-col z-40'>
              <h1 className='z-40 text-2xl font-bold tracking-tighter text-slate-200'><BsDatabase size={60} className='text-slate-50' />Base de Données & Sécurité</h1>
              <p className='text-slate-400 z-40 font-thin text-[12px]'>
                Je maîtrise PHP, MySQL et PDO. Je sécurise <br />
                 les applications contre les injections <br />
                  SQL et je structure des bases de données <br />
                   propres et efficaces.
              </p>
            </div>
          </div>
          <div className='w-full h-full bg-slate-950 p-3 rounded-lg shadow-lg border border-red-950 relative overflow-hidden'>
            <div className='absolute -top-5 -left-5 w-40 h-40 rounded-[50%] bg-red-900 z-0'></div>
            <div className='flex flex-col z-40'>
              <h1 className='z-40 text-2xl font-bold tracking-tighter text-slate-200'><GrOptimize size={60} className='text-slate-50' />Optimisation Performance</h1>
              <p className='text-slate-400 z-40 font-thin text-[12px]'>
                Je rends les sites web rapides et légers. <br />
                 Je maîtrise le lazy loading, la compression <br />
                  d’images et le SEO technique pour <br />
                   un meilleur score Lighthouse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
