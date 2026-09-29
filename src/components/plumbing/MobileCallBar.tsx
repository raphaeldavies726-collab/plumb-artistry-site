import { Phone, FileText } from "lucide-react";
import { telLink } from "@/config/business";

// Fixed bar on phones: most emergency plumbing calls start on mobile.
const MobileCallBar = () => (
  <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-copper/30 bg-ink-deep/95 backdrop-blur md:hidden">
    <a
      href={telLink}
      className="flex items-center justify-center gap-2 bg-copper py-4 text-sm font-medium uppercase tracking-widest text-bone"
    >
      <Phone className="h-4 w-4" /> Appeler
    </a>
    <a
      href="#contact"
      className="flex items-center justify-center gap-2 py-4 text-sm font-medium uppercase tracking-widest text-bone"
    >
      <FileText className="h-4 w-4" /> Devis gratuit
    </a>
  </div>
);

export default MobileCallBar;
