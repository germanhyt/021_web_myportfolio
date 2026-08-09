import Button from "../reusable/Button";
import FormInput from "../reusable/FormInput";
import { openMailto } from "@/core/helpers/mailto";

const ContactForm = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("user_name") ?? "").trim();
    const email = String(formData.get("user_email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !subject || !message) return;

    openMailto({ name, email, subject, message });
    e.currentTarget.reset();
  };

  return (
    <div className="w-full px-4">
      <div className="leading-loose">
        <form
          onSubmit={sendEmail}
          className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-primary-dark rounded-xl shadow-xl text-left"
        >
          <p className="break-all font-general-medium text-center text-primary-dark dark:text-primary-light text-2xl mb-8">
            Formulario de contacto
          </p>
          <FormInput
            inputLabel="Nombres"
            labelFor="name"
            inputType="text"
            inputId="name"
            inputName="user_name"
            placeholderText="Tu nombre completo"
            ariaLabelName="Name"
          />
          <FormInput
            inputLabel="Email"
            labelFor="email"
            inputType="email"
            inputId="email"
            inputName="user_email"
            placeholderText="tu@email.com"
            ariaLabelName="Email"
          />
          <FormInput
            inputLabel="Asunto"
            labelFor="subject"
            inputType="text"
            inputId="subject"
            inputName="subject"
            placeholderText="Asunto"
            ariaLabelName="Subject"
          />

          <div className="mt-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="message"
            >
              Mensaje
            </label>
            <textarea
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              id="message"
              name="message"
              cols={14}
              rows={6}
              aria-label="Message"
              required
              style={{ resize: "none" }}
            ></textarea>
          </div>

          <div className=" font-general-medium w-full sm:w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-[#0123E7] hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
            <Button
              title="Enviar mensaje"
              type="submit"
              aria-label="Send Message"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
