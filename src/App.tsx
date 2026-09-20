import AppHeader from "@/components/shared/AppHeader";
import { AnimatePresence } from "framer-motion";
import ButtonWhatsapp from "@/components/reusable/ButtonWhatsapp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "@/assets/css/App.css";
import "@/assets/css/Customstyles.css";
import { lazy, Suspense } from "react";
import AppFooter from "./components/shared/AppFooter";
import { ThemeProvider } from "@/core/hooks/context/ThemeContext";
import { LanguageProvider } from "@/core/hooks/context/LanguageContext";

import { projectsData } from "./core/data/projects";

const Home = lazy(() => import("./pages/Home"));
const ProjectSingle = lazy(() => import("./pages/ProjectSingle"));

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AnimatePresence>
          <div className="m-0 p-0 border-none box-border transition-colors duration-500">
            <ButtonWhatsapp />

            <Router>
              <AppHeader />
              <ScrollToTop />
              <Suspense
                fallback={
                  <div className="h-screen flex items-center justify-center bg-premium-bg">
                    <span className="text-premium-primary font-space-grotesk animate-pulse">Cargando...</span>
                  </div>
                }
              >
                <Routes>
                  <Route path="/" element={<Home />} />
                  {projectsData.map((project) => (
                    <Route
                      key={project.id}
                      path={`/projects/${project.id}`}
                      element={<ProjectSingle number={project.id} />}
                    />
                  ))}
                </Routes>
              </Suspense>
              <AppFooter />
            </Router>
          </div>
        </AnimatePresence>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
