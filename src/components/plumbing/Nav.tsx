import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { telLink } from "@/config/business";

const Nav = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container flex items-center justify-between py-6">
        <a href="#" className="flex items-center gap-2 text-bone">
          <span className="font-display text-2xl tracking-tight">Moure <span className="italic text-copper-glow">Lethoor</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm text-bone/80">
          <a href="#services" className="hover:text-copper-glow transition-colors">Services</a>
          <a href="#work" className="hover:text-copper-glow transition-colors">Réalisations</a>
          <a href="#about" className="hover:text-copper-glow transition-colors">L'artisan</a>
          <a href="#reviews" className="hover:text-copper-glow transition-colors">Avis</a>
        </nav>
        <Button variant="copper" size="sm" asChild>
          <a href={telLink}><Phone /> Urgence 24/7</a>
        </Button>
      </div>
    </header>
  );
};

export default Nav;
