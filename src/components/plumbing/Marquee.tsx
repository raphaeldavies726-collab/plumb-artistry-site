const items = ["Dépannage", "★", "Chauffe-eau", "★", "Rénovation", "★", "Urgence 24/7", "★", "Salle de bain", "★", "Sanitaires", "★", "Devis gratuit", "★"];

const Marquee = () => {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-copper/30 bg-ink py-6 text-bone">
      <div className="marquee flex whitespace-nowrap">
        {loop.map((t, i) => (
          <span key={i} className="font-display text-3xl mx-8 italic font-light text-bone/90">
            {t === "★" ? <span className="text-copper-glow not-italic">✦</span> : t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
