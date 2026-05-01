import bathroom from "@/assets/bathroom.jpg";
import waterHeater from "@/assets/water-heater.jpg";
import hero from "@/assets/hero-plumber.jpg";

const projects = [
  { img: bathroom, title: "Rénovation salle de bain", tag: "Pau · 2024", span: "lg:col-span-2 lg:row-span-2" },
  { img: waterHeater, title: "Remplacement chauffe-eau", tag: "Escout · 2025" },
  { img: hero, title: "Réseau cuivre sur-mesure", tag: "Oloron · 2024" },
];

const Work = () => {
  return (
    <section id="work" className="bg-bone py-32">
      <div className="container">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-copper">— Réalisations</div>
            <h2 className="font-display text-5xl font-light leading-tight text-ink md:text-6xl text-balance">
              Le travail<br /><span className="italic">parle de lui-même.</span>
            </h2>
          </div>
        </div>

        <div className="grid auto-rows-[280px] gap-4 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[300px]">
          {projects.map((p) => (
            <figure
              key={p.title}
              className={`group relative overflow-hidden bg-ink ${p.span ?? ""}`}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/30 to-transparent opacity-90" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-8">
                <div className="text-xs uppercase tracking-widest text-copper-glow">{p.tag}</div>
                <div className="mt-2 font-display text-2xl text-bone md:text-3xl">{p.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
