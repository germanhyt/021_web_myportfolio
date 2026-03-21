import AppFooterCopyright from "./AppFooterCopyright";
import { sociallinks } from "@/core/data/sociallinks";

const AppFooter = () => {
  return (
    <footer className="relative bg-premium-bg border-t border-premium-text/5 pt-32 overflow-hidden">
      {/* Decorative gradient beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-premium-primary to-transparent opacity-20" />

      <div className="container mx-auto px-4 relative z-10 antialiased">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center space-y-4">
            <h2 className="text-4xl sm:text-6xl font-space-grotesk font-black text-premium-text tracking-tighter">
              ¿Creamos algo <span className="text-gradient">increíble?</span>
            </h2>
            <p className="text-premium-text-muted font-manrope text-lg max-w-md mx-auto">
              Conversemos sobre la propuesta que tienes en mente.
            </p>
          </div>

          <ul className="flex flex-wrap justify-center gap-6 mb-24">
            {sociallinks.map((link) => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                className="group relative flex items-center justify-center w-16 h-16 rounded-3xl bg-premium-surface border border-premium-text/5 hover:border-premium-primary transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-premium-primary/20"
              >
                <i className="text-2xl text-premium-text-muted group-hover:text-premium-primary transition-colors">
                  {link.icon}
                </i>
              </a>
            ))}
          </ul>
        </div>

        <AppFooterCopyright />
      </div>
    </footer>
  );
};

export default AppFooter;
