import { useContext, useEffect, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import HireMeModal from "@/components/HireMeModal";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeContext } from "@/core/hooks/context/ThemeContext";

const AppHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  function showHireMeModal() {
    if (!showModal) {
      document.documentElement.classList.add("overflow-y-hidden");
      setShowModal(true);
    } else {
      document.documentElement.classList.remove("overflow-y-hidden");
      setShowModal(false);
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-500">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`w-full transition-all duration-500 h-[80px] flex items-center ${isScrolled
          ? "bg-premium-bg/80 backdrop-blur-xl"
          : "bg-transparent"
          }`}
      >
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="font-space-grotesk font-black text-2xl text-premium-text tracking-tighter">
              germ4n<span className="text-premium-primary">.hyt</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center glass-effect p-1.5 rounded-full">
            {[
              { label: "Proyectos", href: "#projects" },
              { label: "Tecnologías", href: "#techs" },
              { label: "Sobre Mi", href: "#aboutme" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-6 py-2 rounded-full text-sm font-manrope font-semibold text-premium-text-muted hover:text-premium-text hover:bg-premium-surface transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="w-11 h-11 flex items-center justify-center rounded-xl glass-effect text-premium-text-muted hover:text-premium-primary hover:bg-premium-surface-high transition-all duration-300"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            <button
              onClick={showHireMeModal}
              className="hidden lg:flex px-6 py-2.5 bg-premium-primary text-white font-space-grotesk font-bold rounded-xl shadow-[0_10px_20px_-10px_rgba(37,99,235,0.4)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Contratar
            </button>

            <button
              onClick={toggleMenu}
              className="md:hidden p-2.5 text-premium-text"
              aria-label="Toggle Menu"
            >
              {showMenu ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {showMenu && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-[80px] left-0 w-full bg-premium-bg md:hidden border-b border-premium-text/5 shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col p-8 gap-6">
                {[
                  { label: "Proyectos", href: "#projects" },
                  { label: "Tecnologías", href: "#techs" },
                  { label: "Sobre Mi", href: "#aboutme" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setShowMenu(false)}
                    className="text-3xl font-space-grotesk font-black text-premium-text hover:text-premium-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setShowMenu(false);
                    showHireMeModal();
                  }}
                  className="w-full py-5 bg-premium-primary text-white font-space-grotesk font-black uppercase text-sm tracking-widest rounded-2xl shadow-xl shadow-premium-primary/20"
                >
                  Contáctame
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <AnimatePresence>
        {showModal && (
          <HireMeModal onClose={showHireMeModal} onRequest={showHireMeModal} />
        )}
      </AnimatePresence>
    </header>
  );
};

export default AppHeader;
