import { useContext, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { sociallinks } from "@/core/data/sociallinks";
import Typed from "typed.js";
import { ThemeContext } from "@/core/hooks/context/ThemeContext";

const AppBanner = () => {
  const developerLight = "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1697233575/006_Portfolio_Freelance/developer_rboiiq.svg";
  const developerDark = "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1697233575/006_Portfolio_Freelance/developer-dark_pxjdqw.svg";

  const { theme } = useContext(ThemeContext);

  const el = useRef(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: [
        "Soy Germán Huaytalla",
        "Bachiller en Sistemas",
        "Desarrollo Full Stack",
        "Ingeniería de Datos",
        "Arquitectura de soluciones",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
      cursorChar: "_",
    });

    return () => {
      typed.current?.destroy();
    };
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 py-20 hero-bg"
    >
      <div className="w-full md:w-3/5 text-left z-10 space-y-10">
        {/* <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block"
        >
          <span className="px-5 py-2 rounded-full bg-premium-secondary/10 border border-premium-secondary/20 text-premium-secondary font-space-grotesk font-black text-xs uppercase tracking-[0.3em]">
            Soluciones Digitales
          </span>
        </motion.div> */}

        <h1 className="font-space-grotesk font-extrabold text-5xl sm:text-7xl lg:text-8xl text-premium-text leading-tight md:leading-[1.1] tracking-tighter">
          Hola, <br />
          <span className="text-gradient">
            <span ref={el} />
          </span>
        </h1>

        <p className="max-w-2xl font-manrope text-xl lg:text-2xl text-premium-text-muted leading-relaxed">
          Diseño arquitecturas escalables que se adaptan a tu negocio.
          Convierto desafíos en soluciones eficientes.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 items-center pt-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex gap-5 p-2.5 bg-premium-surface rounded-2xl border border-premium-text/5 shadow-2xl shadow-black/5"
          >
            {sociallinks.map((link) => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                className="w-14 h-14 flex items-center justify-center rounded-xl text-premium-text-muted hover:text-premium-primary hover:bg-premium-primary/10 transition-all duration-300"
                title={String(link.id)}
              >
                <i className="text-2xl">{link.icon}</i>
              </a>
            ))}
          </motion.div>

          <button className="px-10 py-5 bg-premium-text text-premium-bg font-space-grotesk font-black uppercase text-sm tracking-widest rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl shadow-premium-text/20">
            Explorar Portafolio
          </button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeOut", duration: 1.2, delay: 0.2 }}
        className="w-full md:w-2/5 cyber-circle-container mt-20 md:mt-0"
      >
        {/* Capas de diseño profesional */}
        <div className="halo-glow" />
        <div className="cyber-circle spin-slow" />
        <div className="tech-dots" />

        <img
          src={theme === "dark" ? developerDark : developerLight}
          alt="Germán Huaytalla"
          className="relative z-10 w-full max-w-[460px] premium-image-shadow animate-float"
        />
      </motion.div>
    </motion.section>
  );
};

export default AppBanner;
