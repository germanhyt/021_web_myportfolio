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

interface IProps {
  onClose: () => void;
  onRequest: () => void;
}

const HireMeModal = ({ onClose }: IProps) => {
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-premium-bg/80 backdrop-blur-xl"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-2xl bg-premium-surface rounded-[3rem] border border-premium-text/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8">
          <button
            type="button"
            onClick={onClose}
            className="p-3 rounded-2xl text-premium-text-muted hover:text-premium-primary hover:bg-premium-primary/10 transition-all duration-300"
          >
            <FiX size={28} />
          </button>
        </div>

        <div className="p-10 sm:p-16">
          <div className="mb-12 space-y-4">
            <h3 className="text-4xl sm:text-5xl font-space-grotesk font-black text-premium-text tracking-tighter leading-tight">
              Construyamos algo con{" "}
              <span className="text-gradient">impacto.</span>
            </h3>
            <p className="text-premium-text-muted font-manrope text-lg leading-relaxed">
              Si buscas un partner técnico para llevar un producto o una
              digitalización al siguiente nivel, hablemos. Aporto arquitectura,
              desarrollo fullstack y foco en resultados de negocio — trabajemos
              juntos.
            </p>
          </div>

          <form onSubmit={sendEmail} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label
                  htmlFor="name"
                  className="text-xs font-space-grotesk font-black uppercase tracking-widest text-premium-text-muted px-4 flex items-center gap-2"
                >
                  <FiUser className="text-premium-secondary" /> Nombres
                </label>
                <input
                  className="w-full px-6 py-5 bg-premium-bg border border-premium-text/5 rounded-2xl text-premium-text placeholder:text-premium-text/20 focus:outline-none focus:border-premium-primary focus:ring-4 focus:ring-premium-primary/10 transition-all duration-300 font-manrope font-bold"
                  id="name"
                  name="user_name"
                  type="text"
                  required
                  placeholder="Tu nombre completo"
                />
              </div>

              <div className="space-y-3">
                <label
                  htmlFor="email"
                  className="text-xs font-space-grotesk font-black uppercase tracking-widest text-premium-text-muted px-4 flex items-center gap-2"
                >
                  <FiMail className="text-premium-secondary" /> Email
                </label>
                <input
                  className="w-full px-6 py-5 bg-premium-bg border border-premium-text/5 rounded-2xl text-premium-text placeholder:text-premium-text/20 focus:outline-none focus:border-premium-primary focus:ring-4 focus:ring-premium-primary/10 transition-all duration-300 font-manrope font-bold"
                  id="email"
                  name="user_email"
                  type="email"
                  required
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label
                htmlFor="subject"
                className="text-xs font-space-grotesk font-black uppercase tracking-widest text-premium-text-muted px-4 flex items-center gap-2"
              >
                <FiEdit3 className="text-premium-secondary" /> Asunto
              </label>
              <input
                className="w-full px-6 py-5 bg-premium-bg border border-premium-text/5 rounded-2xl text-premium-text placeholder:text-premium-text/20 focus:outline-none focus:border-premium-primary focus:ring-4 focus:ring-premium-primary/10 transition-all duration-300 font-manrope font-bold"
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="Asunto de tu propuesta"
              />
            </div>

            <div className="space-y-3">
              <label
                htmlFor="message"
                className="text-xs font-space-grotesk font-black uppercase tracking-widest text-premium-text-muted px-4 flex items-center gap-2"
              >
                <FiMessageSquare className="text-premium-secondary" /> Mensaje
              </label>
              <textarea
                className="w-full px-6 py-5 bg-premium-bg border border-premium-text/5 rounded-2xl text-premium-text placeholder:text-premium-text/20 focus:outline-none focus:border-premium-primary focus:ring-4 focus:ring-premium-primary/10 transition-all duration-300 font-manrope font-bold min-h-[140px] resize-none"
                id="message"
                name="message"
                required
                placeholder="Cuéntame sobre el proyecto o el desafío técnico..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-6 bg-premium-text text-premium-bg rounded-2xl font-space-grotesk font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all duration-500 shadow-2xl shadow-premium-text/20"
            >
              <FiSend className="text-xl" />
              Enviar mensaje
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default HireMeModal;
