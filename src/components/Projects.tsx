import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import bgVideo from "@/assets/backgroundVideo.mp4";
import CardSwap, { Card } from './CardSwap'
import SpotlightCard from './SpotlightCard';

interface ProjectsProps {
  language: "pt" | "en";
}


const ProjectCard = ({ project, language, index }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  const labels = {
    pt: { viewProject: "Ver Projeto", viewCode: "Ver Código" },
    en: { viewProject: "View Project", viewCode: "View Code" },
  };

  return (
    // fundo dos cards
    <div
      className="group glass-dark rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* imagem dos cards */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-300 ${isHovered ? "scale-110" : "scale-100"
            }`}
        />

        <div className={`absolute inset-0 bg-gradient-to-t from-background to-transparent transition-opacity duration-300 ${isHovered ? "opacity-90" : "opacity-60"}`} />

      </div>

      <div className="p-6">

        {/* titulo dos cards */}
        <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        {/* descrição dos cards */}
        <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>

        {/* gap entre tecnologias usadas e botao ver projeto */}
        <div className="flex flex-wrap gap-2 mb-4">

          {project.tech.map((tech: string, i: number) => (
            // tecnologias usadas nos projetos
            <span key={i} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded border border-accent/30"> {tech} </span>
          ))}
        </div>

        {/* botao ver projeto e botao github */}
        <div className="flex gap-2">

          <Button size="sm" variant="outline" className="flex-1 gap-2">
            <ExternalLink className="h-4 w-4" />
            {labels[language].viewProject}
          </Button>

          <Button size="sm" variant="ghost">
            <Github className="h-4 w-4" />
          </Button>

        </div>
      </div>
    </div>
  );
};

export const Projects = ({ language }: ProjectsProps) => {

  const content = {
    pt: {
      title: "PROJETOS EM DESTAQUE",
      // professional: "Profissionais",
      // personal: "Pessoais",
      viewProject: "Ver Projeto",
      viewCode: "Ver Código",
      professionalProjects: [
        {
          title: "E-commerce Moderno",
          description: "Plataforma completa de e-commerce com carrinho, pagamentos e dashboard administrativo.",
          tech: ["React", "Node.js", "Stripe", "PostgreSQL"],
          image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
        },
        {
          title: "Sistema de Gestão",
          description: "ERP customizado para gestão empresarial com módulos de estoque, vendas e financeiro.",
          tech: ["TypeScript", "React", "Supabase", "Tailwind"],
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        },
        {
          title: "App de Delivery",
          description: "Aplicativo mobile de delivery com rastreamento em tempo real e sistema de avaliações.",
          tech: ["React Native", "Firebase", "Maps API"],
          image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&q=80",
        },
      ],
      personalProjects: [
        {
          title: "Portfólio Interativo",
          description: "Portfólio pessoal com animações avançadas e design futurista.",
          tech: ["React", "Framer Motion", "Three.js"],
          image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80",
        },
        {
          title: "Task Manager AI",
          description: "Gerenciador de tarefas com sugestões inteligentes usando IA.",
          tech: ["Next.js", "OpenAI", "Prisma"],
          image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
        },
      ],
    },
    en: {
      title: "FEATURED PROJECTS",
      // professional: "Professional",
      // personal: "Personal",
      viewProject: "View Project",
      viewCode: "View Code",
      professionalProjects: [
        {
          title: "Modern E-commerce",
          description: "Complete e-commerce platform with cart, payments and admin dashboard.",
          tech: ["React", "Node.js", "Stripe", "PostgreSQL"],
          image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
        },
        {
          title: "Management System",
          description: "Custom ERP for business management with inventory, sales and finance modules.",
          tech: ["TypeScript", "React", "Supabase", "Tailwind"],
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        },
        {
          title: "Delivery App",
          description: "Mobile delivery app with real-time tracking and review system.",
          tech: ["React Native", "Firebase", "Maps API"],
          image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&q=80",
        },
      ],
      personalProjects: [
        {
          title: "Interactive Portfolio",
          description: "Personal portfolio with advanced animations and futuristic design.",
          tech: ["React", "Framer Motion", "Three.js"],
          image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80",
        },
        {
          title: "AI Task Manager",
          description: "Task manager with intelligent AI-powered suggestions.",
          tech: ["Next.js", "OpenAI", "Prisma"],
          image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
        },
      ],
    },
  };

  return (
    <section id="projects" className="relative py-20 min-h-screen flex items-center justify-center">

      {/* video de fundo */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none rotate-180 scale-x-[-1] opacity-[0.2]"
        src={bgVideo}
        autoPlay
        muted
        loop
      />

      {/* titulo projetos */}
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          {content[language].title}
        </h2>


        <Tabs defaultValue="professional" className="max-w-6xl mx-auto">

          {/* botao que alterna entre profissional e pessoal */}
          {/* <TabsList className="grid w-full max-w-md mx-auto grid-cols-1 mb-12">

            <TabsTrigger value="professional">{content[language].professional}</TabsTrigger>
            <TabsTrigger value="personal">{content[language].personal}</TabsTrigger>

          </TabsList> */}

          {/* cards projetos */}
          <TabsContent value="professional">

            <div style={{ height: '500px', position: 'relative' }}>

              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">

                {/* descrição dos projetos em destaque */}

                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">

                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Cada projeto aqui é um marco da minha jornada — ideias que saíram do papel,
                    ganharam vida no código e hoje refletem minha visão de criar experiências digitais
                    que sejam úteis, bonitas e memoráveis
                  </p>

                </SpotlightCard>
         
              </div>

              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mt-8">

                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">

                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Cada projeto aqui é um marco da minha jornada — ideias que saíram do papel,
                    ganharam vida no código e hoje refletem minha visão de criar experiências digitais
                    que sejam úteis, bonitas e memoráveis
                  </p>

                </SpotlightCard>
              </div>

              <div>
                {/* card swap com os projetos */}
                <CardSwap
                  cardDistance={60}
                  verticalDistance={70}
                  delay={3000}
                  pauseOnHover={false}
                >
                  {content[language].professionalProjects.map((project, index) => (

                    <Card key={index}>
                      <ProjectCard project={project} language={language} index={index} />
                    </Card>

                  ))}
                </CardSwap>
              </div>

            </div>

          </TabsContent>

          {/* cards projetos pessoais */}
          {/* <TabsContent value="personal">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content[language].personalProjects.map((project, index) => (
                <ProjectCard key={index} project={project} language={language} index={index} />
              ))}
            </div>
          </TabsContent> */}
        </Tabs>
      </div>

    </section>
  );
};


