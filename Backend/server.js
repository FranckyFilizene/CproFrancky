import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
import nodemailer from 'nodemailer';

//on charge la variable d'environnement
dotenv.config({ path: new URL('./.env', import.meta.url) });

const app = express();
const PORT = process.env.PORT || 5000;

//autorisation du frontend à accéder à du backend
app.use(cors());
app.use(express.json());

// Initialiser le SDK Gemini avec la clé cachée
const geminiApiKey = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY;
const hasValidGeminiKey = typeof geminiApiKey === 'string' && geminiApiKey.startsWith('AIza');
const genAI = hasValidGeminiKey ? new GoogleGenerativeAI({ apiKey: geminiApiKey }) : null;

//----Le secret de mon agent : mon context ----
const SYSTEM_INSTRUCTION = `
Tu es l'assistant virtuel exclusif de Ranaivomanana Filizene Francky Michel, un Développeur Full Stack Junior.
Ton rôle est de répondre aux recruteurs et visiteurs de son portfolio de manière professionnelle, brève et chaleureuse.

Voici tes directives strictes :
1. Présente-toi comme l'IA de Francky.
2. Utilise les informations suivantes pour répondre :
   - Compétences Frontend : React, Vue.js, Tailwind CSS.
   - Compétences Backend : PHP, Laravel, MySQL, PostgreSQL.
   - Projets notables : 'GearUp' (boutique de sport en React/Tailwind), 'SPAvisiteur' (gestion de visiteurs en React/PHP), et son portfolio actuel.
3. Si on te pose une question hors-sujet (ex: une recette de cuisine, de la politique, ou sur un autre développeur), réponds poliment que tu es uniquement programmé pour parler des projets et des compétences de Francky.
`;

app.get('/', (req, res) => {
    res.json({
        status: 'ok',
        message: 'API portfolio Francky opérationnelle',
        endpoints: ['/api/chat', '/api/contact']
    });
});

//route Api pour le chat
app.post('/api/chat', async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'Le message est vide.' });
    }

    const normalizedMessage = String(message).trim().toLowerCase();

    const getFallbackReply = () => {
        if (normalizedMessage.includes('bonjour') || normalizedMessage.includes('salut')) {
            return 'Bonjour ! Je suis l’assistant de Francky. Je peux vous parler de ses projets, ses compétences et son parcours.';
        }

        if (normalizedMessage.includes('projet') || normalizedMessage.includes('travail') || normalizedMessage.includes('portfolio')) {
            return 'Francky a travaillé sur des projets comme GearUp, SPAvisiteur et son portfolio actuel, avec un focus sur React, Tailwind et PHP/Laravel.';
        }

        if (
            normalizedMessage.includes('compétence') ||
            normalizedMessage.includes('competence') ||
            normalizedMessage.includes('tech') ||
            normalizedMessage.includes('framework') ||
            normalizedMessage.includes('frameworks') ||
            normalizedMessage.includes('langage') ||
            normalizedMessage.includes('langages')
        ) {
            return 'Francky maîtrise principalement React, Vue.js, Tailwind CSS, PHP, Laravel, MySQL et PostgreSQL. Ce sont les frameworks et technologies qu’il utilise le plus.';
        }

        return 'Je peux vous parler de Francky, de ses projets et de ses compétences. L’IA directe est actuellement indisponible, mais je peux déjà vous répondre avec les informations de son portfolio.';
    };

    if (!hasValidGeminiKey) {
        return res.json({ reply: getFallbackReply() });
    }

    try {
        const modelsToTry = ['gemini-2.0-flash', 'gemini-2.0-flash-lite'];
        let lastError = null;

        for (const modelName of modelsToTry) {
            try {
                const model = genAI.getGenerativeModel({
                    model: modelName,
                    systemInstruction: SYSTEM_INSTRUCTION
                });

                const result = await model.generateContent(message);
                const response = await result.response;

                return res.json({ reply: response.text() });
            } catch (error) {
                lastError = error;
                console.error(`Erreur avec ${modelName}:`, error);
            }
        }

        throw lastError || new Error('Aucun modèle Gemini n’a pu répondre.');
    } catch (error) {
        console.error('Erreur Gemini API:', error);
        return res.json({ reply: getFallbackReply() });
    }
});



//configuration du transporteur pour nodemailer avec Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

//Creer le route post pour revevor les données du formulaire de contact et envoyer un email
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Tous les champs sont requis.' });
    }

    const mailOptions = {
        from: `"Portfolio Francky" <${process.env.EMAIL_USER}>`,
        replyTo: email,
        to: process.env.EMAIL_USER,
        subject: `Nouveau Message portfolio de ${name}`,
        text: `Vous avez reçu un nouveau message depuis votre portfolio :\n\n` +
            `Nom : ${name}\n` +
            `Email : ${email}\n\n` +
            `Message :\n${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.json({ success: 'Votre message a été envoyé avec succès' });
    } catch (error) {
        console.error('Erreur Nodemailer :', error);
        return res.json({ success: 'Votre message a été reçu. L’envoi par e-mail n’a pas pu être finalisé pour le moment.' });
    }
});

if (!process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`Le serveur de l'Agent IA tourne sur http://localhost:${PORT}`);
    });
}

export default app;