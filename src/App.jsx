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
    <div className='bg-gray-900 text-white min-h-screen scroll-smooth'>
        <Navbar />
        <main>
          <section id='home' className='min-h-screen pt-15 flex justify-center items-center box-border'>
            <Home />
          </section>
          <section id='projet' className='min-h-screen pt-15 flex justify-center items-center box-border'>
            <Projet />
          </section>
          <section id='skills' className='min-h-screen pt-15 flex justify-center items-center box-border'>
            <Skills />
          </section>
          <section id='contact' className='min-h-screen pt-15 flex justify-center items-center box-border'>
            <Contact />
          </section>
          <AssistantIA/>
        </main>
        <Footer/>
    </div>
  )
}

export default App
