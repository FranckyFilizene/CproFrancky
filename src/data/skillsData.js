import { BsGithub } from 'react-icons/bs'
import { FcNext } from 'react-icons/fc'
import { GiGemini } from 'react-icons/gi'
import { DiMysql } from 'react-icons/di'
import { FaCss } from 'react-icons/fa6'
import { BsBootstrap, BsClaude, BsDatabase, BsOpenai } from 'react-icons/bs'
import { FaHtml5, FaJs, FaLaravel, FaPhp, FaVuejs } from 'react-icons/fa'
import { GrReactjs } from 'react-icons/gr'
import { SiGooglegemini, SiTailwindcss } from 'react-icons/si'

const skills= [
    {
        id: "I",
        title: "Mes Frameworks",
        progress: 57,
        icons: [
            {Icon : GrReactjs, Style :"text-sky-500" },
            {Icon : FaLaravel, Style :"text-red-600" },
            {Icon : FaVuejs, Style :"text-green-600" },
        ],
    },
    {
        id: "II",
        title: "Mes Langages",
        progress: 75,
        icons: [
            {Icon : FaJs , Style : "text-yellow-300"},
            {Icon : FaPhp, Style :"text-blue-800"},
        ],
    },
    {
        id: "III",
        title: "Base de données",
        progress: 80,
        icons: [
            {Icon : DiMysql, Style :"text-sky-300"}
        ],
    },
    {
        id: "IV",
        title: "Technologies Web",
        progress: 80,
        icons: [
            {Icon : FaHtml5 ,Style :'text-red-600'},
            {Icon : FaCss, Style: 'text-violet-700'},
            {Icon : SiTailwindcss, Style :'text-sky-500'},
            {Icon : BsBootstrap, Style:'text-violet-950'}
        ],
    },
    {
        id: "V",
        title: "Outils IA",
        progress: 70,
        icons: [
            {Icon : BsClaude, Style: 'text-orange-800'},
            {Icon : BsOpenai, Style :'text-white'},
            {Icon : SiGooglegemini, Style : 'text-white'}
        ],
    },
];

export default skills;