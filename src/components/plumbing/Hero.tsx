import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import hero from "@/assets/hero-plumber.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-ink-deep grain">
      <img
        src={hero}
        alt="Plombier Moure Lethoor au travail sur des tuyaux en cuivre"
        width={1600}
        height={1200}
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-deep via-ink-deep/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-fade" />

      <div className="container relative z-10 flex min-h-screen flex-col justify-end pb-24 pt-40">
        <div className="max-w-3xl animate-fade-up">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-bone/20 bg-bone/5 px-4 py-2 backdrop-blur">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-copper-glow text-copper-glow" />
              ))}
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-bone/80">Noté 4.1 · 9 avis Google</span>
          </div>

          <h1 className="font-display text-5xl font-light leading-[0.95] text-bone md:text-7xl lg:text-8xl text-balance">
            La plomberie,<br />
            <span className="italic text-copper-glow">comme un</span> art.
          </h1>

          <p className="mt-8 max-w-xl text-lg text-bone/70 leading-relaxed">
            Dépannages, chauffe-eau, rénovation salle de bain. Un artisan plombier de confiance, réactif et passionné par le travail bien fait.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button variant="copper" size="xl" asChild>
              <a href="#contact">Demander un devis <ArrowRight /></a>
            </Button>
            <Button variant="outlineLight" size="xl" asChild>
              <a href="#services">Voir nos services</a>
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-bone/15 pt-10 md:grid-cols-4">
          {[
            { k: "20+", v: "Années d'expérience" },
            { k: "24/7", v: "Service d'urgence" },
            { k: "100%", v: "Travail garanti" },
            { k: "<2h", v: "Délai d'intervention" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-4xl text-copper-glow md:text-5xl">{s.k}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-bone/60">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
