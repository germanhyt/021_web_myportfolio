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
    <section className="min-h-screen pt-32 bg-premium-bg">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.6,
          delay: 0.15,
        }}
        className="container mx-auto mt-5 sm:mt-10"
      >
        <ProjectsProvider idProject={number}>
          <ProjectHeader />
          <ProjectGallery />
          <ProjectInfo />
        </ProjectsProvider>
      </motion.div>
    </section>
  );
};

export default ProjectSingle;
