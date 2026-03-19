import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";
import { PHONE, PHONE_DISPLAY, ADDRESS, BUSINESS_HOURS, services } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TikTokIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
  </svg>
);

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1D8KYJtprF/?mibextid=wwXIfr",
    icon: <FacebookIcon />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/al_tasfi_party_rental_dammam?igsh=a2l1MDV1bHIyaWJl&utm_source=qr",
    icon: <InstagramIcon />,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@mdmamunbd076?_r=1&_t=ZS-94f3F2n5B8C",
    icon: <TikTokIcon />,
  },
];

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-bold text-primary mb-4">AL Tasfi Party Equipment Rental</h3>
            <p className="text-sm text-secondary-foreground/70 font-body leading-relaxed">
              {t("footer.desc")}
            </p>

            {/* Social Media Icons */}
            <p className="text-sm font-semibold text-primary mt-5 mb-2">{t("Follow Us")}</p>
            <div className="flex items-center gap-3 mt-2">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2">
              {[
                { label: t("nav.home"), to: "/" },
                { label: t("nav.about"), to: "/about" },
                { label: t("nav.services"), to: "/services" },
                { label: t("nav.contact"), to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors font-body">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">{t("footer.services")}</h4>
            <ul className="space-y-2">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors font-body">
                    {t(`service.${s.slug}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">{t("footer.contactInfo")}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-secondary-foreground/70">
                <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a href={`tel:${PHONE}`} className="hover:text-primary transition-colors font-body">{PHONE_DISPLAY}</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-secondary-foreground/70">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="font-body">{ADDRESS}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-secondary-foreground/70">
                <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="font-body">{BUSINESS_HOURS}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-divider mt-12 mb-6" />
        <p className="text-center text-xs text-secondary-foreground/50 font-body">
          {t("footer.copyright").replace("{year}", new Date().getFullYear().toString())}
        </p>
      </div>
    </footer>
  );
};

export default Footer;