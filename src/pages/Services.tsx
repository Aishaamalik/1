import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { services } from "@/lib/data";
import heroTent from "@/assets/hero-tent.jpg";
import { useI18n } from "@/lib/i18n";

const Services = () => {
  const { t } = useI18n();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <img src={heroTent} alt="Event rental services in Dammam and Al Khobar" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative z-10 text-center px-4">
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-2">{t("services.hero.tag")}</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-card">{t("services.hero.title")}</h1>
          <div className="gold-divider" />
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="p-6">
                  <h2 className="font-display text-xl font-semibold text-foreground mb-2">{t(`service.${service.slug}.title`)}</h2>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">{t(`service.${service.slug}.shortDesc`)}</p>
                  <span className="text-primary text-sm font-semibold font-body group-hover:underline">{t("services.learnMore")}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
