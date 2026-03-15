import Layout from "@/components/Layout";
import { Shield, Users, Award, Heart } from "lucide-react";
import heroEvent from "@/assets/hero-event.jpg";
import { useI18n } from "@/lib/i18n";

const About = () => {
  const { t } = useI18n();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <img src={heroEvent} alt="About AL Tasfi Party Equipment Rental Event Rental" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative z-10 text-center px-4">
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-2">{t("about.hero.tag")}</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-card">{t("about.hero.title")}</h1>
          <div className="gold-divider" />
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
            {t("about.content.title")}
          </h2>
          <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
            <p>{t("about.content.p1")}</p>
            <p>{t("about.content.p2")}</p>
            <p>{t("about.content.p3")}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground">{t("about.values.title")}</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, titleKey: "about.values.quality.title", descKey: "about.values.quality.desc" },
              { icon: Users, titleKey: "about.values.client.title", descKey: "about.values.client.desc" },
              { icon: Shield, titleKey: "about.values.reliability.title", descKey: "about.values.reliability.desc" },
              { icon: Heart, titleKey: "about.values.passion.title", descKey: "about.values.passion.desc" },
            ].map((v) => (
              <div key={v.titleKey} className="card-elegant p-6 text-center">
                <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center bg-accent">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{t(v.titleKey)}</h3>
                <p className="text-sm text-muted-foreground font-body">{t(v.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
