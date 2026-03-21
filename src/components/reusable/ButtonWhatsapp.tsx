function ButtonWhatsapp() {
  return (
    <div className="relative hidden sm:flex z-50">
      <div className="fixed bottom-8 right-8 transition-all duration-500 hover:scale-110">
        <a
          href="https://api.whatsapp.com/send?phone=51910139973&text=Hola%20qu%C3%A9%20tal%2C%20vengo%20de%20tu%20web...%F0%9F%93%B2%F0%9F%91%8D%F0%9F%8C%90"
          target="__blank"
          className="relative block group"
        >
          {/* Outer glow */}
          <div className="absolute inset-0 bg-green-500 rounded-full blur-[15px] opacity-40 group-hover:opacity-70 transition-opacity animate-pulse" />
          
          <img
            src="https://res.cloudinary.com/dz0ajaf3i/image/upload/v1697081191/006_Portfolio_Freelance/img-wtsp_iq3zwc.png"
            alt="WhatsApp"
            className="relative w-16 h-16 drop-shadow-2xl"
          />
        </a>
      </div>
    </div>
  );
}

export default ButtonWhatsapp;
