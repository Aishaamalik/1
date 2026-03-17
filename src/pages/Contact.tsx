import { useState } from "react";
import { Phone, MessageCircle, MapPin, Clock, Send } from "lucide-react";
import Layout from "@/components/Layout";
import { PHONE, PHONE_DISPLAY, ADDRESS, BUSINESS_HOURS, WHATSAPP_URL, MAP_EMBED } from "@/lib/data";
import { toast } from "sonner";
import { useI18n } from "@/lib/i18n";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const { t } = useI18n();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello, I'm ${form.name}. ${form.message} (Phone: ${form.phone}, Email: ${form.email})`;
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(text)}`, "_blank");
    toast.success("Redirecting to WhatsApp...");
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary section-padding text-center">
        <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-2">{t("contact.hero.tag")}</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary-foreground">{t("contact.hero.title")}</h1>
        <div className="gold-divider" />
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">{t("contact.form.title")}</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { key: "name", label: t("contact.form.name"), type: "text" },
                  { key: "phone", label: t("contact.form.phone"), type: "tel" },
                  { key: "email", label: t("contact.form.email"), type: "email" },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-sm font-medium font-body text-foreground mb-1.5">{field.label}</label>
                    <input
                      type={field.type}
                      required
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-input bg-card text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium font-body text-foreground mb-1.5">{t("contact.form.message")}</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-md border border-input bg-card text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  />
                </div>
                <button type="submit" className="btn-gold">
                  <Send className="w-4 h-4" /> {t("contact.form.submit")}
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">{t("contact.info.title")}</h2>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-accent">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-body font-semibold text-foreground text-sm">{t("contact.info.phoneLabel")}</p>
                      <a href={`tel:${PHONE}`} className="text-muted-foreground font-body text-sm hover:text-primary">{PHONE_DISPLAY}</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-accent">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-body font-semibold text-foreground text-sm">{t("contact.info.address")}</p>
                      <p className="text-muted-foreground font-body text-sm">{ADDRESS}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-accent">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-body font-semibold text-foreground text-sm">{t("contact.info.hours")}</p>
                      <p className="text-muted-foreground font-body text-sm">{BUSINESS_HOURS}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="flex gap-3">
                <a href={`tel:${PHONE}`} className="btn-gold">
                  <Phone className="w-4 h-4" /> {t("contact.callNow")}
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  <MessageCircle className="w-4 h-4" /> {t("contact.whatsapp")}
                </a>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden border border-border">
                <iframe
                  src={MAP_EMBED}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Business Location - Al Khobar"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
