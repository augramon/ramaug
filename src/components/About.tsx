import { Code2, Eye, HeartHandshake, Lightbulb, Star, StarHalf, StarIcon, Target } from "lucide-react";
import bgVideo from "@/assets/backgroundVideo.mp4";
import aboutPerfilImg from "@/assets/eu de ia.png";
import { useRef, useEffect } from "react";

interface AboutProps {
  language: "pt" | "en";
}

export const About = ({ language }: AboutProps) => {
  const content = {
    pt: {
      title: "Sobre mim",
      subtitle: "Estou codando há pouco mais de um ano",
      description:
        "Conheci a programação na expectativa de migrar de área, e desde então venho me dedicando a conhecer, aprender e aprimorar minhas habilidades em desenvolvimento de softwares",
      values: [
        {
          icon: Eye,
          title: "Especialização em Desenvolvimento Full-Stack",
          subtitle: "Formação Avançada",
          text: "Foi quando eu comecei a praticar programação, entendendo a lógica, desenvolvimento web e boas práticas de programação",
          date: "2024 - 2025",
        },
        {
          icon: Star,
          title: "Aprofundamento mobile e web",
          subtitle: "Especialização",
          text: "Desde então, venho me aprofundando em desenvolvimento mobile e web, explorando a flexibilidade de diferentes serviços possíveis",
          date: "2025 - Presente",
        },
        {
          icon: HeartHandshake,
          title: "Freelancer em Dev Web e Mobile",
          subtitle: "Projetos autorais e clientes independentes",
          text: "Atualmente, atuo como freelancer, desenvolvendo projetos autorais e para clientes independentes, focando em soluções que realmente fazem a diferença",
          date: "2025 - Presente",
        },
      ],
    },

    en: {
      title: "About Me",
      subtitle: "My Work & Philosophy",
      description:
        "I discovered programming with the expectation of changing careers, and since then I have dedicated myself to learning and improving my software development skills",
      values: [
        {
          icon: Eye,
          title: "Full-Stack Development Expertise",
          subtitle: "Advanced Training",
          text: "That's when I started practicing programming, understanding logic, web development, and good programming practices",

        },
        {
          icon: Star,
          title: "in-depth study of mobile and web",
          subtitle: "Specialization",
          text: "Since then, I have been delving deeper into mobile and web development, exploring the flexibility of different possible services",
        },
        {
          icon: HeartHandshake,
          title: "Web and Mobile Dev Freelancer",
          subtitle: "Personal projects and independent clients",
          text: "Currently, I work as a freelancer, developing my own projects and projects for independent clients, focusing on solutions that truly make a difference",
        },
      ],
    },
  };

  // Ajusta velocidade do vídeo
  const videoRefBG = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRefBG.current) {
      videoRefBG.current.playbackRate = 1;
    }
  }, []);

  return (
    <section id="about" className="relative min-h-screen py-30 md:py-40 flex items-center justify-center">

      {/* video de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <video
          ref={videoRefBG}
          src={bgVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-[0.2] rotate-180 scale-x-[-1]"
        />
      </div>

      <div className="relative container mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_1fr] items-top">

          {/* container invisivel foto + card sobre mim */}
          <div className="space-y-4 max-w-md">

            {/* container foto perfil */}
            <div className="flex items-start animate-fade-in">

              {/* foto de perfil */}
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-3xl overflow-hidden shadow-xl border border-border/40 bg-card/60 backdrop-blur">
                <img
                  src={aboutPerfilImg}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

            {/* card sobre mim com titulo, subtitulo e descricao */}
            <div
              className={
                "flex p-6 rounded-xl hover:scale-105 transition-all duration-300 group animate-slide-in-left border border-accent/20 inset-0 rounded-xl bg-transparent pointer-events-none z-0"
              }
              aria-hidden="true"
              style={{
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)"
              }}
            >
              <div className="relative z-10">

                {/* título */}
                <h2 className="text-4xl md:text-4xl font-bold tracking-tight">
                  {content[language].title}
                </h2>

                {/* subtítulo */}
                <h4 className="text-sm text-muted-foreground mb-2">
                  {content[language].subtitle}
                </h4>

                {/* descrição */}
                <p className="text-lg md:text-1xl text-muted-foreground max-w-2xl mx-auto">
                  {content[language].description}
                </p>

              </div>
            </div>
          </div>
          
          {/* cards de especializacao */}
          <div className="space-y-6">

            {content[language].values.map((value, index) => (
              <div
                key={index}
                className="glass-dark p-6 rounded-xl hover:scale-105 transition-all duration-300 group animate-slide-in-left border border-accent/20"
                style={{ animationDelay: `${index * 0.15}s` }}
              >

                {/* data no canto superior direito */}
                <span className="absolute top-3 right-3 text-xs text-muted-foreground">
                  {value.date}
                </span>

                <div className="flex items-start gap-4">

                  {/* icone antes do titulo */}
                  {/* <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-accent" />
                  </div> */}

                  <div>
                    {/* título */}
                    <h3 className="text-lg font-semibold mb-1">{value.title}</h3>

                    {/* subtítulo */}
                    <h4 className="text-base text-accent mb-2">
                      {value.subtitle}
                    </h4>

                    {/* descrição */}
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.text}
                    </p>

                    {/* data */}

                  </div>
                </div>
              </div>
            ))}
          </div>

          

        </div>
      </div>
    </section>
  );
};
