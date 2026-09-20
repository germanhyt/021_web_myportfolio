import ContactDetails from "../contact/ContactDetails";
import { motion } from "framer-motion";

import profile from "@/assets/images/profile.jpg";
import { useLanguage } from "@/core/hooks/context/LanguageContext";
import { translations } from "@/core/data/translations";

function SectionAboutMe() {
  const { lang } = useLanguage();
  const t = translations[lang].aboutMeSection;

  return (
    <section id="aboutme" className="py-24 px-4 sm:px-8">
      <div className="container mx-auto">
        <div className="relative overflow-hidden bg-premium-surface p-8 sm:p-16 lg:p-24 rounded-[3.5rem] border border-premium-text/5 shadow-2xl">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-premium-primary/5 blur-[120px] -translate-y-1/2 translate-x-1/2 rounded-full" />
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-premium-secondary/5 blur-[100px] translate-y-1/2 -translate-x-1/2 rounded-full" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            {/* Content Side */}
            <div className="w-full lg:w-3/5 order-2 lg:order-1 space-y-8">
              <div className="space-y-4">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-premium-primary font-space-grotesk font-black uppercase text-xs tracking-[0.4em]"
                >
                  {t.philosophyTag}
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-space-grotesk font-extrabold text-premium-text tracking-tighter leading-[1.1]"
                >
                  {t.headingPrefix} <br />
                  <span className="text-gradient">{t.headingGradient}</span>{t.headingSuffix}
                </motion.h2>
              </div>

              <div className="space-y-6">
                <p className="text-xl leading-relaxed text-premium-text-muted font-manrope">
                  {t.paragraph1}
                </p>

                <p className="text-lg leading-relaxed text-premium-text-muted font-manrope opacity-80">
                  {t.paragraph2}
                </p>
              </div>

              <div className="relative p-8 rounded-3xl bg-premium-bg/50 border-l-4 border-premium-primary border-y border-r border-premium-text/5">
                <p className="text-premium-text font-manrope font-bold text-lg italic leading-relaxed">
                  {t.quote}
                </p>
              </div>

              <div className="pt-4">
                <ContactDetails />
              </div>
            </div>

            {/* Profile Side */}
            <div className="w-full lg:w-2/5 order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                <motion.div
                  initial={{ rotate: 12, scale: 0.9 }}
                  whileInView={{ rotate: 6, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 bg-gradient-to-tr from-premium-primary to-premium-secondary rounded-[3rem] opacity-20 blur-2xl"
                />

                <div className="relative z-10 p-4 bg-premium-surface rounded-[3rem] border border-premium-text/5 shadow-2xl">
                  <div className="overflow-hidden rounded-[2.5rem] bg-premium-bg aspect-[4/5] w-[280px] sm:w-[320px] lg:w-[350px]">
                    <img
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                      src={profile}
                      alt="Germán Huaytalla Profile"
                    />
                  </div>
                </div>

                {/* Decorative floating bits */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -left-6 w-16 h-16 bg-premium-primary/20 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center text-premium-primary z-20"
                >
                  <span className="font-space-grotesk font-black">GH</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionAboutMe;
