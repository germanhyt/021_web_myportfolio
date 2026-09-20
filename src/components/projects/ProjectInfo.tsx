import { ProjectsContext } from "@/core/hooks/context/ProjectsContext";
import { useContext } from "react";
import { trackOutboundLink } from "@/core/helpers/analytics";
import { useLanguage } from "@/core/hooks/context/LanguageContext";
import { translations } from "@/core/data/translations";

const ProjectInfo = () => {
  const { projects, idProject } = useContext(ProjectsContext);
  const { lang } = useLanguage();
  const t = translations[lang].projectDetail;

  const currentProject = projects.find((project) => project.id === idProject);

  if (!currentProject) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 mt-6 sm:mt-12 lg:mt-16 mb-8 sm:mb-12">
      <aside className="lg:col-span-4 space-y-5 sm:space-y-6">
        <div className="bg-premium-surface/30 p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-white/5">
          <h3 className="font-space-grotesk text-base sm:text-lg font-bold text-premium-text mb-4 sm:mb-5">
            {t.clientHeading}
          </h3>
          <ul className="space-y-3 sm:space-y-4">
            {currentProject.ProjectInfo.CompanyInfo.map((info) => (
              <li key={info.id} className="flex flex-col gap-1">
                <span className="text-[10px] sm:text-xs font-space-grotesk uppercase tracking-widest text-premium-accent font-bold">
                  {info.title}
                </span>
                <span className="text-premium-text-muted font-manrope break-words text-xs sm:text-sm leading-relaxed">
                  {info.details}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-premium-surface/30 p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-white/5">
          <h4 className="font-space-grotesk text-xs sm:text-sm font-bold text-premium-text-muted uppercase tracking-widest mb-4 sm:mb-6">
            {t.linksHeading}
          </h4>
          <div className="flex items-center gap-3">
            {currentProject.ProjectInfo.SocialSharing.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="__blank"
                onClick={() => trackOutboundLink(social.url, `project_social_${social.name.toLowerCase()}`)}
                aria-label={social.name}
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-premium-surface border border-white/5 text-premium-text-muted hover:text-premium-primary hover:border-premium-primary/50 transition-all duration-300"
              >
                <span className="text-lg sm:text-xl">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </aside>

      <section className="lg:col-span-8 space-y-5 sm:space-y-6">
        <div className="bg-gradient-to-br from-premium-surface/60 to-premium-surface/20 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-premium-primary/30 shadow-[0_10px_40px_rgba(139,92,246,0.08)]">
          <h3 className="font-space-grotesk text-lg sm:text-xl font-bold text-premium-text mb-3 sm:mb-4">
            {t.objectiveHeading}
          </h3>
          <p className="text-premium-text-muted font-manrope leading-relaxed text-sm sm:text-lg max-w-4xl">
            {currentProject.ProjectInfo.ObjectivesDetails}
          </p>
        </div>

        {currentProject.ProjectInfo.Technologies.map((technologyGroup) => (
          <div
            key={technologyGroup.title}
            className="bg-premium-surface/30 p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-white/5"
          >
            <h3 className="font-space-grotesk text-lg sm:text-xl font-bold text-premium-text mb-3 sm:mb-4">
              {technologyGroup.title}
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {technologyGroup.techs.map((tech) => (
                <span
                  key={`${technologyGroup.title}-${tech}`}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-premium-bg border border-white/5 text-[10px] sm:text-xs font-bold text-premium-primary tracking-wide uppercase"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-premium-surface/20 p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-white/5">
          <h2 className="font-space-grotesk text-xl sm:text-2xl font-bold text-premium-text mb-4 sm:mb-6">
            {t.scopeHeading}
          </h2>
          <div className="space-y-2.5 sm:space-y-3">
            {currentProject.ProjectInfo.ProjectDetails.map((details, index) => (
              <article
                key={details.id}
                className="bg-premium-surface/30 border border-white/5 rounded-xl sm:rounded-2xl p-3.5 sm:p-4"
              >
                <p className="font-manrope text-xs sm:text-[15px] leading-relaxed text-premium-text-muted">
                  <span className="font-space-grotesk text-premium-primary font-bold mr-2">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  {details.details}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectInfo;
