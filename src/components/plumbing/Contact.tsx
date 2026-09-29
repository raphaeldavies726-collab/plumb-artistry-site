import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { business, telLink, mailLink } from "@/config/business";

const fieldClass =
  "mt-2 border-0 border-b border-bone/20 rounded-none bg-transparent px-0 text-bone placeholder:text-bone/30 focus-visible:ring-0 focus-visible:border-copper-glow";

// No backend yet: hand the request to the visitor's email app, pre-filled,
// so the lead actually reaches the business instead of being discarded.
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget;
  const d = new FormData(form);
  const subject = `Demande de devis — ${d.get("name")}`;
  const body = [
    `Nom : ${d.get("name")}`,
    `Téléphone : ${d.get("phone")}`,
    `Email : ${d.get("email")}`,
    "",
    String(d.get("message")),
  ].join("\n");
  window.location.href = `${mailLink}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  toast.success("Votre messagerie s'ouvre", {
    description: `Envoyez l'email pour finaliser. Urgent ? Appelez le ${business.phoneDisplay}.`,
  });
};

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink-deep py-32 grain text-bone">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-copper/20 blur-3xl" />

      <div className="container relative grid gap-16 lg:grid-cols-5 lg:gap-24">
        <div className="lg:col-span-2">
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-copper-glow">— Contact</div>
          <h2 className="font-display text-5xl font-light leading-tight md:text-6xl text-balance">
            Une fuite ?<br />
            <span className="italic text-copper-glow">Parlons-en.</span>
          </h2>
          <p className="mt-6 text-lg text-bone/70">
            Réponse sous 1h en journée. Pour toute urgence, appelez directement.
          </p>

          <ul className="mt-12 space-y-6">
            {[
              { i: Phone, l: "Téléphone", v: business.phoneDisplay, href: telLink },
              { i: Mail, l: "Email", v: business.email, href: mailLink },
              { i: MapPin, l: "Zone d'intervention", v: business.areaDisplay },
              { i: Clock, l: "Disponibilité", v: business.hoursDisplay },
            ].map((c) => (
              <li key={c.l} className="flex items-start gap-4">
                <div className="mt-1 rounded-sm border border-copper/40 p-2 text-copper-glow">
                  <c.i className="h-4 w-4" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-bone/50">{c.l}</div>
                  {c.href ? (
                    <a href={c.href} className="mt-1 block text-bone hover:text-copper-glow transition-colors">{c.v}</a>
                  ) : (
                    <div className="mt-1 text-bone">{c.v}</div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form
          className="lg:col-span-3 border border-bone/15 bg-bone/5 p-8 backdrop-blur md:p-12"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="text-xs uppercase tracking-widest text-bone/60">Nom</label>
              <Input required autoComplete="name" id="contact-name" name="name" className={fieldClass} placeholder="Votre nom" />
            </div>
            <div>
              <label htmlFor="contact-phone" className="text-xs uppercase tracking-widest text-bone/60">Téléphone</label>
              <Input required type="tel" autoComplete="tel" id="contact-phone" name="phone" className={fieldClass} placeholder="06 00 00 00 00" />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="contact-email" className="text-xs uppercase tracking-widest text-bone/60">Email</label>
              <Input required type="email" autoComplete="email" id="contact-email" name="email" className={fieldClass} placeholder="vous@email.fr" />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="contact-message" className="text-xs uppercase tracking-widest text-bone/60">Décrivez votre besoin</label>
              <Textarea required rows={5} id="contact-message" name="message" className={`${fieldClass} resize-none`} placeholder="Fuite, chauffe-eau, rénovation…" />
            </div>
          </div>
          <Button type="submit" variant="copper" size="xl" className="mt-10 w-full md:w-auto">
            Envoyer la demande <ArrowRight />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
