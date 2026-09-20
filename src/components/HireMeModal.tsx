import { motion } from "framer-motion";
import {
  FiX,
  FiSend,
  FiUser,
  FiMail,
  FiMessageSquare,
  FiEdit3,
} from "react-icons/fi";
import { openMailto } from "@/core/helpers/mailto";
import { useLanguage } from "@/core/hooks/context/LanguageContext";
import { translations } from "@/core/data/translations";

interface IProps {
  onClose: () => void;
  onRequest: () => void;
}

const HireMeModal = ({ onClose }: IProps) => {
  const { lang } = useLanguage();
  const t = translations[lang].contactModal;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("user_name") ?? "").trim();
    const email = String(formData.get("user_email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !subject || !message) return;

    openMailto({ name, email, subject, message });
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 my-auto overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-premium-bg/85 backdrop-blur-xl"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-2xl bg-premium-surface rounded-[2rem] sm:rounded-[3rem] border border-premium-text/10 shadow-[0_30px_90px_-15px_rgba(0,0,0,0.6)] overflow-hidden my-auto max-h-[92vh] flex flex-col z-10"
      >
        <div className="absolute top-3 right-3 sm:top-6 sm:right-6 z-10">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 sm:p-3 rounded-xl sm:rounded-2xl text-premium-text-muted hover:text-premium-primary hover:bg-premium-primary/10 transition-all duration-300"
          >
            <FiX className="text-xl sm:text-2xl" />
          </button>
        </div>

        <div className="p-6 sm:p-10 lg:p-12 overflow-y-auto">
          <div className="mb-6 sm:mb-10 space-y-2 sm:space-y-3 pr-8">
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-space-grotesk font-black text-premium-text tracking-tighter leading-tight">
              {t.titlePrefix}<span className="text-gradient">{t.titleGradient}</span>
            </h3>
            <p className="text-premium-text-muted font-manrope text-sm sm:text-base leading-relaxed">
              {t.description}
            </p>
          </div>

          <form onSubmit={sendEmail} className="space-y-5 sm:space-y-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7">
              <div className="space-y-2 sm:space-y-3">
                <label
                  htmlFor="name"
                  className="text-[11px] sm:text-xs font-space-grotesk font-black uppercase tracking-widest text-premium-text-muted px-2 sm:px-4 flex items-center gap-2"
                >
                  <FiUser className="text-premium-secondary" /> {t.nameLabel}
                </label>
                <input
                  className="w-full px-4 py-3.5 sm:px-6 sm:py-4 bg-premium-bg border border-premium-text/10 rounded-xl sm:rounded-2xl text-premium-text placeholder:text-premium-text/30 focus:outline-none focus:border-premium-primary focus:ring-4 focus:ring-premium-primary/10 transition-all duration-300 font-manrope font-bold text-sm sm:text-base"
                  id="name"
                  name="user_name"
                  type="text"
                  required
                  placeholder={t.namePlaceholder}
                />
              </div>

              <div className="space-y-2 sm:space-y-3">
                <label
                  htmlFor="email"
                  className="text-[11px] sm:text-xs font-space-grotesk font-black uppercase tracking-widest text-premium-text-muted px-2 sm:px-4 flex items-center gap-2"
                >
                  <FiMail className="text-premium-secondary" /> {t.emailLabel}
                </label>
                <input
                  className="w-full px-4 py-3.5 sm:px-6 sm:py-4 bg-premium-bg border border-premium-text/10 rounded-xl sm:rounded-2xl text-premium-text placeholder:text-premium-text/30 focus:outline-none focus:border-premium-primary focus:ring-4 focus:ring-premium-primary/10 transition-all duration-300 font-manrope font-bold text-sm sm:text-base"
                  id="email"
                  name="user_email"
                  type="email"
                  required
                  placeholder={t.emailPlaceholder}
                />
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <label
                htmlFor="subject"
                className="text-[11px] sm:text-xs font-space-grotesk font-black uppercase tracking-widest text-premium-text-muted px-2 sm:px-4 flex items-center gap-2"
              >
                <FiEdit3 className="text-premium-secondary" /> {t.subjectLabel}
              </label>
              <input
                className="w-full px-4 py-3.5 sm:px-6 sm:py-4 bg-premium-bg border border-premium-text/10 rounded-xl sm:rounded-2xl text-premium-text placeholder:text-premium-text/30 focus:outline-none focus:border-premium-primary focus:ring-4 focus:ring-premium-primary/10 transition-all duration-300 font-manrope font-bold text-sm sm:text-base"
                id="subject"
                name="subject"
                type="text"
                required
                placeholder={t.subjectPlaceholder}
              />
            </div>

            <div className="space-y-2 sm:space-y-3">
              <label
                htmlFor="message"
                className="text-[11px] sm:text-xs font-space-grotesk font-black uppercase tracking-widest text-premium-text-muted px-2 sm:px-4 flex items-center gap-2"
              >
                <FiMessageSquare className="text-premium-secondary" /> {t.messageLabel}
              </label>
              <textarea
                className="w-full px-4 py-3.5 sm:px-6 sm:py-4 bg-premium-bg border border-premium-text/10 rounded-xl sm:rounded-2xl text-premium-text placeholder:text-premium-text/30 focus:outline-none focus:border-premium-primary focus:ring-4 focus:ring-premium-primary/10 transition-all duration-300 font-manrope font-bold text-sm sm:text-base min-h-[110px] sm:min-h-[140px] resize-none"
                id="message"
                name="message"
                required
                placeholder={t.messagePlaceholder}
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 sm:py-5 bg-premium-text text-premium-bg rounded-xl sm:rounded-2xl font-space-grotesk font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm flex items-center justify-center gap-2 sm:gap-3 hover:scale-[1.01] active:scale-98 transition-all duration-300 shadow-xl shadow-premium-text/15"
            >
              <FiSend className="text-base sm:text-xl" />
              {t.submitBtn}
            </button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HireMeModal;
