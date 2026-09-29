import { business } from "@/config/business";

// schema.org Plumber markup so Google can show the business in local results.
const StructuredData = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: business.name,
    description: business.description,
    telephone: business.phoneHref,
    email: business.email,
    areaServed: business.areaServed.map((name) => ({ "@type": "City", name })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating.value,
      reviewCount: business.rating.count,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default StructuredData;
