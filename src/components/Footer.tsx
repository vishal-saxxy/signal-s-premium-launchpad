const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border/50 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-display font-bold text-lg text-foreground">Signal</div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          <a href="#" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <p className="text-xs text-muted-foreground">
          © 2026 Signal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
