import { ProjectsContext } from "@/core/hooks/context/ProjectsContext";
import { useContext } from "react";

const ProjectGallery = () => {
  const { projects, idProject } = useContext(ProjectsContext);
  const p = projects.find((project) => project.id === idProject);

  if (!p) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-20">
      {p.ProjectImages.map((pp) => (
        <div 
          key={pp.id} 
          className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-premium-surface border border-white/5 transition-all duration-500 hover:border-premium-primary/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
        >
          <div className="aspect-[16/10] sm:aspect-[4/3] overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={pp.img}
              alt={pp.title}
              loading="lazy"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 translate-y-0 sm:translate-y-full sm:group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-premium-bg/95 via-premium-bg/60 to-transparent">
            <span className="text-white font-space-grotesk font-bold text-xs sm:text-sm line-clamp-1">
              {pp.title}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery;
