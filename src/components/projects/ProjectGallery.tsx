import { ProjectsContext } from "@/core/hooks/context/ProjectsContext";
import { useContext } from "react";

const ProjectGallery = () => {
  const { projects, idProject } = useContext(ProjectsContext);
  const p = projects.find((project) => project.id === idProject);

  if (!p) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
      {p.ProjectImages.map((pp) => (
        <div 
          key={pp.id} 
          className="group relative overflow-hidden rounded-3xl bg-premium-surface border border-white/5 transition-all duration-500 hover:border-premium-primary/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={pp.img}
              alt={pp.title}
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-premium-bg/90 to-transparent">
            <span className="text-white font-space-grotesk font-bold text-sm">
              {pp.title}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery;
