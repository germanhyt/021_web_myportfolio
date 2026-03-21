function AppFooterCopyright() {
  return (
    <div className="py-12 border-t border-premium-text/5 flex justify-center items-center text-center">
      <div className="text-xs sm:text-sm font-space-grotesk font-black uppercase tracking-[0.3em] text-premium-text-muted">
        &copy; {new Date().getFullYear()} Germán Huaytalla
        <span className="mx-2 text-premium-text/20">|</span>
        <span className="text-premium-primary">
          High-End Engineering
        </span>
      </div>
    </div>
  );
}

export default AppFooterCopyright;
