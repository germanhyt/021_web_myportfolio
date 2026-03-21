import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

const contacts = [
  {
    id: 1,
    name: "Lima - Perú",
    icon: <FiMapPin />,
    label: "Ubicación"
  },
  {
    id: 2,
    name: "germanhuaytalla22@gmail.com",
    icon: <FiMail />,
    label: "Email Profesional"
  },
  {
    id: 3,
    name: "+51 910 139 973",
    icon: <FiPhone />,
    label: "Llamada Directa"
  },
];

const ContactDetails = () => {
  return (
    <div className="w-full">
      <div className="text-left space-y-6">
        <h3 className="text-sm font-space-grotesk font-black uppercase tracking-[0.3em] text-premium-primary mb-8 px-2">
          Canales de Enlace
        </h3>

        <div className="grid grid-cols-1 gap-4">
          {contacts.map((contact, index) => (
            <motion.div
              key={contact.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 p-5 bg-premium-bg/40 border border-premium-text/5 rounded-3xl hover:border-premium-primary/20 hover:bg-premium-surface transition-all duration-300 group shadow-sm hover:shadow-xl hover:shadow-premium-primary/5"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-premium-surface border border-premium-text/5 text-premium-primary group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">{contact.icon}</span>
              </div>

              <div className="flex flex-col">
                <span className="text-[10px] font-space-grotesk font-black uppercase tracking-widest text-premium-text-muted mb-0.5">
                  {contact.label}
                </span>
                <span className="text-lg font-manrope font-bold text-premium-text break-all">
                  {contact.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
