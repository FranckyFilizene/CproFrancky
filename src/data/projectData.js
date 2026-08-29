import boxia from "../assets/box-ia.png";
import soutenance from "../assets/soutenance.png";
import ticketing from "../assets/ticketing.png";
import visiter from "../assets/visiter.png";
import pharmacie from "../assets/Pharmacie.png";

import {
    DiReact,
    DiPhp,
    DiMysql,
    DiCss3,
    DiPostgresql,
    DiJava,
    DiIntellij,
    DiLaravel
} from "react-icons/di";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import { TbSchema } from "react-icons/tb";

const project = [

    {
        id: 1,
        type: "WebApp.2026",
        title: "Gestion de Soutenance",
        image: soutenance,
        description: "Plateforme Full Stack pour digitaliser les soutenances. CRUD ,planing auto, dashboard stats et export  pdf",
        technologies: [
            { Icon: DiPhp, Style: "text-blue-600" },
            { Icon: DiMysql, Style: "text-sky-400" },
            { Icon: DiCss3, Style: "text-blue-400" },
        ],
        github: "",
        demo: ""
    },
    {
        id: 2,
        type: "WebApp.2026",
        title: "BoxIA",
        image: boxia,
        description: "Intelligence artificiel rapide, précise et accessible a tous. Toujour pret a repondre a tout les question ",
        technologies: [
            { Icon: DiReact, Style: "text-sky-600" },
            { Icon: SiTailwindcss, Style: "text-sky-600" },
            { Icon: SiExpress, Style: "text-green-400" }
        ],
        github: "https://github.com/FranckyFilizene/boxia",
        demo: "https://box-ia.vercel.app/"
    },
    {
        id: 3,
        type: "WebApp.2026",
        title: "Gestion de pharmacie",
        image: pharmacie,
        description: "Application desktop de gestion de pharmacie développée avec JavaFX et PostgreSQL, permettant de gérer les médicaments, les stocks et les achats.",
        technologies: [
            { Icon: DiJava, Style: "text-red-500" },
            { Icon: DiCss3, Style: "text-blue-600" },
            { Icon: DiIntellij, Style: "white" },
            { Icon: DiPostgresql, Style: "text-blue-400" },
            { Icon: TbSchema, Style: "text-blue-700" }
        ],
        github: "https://github.com/FranckyFilizene/boxia",
        demo: "https://box-ia.vercel.app/"
    },
    {
        id: 4,
        type: "WebAp2026",
        title: "M.visiteurs",
        image: visiter,
        description: "Application single page ReactJS pour enregistrer et suivre les visiteur .Interface rapide sans rechargement",
        technologies: [
            { Icon: DiReact, Style: "text-sky-600" },
            { Icon: SiTailwindcss, Style: "text-sky-600" },
            { Icon: DiPhp, Style: "text-blue-600" }
        ],
        github: "https://github.com/FranckyFilizene/SPAvisiteursReact",
        demo: "https://sp-avisiteurs-react.vercel.app/"
    },
    {
        id: 5,
        type: "WebApp.2026",
        title: "Ticketing",
        image: ticketing,
        description: "Plateforme d'assitant interne en laravel. Création,suivi et cloture de tickets avec roles admin,agent,client",
        technologies: [
            { Icon: SiTailwindcss, Style: "text-sky-600" },
            { Icon: DiLaravel, Style: "text-red-600" }
        ],
        github: "",
        demo: ""
    },
]

export default project;

