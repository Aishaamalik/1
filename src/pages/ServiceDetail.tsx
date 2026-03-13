import { useParams, Link } from "react-router-dom";
import { Phone, MessageCircle, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { services, PHONE, WHATSAPP_URL, PHONE_DISPLAY } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useI18n();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h1 className="font-display text-3xl font-bold">{t("serviceDetail.notFound")}</h1>
          <Link to="/services" className="btn-gold mt-6 inline-flex">{t("serviceDetail.viewAll")}</Link>
        </div>
      </Layout>
    );
  }

  const features = t(`service.${service.slug}.features`).split("|");

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <img src={service.image} alt={t(`service.${service.slug}.title`)} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative z-10 text-center px-4">
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-2">{t("serviceDetail.tag")}</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-card">{t(`service.${service.slug}.title`)}</h1>
          <div className="gold-divider" />
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                {t(`service.${service.slug}.title`)} {t("serviceDetail.inLocation")}
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-8">{t(`service.${service.slug}.description`)}</p>

              <h3 className="font-display text-xl font-semibold text-foreground mb-4">{t("serviceDetail.included")}</h3>
              <ul className="space-y-3 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-muted-foreground font-body">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="card-elegant p-6 sticky top-28">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">{t("serviceDetail.quote.title")}</h3>
                <p className="text-sm text-muted-foreground font-body mb-6">{t("serviceDetail.quote.desc")}</p>
                <div className="space-y-3">
                  <a href={`tel:${PHONE}`} className="btn-gold w-full justify-center">
                    <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
                  </a>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full justify-center">
                    <MessageCircle className="w-4 h-4" /> {t("home.hero.whatsapp")}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Other Services */}
          <div className="mt-16">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">{t("serviceDetail.otherServices")}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.filter((s) => s.slug !== slug).slice(0, 3).map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="card-elegant group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={s.image} alt={t(`service.${s.slug}.title`)} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-display font-semibold text-foreground">{t(`service.${s.slug}.title`)}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
