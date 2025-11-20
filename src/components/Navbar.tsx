import { useState, useEffect } from "react";
import { Moon, Sun, Globe, Menu, X } from "lucide-react"; // 🔧 ALTERAÇÃO AQUI (adicionei X)
import { Button } from "@/components/ui/button";

interface NavbarProps {
  language: "pt" | "en";
  onLanguageChange: (lang: "pt" | "en") => void;
}

// navbar
export const Navbar = ({ language, onLanguageChange }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // (já existia)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // dark mode por padrão
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const navItems = {
    pt: ["Início", "Sobre", "Certificações", "Projetos", "Depoimentos", "Contato"],
    en: ["Home", "About", "Certifications", "Projects", "Testimonials", "Contact"],
  };

  const scrollToSection = (index: number) => {
    const sections = ["hero", "about", "skills", "projects", "testimonials", "contact"];
    const element = document.getElementById(sections[index]);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="text-2xl font-bold">
          <span className="text-white/30">ramaug</span>
        </div>

        {/* desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems[language].map((item, index) => (
            <button
              key={item}
              onClick={() => scrollToSection(index)}
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">

          {/* botão idioma */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onLanguageChange(language === "pt" ? "en" : "pt")}
            className="hover:bg-accent/10"
          >
            <Globe className="h-5 w-5" />
          </Button>

          {/* botão do menu mobile */}
          <button
            className="md:hidden p-2 rounded hover:bg-accent/10 transition" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}            
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* menu mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-secondary/90 backdrop-blur py-6 flex flex-col items-center gap-4 z-40"> 
          {navItems[language].map((item, index) => (
            <button
              key={item}
              onClick={() => {
                scrollToSection(index);
                setMobileMenuOpen(false); // fecha o menu ao clicar
              }}
              className="text-white text-lg font-medium hover:text-accent transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
