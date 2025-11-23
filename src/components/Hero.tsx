import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Squares from './folio_ui/Squares';
import TextPressure from './folio_ui/TextPressure';
import TrueFocus from './folio_ui/TrueFocus';


interface HeroProps {
  language: "pt" | "en";
}

const content = {
  pt: {
    greeting: "Olá, eu sou",
    // title: "RAMON AUGUSTO",
    microtext: "Criador Desenvolvedor",
    slogan: "Transformando ideias em realidade através da imaginação",
    cta: "Ver meu trabalho",
  },
  en: {
    greeting: "Hello, I'm",
    // title: "RAMON AUGUSTO",
    microtext: "Creator Developer",
    slogan: "Transforming ideas into reality through imagination",
    cta: "See my work",
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

      <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#fff"
          hoverFillColor="#222"
        />
      </div>

      {/* container invisivel hero */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">

          {/* texto olá eu sou */}
          <p className="text-accent text-xl md:text-2xl font-medium">
            {content[language].greeting}
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] pb-3 
              bg-gradient-to-r from-white via-white/90 to-white/60 
              text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(0,200,255,0.25)]"
          >

            {/* meu nome */}
            <div style={{ position: 'relative', height: '150px' }}>
              <TextPressure
                text="RAMON AUGUSTO"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#ffffff"
                strokeColor="#ff0000"
                minFontSize={14}
              />
            </div>
          </h1>

          {/* texto criador */}
          <p className="text-accent/80 text-sm tracking-[0.2em] uppercase">
            <TrueFocus
              sentence={content[language].microtext}
              manualMode={false}
              blurAmount={5}
              borderColor="white"
              animationDuration={1}
              pauseBetweenAnimations={2}
            />
          </p>

          {/* frase */}
          <p className="text-xl md:text-1xl text-muted-foreground max-w-2xl mx-auto">
            {content[language].slogan}
          </p>

          {/* botão */}
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