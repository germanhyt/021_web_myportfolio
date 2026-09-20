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

  const navItems = [
    { label: t.projects, href: "#projects" },
    { label: t.techs, href: "#techs" },
    { label: t.aboutMe, href: "#aboutme" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-500">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`w-full transition-all duration-500 h-[80px] flex items-center ${
          isScrolled
            ? "bg-premium-bg/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            onClick={() => trackClick("header_logo")}
            className="flex items-center gap-3 group"
          >
            <span className="font-space-grotesk font-black text-2xl text-premium-text tracking-tighter">
              germ4n<span className="text-premium-primary">hyt</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center glass-effect p-1.5 rounded-full">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => trackClick("header_nav_link", { label: item.label })}
                className="px-6 py-2 rounded-full text-sm font-manrope font-semibold text-premium-text-muted hover:text-premium-text hover:bg-premium-surface transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Language Switcher Button */}
            <button
              onClick={toggleLang}
              className="px-3.5 py-2 flex items-center gap-1.5 rounded-xl glass-effect text-xs font-space-grotesk font-bold text-premium-text-muted hover:text-premium-primary hover:bg-premium-surface-high transition-all duration-300 border border-premium-text/5"
              title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
              aria-label="Toggle Language"
            >
              <FiGlobe className="text-sm text-premium-primary" />
              <span className={lang === "es" ? "text-premium-primary font-black" : "opacity-60"}>ES</span>
              <span className="opacity-30">|</span>
              <span className={lang === "en" ? "text-premium-primary font-black" : "opacity-60"}>EN</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={handleThemeChange}
              className="w-11 h-11 flex items-center justify-center rounded-xl glass-effect text-premium-text-muted hover:text-premium-primary hover:bg-premium-surface-high transition-all duration-300"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
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
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      setShowMenu(false);
                      trackClick("header_mobile_nav_link", { label: item.label });
                    }}
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
