import { useContext, useEffect, useState } from "react";
import { FiGlobe, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import HireMeModal from "@/components/HireMeModal";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeContext } from "@/core/hooks/context/ThemeContext";
import { useLanguage } from "@/core/hooks/context/LanguageContext";
import { translations } from "@/core/data/translations";
import { trackClick, trackThemeToggle } from "@/core/helpers/analytics";

const AppHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { lang, toggleLang } = useLanguage();
  const t = translations[lang].nav;
  const [isScrolled, setIsScrolled] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  function showHireMeModal() {
    if (!showModal) {
      document.documentElement.classList.add("overflow-y-hidden");
      setShowModal(true);
      trackClick("header_contact_btn_open");
    } else {
      document.documentElement.classList.remove("overflow-y-hidden");
      setShowModal(false);
    }
  }

  function handleThemeChange() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    toggleTheme();
    trackThemeToggle(nextTheme);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Root-relative hashes so nav works from /projects/:id (not /projects/16#projects)
  const navItems = [
    { label: t.projects, href: "/#projects" },
    { label: t.techs, href: "/#techs" },
    { label: t.aboutMe, href: "/#aboutme" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-500">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`w-full transition-all duration-500 h-[70px] sm:h-[80px] flex items-center border-b ${
          isScrolled
            ? "bg-premium-bg/85 backdrop-blur-xl border-premium-text/5 shadow-lg"
            : "bg-transparent border-transparent shadow-none"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            onClick={() => trackClick("header_logo")}
            className="flex items-center gap-2 sm:gap-3 group"
          >
            <span className="font-space-grotesk font-black text-xl sm:text-2xl text-premium-text tracking-tighter">
              germ4n<span className="text-premium-primary">hyt</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center glass-effect p-1.5 rounded-full">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => trackClick("header_nav_link", { label: item.label })}
                className="px-6 py-2 rounded-full text-sm font-manrope font-semibold text-premium-text-muted hover:text-premium-text hover:bg-premium-surface transition-all duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Language Switcher Button */}
            <button
              onClick={toggleLang}
              className="px-2.5 py-1.5 sm:px-3.5 sm:py-2 flex items-center gap-1 sm:gap-1.5 rounded-lg sm:rounded-xl glass-effect text-[11px] sm:text-xs font-space-grotesk font-bold text-premium-text-muted hover:text-premium-primary hover:bg-premium-surface-high transition-all duration-300 border border-premium-text/5"
              title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
              aria-label="Toggle Language"
            >
              <FiGlobe className="text-xs sm:text-sm text-premium-primary" />
              <span className={lang === "es" ? "text-premium-primary font-black" : "opacity-60"}>ES</span>
              <span className="opacity-30">|</span>
              <span className={lang === "en" ? "text-premium-primary font-black" : "opacity-60"}>EN</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={handleThemeChange}
              className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-lg sm:rounded-xl glass-effect text-premium-text-muted hover:text-premium-primary hover:bg-premium-surface-high transition-all duration-300"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <FiSun className="text-base sm:text-xl" /> : <FiMoon className="text-base sm:text-xl" />}
            </button>

            {/* Contact Button */}
            <button
              onClick={showHireMeModal}
              className="hidden lg:flex px-6 py-2.5 bg-premium-primary text-white font-space-grotesk font-bold rounded-xl shadow-[0_10px_20px_-10px_rgba(37,99,235,0.4)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              {t.contactBtn}
            </button>

            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-premium-text hover:text-premium-primary transition-colors"
              aria-label="Toggle Menu"
            >
              {showMenu ? <FiX className="text-2xl sm:text-3xl" /> : <FiMenu className="text-2xl sm:text-3xl" />}
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
              className="absolute top-[70px] sm:top-[80px] left-0 w-full bg-premium-bg/95 backdrop-blur-2xl md:hidden border-b border-premium-text/10 shadow-2xl overflow-y-auto max-h-[calc(100vh-70px)]"
            >
              <div className="flex flex-col p-6 sm:p-8 gap-5 sm:gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => {
                      setShowMenu(false);
                      trackClick("header_mobile_nav_link", { label: item.label });
                    }}
                    className="text-2xl sm:text-3xl font-space-grotesk font-black text-premium-text hover:text-premium-primary transition-colors py-1"
                  >
                    {item.label}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    setShowMenu(false);
                    showHireMeModal();
                  }}
                  className="w-full py-4 sm:py-5 bg-premium-primary text-white font-space-grotesk font-black uppercase text-xs sm:text-sm tracking-widest rounded-xl sm:rounded-2xl shadow-xl shadow-premium-primary/20 active:scale-98 transition-all"
                >
                  {t.contactBtn}
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
