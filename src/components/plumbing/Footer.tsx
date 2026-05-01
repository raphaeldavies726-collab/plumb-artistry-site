const Footer = () => (
  <footer className="bg-ink-deep py-12 text-bone/60">
    <div className="container flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
      <div className="font-display text-xl text-bone">Moure <span className="italic text-copper-glow">Lethoor</span></div>
      <div>© {new Date().getFullYear()} — Artisan plombier · Tous droits réservés</div>
      <div className="text-xs uppercase tracking-widest">Fait avec soin</div>
    </div>
  </footer>
);

export default Footer;
