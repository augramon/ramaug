import { Heart } from "lucide-react";

interface FooterProps {
  language: "pt" | "en";
}

export const Footer = ({ language }: FooterProps) => {
  const content = {
    pt: {
      rights: "Todos os direitos reservados",
      // madeWith: "Feito com",
    },
    en: {
      rights: "All rights reserved",
      // madeWith: "Made with",
    },
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-3 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} - {content[language].rights}
          </p>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            {/* <span>{content[language].madeWith}</span> */}
            <span>Ramaug</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
