import { useContext, useState } from "react";
import { FiSearch } from "react-icons/fi";
import ProjectSingle from "./ProjectSingle";
import { ProjectsContext } from "@/core/hooks/context/ProjectsContext";
import ProjectsFilter from "./ProjectsFilter";
import { motion } from "framer-motion";
import { trackClick, trackEvent } from "@/core/helpers/analytics";
import { useLanguage } from "@/core/hooks/context/LanguageContext";
import { translations } from "@/core/data/translations";

interface IProps {
  page: any;
}

const ProjectsGrid = ({ page }: IProps) => {
  const {
    projects,
    searchProject,
    setSearchProject,
    searchProjectsByTitle,
    selectProject,
    setSelectProject,
    selectProjectsByCategory,
  } = useContext(ProjectsContext);

  const { lang } = useLanguage();
  const t = translations[lang].grid;

  const [projectsquantity, setProjectProjectsquantity] = useState<number>(6);

  const handleAddProjects = () => {
    setProjectProjectsquantity(projectsquantity + 6);
    trackClick("load_more_projects_btn", { new_quantity: projectsquantity + 6 });
  };

  const filteredProjects = selectProject
    ? selectProjectsByCategory
    : searchProject
      ? searchProjectsByTitle
      : projects;

  const displayProjects = page === "home"
    ? filteredProjects.filter((_, index) => index < projectsquantity)
    : filteredProjects;

  return (
    <section id="projects" className="scroll-mt-28 py-24 px-4 sm:px-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="max-w-4xl mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-space-grotesk font-extrabold text-premium-text tracking-tighter"
          >
            {t.titlePrefix}<span className="text-gradient">{t.titleGradient}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-premium-text-muted font-manrope text-lg max-w-2xl leading-relaxed"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Filters Bar */}
        <div className="bg-premium-surface/50 p-6 sm:p-8 rounded-[3rem] border border-premium-text/5 backdrop-blur-xl mb-16 hover:border-premium-primary/20 transition-colors shadow-sm">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="w-full lg:w-3/5 flex items-center gap-4 bg-premium-bg border border-premium-text/5 rounded-2xl px-6 focus-within:border-premium-primary focus-within:ring-2 focus-within:ring-premium-primary/20 transition-all duration-300">
              <FiSearch className="text-premium-text-muted w-5 h-5" />
              <input
                onChange={(e) => {
                  const val = e.target.value;
                  setSearchProject(val);
                  if (val.length > 2) {
                    trackEvent("search_projects", { query: val });
                  }
                }}
                className="w-full py-5 bg-transparent text-premium-text placeholder:text-premium-text-muted focus:outline-none font-manrope text-lg"
                id="name"
                name="name"
                type="search"
                placeholder={t.searchPlaceholder}
                aria-label="Buscar Proyectos"
              />
            </div>

            <div className="w-full lg:w-auto">
              <ProjectsFilter setSelectProject={setSelectProject} />
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {displayProjects.map((project) => (
            <ProjectSingle
              title={project.title}
              category={project.category}
              image={project.img}
              numberproject={project.id}
              key={project.id}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-xl text-premium-text-muted font-manrope font-bold italic ">
              {t.emptyState}
            </p>
          </div>
        )}

        {/* Load More Button */}
        {page === "home" && filteredProjects.length > projectsquantity && (
          <div className="mt-20 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-10 py-5 bg-premium-text text-premium-bg rounded-2xl font-space-grotesk font-black uppercase text-sm tracking-widest hover:shadow-2xl hover:shadow-premium-text/20 transition-all duration-300"
              onClick={handleAddProjects}
            >
              {t.loadMoreBtn}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGrid;
