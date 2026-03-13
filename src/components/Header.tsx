import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Globe } from "lucide-react";
import logo from "@/assets/logo.png";
import { PHONE, PHONE_DISPLAY } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { t, lang, setLang } = useI18n();

  const navLinks = [
    { label: t("nav.home"), to: "/" },
    { label: t("nav.about"), to: "/about" },
    { label: t("nav.services"), to: "/services" },
    { label: t("nav.contact"), to: "/contact" },
  ];

  const toggleLang = () => setLang(lang === "en" ? "ar" : "en");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto flex items-center justify-between h-20 md:h-24">
        <Link to="/" className="flex items-center gap-4">
          <img src={logo} alt="Mohammad Mamoon Event Rental Logo" className="h-20 md:h-24 w-auto" />
          <div className="hidden sm:block">
            <span className="block text-lg md:text-xl font-display font-bold text-primary-foreground">AL Tasfi</span>
            <span className="block text-sm md:text-base text-primary font-body">Event Rental</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium font-body transition-colors duration-200 ${
                location.pathname === link.to
                  ? "text-primary"
                  : "text-secondary-foreground/80 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-xs font-semibold font-body text-secondary-foreground/80 hover:text-primary transition-colors border border-primary/30 rounded-md px-3 py-2"
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5" />
            {lang === "en" ? "عربي" : "English"}
          </button>
          <a href={`tel:${PHONE}`} className="btn-gold text-xs px-5 py-2.5">
            <Phone className="w-3.5 h-3.5" />
            {PHONE_DISPLAY}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 text-xs font-semibold font-body text-secondary-foreground/80 border border-primary/30 rounded-md px-2.5 py-1.5"
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5" />
            {lang === "en" ? "عربي" : "EN"}
          </button>
          <button
            className="text-secondary-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-secondary border-t border-primary/20 animate-fade-in">
          <div className="container mx-auto py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium font-body py-2 transition-colors ${
                  location.pathname === link.to
                    ? "text-primary"
                    : "text-secondary-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href={`tel:${PHONE}`} className="btn-gold text-xs px-5 py-2.5 w-fit">
              <Phone className="w-3.5 h-3.5" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
