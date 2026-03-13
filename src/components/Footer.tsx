import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";
import { PHONE, PHONE_DISPLAY, ADDRESS, BUSINESS_HOURS, services } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-bold text-primary mb-4">Mohammad Mamoon</h3>
            <p className="text-sm text-secondary-foreground/70 font-body leading-relaxed">
              {t("footer.desc")}
            </p>
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
