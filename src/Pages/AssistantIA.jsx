
import React, { useState, useRef, useEffect } from 'react';
import { IoChatbubbleEllipses, IoSend } from 'react-icons/io5';

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: "Bonjour ! Je suis l'assistant virtuel de Francky. Posez-moi vos questions sur ses projets ou ses compétences !"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const chatEndRef = useRef(null);

  // Auto-scroll vers le bas à chaque nouveau message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const apiBaseUrls = [
    import.meta.env.VITE_API_URL,
    ...(import.meta.env.DEV
      ? ['http://localhost:5000']
      : ['https://francky-portfolio-api.vercel.app', 'https://francky-portfolio-api.vercel.app'])
  ].filter(Boolean);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');

    // Ajouter le message de l'utilisateur
    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: userMessage }
    ]);

    setIsLoading(true);

    try {
      let lastError = null;

      for (const apiBaseUrl of apiBaseUrls) {
        try {
          const response = await fetch(`${apiBaseUrl}/api/chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: userMessage }),
          });

          const data = await response.json();

          if (data.reply) {
            setMessages((prev) => [
              ...prev,
              { sender: 'ai', text: data.reply }
            ]);
            return;
          }

          lastError = new Error(
            data.error || 'Oups, je rencontre un petit problème technique.'
          );
        } catch (error) {
          lastError = error;
        }
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: lastError?.message || 'Impossible de joindre mon serveur pour le moment.'
        }
      ]);

    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: error.message || 'Impossible de joindre mon serveur pour le moment.'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans text-slate-100 sm:bottom-7 sm:right-7">

      {/* BOUTON FLOTTANT */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Ouvrir l'assistant IA"
          className="group flex h-16 w-16 items-center justify-center rounded-full border border-red-400/20 bg-gradient-to-br from-red-500 via-red-600 to-red-800 text-white shadow-[0_8px_35px_rgba(220,38,38,0.35)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_45px_rgba(220,38,38,0.5)] active:scale-95 sm:h-16 sm:w-16"
        >
          <IoChatbubbleEllipses className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
        </button>
      )}

      {/* FENÊTRE DE DISCUSSION */}
      {isOpen && (
        <div className="flex h-[78vh] w-[calc(100vw-2rem)] max-w-[25rem] flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#09090b] shadow-[0_25px_100px_rgba(0,0,0,0.65)] ring-1 ring-white/[0.03] sm:h-[520px] sm:w-[400px]">

          {/* HEADER */}
          <div className="flex items-center justify-between border-b border-white/[0.06] bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-950 px-5 py-4">

            <div className="flex items-center gap-3">

              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10">
                <span className="absolute left-0 top-0 h-full w-full rounded-xl bg-red-500/10"></span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="relative h-5 w-5 text-red-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 3.75h6A2.25 2.25 0 0 1 17.25 6v12A2.25 2.25 0 0 1 15 20.25H9A2.25 2.25 0 0 1 6.75 18V6A2.25 2.25 0 0 1 9 3.75Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 7.5h4m-4 3h4m-4 3h2"
                  />
                </svg>
              </div>

              <div className="space-y-0.5">
                <h3 className="text-sm font-semibold tracking-wide text-white">
                  Assistant IA
                </h3>

                <p className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span>
                  En ligne · Infos sur Francky
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Fermer l'assistant"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.05] bg-white/[0.03] text-zinc-400 transition-all duration-200 hover:border-white/10 hover:bg-white/[0.08] hover:text-white active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>

          </div>

          {/* ZONE DES MESSAGES */}
          <div className="flex-1 space-y-5 overflow-y-auto bg-[#09090b] px-4 py-5 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl px-4 py-3 text-[13px] leading-6 shadow-lg sm:max-w-[82%]
                    ${
                      msg.sender === 'user'
                        ? 'rounded-br-md border border-red-500/20 bg-gradient-to-br from-red-600 to-red-700 text-white shadow-red-950/20'
                        : 'rounded-bl-md border border-white/[0.06] bg-zinc-900/80 text-zinc-300 shadow-black/10'
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* ANIMATION DE CHARGEMENT */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-white/[0.06] bg-zinc-900/80 px-4 py-3.5 shadow-lg">

                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-red-400 [animation-delay:-0.3s]"></span>

                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-red-400 [animation-delay:-0.15s]"></span>

                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-red-400"></span>

                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* FORMULAIRE D'ENVOI */}
          <form
            onSubmit={handleSendMessage}
            className="border-t border-white/[0.06] bg-zinc-950 px-4 py-4"
          >
            <div className="relative flex items-center">

              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Posez une question..."
                className="w-full rounded-xl border border-white/[0.08] bg-zinc-900/80 py-3 pl-4 pr-12 text-sm text-zinc-200 placeholder-zinc-500 outline-none transition-all duration-200 focus:border-red-500/50 focus:bg-zinc-900 focus:ring-2 focus:ring-red-500/10"
              />

              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                aria-label="Envoyer le message"
                className="absolute right-2 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-red-700 text-white shadow-md shadow-red-900/20 transition-all duration-200 hover:from-red-400 hover:to-red-600 active:scale-95 disabled:cursor-not-allowed disabled:opacity-30 disabled:shadow-none"
              >
                <IoSend className="h-4 w-4" />
              </button>

            </div>
          </form>

        </div>
      )}
    </div>
  );
}
