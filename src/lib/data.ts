import serviceTent from "@/assets/service-tent.jpg";
import serviceTent1 from "@/assets/service-tent 1.jpg";
import serviceTent2 from "@/assets/service-tent 2.jpg";
import serviceWeddingTent from "@/assets/service-wedding-tent.jpg";
import serviceTables from "@/assets/service-tables.jpg";
import serviceTables1 from "@/assets/service-tables 1.jpg";
import serviceTables2 from "@/assets/service-tables 2.jpg";
import serviceTables3 from "@/assets/service-tables 3.jpg";
import serviceTables4 from "@/assets/service-tables 4.jpg";
import serviceTables5 from "@/assets/service-tables 5.jpg";
import serviceTables6 from "@/assets/service-tables 6.jpg";
import serviceTables7 from "@/assets/service-tables 7.jpg";
import serviceTables8 from "@/assets/service-tables 8.jpg";
import serviceTables9 from "@/assets/service-tables 9.jpg";
import serviceTablesVideo from "@/assets/service-tables video.mp4";
import serviceChairs from "@/assets/service-chairs.jpg";
import serviceChairs1 from "@/assets/service-chairs 1.jpg";
import serviceChairs2 from "@/assets/service-chairs 2.jpg";
import serviceChairs3 from "@/assets/service-chairs 3.jpg";
import serviceChairs4 from "@/assets/service-chairs 4.jpg";
import serviceChairs5 from "@/assets/service-chairs 5.jpg";
import serviceChairs6 from "@/assets/service-chairs 6.jpg";
import serviceChairs7 from "@/assets/service-chairs 7.jpg";
import serviceChairs8 from "@/assets/service-chairs 8.jpg";
import serviceChairs9 from "@/assets/service-chairs 9.jpg";
import serviceChairs10 from "@/assets/service-chairs 10.jpeg";
import serviceChairs11 from "@/assets/service-chairs 11.jpeg";
import serviceChairsVideo from "@/assets/service-chairs video.mp4";
import serviceDecoration from "@/assets/service-decoration.jpg";
import serviceDecoration1 from "@/assets/service-decoration 1.jpg";
import serviceDecoration2 from "@/assets/service-decoration 2.jpg";
import serviceDecoration3 from "@/assets/service-decoration 3.jpg";
import serviceDecoration4 from "@/assets/service-decoration 4.jpg";
import serviceDecoration5 from "@/assets/service-decoration 5.jpg";
import serviceLighting from "@/assets/service-lighting.jpg";
import serviceLighting1 from "@/assets/service-lighting 1.jpg";
import serviceLighting2 from "@/assets/service-lighting 2.jpg";
import serviceLighting3 from "@/assets/service-lighting 3.jpg";
import serviceLighting4 from "@/assets/service-lighting 4.jpg";
import serviceLighting5 from "@/assets/service-lighting 5.jpg";
import serviceLighting6 from "@/assets/service-lighting 6.jpg";
import serviceLighting7 from "@/assets/service-lighting 7.jpg";
import serviceLighting8 from "@/assets/service-lighting 8.jpg";
import serviceLighting9 from "@/assets/service-lighting 9.jpg";
import serviceLighting10 from "@/assets/service-lighting 10.jpg";
import serviceLighting11 from "@/assets/service-lighting 11.jpg";
import serviceLighting12 from "@/assets/service-lighting 12.jpg";
import serviceLighting13 from "@/assets/service-lighting 13.jpg";
import serviceLighting14 from "@/assets/service-lighting 14.jpg";
import serviceLighting15 from "@/assets/service-lighting 15.jpg";
import serviceLighting16 from "@/assets/service-lighting 16.jpg";
import serviceLighting17 from "@/assets/service-lighting 17.jpg";
import serviceLightingVideo from "@/assets/service-lighting video.mp4";
import serviceOutdoor from "@/assets/service-outdoor.jpg";
import serviceEquipment from "@/assets/service-equipment.jpg";
import serviceCoffee from "@/assets/service-coffee.jpg";
import serviceCoffee1 from "@/assets/service-coffee 1.jpg";
import serviceCoffee2 from "@/assets/service-coffee 2.jpg";
import serviceCoffee3 from "@/assets/service-coffee 3.jpg";
import serviceCoffee4 from "@/assets/service-coffee 4.jpg";
import serviceCoffee5 from "@/assets/service-coffee 5.jpg";

export interface ServiceData {
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  features: string[];
  image: string;
  gallery?: string[];
  videos?: string[];
}

export const services: ServiceData[] = [
  {
    slug: "tent-rental",
    title: "Tent Rental",
    shortDesc: "Premium tents for every occasion — from intimate gatherings to grand celebrations.",
    description: "Our premium tent rental service in Dammam and Al Khobar offers a wide range of tent sizes and styles to suit any event. Whether you need a small canopy for a garden party or a massive marquee for a corporate gala, we provide high-quality, weather-resistant tents with professional setup and takedown services.",
    features: ["Various sizes from 3x3m to 40x60m", "Weather-resistant materials", "Professional setup & takedown", "Air-conditioned options available", "Customizable configurations"],
    image: serviceTent,
    gallery: [serviceTent, serviceTent1, serviceTent2],
    videos: [],
  },
  {
    slug: "wedding-tent-setup",
    title: "Wedding Tent Setup",
    shortDesc: "Elegant wedding tents with luxurious draping and chandelier installations.",
    description: "Make your wedding day unforgettable with our luxury wedding tent setups in Dammam and Al Khobar. We specialize in creating breathtaking tent environments with elegant draping, crystal chandeliers, premium flooring, and climate control to ensure your guests enjoy every moment in comfort and style.",
    features: ["Luxury fabric draping", "Crystal chandelier installations", "Premium carpet flooring", "Climate control systems", "Bridal suite tent options"],
    image: serviceWeddingTent,
    gallery: [serviceWeddingTent, serviceTent1, serviceTent2],
  },
  {
    slug: "table-rental",
    title: "Table Rental",
    shortDesc: "Round, rectangular, and banquet tables with premium linens and settings.",
    description: "Complete your event setup with our extensive table rental collection in Dammam and Al Khobar. We offer round banquet tables, rectangular conference tables, cocktail tables, and more. All tables come with optional premium linen, charger plates, and centerpiece accessories.",
    features: ["Round & rectangular options", "Premium linen packages", "Cocktail & high-top tables", "Gold charger plates available", "Bulk rental discounts"],
    image: serviceTables,
    gallery: [
      serviceTables,
      serviceTables1,
      serviceTables2,
      serviceTables3,
      serviceTables4,
      serviceTables5,
      serviceTables6,
      serviceTables7,
      serviceTables8,
      serviceTables9,
    ],
    videos: [serviceTablesVideo],
  },
  {
    slug: "chair-rental",
    title: "Chair Rental",
    shortDesc: "Gold chiavari, banquet, and VIP chairs for elegant seating arrangements.",
    description: "Elevate your event seating with our premium chair rental service in Dammam and Al Khobar. Choose from gold chiavari chairs, classic banquet chairs, luxury VIP thrones, and garden chairs. All chairs are meticulously maintained and come with cushion options for maximum guest comfort.",
    features: ["Gold chiavari chairs", "Banquet & folding chairs", "VIP throne chairs", "Cushion & cover options", "Large quantity availability"],
    image: serviceChairs,
    gallery: [
      serviceChairs,
      serviceChairs1,
      serviceChairs2,
      serviceChairs3,
      serviceChairs4,
      serviceChairs5,
      serviceChairs6,
      serviceChairs7,
      serviceChairs8,
      serviceChairs9,
      serviceChairs10,
      serviceChairs11,
    ],
    videos: [serviceChairsVideo],
  },
  {
    slug: "event-decoration",
    title: "Event Decoration Setup",
    shortDesc: "Transform your venue with stunning floral arrangements and luxury décor.",
    description: "Our professional event decoration team in Dammam and Al Khobar transforms ordinary spaces into extraordinary venues. From floral arrangements and fabric draping to stage design and entrance arches, we create custom decoration packages that bring your event vision to life.",
    features: ["Custom floral arrangements", "Fabric draping & backdrops", "Stage & kosha design", "Entrance arch setups", "Theme-based decoration"],
    image: serviceDecoration,
    gallery: [
      serviceDecoration,
      serviceDecoration1,
      serviceDecoration2,
      serviceDecoration3,
      serviceDecoration4,
      serviceDecoration5,
    ],
  },
  {
    slug: "event-lighting",
    title: "Lighting for Events",
    shortDesc: "Dramatic uplighting, string lights, and chandelier installations.",
    description: "Set the perfect ambiance with our professional event lighting services in Dammam and Al Khobar. We offer ambient uplighting, fairy string lights, LED installations, spotlight effects, and crystal chandelier rentals. Our lighting designers work with you to create the perfect atmosphere for your event.",
    features: ["LED uplighting packages", "String & fairy lights", "Chandelier installations", "Spotlight & wash effects", "DMX controlled systems"],
    image: serviceLighting,
    gallery: [
      serviceLighting,
      serviceLighting1,
      serviceLighting2,
      serviceLighting3,
      serviceLighting4,
      serviceLighting5,
      serviceLighting6,
      serviceLighting7,
      serviceLighting8,
      serviceLighting9,
      serviceLighting10,
      serviceLighting11,
      serviceLighting12,
      serviceLighting13,
      serviceLighting14,
      serviceLighting15,
      serviceLighting16,
      serviceLighting17,
    ],
    videos: [serviceLightingVideo],
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
  {
    slug: "arabic-coffee-tea-service",
    title: "Arabic Coffee & Tea Service",
    shortDesc: "Traditional Arabic hospitality with premium coffee and tea station setup for your guests.",
    description: "Add a warm, authentic touch to your event in Dammam and Al Khobar with our Arabic coffee and tea service. We provide a complete hospitality station setup featuring Arabic coffee (Gahwa) and tea service essentials, arranged beautifully to match your event theme and guest flow.",
    features: ["Arabic coffee (Gahwa) & tea station setup", "Elegant serving presentation", "Flexible setup for indoor/outdoor events", "Suitable for weddings, gatherings, and corporate events", "Delivery, setup & collection available"],
    image: serviceCoffee,
    gallery: [serviceCoffee, serviceCoffee1, serviceCoffee2, serviceCoffee3, serviceCoffee4, serviceCoffee5],
    videos: [],
  },
];

export const PHONE = "+966575921016";
export const WHATSAPP_URL = `https://wa.me/${PHONE.replace("+", "")}`;
export const PHONE_DISPLAY = "+966 57 407 3238";
export const ADDRESS = "2964-2944 14th St, Al-Thuqbah, Al Khobar 34623, , Saudi Arabia";
export const BUSINESS_HOURS = "7:00 AM – 10:00 PM";
export const BUSINESS_NAME = "AL Tasfi Party Equipment Rental Event Rental";
export const MAP_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.7!2d50.21!3d26.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMakkah+Al+Mukarramah+St%2C+Al+Khobar!5e0!3m2!1sen!2ssa!4v1234567890";
