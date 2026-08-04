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
            return "Voici un aperçu de ses principales réalisations, illustrant sa capacité à concevoir et développer des applications répondant à des besoins concrets, aussi bien dans le domaine académique que professionnel.\n\n" +

                "🛠️ Applications de Gestion & Systèmes Métier :\n" +
                "• Gestion de soutenance : Application permettant d'organiser et de suivre les soutenances, avec la gestion des étudiants, des sujets, des encadreurs et des jurys.\n" +
                "• SPAvisiteur : Application web CRUD dédiée à la gestion complète des visiteurs, incluant l'enregistrement, le suivi et la consultation des données.\n" +
                "• Ticketing : Plateforme de gestion des tickets d'assistance intégrant l'authentification des utilisateurs, le suivi des demandes, les statuts et un tableau de bord interactif.\n" +
                "• Gestion d'association étudiante : Solution de gestion des membres, des événements, des cotisations et des statistiques pour faciliter l'administration d'une association.\n\n" +

                "🌐 Plateformes Web & Solutions Innovantes :\n" +
                "• BOXIA : Plateforme web moderne intégrant un assistant conversationnel basé sur l'intelligence artificielle, développée avec React, Express.js, Tailwind CSS et une API IA.\n" +
                "• GEARUP : Site e-commerce responsive conçu pour la vente d'équipements de voyage et de randonnée, mettant l'accent sur l'expérience utilisateur et un design moderne.\n\n" +

                "🎨 Sites Vitrines & Développement sur mesure :\n" +
                "• Portfolios professionnels : Conception de sites vitrines personnalisés, responsives et optimisés pour mettre en valeur le profil et les réalisations de développeurs.\n" +
                "• Site web pour un club : Développement d'une plateforme permettant de gérer les activités, les actualités et les membres du club avec React, Express.js et MySQL."
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
            return "Ses compétences techniques couvrent l'ensemble du cycle de développement d'applications web, lui permettant de concevoir des solutions complètes, performantes et évolutives.\n\n" +
                "• Développement Frontend : Développement d'interfaces utilisateur modernes, responsives et interactives avec React, Vue.js, JavaScript (ES6+), Tailwind CSS, SCSS, HTML5 et CSS3, en privilégiant l'expérience utilisateur.\n" +
                "• Développement Backend : Création d'API REST sécurisées, gestion de la logique applicative et intégration de services avec PHP, Node.js et Express.js.\n" +
                "• Gestion de bases de données : Conception, modélisation et optimisation de bases de données relationnelles avec MySQL et PostgreSQL afin de garantir la fiabilité, la cohérence et les performances des données."
        }

        // Formation
        if (
            normalizedMessage.includes('formation') ||
            normalizedMessage.includes('étude') ||
            normalizedMessage.includes('etude') ||
            normalizedMessage.includes('etudie') ||
            normalizedMessage.includes('université') ||
            normalizedMessage.includes('ecole') ||
            normalizedMessage.includes('eni') ||
            normalizedMessage.includes('parcours')
        ) {
            return "Il poursuit actuellement ses études en 2ᵉ année à l'École Nationale d'Informatique (ENI), où il renforce ses compétences en développement logiciel, en conception d'applications web, en architecture logicielle et en gestion de bases de données. Cette formation lui permet d'acquérir une solide maîtrise des technologies modernes et des bonnes pratiques du développement informatique.";
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
            return "Si votre demande concerne un stage, une opportunité d'embauche, une collaboration ou un recrutement, sachez qu'il est actuellement à la recherche d'un stage académique de 2ᵉ année et reste ouvert à toute opportunité professionnelle. N'hésitez pas à utiliser le formulaire de contact de ce portfolio pour échanger avec lui ; il vous répondra dans les meilleurs délais.";
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
        return "Bonjour et bienvenue sur ce portfolio ! Je suis l'assistant virtuel de Francky. Je peux vous renseigner sur son parcours, ses projets, ses compétences techniques, sa formation à l'École Nationale d'Informatique (ENI), ainsi que sur ses disponibilités pour un stage, une collaboration ou une opportunité de recrutement.\n\nJe suis spécialisé dans les informations liées à ce portfolio. Si votre question porte sur un autre sujet, comme une recette de cuisine, l'actualité ou des conseils généraux
        , je vous inviterai à revenir à des questions concernant son profil. Comment puis-je vous aider ?";
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