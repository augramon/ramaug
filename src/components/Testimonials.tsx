import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Particles from './folio_ui/Particles';
import { useRef, useEffect } from "react";

interface TestimonialsProps {
  language: "pt" | "en";
}



export const Testimonials = ({ language }: TestimonialsProps) => {

  // Ajusta velocidade do vídeo
  // const videoRefBG = useRef<HTMLVideoElement>(null);

  // useEffect(() => {
  //   if (videoRefBG.current) {
  //     videoRefBG.current.playbackRate = 0.75;
  //   }
  // }, []);

  const content = {
    pt: {
      title: "Depoimentos",
      subtitle: "O que dizem sobre meu trabalho",
      testimonials: [
        {
          name: "Maria Silva",
          role: "CEO, TechStart",
          text: "Profissional excepcional! Entregou o projeto antes do prazo e superou todas as expectativas. Altamente recomendado.",
          rating: 5,
        },
        {
          name: "João Santos",
          role: "CTO, InnovaCorp",
          text: "Trabalho impecável e comunicação excelente. Transformou nossa visão em realidade com maestria técnica.",
          rating: 5,
        },
        {
          name: "Ana Costa",
          role: "Fundadora, StartupHub",
          text: "Desenvolvedor talentoso com ótima capacidade de resolver problemas complexos. Nosso app ficou perfeito!",
          rating: 5,
        },
      ],
    },
    en: {
      title: "Testimonials",
      subtitle: "What they say about my work",
      testimonials: [
        {
          name: "Maria Silva",
          role: "CEO, TechStart",
          text: "Exceptional professional! Delivered the project ahead of schedule and exceeded all expectations. Highly recommended.",
          rating: 5,
        },
        {
          name: "João Santos",
          role: "CTO, InnovaCorp",
          text: "Impeccable work and excellent communication. Turned our vision into reality with technical mastery.",
          rating: 5,
        },
        {
          name: "Ana Costa",
          role: "Founder, StartupHub",
          text: "Talented developer with great ability to solve complex problems. Our app turned out perfect!",
          rating: 5,
        },
      ],
    },
  };



  return (
    <section id="testimonials" className="py-40 relative min-h-screen flex items-center justify-center">

      {/* background */}
      <div className="absolute inset-0 top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-[0.3]">
        <Particles
          particleColors={['#1F2E99', '#ffffff']}
          particleCount={333}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">

          {/* titulo */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            {content[language].title}
          </h2>

          {/* subtitulo */}
          {/* <p className="text-muted-foreground text-lg">{content[language].subtitle}</p> */}

        </div>

        <div className="max-w-5xl mx-auto">

          <Carousel className="w-full">
            <CarouselContent>

              {content[language].testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">

                  <div className="glass-dark p-8 rounded-2xl h-full hover:scale-105 transition-all duration-300">

                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                      ))}
                    </div>

                    <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>

                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>

                  </div>

                </CarouselItem>
              ))}

            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
