// Single source of truth for contact details. Update here and every
// phone link, email link, contact form and search-engine listing follows.
// TODO: replace the placeholder phone numbers with the real ones before going live.
export const business = {
  name: "Moure Lethoor",
  description:
    "Plombier artisan de confiance : fuites, chauffe-eau, rénovation salle de bain. Intervention rapide, devis gratuit, urgence 24/7.",
  phoneDisplay: "+33 5 59 00 00 00",
  phoneHref: "+33559000000",
  email: "contact@moure-lethoor.fr",
  areaDisplay: "Pau · Oloron · Vallée d'Aspe",
  areaServed: ["Pau", "Oloron-Sainte-Marie", "Vallée d'Aspe"],
  hoursDisplay: "Lun–Sam · Urgence 24/7",
  rating: { value: 4.1, count: 9 },
};

export const telLink = `tel:${business.phoneHref}`;
export const mailLink = `mailto:${business.email}`;
