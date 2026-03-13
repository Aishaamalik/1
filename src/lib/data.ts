import serviceTent from "@/assets/service-tent.jpg";
import serviceWeddingTent from "@/assets/service-wedding-tent.jpg";
import servicePartyTent from "@/assets/service-party-tent.jpg";
import serviceTables from "@/assets/service-tables.jpg";
import serviceChairs from "@/assets/service-chairs.jpg";
import serviceDecoration from "@/assets/service-decoration.jpg";
import serviceLighting from "@/assets/service-lighting.jpg";
import serviceOutdoor from "@/assets/service-outdoor.jpg";
import serviceEquipment from "@/assets/service-equipment.jpg";

export interface ServiceData {
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  features: string[];
  image: string;
}

export const services: ServiceData[] = [
  {
    slug: "tent-rental",
    title: "Tent Rental",
    shortDesc: "Premium tents for every occasion — from intimate gatherings to grand celebrations.",
    description: "Our premium tent rental service in Dammam and Al Khobar offers a wide range of tent sizes and styles to suit any event. Whether you need a small canopy for a garden party or a massive marquee for a corporate gala, we provide high-quality, weather-resistant tents with professional setup and takedown services.",
    features: ["Various sizes from 3x3m to 40x60m", "Weather-resistant materials", "Professional setup & takedown", "Air-conditioned options available", "Customizable configurations"],
    image: serviceTent,
  },
  {
    slug: "wedding-tent-setup",
    title: "Wedding Tent Setup",
    shortDesc: "Elegant wedding tents with luxurious draping and chandelier installations.",
    description: "Make your wedding day unforgettable with our luxury wedding tent setups in Dammam and Al Khobar. We specialize in creating breathtaking tent environments with elegant draping, crystal chandeliers, premium flooring, and climate control to ensure your guests enjoy every moment in comfort and style.",
    features: ["Luxury fabric draping", "Crystal chandelier installations", "Premium carpet flooring", "Climate control systems", "Bridal suite tent options"],
    image: serviceWeddingTent,
  },
  {
    slug: "party-tent-rental",
    title: "Party Tent Rental",
    shortDesc: "Colorful and fun party tents for birthdays, celebrations, and festive events.",
    description: "Celebrate in style with our party tent rentals across Dammam and Al Khobar. Perfect for birthday parties, anniversaries, graduation celebrations, and family gatherings. Our party tents come in various colors and themes, and can be customized with decorations to match your celebration's mood.",
    features: ["Themed decoration options", "Colorful canopy selections", "Sound system compatible", "Dance floor integration", "Flexible sizes for any gathering"],
    image: servicePartyTent,
  },
  {
    slug: "table-rental",
    title: "Table Rental",
    shortDesc: "Round, rectangular, and banquet tables with premium linens and settings.",
    description: "Complete your event setup with our extensive table rental collection in Dammam and Al Khobar. We offer round banquet tables, rectangular conference tables, cocktail tables, and more. All tables come with optional premium linen, charger plates, and centerpiece accessories.",
    features: ["Round & rectangular options", "Premium linen packages", "Cocktail & high-top tables", "Gold charger plates available", "Bulk rental discounts"],
    image: serviceTables,
  },
  {
    slug: "chair-rental",
    title: "Chair Rental",
    shortDesc: "Gold chiavari, banquet, and VIP chairs for elegant seating arrangements.",
    description: "Elevate your event seating with our premium chair rental service in Dammam and Al Khobar. Choose from gold chiavari chairs, classic banquet chairs, luxury VIP thrones, and garden chairs. All chairs are meticulously maintained and come with cushion options for maximum guest comfort.",
    features: ["Gold chiavari chairs", "Banquet & folding chairs", "VIP throne chairs", "Cushion & cover options", "Large quantity availability"],
    image: serviceChairs,
  },
  {
    slug: "event-decoration",
    title: "Event Decoration Setup",
    shortDesc: "Transform your venue with stunning floral arrangements and luxury décor.",
    description: "Our professional event decoration team in Dammam and Al Khobar transforms ordinary spaces into extraordinary venues. From floral arrangements and fabric draping to stage design and entrance arches, we create custom decoration packages that bring your event vision to life.",
    features: ["Custom floral arrangements", "Fabric draping & backdrops", "Stage & kosha design", "Entrance arch setups", "Theme-based decoration"],
    image: serviceDecoration,
  },
  {
    slug: "event-lighting",
    title: "Lighting for Events",
    shortDesc: "Dramatic uplighting, string lights, and chandelier installations.",
    description: "Set the perfect ambiance with our professional event lighting services in Dammam and Al Khobar. We offer ambient uplighting, fairy string lights, LED installations, spotlight effects, and crystal chandelier rentals. Our lighting designers work with you to create the perfect atmosphere for your event.",
    features: ["LED uplighting packages", "String & fairy lights", "Chandelier installations", "Spotlight & wash effects", "DMX controlled systems"],
    image: serviceLighting,
  },
  {
    slug: "outdoor-event-setup",
    title: "Outdoor Event Setup",
    shortDesc: "Complete outdoor event solutions with tents, furniture, and landscaping.",
    description: "Host the perfect outdoor event in Dammam and Al Khobar with our complete outdoor setup services. We handle everything from tent installation and furniture arrangement to flooring, lighting, and lounge area creation. Our outdoor packages are designed to withstand Saudi Arabia's climate while providing maximum comfort.",
    features: ["Complete outdoor packages", "Lounge area setups", "Outdoor flooring solutions", "Wind & sand protection", "Garden & landscape lighting"],
    image: serviceOutdoor,
  },
  {
    slug: "wedding-party-equipment",
    title: "Wedding & Party Equipment Rental",
    shortDesc: "All-inclusive rental packages for weddings, parties, and corporate events.",
    description: "Get everything you need for your event from one trusted supplier in Dammam and Al Khobar. Our all-inclusive equipment rental packages include tents, tables, chairs, decoration, lighting, sound systems, staging, and more. We simplify event planning by providing comprehensive solutions with delivery, setup, and collection.",
    features: ["All-inclusive packages", "Sound system rentals", "Stage & podium setup", "Red carpet & VIP areas", "Delivery & collection included"],
    image: serviceEquipment,
  },
];

export const PHONE = "+966575921016";
export const WHATSAPP_URL = `https://wa.me/${PHONE.replace("+", "")}`;
export const PHONE_DISPLAY = "+966 57 592 1016";
export const ADDRESS = "2964-2944 14th St, Al-Khuqbah, Al Khobar 34623, Saudi Arabia";
export const BUSINESS_HOURS = "7:00 AM – 10:00 PM";
export const BUSINESS_NAME = "Mohammad Mamoon Event Rental";
export const MAP_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.7!2d50.21!3d26.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMakkah+Al+Mukarramah+St%2C+Al+Khobar!5e0!3m2!1sen!2ssa!4v1234567890";
