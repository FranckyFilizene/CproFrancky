import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { FcNext } from "react-icons/fc";

const CardProject = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="bg-slate-100 border border-gray-600 shadow-lg rounded-lg w-full flex flex-col overflow-hidden"
    >

      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full max-w-[350px] h-auto mx-auto rounded-t-lg object-cover"
      />

      {/* Contenu */}
      <div className="bg-slate-950 w-full p-3 text-white flex flex-col flex-1">

        {/* Type + Technologies */}
        <div className="flex justify-between items-center mb-2">

          <p className="text-left text-[10px] text-slate-500 font-bold">
            {project.type}
          </p>

          <div className="flex justify-center items-center gap-1.5">
            {project.technologies.map((tech, index) => {
              const Icon = tech.Icon;

              return (
                <Icon
                  key={index}
                  className={tech.Style}
                  title={tech.name}
                />
              );
            })}
          </div>

        </div>

        {/* Titre */}
        <p className="text-xl text-slate-100 font-bold mb-1">
          {project.title}
        </p>

        {/* Description */}
        <p className="text-[13px] text-gray-500 leading-relaxed">
          {project.description}
        </p>

        {/* Boutons */}
        <div className="flex justify-between items-center gap-2 w-full p-2 mt-auto">

          <a
            href={project.github || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-32 bg-slate-900 rounded text-white hover:bg-slate-800 transition-all flex justify-center items-center gap-2 p-2"
          >
            <BsGithub />
            Github
          </a>

          <a
            href={project.demo || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-32 bg-blue-800 rounded text-white hover:bg-blue-600 transition-all flex justify-center items-center gap-2 p-2"
          >
            Voir
            <FcNext />
          </a>

        </div>

      </div>
    </motion.div>
  );
};

export default CardProject;