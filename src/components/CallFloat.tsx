import { PhoneCall } from "lucide-react";
import { PHONE } from "@/lib/data";

const CallFloat = () => (
  <a href={`tel:${PHONE}`} className="call-float" aria-label="Call now">
    <PhoneCall className="w-7 h-7 text-card" />
  </a>
);

export default CallFloat;
