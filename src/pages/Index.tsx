import { Link } from "react-router-dom";
import { Phone, MessageCircle, Star, Shield, Clock, Truck } from "lucide-react";
import Layout from "@/components/Layout";
import heroTent from "@/assets/hero-tent.jpg";
import heroEvent from "@/assets/hero-event.jpg";
import { services, PHONE, WHATSAPP_URL, PHONE_DISPLAY } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

const Index = () => {
  const { t } = useI18n();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <img src={heroTent} alt="Luxury event tent setup in Dammam" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          <p className="text-primary font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4">{t("home.hero.tag")}</p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-card mb-6 leading-tight">
            {t("home.hero.title")}
          </h1>
          <p className="text-card/80 font-body text-base md:text-lg max-w-2xl mx-auto mb-10">
            {t("home.hero.desc")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${PHONE}`} className="btn-gold">
              <Phone className="w-4 h-4" /> {t("home.hero.call")}
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle className="w-4 h-4" /> {t("home.hero.whatsapp")}
            </a>
            <Link to="/contact" className="btn-outline-gold border-card/50 text-card hover:bg-card/10">
              {t("home.hero.quote")}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-2">{t("home.services.tag")}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">{t("home.services.title")}</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link key={service.slug} to={`/services/${service.slug}`} className="card-elegant group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={t(`service.${service.slug}.title`)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{t(`service.${service.slug}.title`)}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{t(`service.${service.slug}.shortDesc`)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-2">{t("home.why.tag")}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground">{t("home.why.title")}</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Star, titleKey: "home.why.quality.title", descKey: "home.why.quality.desc" },
              { icon: Truck, titleKey: "home.why.delivery.title", descKey: "home.why.delivery.desc" },
              { icon: Clock, titleKey: "home.why.time.title", descKey: "home.why.time.desc" },
              { icon: Shield, titleKey: "home.why.trusted.title", descKey: "home.why.trusted.desc" },
            ].map((item) => (
              <div key={item.titleKey} className="text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: "var(--gradient-gold)" }}>
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-secondary-foreground mb-2">{t(item.titleKey)}</h3>
                <p className="text-sm text-secondary-foreground/70 font-body">{t(item.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 overflow-hidden">
        <img src={heroEvent} alt="Elegant event setup" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative z-10 text-center px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-card mb-4">{t("home.cta.title")}</h2>
          <p className="text-card/80 font-body mb-8 max-w-xl mx-auto">{t("home.cta.desc")}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle className="w-4 h-4" /> {t("home.hero.whatsapp")}
            </a>
            <a href={`tel:${PHONE}`} className="btn-gold">
              <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
