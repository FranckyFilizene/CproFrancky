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
            return "Bonjour et bienvenue ! Je suis l'assistant virtuel de ce portfolio. Je suis à votre disposition pour vous présenter son profil, ses compétences en développement web et logiciel, ainsi que l'ensemble de ses réalisations.";
        }

        // Projets
        if (
            normalizedMessage.includes('projet') ||
            normalizedMessage.includes('portfolio') ||
            normalizedMessage.includes('réalisation') ||
            normalizedMessage.includes('realisation') ||
            normalizedMessage.includes('travail') ||
            normalizedMessage.includes('projet')
        ) {
            return "Voici un aperçu de ses principales réalisations :\n\n" +
                "🛠️ Applications de Gestion & Systèmes Métier :\n" +
                "• Gestion de soutenance : Solution de suivi académique (étudiants, sujets et jurys).\n" +
                "• SPAvisiteur : Application web CRUD dédiée à la gestion complète des visiteurs.\n" +
                "• Ticketing : Plateforme de gestion des tickets d'assistance (authentification, suivi & tableau de bord).\n" +
                "• Gestion d'association étudiante : Application desktop/web pour le suivi des membres, événements et cotisations.\n\n" +
                "🌐 Plateformes Web & Intelligence Artificielle :\n" +
                "• BOXIA : Plateforme web moderne intégrant un chatbot IA (React, Express.js, Tailwind CSS, API IA).\n" +
                "• GEARUP : Site e-commerce responsive dédié aux équipements de voyage et randonnée.\n\n" +
                "🎨 Vitrines, Clubs & sur-mesure :\n" +
                "• Portfolios professionnels : Conception de sites vitrines responsives et sur-mesure pour développeurs.\n" +
                "• Site web pour un club : Plateforme de gestion des activités et actualités (React, Node.js/Express, MySQL).";
        }

        // Compétences
        if (
            normalizedMessage.includes('compétence') ||
            normalizedMessage.includes('competence') ||
            normalizedMessage.includes('technologie') ||
            normalizedMessage.includes('tech') ||
            normalizedMessage.includes('framework') ||
            normalizedMessage.includes('langage') ||
            normalizedMessage.includes('outil')
        ) {
            return "Ses compétences techniques couvrent l'ensemble du cycle de développement :\n\n" +
                "• Développement Frontend : React, Vue.js, JavaScript (ES6+), Tailwind CSS, SCSS, HTML5/CSS3\n" +
                "• Développement Backend : PHP, Node.js / Express.js, C# (WinForms), Assemblage x86\n" +
                "• Gestion de données : MySQL, PostgreSQL (Conception BDD, requêtes complexes)\n" +
                "• Outils & Méthodes : Git, GitHub, REST APIs, Intégration d'APIs IA, WampServer/XAMPP, DOSBox";
        }

        // Formation
        if (
            normalizedMessage.includes('formation') ||
            normalizedMessage.includes('étude') ||
            normalizedMessage.includes('etude') ||
            normalizedMessage.includes('université') ||
            normalizedMessage.includes('ecole') ||
            normalizedMessage.includes('eni') ||
            normalizedMessage.includes('parcours')
        ) {
            return "Il poursuit actuellement ses études en 2ème année à l'École Nationale d'Informatique (ENI), où il approfondit le développement logiciel, les architectures web et la gestion de bases de données.";
        }

        // Contact / Embauche / Stage
        if (
            normalizedMessage.includes('contact') ||
            normalizedMessage.includes('email') ||
            normalizedMessage.includes('embauche') ||
            normalizedMessage.includes('stage') ||
            normalizedMessage.includes('recrutement') ||
            normalizedMessage.includes('joindre')
        ) {
            return "Actuellement à la recherche d'un stage académique de 2ème année ou d'une opportunité de collaboration professionnelle, il est joignable directement via le formulaire de contact de ce portfolio.";
        }

        // Remerciement
        if (
            normalizedMessage.includes('merci') ||
            normalizedMessage.includes('thanks') ||
            normalizedMessage.includes('super')
        ) {
            return "C'est un plaisir de vous renseigner ! N'hésitez pas si vous souhaitez obtenir d'autres détails sur son parcours ou ses projets.";
        }

        // Réponse par défaut
        return "Je suis l'assistant virtuel de ce portfolio. Je peux vous renseigner sur ses projets, ses compétences techniques, sa formation à l'ENI ou sa recherche de stage. Comment puis-je vous aider ?";
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