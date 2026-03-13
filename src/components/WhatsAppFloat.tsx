import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/data";

const WhatsAppFloat = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-float"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-7 h-7 text-card" fill="currentColor" />
  </a>
);

export default WhatsAppFloat;
