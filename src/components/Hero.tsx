import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import bgVideo from "@/assets/backgroundVideo.mp4";

interface HeroProps {
  language: "pt" | "en";
}

// const sora = Sora({ 
//   subsets: ["latin"], weight: ["300", "400", "600", "700"] 
// });

const content = {
  pt: {
    greeting: "Olá, eu sou",
    title: "Ramon Augusto",
    microtext: "Desenvolvedor / Criador / Resolutor de Problemas",
    slogan: "Transformando ideias em soluções digitais com propósito e precisão",
    cta: "Ver meu trabalho em ação",
  },
  en: {
    greeting: "Hello, I'm",
    title: "Ramon Augusto",
    microtext: "Developer / Creator / Problem Solver",
    slogan: "Transforming ideas into digital solutions with purpose and precision",
    cta: "Seeing my work in action",
  },
};

export const Hero = ({ language }: HeroProps) => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* video de fundo */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-[0.2]"
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* container invisivel hero */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">

          <p className="text-accent text-xl md:text-2xl font-medium">
            {content[language].greeting}
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] pb-3 
              bg-gradient-to-r from-white via-white/90 to-white/60 
              text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(0,200,255,0.25)]"
          >
            {content[language].title}
          </h1>

          <p className="text-accent/80 text-sm tracking-[0.2em] uppercase">
            {content[language].microtext}
          </p>

          <p className="text-xl md:text-1xl text-muted-foreground max-w-2xl mx-auto">
            {content[language].slogan}
          </p>

          <div className="pt-4">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground group gap-2 animate-glow-pulse"
            >
              {content[language].cta}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* icone de scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-accent rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};