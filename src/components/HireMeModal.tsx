import { motion } from "framer-motion";
import { FiX, FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { swalAlertInfo } from "@/core/helpers/SwalHelper";

interface IProps {
  onClose: () => void;
  onRequest: () => void;
}

const HireMeModal = ({ onClose }: IProps) => {
  const form = useRef<HTMLFormElement>(null!);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_988p1xn",
        "template_twd2ypu",
        form?.current as HTMLFormElement,
        "5il5XPnUwwcjNxkaM"
      )
      .then(
        () => {
          (e.target as HTMLFormElement)?.reset();
          void swalAlertInfo(
            "Mensaje Enviado",
            "Tu propuesta ha sido recibida con éxito. Analizaré la viabilidad técnica y te contactaré pronto."
          );
          setIsSending(false);
          onClose();
        },
        (error) => {
          console.error(error.text);
          setIsSending(false);
        }
      );
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
            onClick={onClose}
            className="p-3 rounded-2xl text-premium-text-muted hover:text-premium-primary hover:bg-premium-primary/10 transition-all duration-300"
          >
            <FiX size={28} />
          </button>
        </div>

        <div className="p-10 sm:p-16">
          <div className="mb-12 space-y-4">
            <h3 className="text-4xl sm:text-5xl font-space-grotesk font-black text-premium-text tracking-tighter leading-tight">
              Orquestamos tu Siguiente <span className="text-gradient">Proyecto.</span>
            </h3>
            <p className="text-premium-text-muted font-manrope text-lg leading-relaxed">
              Conversemos sobre la propuesta que tienes en mente.
            </p>
          </div>

          <form ref={form} onSubmit={sendEmail} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label htmlFor="name" className="text-xs font-space-grotesk font-black uppercase tracking-widest text-premium-text-muted px-4 flex items-center gap-2">
                  <FiUser className="text-premium-secondary" /> Nombre / Empresa
                </label>
                <input
                  className="w-full px-6 py-5 bg-premium-bg border border-premium-text/5 rounded-2xl text-premium-text placeholder:text-premium-text/20 focus:outline-none focus:border-premium-primary focus:ring-4 focus:ring-premium-primary/10 transition-all duration-300 font-manrope font-bold"
                  id="name"
                  name="user_name"
                  type="text"
                  required
                  placeholder="Ej. Systems Corp"
                />
              </div>

              <div className="space-y-3">
                <label htmlFor="email" className="text-xs font-space-grotesk font-black uppercase tracking-widest text-premium-text-muted px-4 flex items-center gap-2">
                  <FiMail className="text-premium-secondary" /> Email Corporativo
                </label>
                <input
                  className="w-full px-6 py-5 bg-premium-bg border border-premium-text/5 rounded-2xl text-premium-text placeholder:text-premium-text/20 focus:outline-none focus:border-premium-primary focus:ring-4 focus:ring-premium-primary/10 transition-all duration-300 font-manrope font-bold"
                  id="email"
                  name="user_email"
                  type="email"
                  required
                  placeholder="contact@company.com"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label htmlFor="message" className="text-xs font-space-grotesk font-black uppercase tracking-widest text-premium-text-muted px-4 flex items-center gap-2">
                <FiMessageSquare className="text-premium-secondary" /> Resumen del Proyecto
              </label>
              <textarea
                className="w-full px-6 py-5 bg-premium-bg border border-premium-text/5 rounded-2xl text-premium-text placeholder:text-premium-text/20 focus:outline-none focus:border-premium-primary focus:ring-4 focus:ring-premium-primary/10 transition-all duration-300 font-manrope font-bold min-h-[140px] resize-none"
                id="message"
                name="message"
                required
                placeholder="Cuéntame sobre el desafío técnico..."
              />
            </div>

            <button
              disabled={isSending}
              type="submit"
              className="w-full py-6 bg-premium-text text-premium-bg rounded-2xl font-space-grotesk font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:hover:scale-100 transition-all duration-500 shadow-2xl shadow-premium-text/20"
            >
              {isSending ? (
                <>
                  <div className="w-5 h-5 border-2 border-premium-bg/30 border-t-premium-bg rounded-full animate-spin" />
                  Sincronizando...
                </>
              ) : (
                <>
                  <FiSend className="text-xl" />
                  Enviar Propuesta
                </>
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default HireMeModal;
