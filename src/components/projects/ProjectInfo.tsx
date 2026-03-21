import { ProjectsContext } from "@/core/hooks/context/ProjectsContext";
import { useContext } from "react";

const ProjectInfo = () => {
  const { projects, idProject } = useContext(ProjectsContext);

  const currentProject = projects.find((project) => project.id === idProject);

  if (!currentProject) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-20">
      <div className="lg:col-span-1 space-y-10">
        {/* Client Details */}
        <div className="bg-premium-surface/30 p-8 rounded-3xl border border-white/5">
          <h3 className="font-space-grotesk text-xl font-bold text-premium-text mb-6">
            {currentProject.ProjectInfo.ClientHeading}
          </h3>
          <ul className="space-y-4">
            {currentProject.ProjectInfo.CompanyInfo.map((info) => (
              <li key={info.id} className="flex flex-col">
                <span className="text-xs font-space-grotesk uppercase tracking-widest text-premium-accent font-bold">
                  {info.title}
                </span>
                <span className="text-premium-text-muted font-manrope">
                  {info.details}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Objectives */}
        <div className="bg-premium-surface/30 p-8 rounded-3xl border border-white/5">
          <h3 className="font-space-grotesk text-xl font-bold text-premium-text mb-4">
            {currentProject.ProjectInfo.ObjectivesHeading}
          </h3>
          <p className="text-premium-text-muted font-manrope leading-relaxed">
            {currentProject.ProjectInfo.ObjectivesDetails}
          </p>
        </div>

        {/* Technologies */}
        <div className="bg-premium-surface/30 p-8 rounded-3xl border border-white/5">
          <h3 className="font-space-grotesk text-xl font-bold text-premium-text mb-4">
            {currentProject.ProjectInfo.Technologies[0]?.title || "Tecnologías"}
          </h3>
          <div className="flex flex-wrap gap-2">
            {currentProject.ProjectInfo.Technologies[0]?.techs.map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-full bg-premium-bg border border-white/5 text-xs font-bold text-premium-primary">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="lg:col-span-2">
        <h2 className="font-space-grotesk text-2xl font-bold text-premium-text mb-8">
          {currentProject.ProjectInfo.ProjectDetailsHeading}
        </h2>
        <div className="space-y-6">
          {currentProject.ProjectInfo.ProjectDetails.map((details) => (
            <p
              key={details.id}
              className="font-manrope text-lg leading-relaxed text-premium-text-muted"
            >
              {details.details}
            </p>
          ))}
        </div>
        
        {/* Social Sharing */}
        <div className="mt-12 pt-12 border-t border-white/5">
          <h4 className="font-space-grotesk text-sm font-bold text-premium-text-muted uppercase tracking-widest mb-6">
            {currentProject.ProjectInfo.SocialSharingHeading}
          </h4>
          <div className="flex items-center gap-4">
            {currentProject.ProjectInfo.SocialSharing.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="__blank"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-premium-surface border border-white/5 text-premium-text-muted hover:text-premium-primary hover:border-premium-primary/50 transition-all duration-300"
              >
                <span className="text-xl">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
