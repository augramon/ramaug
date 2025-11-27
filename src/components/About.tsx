import { Code2, Eye, HeartHandshake, Lightbulb, Star, StarHalf, StarIcon, Target } from "lucide-react";
import Particles from './folio_ui/Particles';
import aboutPerfilImg from "@/assets/eu_ia.png";
import { useRef, useEffect } from "react";

interface AboutProps {
  language: "pt" | "en";
}

export const About = ({ language }: AboutProps) => {
  const content = {
    pt: {
      title: "SOBRE MIM",
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
      title: "ABOUT ME",
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

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* background particles */}
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

      <div className="relative container mx-auto px-6">

        {/* ---------------------------------------------------- */}
        {/* GRID PRINCIPAL (ALTERADO PARA NOVA ESTRUTURA)        */}
        {/* ---------------------------------------------------- */}
        <div className="grid md:grid-cols-4 items-center"> {/* ALTERADO */}

          {/* =================================================== */}
          {/* ESQUERDA: FOTO + APRESENTAÇÃO CURTA                 */}
          {/* =================================================== */}
          <div className="space-y-6 max-w-xs">


            {/* APRESENTAÇÃO CURTA - NOVO CARD */}
            <div className="p-6 rounded-xl border bg-transparent backdrop-blur-md animate-slide-in-left"
              style={{
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)"
              }}
            >

              {/* FOTO DE PERFIL (MANTEVE, MAS AGORA É O PRIMEIRO BLOCO) */}
              <div className="flex justify-center mb-12">
                <div className="rounded-3xl overflow-hidden shadow-xl border border-border/40 bg-card/60 backdrop-blur animate-fade-in">
                  <img
                    src={aboutPerfilImg}
                    alt="Profile"
                    className="w-full h-full object-cover scale-110"
                  />
                </div>
              </div>

              <h2 className="text-3xl font-bold tracking-tight">Ramon Augusto</h2> 
              <h4 className="text-accent text-sm mb-3">Desenvolvedor Web</h4>

              <div className="mt-4 space-y-1 text-muted-foreground text-sm">
                <p>• Codando há: <span className="text-white font-medium">1+ ano</span></p>
                <p>• Projetos finalizados: <span className="text-white font-medium">12</span></p>
              </div>

            </div>

          </div>

            <div className="m-12">
              <div className="flex items-center gap-2 mb-6">
                <h3 className="text-lg font-bold text-accent text-accent text-2xl animate-pulse">Hobbies & Interesses</h3>

              </div>

              <div className="grid gap-4">
                <div className="glass-dark p-4 rounded-xl text-center border border-accent/20">
                  <p className="font-semibold">Inteligência Artificial</p>

                </div>

                <div className="glass-dark p-4 rounded-xl text-center border border-accent/20">
                  <p className="font-semibold">Desenvolvimento Web</p>

                </div>

                <div className="glass-dark p-4 rounded-xl text-center border border-accent/20">
                  <p className="font-semibold">Cozinhar</p>

                </div>

                <div className="glass-dark p-4 rounded-xl text-center border border-accent/20">
                  <p className="font-semibold">Games</p>
                  
                </div>
              </div>
            </div>


          <div className="space-y-6 col-span-2">
            {/* titulo sobre mim */}
            <h1 className="text-4xl font-bold mb-4">{content[language].title}</h1>

            {/* descrição sobre mim */}
            <div className=" p-6 rounded-xl ">
              <h1 className="text-2xl font-bold mb-4 text-accent">Oi,</h1>

              <p className="text-muted-foreground leading-relaxed mb-3">
                Me chamo Ramon. Sou <span className="text-accent">desenvolvedor full-stack</span>, atualmente com foco maior no Frontend, mas com uma boa compreensão do funcionamento do Backend.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-3">
                Iniciei minha jornada na programação há pouco mais de um ano, estudando de forma autônoma no começo. Depois disso, busquei um curso de especialização para aprofundar minha base e evoluir de forma mais estruturada.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-3">
                Desde então, tenho seguido em constante aprendizado por meio de cursos online, certificações e ensino superior.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-3">
                Sou movido pela curiosidade e pela vontade de criar experiências funcionais e intuitivas. Meu propósito é desenvolver interfaces, aplicativos e automações que tornem processos mais simples, eficientes e que ajudem pessoas a aprender e produzir mais.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
