import React, { useState } from 'react'
import { BiDownload, BiMessage, BiSend } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { MdEmail } from 'react-icons/md'
import { BsGithub } from 'react-icons/bs'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  //Etat du formulaire nom ,email, message
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // État pour gérer les retours de l'API (chargement, succès, erreur)
  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null
  });

  // Mettre à jour l'état quand l'utilisateur écrit dans les champs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const apiBaseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  // Soumission du formulaire au backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    //on initialise les variable d'etats
    setStatus({ loading: true, success: null, error: null });

    try {
      //appel de l'api du contact sur mon server local dans le server.js
      const response = await fetch(`${apiBaseUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        // Succès ! On affiche le message et on vide les champs
        setStatus({
          loading: false,
          success: "Votre message a bien été envoyé ! Je vous répondrai rapidement.",
          error: null
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Erreur renvoyée par le serveur (ex: champs manquants)
        setStatus({
          loading: false,
          success: null,
          error: data.error || "Une erreur est survenue lors de l'envoi."
        });
      }
    } catch (error) {
      // Erreur réseau (serveur éteint, mauvaise URL, etc.)
      console.error("Erreur connexion formulaire:", error);
      setStatus({
        loading: false,
        success: null,
        error: "Impossible de joindre le serveur. Veuillez réessayer plus tard."
      });
    }
  };


  return (
    <div className='min-h-screen w-[95%] p-5 md:flex justify-center gap-3 space-y-2'>

      <div className='md:w-[35%] w-full h-96 bg-slate-950 p-5 flex flex-col justify-around rounded-lg shadow-lg relative overflow-hidden'>
        <div className='absolute w-44 h-44 rounded-[50%] bg-red-900 -top-5 z-0 -right-5 border-2 border-slate-600'></div>
        <div className='text-3xl tracking-tighter z-40'>
          <p>Prete a travailler ensemble ? <br />
            Envoyez moi un message</p>
        </div>
        <div className='flex justify-center items-center'>
          <button className='bg-red-500 w-40 px-4 py-2 flex justify-center items-center gap-2 rounded-lg hover:bg-red-700 duration-300 cursor-pointer'>
            <a href="" className='text-decoration-none text-white font-bold'>Mon CV</a>
            <BiDownload size={25} />
          </button>
        </div>
        <div className="flex gap-6 text-2xl">
          <a
            href="https://www.facebook.com/FranckyFilizene"
            className="text-gray-300 hover:text-blue-500"
          >
            <FaFacebook size={18} />
          </a>

          <a
            href="https://wa.me/+261385382860"
            className="text-gray-300 hover:text-green-500"
          >
            <FaWhatsapp size={18} />
          </a>

          <a
            href="https://www.github.com/FranckyFilizene"
            className="text-gray-300 hover:text-violet-500"
          >
            <BsGithub size={18} />
          </a>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center space-y-2 md:w-[60%] w-full h-full bg-gray-800 rounded-lg p-5'>
        <h2 className='text-3xl font-bold'>Contact</h2>
        <form action="" className='w-full px-8' onSubmit={handleSubmit}>
          <label htmlFor="nom" className='text-slate-300 tracking-tighter'>Nom :</label>
          <div className='flex justify-center items-center text-slate-400 bg-slate-900 h-10 w-full px-2 gap-2 rounded-lg border border-red-950'>
            <CgProfile size={20} className='text-red-900' />
            <input 
            required
            value={formData.name}
            onChange={handleChange}
            type="text" 
            placeholder='Votre nom' 
            className='w-full outline-none' 
            name='name' />
          </div>

          <label htmlFor="email" className='text-slate-300 tracking-tighter'>Email :</label>
          <div className='flex justify-center items-center text-slate-400 bg-slate-900 h-10 w-full px-2 gap-2 rounded-lg border border-red-950'>
            <MdEmail size={20} className='text-red-900' />
            <input
            required
            value={formData.email}
            onChange={handleChange} 
            type="text" 
            placeholder='Votre email' 
            className='w-full outline-none' 
            name='email' />
          </div>

          <div className='flex w-full flex-col'>
            <label htmlFor="nom" className='text-slate-300 tracking-tighter'>Message :</label>
            <textarea 
            name="message" 
            id="message" 
            value={formData.message}
            onChange={handleChange}
            required
            rows='4'
            placeholder='Message .  .  .' 
            className='w-full resize-none bg-slate-900 rounded-lg h-32 px-2 outline-none border border-red-950'>

            </textarea>
          </div>
          <div>
            <button 
            disabled = {status.loading}

            type="submit" 
            className='flex justify-center items-center gap-1 rounded hover:bg-slate-700 cursor-pointer duration-300 bg-slate-950 font-bold px-4 py-2 mt-3 text-white'>
            {
              status.loading ? 
              (<span className="flex justify-center items-center gap-1">Envoie en cours . . . </span>) :
              (<span className='flex justify-center items-center gap-1'>Envoyer<BiSend /></span>)
            }
            </button>
          </div>
        </form>
        {/* --- RETOURS VISUELS D'ÉTAT --- */}
        {status.success && (
          <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
            <p className="text-sm text-emerald-400">{status.success}</p>
          </div>
        )}

        {status.error && (
          <div className="mt-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-center">
            <p className="text-sm text-rose-400">{status.error}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Contact
