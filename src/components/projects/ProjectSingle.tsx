import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface IProps {
  title: string;
  category: string;
  image: string;
  numberproject: number;
}

const ProjectSingle = ({ title, category, image, numberproject }: IProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        ease: "easeOut",
        duration: 0.6,
        delay: (numberproject % 3) * 0.1,
      }}
      className="group"
    >
      <Link
        to={`/projects/${numberproject}`}
        aria-label="Single Project"
        className="block"
      >
        <div className="relative overflow-hidden rounded-[2.5rem] bg-premium-surface border border-premium-text/5 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_30px_60px_-15px_rgba(144,147,255,0.15)] group-hover:-translate-y-3">
          {/* Project Image Container */}
          <div className="relative overflow-hidden aspect-[16/10]">
            {/* Subtle overlay that lightens up on hover */}
            <div className="absolute inset-0 bg-premium-bg/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
            
            <img
              src={image}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              alt={title}
              loading="lazy"
            />
            
            {/* Tag in image */}
            <div className="absolute top-6 left-6 z-20">
              <span className="px-5 py-2 rounded-2xl bg-premium-bg/80 backdrop-blur-md border border-premium-text/5 text-[10px] font-space-grotesk font-black uppercase tracking-[0.2em] text-premium-primary">
                {category}
              </span>
            </div>

            {/* View Project Pill - Appears on Hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
               <div className="px-6 py-3 bg-white text-black font-space-grotesk font-bold rounded-full shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500 flex items-center gap-2">
                 Ver Caso de Estudio
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                 </svg>
               </div>
            </div>
          </div>

          {/* Project Content */}
          <div className="p-8 lg:p-10">
            <h3 className="font-space-grotesk font-bold text-2xl lg:text-3xl text-premium-text lg:mb-2 leading-tight">
              {title}
            </h3>
            <p className="font-manrope text-premium-text-muted text-sm line-clamp-2">
               Explora los desafíos técnicos y la arquitectura implementada en este proyecto de alto impacto.
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectSingle;
