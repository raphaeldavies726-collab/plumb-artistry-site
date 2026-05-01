import craftsman from "@/assets/craftsman.jpg";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Artisan certifié & assuré",
  "Devis gratuit et transparent",
  "Matériaux de qualité professionnelle",
  "Travail propre, garantie sur intervention",
];

const About = () => {
  return (
    <section id="about" className="bg-ink py-32 grain text-bone">
      <div className="container grid gap-16 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full border border-copper/40" />
          <img
            src={craftsman}
            alt="Portrait de l'artisan plombier Moure Lethoor"
            width={1200}
            height={1400}
            loading="lazy"
            className="relative aspect-[4/5] w-full object-cover shadow-elegant"
          />
        </div>

        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-copper-glow">— L'artisan</div>
          <h2 className="font-display text-5xl font-light leading-tight md:text-6xl text-balance">
            Un savoir-faire <span className="italic text-copper-glow">transmis</span>, pas improvisé.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-bone/70">
            Depuis plus de vingt ans, Moure Lethoor met son expérience au service des particuliers et des professionnels. Chaque chantier est une rencontre, chaque installation une signature.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-bone/70">
            « Un artisan se reconnaît à ses gestes — et à ses retours clients. »
          </p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-bone/85">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-copper-glow" strokeWidth={1.5} />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
