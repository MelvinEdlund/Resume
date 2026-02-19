const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Melvin Edlund.</p>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 h-9 px-4 rounded-lg border border-border bg-background/70 text-xs font-medium text-foreground hover:border-primary/60 hover:bg-primary/10 transition-colors"
          >
            Download as PDF
          </button>
          <p className="font-mono text-xs">
            Built with <span className="text-primary">passion</span> for code
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
