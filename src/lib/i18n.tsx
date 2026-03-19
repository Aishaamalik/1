import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "en" | "ar";

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const I18nContext = createContext<I18nContextType | null>(null);

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};

// Flat key-value translations
const translations: Record<Lang, Record<string, string>> = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.contact": "Contact",

    // Home Hero
    "home.hero.tag": "Premium Event Rental in Dammam & Al Khobar",
    "home.hero.title": "AL Tasfi Party Equipment Rental",
    "home.hero.desc": "Tents, tables, chairs, decoration, and complete event solutions — delivered and set up with perfection across the Eastern Province.",
    "home.hero.call": "Call Now",
    "home.hero.whatsapp": "WhatsApp Us",
    "home.hero.quote": "Get a Quote",

    // Home Services
    "home.services.tag": "What We Offer",
    "home.services.title": "Our Services",

    // Home Why
    "home.why.tag": "Why Choose Us",
    "home.why.title": "Trusted by Hundreds of Clients",
    "home.why.quality.title": "Premium Quality",
    "home.why.quality.desc": "Top-grade tents, furniture, and décor maintained to the highest standards.",
    "home.why.delivery.title": "Delivery & Setup",
    "home.why.delivery.desc": "Full delivery, professional setup, and collection — hassle-free service.",
    "home.why.time.title": "On-Time Service",
    "home.why.time.desc": "Punctual delivery and setup so your event runs perfectly on schedule.",
    "home.why.trusted.title": "Reliable & Trusted",
    "home.why.trusted.desc": "Years of experience serving Dammam & Al Khobar with 100% satisfaction.",

    // Home CTA
    "home.cta.title": "Ready to Plan Your Event?",
    "home.cta.desc": "Contact us today for a free consultation and quote. We serve all of Dammam and Al Khobar.",

    // About
    "about.hero.tag": "Our Story",
    "about.hero.title": "About Us",
    "about.content.title": "Your Trusted Event Rental Partner in the Eastern Province",
    "about.content.p1": "AL Tasfi Party Equipment Rental Event Rental is a leading event equipment rental company serving Dammam, Al Khobar, and the broader Eastern Province of Saudi Arabia. With years of experience in the event industry, we have built a reputation for delivering premium-quality tents, tables, chairs, decoration, and complete event solutions.",
    "about.content.p2": "Our commitment to excellence ensures that every event we support — from intimate family gatherings to grand wedding celebrations and corporate functions — is executed with professionalism, attention to detail, and on-time delivery.",
    "about.content.p3": "We take pride in offering a comprehensive range of event rental equipment at competitive prices, backed by reliable customer service and professional setup teams. Our goal is to make your event planning experience seamless and stress-free.",
    "about.values.title": "Our Values",
    "about.values.quality.title": "Quality First",
    "about.values.quality.desc": "We invest in premium equipment and maintain it to the highest standards.",
    "about.values.client.title": "Client Focused",
    "about.values.client.desc": "Your satisfaction is our top priority — we listen, adapt, and deliver.",
    "about.values.reliability.title": "Reliability",
    "about.values.reliability.desc": "On-time delivery, professional setup, and consistent quality every time.",
    "about.values.passion.title": "Passion",
    "about.values.passion.desc": "We love what we do, and it shows in every event we help create.",

    // Services Page
    "services.hero.tag": "What We Offer",
    "services.hero.title": "Our Services",
    "services.learnMore": "Learn More →",

    // Service Detail
    "serviceDetail.tag": "Our Services",
    "serviceDetail.notFound": "Service Not Found",
    "serviceDetail.viewAll": "View All Services",
    "serviceDetail.included": "What's Included",
    "serviceDetail.quote.title": "Get a Free Quote",
    "serviceDetail.quote.desc": "Contact us today for pricing and availability. We serve all of Dammam and Al Khobar.",
    "serviceDetail.otherServices": "Other Services",
    "serviceDetail.inLocation": "in Dammam & Al Khobar",

    // Contact
    "contact.hero.tag": "Get In Touch",
    "contact.hero.title": "Contact Us",
    "contact.form.title": "Send Us a Message",
    "contact.form.name": "Your Name",
    "contact.form.phone": "Phone Number",
    "contact.form.email": "Email Address",
    "contact.form.message": "Your Message",
    "contact.form.submit": "Send via WhatsApp",
    "contact.info.title": "Contact Information",
    "contact.info.phoneLabel": "Phone / WhatsApp",
    "contact.info.address": "Address",
    "contact.info.hours": "Business Hours",
    "contact.callNow": "Call Now",
    "contact.whatsapp": "WhatsApp",

    // Footer
    "footer.desc": "Premium event rental services in Dammam & Al Khobar. Tents, tables, chairs, decoration, and complete event solutions.",
    "footer.quickLinks": "Quick Links",
    "footer.services": "Services",
    "footer.contactInfo": "Contact Info",
    "footer.copyright": "© {year} AL Tasfi Party Equipment Rental Event Rental. All rights reserved. | Dammam & Al Khobar, Saudi Arabia",

    // Service titles & descriptions (keyed by slug)
    "service.tent-rental.title": "Tent Rental",
    "service.tent-rental.shortDesc": "Premium tents for every occasion — from intimate gatherings to grand celebrations.",
    "service.tent-rental.description": "Our premium tent rental service in Dammam and Al Khobar offers a wide range of tent sizes and styles to suit any event. Whether you need a small canopy for a garden party or a massive marquee for a corporate gala, we provide high-quality, weather-resistant tents with professional setup and takedown services.",
    "service.tent-rental.features": "Various sizes from 3x3m to 40x60m|Weather-resistant materials|Professional setup & takedown|Air-conditioned options available|Customizable configurations",

    "service.wedding-tent-setup.title": "Wedding Tent Setup",
    "service.wedding-tent-setup.shortDesc": "Elegant wedding tents with luxurious draping and chandelier installations.",
    "service.wedding-tent-setup.description": "Make your wedding day unforgettable with our luxury wedding tent setups in Dammam and Al Khobar. We specialize in creating breathtaking tent environments with elegant draping, crystal chandeliers, premium flooring, and climate control to ensure your guests enjoy every moment in comfort and style.",
    "service.wedding-tent-setup.features": "Luxury fabric draping|Crystal chandelier installations|Premium carpet flooring|Climate control systems|Bridal suite tent options",

    "service.party-tent-rental.title": "Party Tent Rental",
    "service.party-tent-rental.shortDesc": "Colorful and fun party tents for birthdays, celebrations, and festive events.",
    "service.party-tent-rental.description": "Celebrate in style with our party tent rentals across Dammam and Al Khobar. Perfect for birthday parties, anniversaries, graduation celebrations, and family gatherings. Our party tents come in various colors and themes, and can be customized with decorations to match your celebration's mood.",
    "service.party-tent-rental.features": "Themed decoration options|Colorful canopy selections|Sound system compatible|Dance floor integration|Flexible sizes for any gathering",

    "service.table-rental.title": "Table Rental",
    "service.table-rental.shortDesc": "Round, rectangular, and banquet tables with premium linens and settings.",
    "service.table-rental.description": "Complete your event setup with our extensive table rental collection in Dammam and Al Khobar. We offer round banquet tables, rectangular conference tables, cocktail tables, and more. All tables come with optional premium linen, charger plates, and centerpiece accessories.",
    "service.table-rental.features": "Round & rectangular options|Premium linen packages|Cocktail & high-top tables|Gold charger plates available|Bulk rental discounts",

    "service.chair-rental.title": "Chair Rental",
    "service.chair-rental.shortDesc": "Gold chiavari, banquet, and VIP chairs for elegant seating arrangements.",
    "service.chair-rental.description": "Elevate your event seating with our premium chair rental service in Dammam and Al Khobar. Choose from gold chiavari chairs, classic banquet chairs, luxury VIP thrones, and garden chairs. All chairs are meticulously maintained and come with cushion options for maximum guest comfort.",
    "service.chair-rental.features": "Gold chiavari chairs|Banquet & folding chairs|VIP throne chairs|Cushion & cover options|Large quantity availability",

    "service.event-decoration.title": "Event Decoration Setup",
    "service.event-decoration.shortDesc": "Transform your venue with stunning floral arrangements and luxury décor.",
    "service.event-decoration.description": "Our professional event decoration team in Dammam and Al Khobar transforms ordinary spaces into extraordinary venues. From floral arrangements and fabric draping to stage design and entrance arches, we create custom decoration packages that bring your event vision to life.",
    "service.event-decoration.features": "Custom floral arrangements|Fabric draping & backdrops|Stage & kosha design|Entrance arch setups|Theme-based decoration",

    "service.event-lighting.title": "Lighting for Events",
    "service.event-lighting.shortDesc": "Dramatic uplighting, string lights, and chandelier installations.",
    "service.event-lighting.description": "Set the perfect ambiance with our professional event lighting services in Dammam and Al Khobar. We offer ambient uplighting, fairy string lights, LED installations, spotlight effects, and crystal chandelier rentals. Our lighting designers work with you to create the perfect atmosphere for your event.",
    "service.event-lighting.features": "LED uplighting packages|String & fairy lights|Chandelier installations|Spotlight & wash effects|DMX controlled systems",

    "service.outdoor-event-setup.title": "Outdoor Event Setup",
    "service.outdoor-event-setup.shortDesc": "Complete outdoor event solutions with tents, furniture, and landscaping.",
    "service.outdoor-event-setup.description": "Host the perfect outdoor event in Dammam and Al Khobar with our complete outdoor setup services. We handle everything from tent installation and furniture arrangement to flooring, lighting, and lounge area creation. Our outdoor packages are designed to withstand Saudi Arabia's climate while providing maximum comfort.",
    "service.outdoor-event-setup.features": "Complete outdoor packages|Lounge area setups|Outdoor flooring solutions|Wind & sand protection|Garden & landscape lighting",

    "service.wedding-party-equipment.title": "Wedding & Party Equipment Rental",
    "service.wedding-party-equipment.shortDesc": "All-inclusive rental packages for weddings, parties, and corporate events.",
    "service.wedding-party-equipment.description": "Get everything you need for your event from one trusted supplier in Dammam and Al Khobar. Our all-inclusive equipment rental packages include tents, tables, chairs, decoration, lighting, sound systems, staging, and more. We simplify event planning by providing comprehensive solutions with delivery, setup, and collection.",
    "service.wedding-party-equipment.features": "All-inclusive packages|Sound system rentals|Stage & podium setup|Red carpet & VIP areas|Delivery & collection included",

    "service.arabic-coffee-tea-service.title": "Arabic Coffee & Tea Service",
    "service.arabic-coffee-tea-service.shortDesc": "Traditional Arabic hospitality with premium coffee and tea station setup for your guests.",
    "service.arabic-coffee-tea-service.description": "Add a warm, authentic touch to your event in Dammam and Al Khobar with our Arabic coffee and tea service. We provide a complete hospitality station setup featuring Arabic coffee (Gahwa) and tea service essentials, arranged beautifully to match your event theme and guest flow.",
    "service.arabic-coffee-tea-service.features": "Arabic coffee (Gahwa) & tea station setup|Elegant serving presentation|Flexible setup for indoor/outdoor events|Suitable for weddings, gatherings, and corporate events|Delivery, setup & collection available",
  },
  ar: {
    // Nav
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.services": "خدماتنا",
    "nav.contact": "اتصل بنا",

    // Home Hero
    "home.hero.tag": "تأجير معدات الفعاليات الفاخرة في الدمام والخبر",
    "home.hero.title": "فعاليات لا تُنسى تبدأ من هنا",
    "home.hero.desc": "خيام، طاولات، كراسي، ديكورات وحلول فعاليات متكاملة — يتم توصيلها وتركيبها باحترافية في جميع أنحاء المنطقة الشرقية.",
    "home.hero.call": "اتصل الآن",
    "home.hero.whatsapp": "واتساب",
    "home.hero.quote": "احصل على عرض سعر",

    // Home Services
    "home.services.tag": "ما نقدمه",
    "home.services.title": "خدماتنا",

    // Home Why
    "home.why.tag": "لماذا نحن",
    "home.why.title": "موثوق من مئات العملاء",
    "home.why.quality.title": "جودة عالية",
    "home.why.quality.desc": "خيام وأثاث وديكورات من الدرجة الأولى يتم صيانتها بأعلى المعايير.",
    "home.why.delivery.title": "توصيل وتركيب",
    "home.why.delivery.desc": "توصيل كامل، تركيب احترافي، وجمع — خدمة بدون عناء.",
    "home.why.time.title": "خدمة في الوقت المحدد",
    "home.why.time.desc": "توصيل وتركيب دقيق حتى تسير فعاليتك بشكل مثالي.",
    "home.why.trusted.title": "موثوق وذو خبرة",
    "home.why.trusted.desc": "سنوات من الخبرة في خدمة الدمام والخبر بنسبة رضا 100%.",

    // Home CTA
    "home.cta.title": "هل أنت مستعد لتخطيط فعاليتك؟",
    "home.cta.desc": "تواصل معنا اليوم للحصول على استشارة وعرض سعر مجاني. نخدم جميع مناطق الدمام والخبر.",

    // About
    "about.hero.tag": "قصتنا",
    "about.hero.title": "من نحن",
    "about.content.title": "شريكك الموثوق لتأجير معدات الفعاليات في المنطقة الشرقية",
    "about.content.p1": "محمد مأمون لتأجير معدات الفعاليات هي شركة رائدة في تأجير معدات الفعاليات تخدم الدمام والخبر والمنطقة الشرقية الأوسع في المملكة العربية السعودية. مع سنوات من الخبرة في صناعة الفعاليات، بنينا سمعة في تقديم خيام وطاولات وكراسي وديكورات وحلول فعاليات متكاملة عالية الجودة.",
    "about.content.p2": "التزامنا بالتميز يضمن أن كل فعالية ندعمها — من التجمعات العائلية الحميمة إلى حفلات الزفاف الكبرى والفعاليات المؤسسية — يتم تنفيذها باحترافية واهتمام بالتفاصيل وتسليم في الوقت المحدد.",
    "about.content.p3": "نفخر بتقديم مجموعة شاملة من معدات تأجير الفعاليات بأسعار تنافسية، مدعومة بخدمة عملاء موثوقة وفرق تركيب محترفة. هدفنا هو جعل تجربة تخطيط الفعاليات سلسة وخالية من التوتر.",
    "about.values.title": "قيمنا",
    "about.values.quality.title": "الجودة أولاً",
    "about.values.quality.desc": "نستثمر في معدات فاخرة ونحافظ عليها بأعلى المعايير.",
    "about.values.client.title": "التركيز على العميل",
    "about.values.client.desc": "رضاك هو أولويتنا القصوى — نستمع ونتكيف ونقدم.",
    "about.values.reliability.title": "الموثوقية",
    "about.values.reliability.desc": "تسليم في الوقت المحدد، تركيب احترافي، وجودة متسقة في كل مرة.",
    "about.values.passion.title": "الشغف",
    "about.values.passion.desc": "نحب ما نفعله، وهذا يظهر في كل فعالية نساعد في إنشائها.",

    // Services Page
    "services.hero.tag": "ما نقدمه",
    "services.hero.title": "خدماتنا",
    "services.learnMore": "← المزيد",

    // Service Detail
    "serviceDetail.tag": "خدماتنا",
    "serviceDetail.notFound": "الخدمة غير موجودة",
    "serviceDetail.viewAll": "عرض جميع الخدمات",
    "serviceDetail.included": "ما يشمله",
    "serviceDetail.quote.title": "احصل على عرض سعر مجاني",
    "serviceDetail.quote.desc": "تواصل معنا اليوم للأسعار والتوفر. نخدم جميع مناطق الدمام والخبر.",
    "serviceDetail.otherServices": "خدمات أخرى",
    "serviceDetail.inLocation": "في الدمام والخبر",

    // Contact
    "contact.hero.tag": "تواصل معنا",
    "contact.hero.title": "اتصل بنا",
    "contact.form.title": "أرسل لنا رسالة",
    "contact.form.name": "الاسم",
    "contact.form.phone": "رقم الهاتف",
    "contact.form.email": "البريد الإلكتروني",
    "contact.form.message": "رسالتك",
    "contact.form.submit": "إرسال عبر واتساب",
    "contact.info.title": "معلومات الاتصال",
    "contact.info.phoneLabel": "الهاتف / واتساب",
    "contact.info.address": "العنوان",
    "contact.info.hours": "ساعات العمل",
    "contact.callNow": "اتصل الآن",
    "contact.whatsapp": "واتساب",

    // Footer
    "footer.desc": "خدمات تأجير فعاليات فاخرة في الدمام والخبر. خيام، طاولات، كراسي، ديكورات وحلول فعاليات متكاملة.",
    "footer.quickLinks": "روابط سريعة",
    "footer.services": "الخدمات",
    "footer.contactInfo": "معلومات الاتصال",
    "footer.copyright": "© {year} محمد مأمون لتأجير معدات الفعاليات. جميع الحقوق محفوظة. | الدمام والخبر، المملكة العربية السعودية",

    // Service titles & descriptions
    "service.tent-rental.title": "تأجير خيام",
    "service.tent-rental.shortDesc": "خيام فاخرة لكل مناسبة — من التجمعات الحميمة إلى الاحتفالات الكبرى.",
    "service.tent-rental.description": "خدمة تأجير الخيام الفاخرة في الدمام والخبر تقدم مجموعة واسعة من أحجام وأنماط الخيام لتناسب أي فعالية. سواء كنت تحتاج مظلة صغيرة لحفلة حديقة أو خيمة ضخمة لحفل مؤسسي، نقدم خيام عالية الجودة مقاومة للطقس مع خدمة تركيب وإزالة احترافية.",
    "service.tent-rental.features": "أحجام متنوعة من 3×3م إلى 40×60م|مواد مقاومة للطقس|تركيب وإزالة احترافية|خيارات مكيفة الهواء|تكوينات قابلة للتخصيص",

    "service.wedding-tent-setup.title": "تجهيز خيام الزفاف",
    "service.wedding-tent-setup.shortDesc": "خيام زفاف أنيقة مع ستائر فاخرة وثريات كريستال.",
    "service.wedding-tent-setup.description": "اجعل يوم زفافك لا يُنسى مع تجهيزات خيام الزفاف الفاخرة في الدمام والخبر. نتخصص في إنشاء بيئات خيام مذهلة مع ستائر أنيقة، ثريات كريستال، أرضيات فاخرة، وأنظمة تحكم بالمناخ لضمان استمتاع ضيوفك بكل لحظة.",
    "service.wedding-tent-setup.features": "ستائر قماش فاخرة|تركيب ثريات كريستال|أرضيات سجاد فاخرة|أنظمة تحكم بالمناخ|خيارات جناح العروس",

    "service.party-tent-rental.title": "تأجير خيام الحفلات",
    "service.party-tent-rental.shortDesc": "خيام حفلات ملونة وممتعة لأعياد الميلاد والاحتفالات.",
    "service.party-tent-rental.description": "احتفل بأناقة مع خيام الحفلات في الدمام والخبر. مثالية لحفلات أعياد الميلاد والذكرى السنوية واحتفالات التخرج والتجمعات العائلية. تأتي خيامنا بألوان وأنماط متنوعة ويمكن تخصيصها بالديكورات.",
    "service.party-tent-rental.features": "خيارات ديكور ذات طابع|اختيارات مظلات ملونة|متوافقة مع أنظمة الصوت|تكامل حلبة الرقص|أحجام مرنة لأي تجمع",

    "service.table-rental.title": "تأجير طاولات",
    "service.table-rental.shortDesc": "طاولات مستديرة ومستطيلة وطاولات مآدب مع مفارش فاخرة.",
    "service.table-rental.description": "أكمل تجهيز فعاليتك مع مجموعتنا الواسعة من الطاولات في الدمام والخبر. نقدم طاولات مآدب مستديرة، طاولات مؤتمرات مستطيلة، طاولات كوكتيل والمزيد. جميع الطاولات تأتي مع مفارش فاخرة اختيارية.",
    "service.table-rental.features": "خيارات مستديرة ومستطيلة|حزم مفارش فاخرة|طاولات كوكتيل وعالية|أطباق شحن ذهبية|خصومات الكميات الكبيرة",

    "service.chair-rental.title": "تأجير كراسي",
    "service.chair-rental.shortDesc": "كراسي شيافاري ذهبية وكراسي مآدب وكراسي VIP لترتيبات جلوس أنيقة.",
    "service.chair-rental.description": "ارتقِ بجلوس فعاليتك مع خدمة تأجير الكراسي الفاخرة في الدمام والخبر. اختر من كراسي شيافاري الذهبية وكراسي المآدب الكلاسيكية وعروش VIP الفاخرة وكراسي الحدائق.",
    "service.chair-rental.features": "كراسي شيافاري ذهبية|كراسي مآدب وقابلة للطي|كراسي عرش VIP|خيارات وسائد وأغطية|توفر كميات كبيرة",

    "service.event-decoration.title": "تجهيز ديكور الفعاليات",
    "service.event-decoration.shortDesc": "حوّل مكانك بتنسيقات زهور مذهلة وديكور فاخر.",
    "service.event-decoration.description": "فريق ديكور الفعاليات المحترف في الدمام والخبر يحوّل الأماكن العادية إلى أماكن استثنائية. من تنسيقات الزهور والستائر إلى تصميم المسرح وأقواس المدخل، ننشئ حزم ديكور مخصصة.",
    "service.event-decoration.features": "تنسيقات زهور مخصصة|ستائر وخلفيات قماشية|تصميم مسرح وكوشة|تجهيزات أقواس المدخل|ديكور قائم على الطابع",

    "service.event-lighting.title": "إضاءة الفعاليات",
    "service.event-lighting.shortDesc": "إضاءة درامية وأضواء سلسلة وتركيبات ثريات.",
    "service.event-lighting.description": "اضبط الأجواء المثالية مع خدمات إضاءة الفعاليات الاحترافية في الدمام والخبر. نقدم إضاءة محيطية وأضواء سلسلة خرافية وتركيبات LED وتأثيرات الأضواء الكاشفة وثريات كريستال.",
    "service.event-lighting.features": "حزم إضاءة LED|أضواء سلسلة وخرافية|تركيبات ثريات|تأثيرات أضواء كاشفة|أنظمة تحكم DMX",

    "service.outdoor-event-setup.title": "تجهيز الفعاليات الخارجية",
    "service.outdoor-event-setup.shortDesc": "حلول فعاليات خارجية متكاملة مع خيام وأثاث وتنسيق حدائق.",
    "service.outdoor-event-setup.description": "استضف الفعالية الخارجية المثالية في الدمام والخبر مع خدمات التجهيز الخارجي المتكاملة. نتولى كل شيء من تركيب الخيام وترتيب الأثاث إلى الأرضيات والإضاءة ومناطق الاسترخاء.",
    "service.outdoor-event-setup.features": "حزم خارجية متكاملة|تجهيزات مناطق استرخاء|حلول أرضيات خارجية|حماية من الرياح والرمال|إضاءة حدائق",

    "service.wedding-party-equipment.title": "تأجير معدات الزفاف والحفلات",
    "service.wedding-party-equipment.shortDesc": "حزم تأجير شاملة لحفلات الزفاف والحفلات والفعاليات المؤسسية.",
    "service.wedding-party-equipment.description": "احصل على كل ما تحتاجه لفعاليتك من مورد موثوق في الدمام والخبر. تشمل حزم تأجير المعدات الشاملة الخيام والطاولات والكراسي والديكور والإضاءة وأنظمة الصوت والمسرح والمزيد.",
    "service.wedding-party-equipment.features": "حزم شاملة|تأجير أنظمة صوت|تجهيز مسرح ومنصة|مناطق سجادة حمراء وVIP|التوصيل والجمع مشمول",

    "service.arabic-coffee-tea-service.title": "خدمة القهوة العربية والشاي",
    "service.arabic-coffee-tea-service.shortDesc": "ضيافة عربية أصيلة مع تجهيز ركن قهوة وشاي لضيوفك.",
    "service.arabic-coffee-tea-service.description": "أضف لمسة دافئة وأصيلة لفعاليتك في الدمام والخبر مع خدمة القهوة العربية والشاي. نوفر تجهيز ركن ضيافة متكامل للقهوة العربية (القهـوة) والشاي مع ترتيب أنيق يتناسب مع طابع الفعالية وحركة الضيوف.",
    "service.arabic-coffee-tea-service.features": "تجهيز ركن القهوة العربية والشاي|تقديم أنيق|تجهيز مرن للفعاليات الداخلية والخارجية|مناسب للأعراس والتجمعات والفعاليات المؤسسية|التوصيل والتركيب والجمع متاح",
  },
};

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    return (localStorage.getItem("lang") as Lang) || "ar";
  });

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
  };

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: string): string => {
    return translations[lang][key] || translations.en[key] || key;
  };

  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <I18nContext.Provider value={{ lang, setLang, t, dir }}>
      {children}
    </I18nContext.Provider>
  );
};
