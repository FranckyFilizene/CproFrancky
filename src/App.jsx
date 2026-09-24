import { useState } from 'react'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Projet from './Pages/Projet'
import Skills from './Pages/Skills'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import AssistantIA from './Pages/AssistantIA'
import './App.css'

function App() {

  return (
    <div className='bg-gray-900 text-white min-h-screen scroll-smooth overflow-x-hidden'>
      <Navbar />
      <main className='w-full overflow-x-hidden'>
        <section id='home' className='min-h-screen pt-20 flex justify-center items-center box-border overflow-hidden'>
          <Home />
        </section>
        <section id='projet' className='min-h-screen pt-20 flex justify-center items-center box-border overflow-hidden'>
          <Projet />
        </section>
        <section id='skills' className='min-h-screen pt-20 flex justify-center items-center box-border overflow-hidden'>
          <Skills />
        </section>
        <section id='contact' className='min-h-screen pt-20 flex justify-center items-center box-border overflow-hidden'>
          <Contact />
        </section>
        <AssistantIA/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
