import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import nodemailer from 'nodemailer';

//on charge la variable d'environnement
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//autorisation du frontend à accéder à du backend
const allowedOrigins = [
  process.env.FRONTEND_URL,
  'http://localhost:5173'
].filter(Boolean); // Filtrer les valeurs nulles ou indéfinies

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());

// Initialiser le SDK Gemini avec la clé cachée
const geminiApiKey =
  process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY;

const genAI = geminiApiKey
  ? new GoogleGenAI({
    apiKey: geminiApiKey
  })
  : null;
//----Le secret de mon agent : mon context ----
const SYSTEM_INSTRUCTION = `
Tu es l'assistant IA officiel du portfolio de RANAIVOMANANA FILIZENE Francky Michel.

Tu représentes son profil professionnel et tu aides les visiteurs, recruteurs et clients à découvrir son parcours, ses compétences, ses projets et ses possibilités de collaboration.

RÈGLES DE RÉPONSE :
- Réponds uniquement aux questions concernant Francky, son profil professionnel, ses compétences, ses projets, sa formation ou ses possibilités de stage et de collaboration.
- Réponds en français.
- Adopte un ton professionnel, naturel, chaleureux et accessible.
- Réponds de manière concise et claire, généralement en 3 à 6 phrases.
- Tu peux utiliser des listes lorsque cela améliore la lisibilité.
- Ne crée jamais de compétence, de projet, d'expérience, de diplôme ou d'information personnelle qui n'est pas indiquée dans ces instructions.
- Si une information n'est pas disponible, indique simplement que cette information n'est pas renseignée sur le portfolio.
- Pour les questions sans rapport avec le profil de Francky, explique poliment que tu es spécialisé dans la présentation de son profil professionnel.

PROFIL :
Nom : RANAIVOMANANA FILIZENE Francky Michel.

Formation :
- Étudiant en 2ᵉ année à l'École Nationale d'Informatique (ENI).
- Formation orientée vers la programmation, le développement web et logiciel, les bases de données et la conception d'applications.

COMPÉTENCES :

Frontend :
- React
- Vue.js
- JavaScript
- Tailwind CSS
- HTML5
- CSS3

Backend :
- PHP
- Laravel
- Java
- Node.js
- Express.js

Bases de données :
- MySQL
- PostgreSQL

Outils et environnement :
- Git
- GitHub
- Vercel
- Thunder Client
- Visual Studio Code
- IntelliJ IDEA
- Scene Builder

PROJETS :

1. Gestion de Soutenance
- Plateforme Full Stack destinée à digitaliser la gestion des soutenances.
- Fonctionnalités : CRUD, planning automatique, tableau de bord statistique et export PDF.
- Technologies principales : PHP, MySQL et CSS.

2. BoxIA
- Application d'intelligence artificielle conçue pour fournir des réponses aux utilisateurs.
- Technologies principales : React, Tailwind CSS et Express.js.

3. Gestion de pharmacie
- Application desktop développée avec JavaFX et PostgreSQL.
- Elle permet de gérer les médicaments, les stocks et les achats.
- Technologies principales : Java, JavaFX, PostgreSQL et IntelliJ IDEA.

4. M.visiteurs
- Application Single Page ReactJS destinée à l'enregistrement et au suivi des visiteurs.
- L'interface permet une utilisation rapide sans rechargement de page.
- Technologies principales : React, Tailwind CSS et PHP.

5. Ticketing
- Plateforme interne de gestion de tickets développée avec Laravel.
- Elle permet la création, le suivi et la clôture des tickets.
- Elle prend en charge plusieurs rôles : administrateur, agent et client.
- Technologies principales : Laravel et Tailwind CSS.

6. IzeflienDEV
- Site vitrine développé pour une agence web.
- Il présente ses services, ses projets et son activité.
- Technologies principales : React, Tailwind CSS et Express.js.

7. Portfolio RJAina
- Site portfolio développé pour Aina Rajaonary.
- Il présente ses services, sa galerie et son formulaire de contact.
- Technologies principales : React, Tailwind CSS et Express.js.

PORTFOLIO PERSONNEL :
- Francky possède également son propre portfolio professionnel.
- Celui-ci présente son profil, ses compétences et ses projets.
- Le portfolio intègre un assistant IA permettant aux visiteurs d'obtenir des informations sur son parcours et son travail.

STAGE ET COLLABORATION :
- Francky recherche des opportunités de stage académique de 2ᵉ année dans le domaine du développement informatique.
- Il est également ouvert aux opportunités de collaboration et aux projets liés au développement web et logiciel.

CONTACT :
- Les visiteurs peuvent utiliser le formulaire de contact disponible sur le portfolio pour une demande de stage, une collaboration ou une opportunité professionnelle.

IMPORTANT :
- Lorsque l'utilisateur demande quels sont les projets de Francky, présente les projets réellement indiqués dans cette instruction.
- Lorsque l'utilisateur demande ses compétences, base-toi uniquement sur la liste fournie ci-dessus.
- Ne prétends pas que Francky maîtrise une technologie qui n'est pas mentionnée ici.
- Ne donne pas d'informations personnelles sensibles ou non présentes dans ces instructions.
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
      return (
        "Francky a réalisé plusieurs projets en développement web et logiciel, notamment :\n\n" +

        "• Gestion de Soutenance : plateforme Full Stack permettant de digitaliser les soutenances, avec CRUD, planning automatique, tableau de bord statistique et export PDF.\n" +

        "• BoxIA : application d'intelligence artificielle développée avec React, Tailwind CSS et Express.js.\n" +

        "• Gestion de pharmacie : application desktop développée avec JavaFX et PostgreSQL pour gérer les médicaments, les stocks et les achats.\n" +

        "• M.visiteurs : application Single Page ReactJS permettant d'enregistrer et de suivre les visiteurs sans rechargement de page.\n" +

        "• Ticketing : plateforme interne développée avec Laravel permettant la création, le suivi et la clôture des tickets avec différents rôles.\n" +

        "• IzeflienDEV : site vitrine développé pour une agence web afin de présenter ses services, ses projets et son activité.\n" +

        "• Portfolio RJAina : site portfolio présentant les services, la galerie et le formulaire de contact de Aina Rajaonary."
      );
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
      return "Francky possède des compétences dans plusieurs domaines du développement informatique.\n\n" +
        "• Frontend : React, Vue.js, JavaScript, Tailwind CSS.\n" +
        "• Backend : PHP, Java, Node.js et Express.js.\n" +
        "• Bases de données : MySQL et PostgreSQL.\n" +
        "• Outils : Git, GitHub, Vercel, Thunder Client, Visual Studio Code, IntelliJ IDEA et Scene Builder.";
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
      return "Francky est actuellement étudiant en 2ᵉ année à l'École Nationale d'Informatique (ENI). " +
        "Sa formation lui permet de développer ses compétences en programmation, développement web et logiciel, bases de données et conception d'applications.";
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
    return "Bonjour et bienvenue sur ce portfolio ! Je suis l'assistant virtuel de Francky. Je peux vous renseigner sur son parcours, ses projets, ses compétences techniques, sa formation à l'École Nationale d'Informatique (ENI), ainsi que sur ses disponibilités pour un stage, une collaboration ou une opportunité de recrutement.\n\nJe suis spécialisé dans les informations liées à ce portfolio. Si votre question porte sur un autre sujet, comme une recette de cuisine, l'actualité ou des conseils généraux, je vous inviterai à revenir à des questions concernant son profil. Comment puis-je vous aider ?";
  };

  if (!genAI) {
    return res.json({ reply: getFallbackReply() });
  }

  try {
    const response = await genAI.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION
      }
    });

    return res.json({
      reply: response.text
    });

  } catch (error) {
    console.error('Erreur Gemini API:', error);

    return res.json({
      reply: getFallbackReply()
    });
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
    from: `"Portfolio • Francky RM" <${process.env.EMAIL_USER}>`,
    replyTo: email,
    to: process.env.EMAIL_USER,

    subject: `📩 Nouveau message de ${name} — Portfolio`,

    text: `
NOUVEAU MESSAGE — PORTFOLIO FRANCKY RM

Vous avez reçu un nouveau message depuis votre portfolio.

EXPÉDITEUR
Nom : ${name}
Email : ${email}

MESSAGE
${message}

--------------------------------
Vous pouvez répondre directement à ${email}.
Portfolio • Francky RM
`,

    html: `
<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Nouveau message — Portfolio</title>

  <style>

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: 0;
      background-color: #f1f5f9;
      font-family:
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        Roboto,
        Helvetica,
        Arial,
        sans-serif;
      color: #0f172a;
    }

    .wrapper {
      width: 100%;
      padding: 40px 15px;
      background-color: #f1f5f9;
    }

    .container {
      width: 100%;
      max-width: 620px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 16px;
      overflow: hidden;
      border: 1px solid #e2e8f0;
      box-shadow:
        0 10px 25px rgba(15, 23, 42, 0.08);
    }

    /* ================= HEADER ================= */

    .header {
      background-color: #020617;
      padding: 28px 30px;
      border-bottom: 3px solid #dc2626;
    }

    .brand {
      font-size: 18px;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: -0.5px;
    }

    .brand span {
      color: #ef4444;
    }

    .header-content {
      margin-top: 22px;
    }

    .badge {
      display: inline-block;
      padding: 5px 10px;
      background-color: rgba(220, 38, 38, 0.15);
      border: 1px solid rgba(239, 68, 68, 0.35);
      color: #f87171;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.6px;
    }

    .header-title {
      margin: 12px 0 0 0;
      color: #ffffff;
      font-size: 24px;
      line-height: 1.3;
      font-weight: 700;
    }

    .header-description {
      margin: 8px 0 0 0;
      color: #94a3b8;
      font-size: 13px;
      line-height: 1.6;
    }

    /* ================= CONTENT ================= */

    .content {
      padding: 30px;
    }

    .section-title {
      margin: 0 0 15px 0;
      font-size: 12px;
      font-weight: 700;
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 0.8px;
    }

    /* ================= EXPÉDITEUR ================= */

    .sender {
      padding: 18px;
      background-color: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
    }

    .sender-row {
      display: table;
      width: 100%;
      margin-bottom: 10px;
    }

    .sender-row:last-child {
      margin-bottom: 0;
    }

    .sender-label {
      display: table-cell;
      width: 80px;
      color: #64748b;
      font-size: 13px;
      font-weight: 600;
      vertical-align: middle;
    }

    .sender-value {
      display: table-cell;
      color: #0f172a;
      font-size: 14px;
      font-weight: 600;
      vertical-align: middle;
    }

    .sender-email {
      color: #2563eb;
      text-decoration: none;
      font-weight: 500;
    }

    /* ================= MESSAGE ================= */

    .message-section {
      margin-top: 28px;
    }

    .message {
      padding: 20px;
      background-color: #020617;
      border-radius: 12px;
      border-left: 4px solid #dc2626;
    }

    .message-text {
      margin: 0;
      color: #cbd5e1;
      font-size: 14px;
      line-height: 1.7;
      white-space: pre-wrap;
      word-break: break-word;
    }

    /* ================= ACTION ================= */

    .action {
      text-align: center;
      padding-top: 28px;
    }

    .reply-button {
      display: inline-block;
      padding: 12px 24px;
      background-color: #dc2626;
      color: #ffffff !important;
      text-decoration: none;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 700;
    }

    .reply-button:hover {
      background-color: #b91c1c;
    }

    .action-description {
      margin: 12px 0 0 0;
      color: #94a3b8;
      font-size: 11px;
    }

    /* ================= FOOTER ================= */

    .footer {
      padding: 20px 30px;
      background-color: #f8fafc;
      border-top: 1px solid #e2e8f0;
      text-align: center;
    }

    .footer-brand {
      margin: 0;
      color: #0f172a;
      font-size: 12px;
      font-weight: 700;
    }

    .footer-text {
      margin: 5px 0 0 0;
      color: #94a3b8;
      font-size: 11px;
    }

    /* ================= MOBILE ================= */

    @media only screen and (max-width: 600px) {

      .wrapper {
        padding: 20px 10px;
      }

      .header {
        padding: 24px 20px;
      }

      .content {
        padding: 22px 20px;
      }

      .header-title {
        font-size: 21px;
      }

      .sender-label {
        width: 65px;
      }

      .footer {
        padding: 18px 20px;
      }

    }

  </style>

</head>

<body>

  <div class="wrapper">

    <div class="container">

      <!-- ================= HEADER ================= -->

      <div class="header">

        <div class="brand">
          <span>rm.</span>Francky
        </div>

        <div class="header-content">

          <span class="badge">
            Nouveau message
          </span>

          <h1 class="header-title">
            Vous avez reçu un message
          </h1>

          <p class="header-description">
            Une nouvelle personne vous a contacté depuis votre portfolio.
          </p>

        </div>

      </div>


      <!-- ================= CONTENT ================= -->

      <div class="content">

        <!-- Expéditeur -->

        <p class="section-title">
          Informations de l'expéditeur
        </p>

        <div class="sender">

          <div class="sender-row">

            <span class="sender-label">
              Nom
            </span>

            <span class="sender-value">
              ${name}
            </span>

          </div>

          <div class="sender-row">

            <span class="sender-label">
              Email
            </span>

            <span class="sender-value">

              <a
                href="mailto:${email}"
                class="sender-email"
              >
                ${email}
              </a>

            </span>

          </div>

        </div>


        <!-- Message -->

        <div class="message-section">

          <p class="section-title">
            Message
          </p>

          <div class="message">

            <p class="message-text">
              ${message}
            </p>

          </div>

        </div>


        <!-- Action -->

        <div class="action">

          <a
            href="mailto:${email}"
            class="reply-button"
          >
            Répondre à ${name}
          </a>

          <p class="action-description">
            Cliquez sur le bouton pour répondre directement à l'expéditeur.
          </p>

        </div>

      </div>


      <!-- ================= FOOTER ================= -->

      <div class="footer">

        <p class="footer-brand">
          rm.Francky — Portfolio
        </p>

        <p class="footer-text">
          Notification automatique • Ce message a été envoyé depuis le formulaire de contact.
        </p>

      </div>

    </div>

  </div>

</body>

</html>
`

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