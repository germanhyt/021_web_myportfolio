import { ProjectsContext } from "@/core/hooks/context/ProjectsContext";
import { useContext } from "react";
import { FiClock, FiTag, FiExternalLink } from "react-icons/fi";

const ProjectHeader = () => {
  const { projects, idProject } = useContext(ProjectsContext);
  const p = projects.find((project) => project.id === idProject);

  if (!p) return null;

  const isRepositoryLink = p.ProjectHeader.link.includes("github.com");

  return (
    <div className="mb-12">
      <h1 className="font-space-grotesk text-left text-4xl sm:text-6xl font-bold text-premium-text mb-8 leading-tight">
        {p.ProjectHeader.title}
      </h1>
      <div className="flex flex-wrap gap-8 items-center text-premium-text-muted">
        <div className="flex items-center group">
          <FiClock className="text-xl group-hover:text-premium-primary transition-colors" />
          <span className="font-manrope ml-3 text-sm font-semibold tracking-wide">
            {p.ProjectHeader.publishDate}
          </span>
        </div>
        <div className="flex items-center group">
          <FiTag className="text-xl group-hover:text-premium-accent transition-colors" />
          <span className="font-manrope ml-3 text-sm font-semibold tracking-wide">
            {p.ProjectHeader.tags}
          </span>
        </div>
        <div className="flex items-center group">
          <FiExternalLink className="text-xl group-hover:text-premium-primary transition-colors" />
          <a
            href={p.ProjectHeader.link}
            target="__blank"
            className="font-manrope ml-3 text-sm font-bold text-premium-primary hover:text-white transition-all break-all"
          >
            {isRepositoryLink ? "Ver repositorio" : "Visitar Sitio Web"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
