import React, { useState } from 'react'
import { BiDownload, BiMessage, BiSend } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { MdEmail } from 'react-icons/md'
import { BsGithub } from 'react-icons/bs'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

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

  const apiBaseUrls = [
    import.meta.env.VITE_API_URL,
    ...(import.meta.env.DEV
      ? ['http://localhost:5000']
      : ['https://francky-porfolio-api.vercel.app', 'https://francky-portfolio-api.vercel.app'])
  ].filter(Boolean);

  // Soumission du formulaire au backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    //on initialise les variable d'etats
    setStatus({ loading: true, success: null, error: null });

    try {
      let lastError = null;

      for (const apiBaseUrl of apiBaseUrls) {
        try {
          const response = await fetch(`${apiBaseUrl}/api/contact`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });

          const data = await response.json();

          if (response.ok) {
            setStatus({
              loading: false,
              success: "Votre message a bien été envoyé ! Je vous répondrai rapidement.",
              error: null
            });
            setFormData({ name: '', email: '', message: '' });
            return;
          }

          lastError = data.error || "Une erreur est survenue lors de l'envoi.";
        } catch (error) {
          lastError = error;
        }
      }

      setStatus({
        loading: false,
        success: null,
        error: lastError?.message || "Impossible de joindre le serveur. Veuillez réessayer plus tard."
      });
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

    <div className="min-h-screen w-[95%] p-5 flex justify-center items-center flex-col gap-6">

      {/* Titre de la section */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.6,
          ease: "easeOut"
        }}
        className="text-3xl md:text-4xl font-bold tracking-tighter text-center"
      >
        Contact
      </motion.h1>


      {/* Contenu Contact */}
      <div className="w-full md:flex justify-center gap-3 space-y-2 md:space-y-0">

        {/* Bloc gauche */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: "easeOut"
          }}
          className="md:w-[35%] w-full h-96 bg-slate-950 p-5 flex flex-col justify-around rounded-lg shadow-lg relative overflow-hidden"
        >

          <div className="absolute -top-5 -left-5 w-40 h-40 rounded-[50%] bg-red-900/40 z-0 blur-xl"></div>

          <div className="text-3xl tracking-tighter z-40">
            <p>
              Prete a travailler ensemble ? <br />
              Envoyez moi un message
            </p>
          </div>

          <div className="flex justify-center items-center">
            <a
              href="/CV/moncv.pdf"
              download="CV_Francky.pdf"
              className="bg-red-500 w-40 px-4 py-2 flex justify-center items-center gap-2 rounded-lg hover:bg-red-700 duration-300 cursor-pointer text-white font-bold no-underline"
            >
              Mon CV
              <BiDownload size={25} />
            </a>
          </div>

          <div className="flex gap-6 text-2xl">

            <a
              href="https://www.facebook.com/FranckyFilizene"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              <FaFacebook size={18} />
            </a>

            <a
              href="https://wa.me/+261385382860"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-500 transition-colors"
            >
              <FaWhatsapp size={18} />
            </a>

            <a
              href="https://github.com/FranckyFilizene"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-violet-500 transition-colors"
            >
              <BsGithub size={18} />
            </a>

          </div>

        </motion.div>


        {/* Formulaire de contact */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: "easeOut"
          }}
          className="flex flex-col justify-center items-center space-y-2 md:w-[50%] w-full h-full bg-gray-800 rounded-lg p-5"
        >

          {/* Formulaire */}
          <form
            action=""
            className="w-full justify-center items-center px-1"
            onSubmit={handleSubmit}
          >

            {/* Nom */}
            <label
              htmlFor="nom"
              className="text-slate-300 tracking-tighter"
            >
              Nom :
            </label>

            <div className="flex justify-center items-center text-slate-400 bg-slate-900 h-10 w-full px-2 gap-2 rounded-lg border border-slate-600">

              <CgProfile
                size={20}
                className="text-slate-500"
              />

              <input
                required
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Votre nom"
                className="w-full outline-none text-base sm:text-sm"
                name="name"
              />

            </div>


            {/* Email */}
            <label
              htmlFor="email"
              className="text-slate-300 tracking-tighter"
            >
              Email :
            </label>

            <div className="flex justify-center items-center text-slate-400 bg-slate-900 h-10 w-full px-2 gap-2 rounded-lg border border-slate-600">

              <MdEmail
                size={20}
                className="text-slate-500"
              />

              <input
                required
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Votre email"
                className="w-full outline-none text-base sm:text-sm"
                name="email"
              />

            </div>


            {/* Message */}
            <div className="flex w-full flex-col">

              <label
                htmlFor="message"
                className="text-slate-300 tracking-tighter"
              >
                Message :
              </label>

              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Message . . ."
                className="w-full resize-none bg-slate-900 rounded-lg h-32 px-2 outline-none border border-slate-600 text-base sm:text-sm"
              />

            </div>


            {/* Bouton */}
            <div className="flex justify-center items-center">

              <button
                disabled={status.loading}
                type="submit"
                className="flex w-full justify-center items-center gap-1 rounded hover:bg-green-800 cursor-pointer duration-300 bg-green-700 font-bold px-4 py-2 mt-3 text-white"
              >

                {status.loading ? (
                  <span>
                    Envoie en cours . . .
                  </span>
                ) : (
                  <span className="flex justify-center items-center gap-1">
                    Envoyer
                    <BiSend />
                  </span>
                )}

              </button>

            </div>

          </form>


          {/* Message de succès */}
          {status.success && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center"
            >
              <p className="text-sm text-emerald-400">
                {status.success}
              </p>
            </motion.div>
          )}


          {/* Message d'erreur */}
          {status.error && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-center"
            >
              <p className="text-sm text-rose-400">
                {status.error}
              </p>
            </motion.div>
          )}

        </motion.div>

      </div>

    </div>


  )
}

export default Contact
