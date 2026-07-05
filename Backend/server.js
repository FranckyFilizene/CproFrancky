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
Tu es l'assistant IA officiel de Ranaivomanana Filizene Francky Michel.

Tu représentes son portfolio professionnel.

Ton objectif est d'aider les recruteurs, clients et visiteurs à découvrir son profil.

Tu réponds toujours :
- de manière professionnelle ;
- avec un ton courtois et chaleureux ;
- avec des réponses courtes (3 à 6 phrases maximum) ;
- uniquement à propos de Francky, de ses compétences, de ses projets, de son parcours et de ses coordonnées professionnelles.

Ses compétences principales :
• Frontend : React, Vue.js, Tailwind CSS
• Backend : PHP, Laravel, Node.js, Express.js
• Base de données : MySQL, PostgreSQL
• Outils : Git, GitHub, Vercel

Ses principaux projets :
- GearUp : plateforme e-commerce.
- SPAVisiteur : application de gestion des visiteurs.
- Portfolio personnel avec assistant IA intégré.

Si une question est hors sujet (politique, médecine, cuisine, etc.), explique poliment que tu es exclusivement conçu pour présenter le profil professionnel de Francky.
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
        // Salutations
        if (
            normalizedMessage.includes('bonjour') ||
            normalizedMessage.includes('salut') ||
            normalizedMessage.includes('bonsoir') ||
            normalizedMessage.includes('hello')
        ) {
            return "Bonjour et bienvenue ! Je suis l'assistant virtuel de Francky, Développeur Full Stack Junior. Je suis à votre disposition pour répondre à vos questions concernant son profil, ses compétences, ses projets ou son parcours professionnel.";
        }

        // Projets
        if (
            normalizedMessage.includes('projet') ||
            normalizedMessage.includes('portfolio') ||
            normalizedMessage.includes('réalisation') ||
            normalizedMessage.includes('travail')
        ) {
            return "Francky a réalisé plusieurs projets web, notamment GearUp (e-commerce d'articles de sport), SPAVisiteur (gestion des visiteurs) ainsi que ce portfolio interactif. Ces projets mettent en avant ses compétences en React, Tailwind CSS, PHP, Laravel et les bases de données relationnelles.";
        }

        // Compétences
        if (
            normalizedMessage.includes('compétence') ||
            normalizedMessage.includes('competence') ||
            normalizedMessage.includes('technologie') ||
            normalizedMessage.includes('tech') ||
            normalizedMessage.includes('framework') ||
            normalizedMessage.includes('langage')
        ) {
            return "Francky possède des compétences en développement Frontend avec React, Vue.js et Tailwind CSS, ainsi qu'en développement Backend avec PHP, Laravel, Node.js, MySQL et PostgreSQL. Il maîtrise également Git, GitHub et les bonnes pratiques du développement web moderne.";
        }

        // Formation
        if (
            normalizedMessage.includes('formation') ||
            normalizedMessage.includes('étude') ||
            normalizedMessage.includes('université') ||
            normalizedMessage.includes('ecole')
        ) {
            return "Francky est actuellement en formation en informatique et développe continuellement ses compétences à travers des projets concrets et une veille technologique régulière.";
        }

        // Contact
        if (
            normalizedMessage.includes('contact') ||
            normalizedMessage.includes('email') ||
            normalizedMessage.includes('embauche') ||
            normalizedMessage.includes('recrutement')
        ) {
            return "Si vous souhaitez échanger avec Francky concernant une opportunité professionnelle, un stage ou une collaboration, vous pouvez utiliser le formulaire de contact disponible sur ce portfolio. Il vous répondra dans les meilleurs délais.";
        }

        // Remerciement
        if (
            normalizedMessage.includes('merci') ||
            normalizedMessage.includes('thanks')
        ) {
            return "Avec plaisir ! N'hésitez pas à me poser d'autres questions concernant le parcours, les compétences ou les projets de Francky.";
        }

        // Réponse par défaut
        return "Je suis l'assistant virtuel de Francky. Je peux vous renseigner sur son parcours, ses compétences techniques, ses projets, son expérience et ses coordonnées. N'hésitez pas à me poser votre question.";
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