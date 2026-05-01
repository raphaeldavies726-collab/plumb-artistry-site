import { Droplets, Flame, Bath, Wrench, ShieldCheck, Pipette } from "lucide-react";

const services = [
  { icon: Droplets, title: "Fuites & dépannage", desc: "Détection et réparation rapide de toute fuite — robinets, canalisations, compteurs.", n: "01" },
  { icon: Flame, title: "Chauffe-eau", desc: "Installation et remplacement de chauffe-eau, souvent dans la journée.", n: "02" },
  { icon: Bath, title: "Salle de bain", desc: "Rénovation complète : sanitaires, douche, baignoire, robinetterie.", n: "03" },
  { icon: Pipette, title: "Sanitaires", desc: "WC, lavabos, éviers — pose, raccordement et mise aux normes.", n: "04" },
  { icon: Wrench, title: "Entretien", desc: "Contrats d'entretien pour préserver la longévité de vos installations.", n: "05" },
  { icon: ShieldCheck, title: "Urgence 24/7", desc: "Une fuite la nuit ? Un weekend ? Nous répondons présents.", n: "06" },
];

const Services = () => {
  return (
    <section id="services" className="bg-bone py-32">
      <div className="container">
        <div className="mb-20 grid gap-10 md:grid-cols-2 md:items-end">
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-copper">— Nos services</div>
            <h2 className="font-display text-5xl font-light leading-tight text-ink md:text-6xl text-balance">
              Tout ce dont votre <span className="italic">eau</span> a besoin.
            </h2>
          </div>
          <p className="text-lg text-muted-foreground md:max-w-md md:justify-self-end">
            De la petite fuite à la rénovation complète, chaque chantier est mené avec la même rigueur et le même soin du détail.
          </p>
        </div>

        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden bg-bone p-10 transition-all duration-500 hover:bg-ink"
            >
              <div className="absolute right-6 top-6 font-display text-sm text-muted-foreground/50 group-hover:text-copper-glow transition-colors">
                {s.n}
              </div>
              <s.icon className="h-10 w-10 text-copper transition-all duration-500 group-hover:text-copper-glow group-hover:scale-110" strokeWidth={1.2} />
              <h3 className="mt-8 font-display text-2xl text-ink group-hover:text-bone transition-colors">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-bone/70 transition-colors">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
