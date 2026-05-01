import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Pascale Loustalet",
    meta: "Local Guide · 35 avis",
    date: "Mars 2026",
    text: "Je recommande vivement cette entreprise. Les délais ont été respectés, l'équipe très professionnelle du début à la fin, et toutes les attentes du client ont été satisfaites. Une expérience vraiment positive ! 👏",
  },
  {
    name: "Laëtitia S",
    meta: "15 avis",
    date: "Octobre 2024",
    text: "Hautement professionnel, très réactif, prix justes, et travail impeccable pour le remplacement de notre chauffe-eau qui fuyait. Je recommande vivement Moure Lethoor. Quel plaisir d'avoir trouvé des plombiers compétents et de confiance !",
  },
  {
    name: "Jérémy Reisemberg",
    meta: "Local Guide · 30 avis",
    date: "Février 2025",
    text: "Super professionnel. Nous avons eu un problème avec notre chauffe-eau ce week-end. Nous les avons contactés lundi matin. Ils sont venus le jour même et ont remplacé le chauffe-eau dans l'après-midi.",
  },
  {
    name: "Sinthu Indra",
    meta: "Local Guide · 164 avis",
    date: "Septembre 2023",
    text: "M. Lethoor est venu à notre secours en urgence car nous n'avions plus d'eau chaude. Il a été incroyablement réactif et professionnel. Je le recommande vivement !",
  },
  {
    name: "Margaux Flipot",
    meta: "Local Guide · 159 avis",
    date: "Septembre 2023",
    text: "M. Lethoor a répondu rapidement ! Très professionnel, sympathique, et de très bons conseils ! Un artisan de confiance, n'hésitez pas !",
  },
  {
    name: "Marie Loustalet",
    meta: "6 avis",
    date: "Mai 2021",
    text: "Un artisan de parole. M. Lethoor a fait un très bon travail dans ma salle de bain.",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="overflow-hidden bg-bone py-32">
      <div className="container">
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-copper">— Avis clients</div>
            <h2 className="font-display text-5xl font-light leading-tight text-ink md:text-6xl text-balance">
              Ce qu'ils <span className="italic">racontent.</span>
            </h2>
          </div>
          <div className="md:justify-self-end md:text-right">
            <div className="flex items-center gap-2 md:justify-end">
              <span className="font-display text-5xl text-ink">4,1</span>
              <div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < 4 ? "fill-copper text-copper" : "text-muted-foreground/40"}`} />
                  ))}
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">9 avis Google</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="group relative flex flex-col border border-border bg-card p-8 transition-all duration-500 hover:border-copper hover:shadow-elegant hover:-translate-y-1"
            >
              <Quote className="h-8 w-8 text-copper/40" strokeWidth={1} />
              <p className="mt-6 flex-1 text-sm leading-relaxed text-foreground/85">{r.text}</p>
              <footer className="mt-8 border-t border-border pt-5">
                <div className="font-display text-lg text-ink">{r.name}</div>
                <div className="mt-1 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{r.meta}</span>
                  <span>{r.date}</span>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
