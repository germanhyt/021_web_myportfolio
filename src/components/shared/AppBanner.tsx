import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { sociallinks } from "@/core/data/sociallinks";
import Typed from "typed.js";
// import { ThemeContext } from "@/core/hooks/context/ThemeContext";
import { FiDatabase, FiCode, FiLayers, FiCpu } from "react-icons/fi";

const AppBanner = () => {
  const el = useRef(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: [
        "Soy Germán Huaytalla",
        "Bachiller en Sistemas",
        "Orientado en:",
        "Desarrollo Web",
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
      <div className="w-full md:w-4/5 text-left z-10 space-y-10">
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
          Diseño arquitecturas escalables que se adaptan a las necesidades de la organización.
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

          <a
            href="#projects"
            className="px-10 py-5 bg-premium-text text-premium-bg font-space-grotesk font-black uppercase text-sm tracking-widest rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl shadow-premium-text/20"
          >
            Explorar Portafolio
          </a>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeOut", duration: 1.2, delay: 0.2 }}
        className="w-full md:w-2/5 flex justify-center items-center mt-20 md:mt-0 relative"
      >
        {/* Animated Professional Architecture Graphic */}
        <div className="relative w-full max-w-sm aspect-square flex items-center justify-center group overflow-visible">
          {/* Base Radar / Network grid */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--premium-primary-rgb),0.05)_0%,transparent_70%)] rounded-full animate-pulse z-0" />
          <div className="absolute inset-4 border border-premium-primary/20 rounded-full border-dashed spin-slow z-0" />
          <div className="absolute inset-16 border border-premium-accent/20 rounded-full border-dotted spin-slow z-0" style={{ animationDirection: 'reverse' }} />

          {/* Central Architecture Node */}
          <motion.div
            className="relative z-20 w-24 h-24 bg-premium-surface rounded-2xl flex items-center justify-center border border-premium-primary/50 shadow-[0_0_40px_rgba(var(--premium-primary-rgb),0.2)] overflow-hidden backdrop-blur-md"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            title="Arquitectura de Soluciones"
          >
            <FiLayers className="text-5xl text-premium-accent drop-shadow-[0_0_12px_rgba(var(--premium-accent-rgb),0.8)]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-premium-primary/10 to-transparent pointer-events-none" />
          </motion.div>

          {/* Orbiting Tech Nodes */}

          {/* Node 1: Web Dev */}
          <motion.div
            className="absolute top-8 left-8 w-14 h-14 bg-premium-surface rounded-xl border border-premium-accent/40 flex items-center justify-center shadow-[0_10px_30px_rgba(var(--premium-surface-rgb),0.5)] backdrop-blur-md z-30 hover:scale-110 hover:border-premium-accent transition-transform cursor-pointer"
            animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            title="Desarrollo Web"
          >
            <FiCode className="text-2xl text-premium-text" />
          </motion.div>

          {/* Node 2: Data Engineering */}
          <motion.div
            className="absolute bottom-10 right-6 w-16 h-16 bg-premium-surface rounded-full border border-premium-secondary/60 flex items-center justify-center shadow-[0_10px_30px_rgba(var(--premium-surface-rgb),0.5)] backdrop-blur-md z-30 hover:scale-110 hover:border-premium-secondary transition-transform cursor-pointer"
            animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            title="Ingeniería de Datos"
          >
            <FiDatabase className="text-2xl text-premium-text" />
          </motion.div>

          {/* Node 3: Systems/CPU */}
          <motion.div
            className="absolute top-1/2 -right-4 w-12 h-12 bg-premium-surface rounded-lg border border-premium-primary/40 flex items-center justify-center shadow-[0_10px_30px_rgba(var(--premium-surface-rgb),0.5)] backdrop-blur-md z-30 hover:scale-110 hover:border-premium-primary transition-transform cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            title="Sistemas y Servidores"
          >
            <FiCpu className="text-xl text-premium-text" />
          </motion.div>

          {/* Connecting lines or glowing dots */}
          <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-premium-accent rounded-full shadow-[0_0_10px_rgba(var(--premium-accent-rgb),1)] animate-ping z-10" />
          <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-premium-secondary rounded-full shadow-[0_0_10px_rgba(var(--premium-secondary-rgb),1)] animate-pulse z-10" />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AppBanner;
