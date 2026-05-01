import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { toast } from "sonner";

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
              { i: Phone, l: "Téléphone", v: "+33 5 59 00 00 00" },
              { i: Mail, l: "Email", v: "contact@moure-lethoor.fr" },
              { i: MapPin, l: "Zone d'intervention", v: "Pau · Oloron · Vallée d'Aspe" },
              { i: Clock, l: "Disponibilité", v: "Lun–Sam · Urgence 24/7" },
            ].map((c) => (
              <li key={c.l} className="flex items-start gap-4">
                <div className="mt-1 rounded-sm border border-copper/40 p-2 text-copper-glow">
                  <c.i className="h-4 w-4" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-bone/50">{c.l}</div>
                  <div className="mt-1 text-bone">{c.v}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form
          className="lg:col-span-3 border border-bone/15 bg-bone/5 p-8 backdrop-blur md:p-12"
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Message envoyé", { description: "Nous revenons vers vous très vite." });
            (e.target as HTMLFormElement).reset();
          }}
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="text-xs uppercase tracking-widest text-bone/60">Nom</label>
              <Input required className="mt-2 border-0 border-b border-bone/20 rounded-none bg-transparent px-0 text-bone placeholder:text-bone/30 focus-visible:ring-0 focus-visible:border-copper-glow" placeholder="Votre nom" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-bone/60">Téléphone</label>
              <Input required className="mt-2 border-0 border-b border-bone/20 rounded-none bg-transparent px-0 text-bone placeholder:text-bone/30 focus-visible:ring-0 focus-visible:border-copper-glow" placeholder="06 00 00 00 00" />
            </div>
            <div className="md:col-span-2">
              <label className="text-xs uppercase tracking-widest text-bone/60">Email</label>
              <Input required type="email" className="mt-2 border-0 border-b border-bone/20 rounded-none bg-transparent px-0 text-bone placeholder:text-bone/30 focus-visible:ring-0 focus-visible:border-copper-glow" placeholder="vous@email.fr" />
            </div>
            <div className="md:col-span-2">
              <label className="text-xs uppercase tracking-widest text-bone/60">Décrivez votre besoin</label>
              <Textarea required rows={5} className="mt-2 border-0 border-b border-bone/20 rounded-none bg-transparent px-0 text-bone placeholder:text-bone/30 focus-visible:ring-0 focus-visible:border-copper-glow resize-none" placeholder="Fuite, chauffe-eau, rénovation…" />
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
