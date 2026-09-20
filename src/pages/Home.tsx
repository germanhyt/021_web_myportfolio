import AppBanner from "../components/shared/AppBanner";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import { ProjectsProvider } from "@/core/hooks/context/ProjectsContext";
import SectionAboutMe from "../components/reusable/SectionAboutMe";
import SectionTechs from "../components/reusable/SectionTechs";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollTracker } from "@/core/hooks/useScrollTracker";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useScrollTracker();

  useEffect(() => {
    // Initial loader transition
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-premium-bg min-h-screen transition-colors duration-500">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.section
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 w-full h-full flex flex-col items-center justify-center bg-premium-bg z-[100]"
          >
            <div className="relative w-24 h-28 flex items-center justify-center">
              <div className="relative w-20 h-20">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="absolute inset-0 border-[3px] border-premium-primary/10 rounded-full"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  className="absolute inset-0 border-[3px] border-t-premium-primary rounded-full box-content"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-premium-primary font-space-grotesk font-black text-xl tracking-tighter">G.</span>
                </div>
              </div>
            </div>
          </motion.section>
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative pt-24 overflow-hidden"
          >
            {/* Hero Section */}
            <AppBanner />

            {/* Content with Scroll Reveals */}
            <div className="relative space-y-12">
              <ProjectsProvider>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <ProjectsGrid page="home" />
                </motion.div>
              </ProjectsProvider>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <SectionTechs />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <SectionAboutMe />
              </motion.div>
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
