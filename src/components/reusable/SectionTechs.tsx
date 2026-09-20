import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { techData } from "@/core/data/techs";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/core/hooks/context/LanguageContext";
import { translations } from "@/core/data/translations";

function SectionTechs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { lang } = useLanguage();
  const t = translations[lang].techsSection;

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="techs" className="py-24 px-4 sm:px-8 bg-premium-bg/50">
      <div className="container mx-auto">
        <div className="text-center mb-20 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-space-grotesk font-extrabold text-premium-text tracking-tighter"
          >
            {t.titlePrefix}<span className="text-gradient">{t.titleGradient}</span>
          </motion.h2>
          <p className="max-w-2xl mx-auto text-premium-text-muted font-manrope text-lg">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {techData.map((category, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={category.name}
                layout
                className={`
                  bg-premium-surface rounded-[2.5rem] border-premium-text/5 overflow-hidden transition-all duration-500 hover:border-premium-primary/30 
                  hover:shadow-lg
                  group ${isOpen ? "border-2 border-premium-primary/4 shadow-2xl" : "shadow-sm"
                  }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-10 text-left hover:bg-premium-text/5 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-space-grotesk font-black text-xl transition-all duration-500 ${isOpen ? "bg-premium-primary text-white rotate-12 scale-110 shadow-lg shadow-premium-primary/30" : "bg-premium-bg text-premium-primary border border-premium-text/5"
                      }`}>
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="text-2xl font-space-grotesk font-bold text-premium-text group-hover:text-premium-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-xs font-manrope font-bold text-premium-text-muted uppercase tracking-widest mt-1">
                        {category.images.length} {t.toolsCount}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <BiChevronDown size={32} className={isOpen ? "text-premium-primary" : "text-premium-text-muted"} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "circOut" }}
                    >
                      <div className="p-10 pt-0 grid grid-cols-3 gap-6">
                        {category.images.map((tech) => (
                          <motion.div
                            key={tech.id}
                            whileHover={{ y: -5, scale: 1.05 }}
                            className="flex flex-col items-center gap-3 p-4 rounded-3xl bg-premium-bg/50 border border-premium-text/5 hover:bg-premium-surface-high hover:border-premium-primary/20 transition-all duration-300"
                          >
                            <div className="w-14 h-14 p-2 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-inner">
                              <img
                                src={tech.link}
                                alt={tech.name}
                                className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                              />
                            </div>
                            <span className="text-[10px] font-space-grotesk font-black text-premium-text-muted uppercase tracking-widest text-center">
                              {tech.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SectionTechs;
