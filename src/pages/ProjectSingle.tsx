import ProjectGallery from "@/components/projects/ProjectGallery";
import ProjectHeader from "@/components/projects/ProjectHeader";
import ProjectInfo from "@/components/projects/ProjectInfo";
import { ProjectsProvider } from "@/core/hooks/context/ProjectsContext";
import { motion } from "framer-motion";

interface IProps {
  number: number;
}

const ProjectSingle = ({ number }: IProps) => {
  return (
    <section className="min-h-screen pt-20 sm:pt-32 pb-16 bg-premium-bg">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.6,
          delay: 0.15,
        }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 mt-2 sm:mt-6"
      >
        <ProjectsProvider idProject={number}>
          <ProjectHeader />
          <ProjectInfo />
          <ProjectGallery />
        </ProjectsProvider>
      </motion.div>
    </section>
  );
};

export default ProjectSingle;
