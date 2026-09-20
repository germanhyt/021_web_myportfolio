import { ProjectsContext } from "@/core/hooks/context/ProjectsContext";
import { useContext } from "react";
import { FiClock, FiTag, FiExternalLink } from "react-icons/fi";
import { trackOutboundLink } from "@/core/helpers/analytics";
import { useLanguage } from "@/core/hooks/context/LanguageContext";
import { translations } from "@/core/data/translations";

const ProjectHeader = () => {
  const { projects, idProject } = useContext(ProjectsContext);
  const { lang } = useLanguage();
  const t = translations[lang].projectDetail;

  const p = projects.find((project) => project.id === idProject);

  if (!p) return null;

  const isRepositoryLink = p.ProjectHeader.link.includes("github.com");

  return (
    <div className="mb-8 sm:mb-12">
      <h1 className="font-space-grotesk text-left text-2xl sm:text-4xl lg:text-6xl font-bold text-premium-text mb-4 sm:mb-8 leading-tight">
        {p.ProjectHeader.title}
      </h1>
      <div className="flex flex-wrap gap-4 sm:gap-8 items-center text-premium-text-muted">
        <div className="flex items-center group">
          <FiClock className="text-base sm:text-xl group-hover:text-premium-primary transition-colors" />
          <span className="font-manrope ml-2 sm:ml-3 text-xs sm:text-sm font-semibold tracking-wide">
            {p.ProjectHeader.publishDate}
          </span>
        </div>
        <div className="flex items-center group">
          <FiTag className="text-base sm:text-xl group-hover:text-premium-accent transition-colors" />
          <span className="font-manrope ml-2 sm:ml-3 text-xs sm:text-sm font-semibold tracking-wide">
            {p.ProjectHeader.tags}
          </span>
        </div>
        <div className="flex items-center group">
          <FiExternalLink className="text-base sm:text-xl group-hover:text-premium-primary transition-colors" />
          <a
            href={p.ProjectHeader.link}
            target="__blank"
            onClick={() => trackOutboundLink(p.ProjectHeader.link, `project_header_${isRepositoryLink ? "repo" : "live"}`)}
            className="font-manrope ml-2 sm:ml-3 text-xs sm:text-sm font-bold text-premium-primary hover:text-white transition-all break-all"
          >
            {isRepositoryLink ? t.viewRepo : t.visitWebsite}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
