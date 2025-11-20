import { Code, Database, Palette, Rocket, Cloud, Shield } from "lucide-react";
import bgVideo from "@/assets/backgroundVideo.mp4";

interface SkillsProps {
  language: "pt" | "en";
}

export const Skills = ({ language }: SkillsProps) => {
  const content = {
    pt: {
      // titulo unico certificações
      // title: "",
      subtitle: "Estudo constante para conhecer tecnologias",
      skills: [
        {
          icon: Code,
          title: "Node.js",
          items: ["Infinity School", "2024"],
        },
        {
          icon: Code,
          title: "Full-Stack Avançado",
          items: ["Infinity School", "2025"],
        },
        {
          icon: Code,
          title: "React",
          items: ["Udemy", "2024"],
        },
        {
          icon: Code,
          title: "FlutterFlow Avançado",
          items: ["Udemy", "2025"],
        },
      ],
    },
    en: {
      // titulo unico certificações em inglês
      // title: "",
      subtitle: "Constant study to learn about technologies.",
      skills: [
        {
          icon: Code,
          title: "Node.js",
          items: ["Infinity School", "2024"],
        },
        {
          icon: Code,
          title: "Advanced Full-Stack",
          items: ["Infinity School", "2025"],
        },
        {
          icon: Code,
          title: "React",
          items: ["Udemy", "2024"],
        },
        {
          icon: Code,
          title: "Advanced FlutterFlow",
          items: ["Udemy", "2025"],
        },
      ],
    },
  };

  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* video de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <video
          // ref={videoRefBG}
          src={bgVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-[0.2]"
        />
      </div>

      <div className="container mx-auto px-4">

        <div className="text-center mb-16">

          {/* titulo unico certificações */}
          {/* <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            {content[language].title}
          </h2> */}

          {/* titulo isolado */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            {language === "pt" ? (
              <>
                <span className="text-accent">Certificações</span> & Cursos
              </>
            ) : (
              <>
                <span className="text-accent">Certifications</span> &
                  Courses
              </>
            )}
          </h2>

          {/* subtitulo */}
          {/* <p className="text-muted-foreground text-lg">
            {content[language].subtitle}
          </p> */}

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {content[language].skills.map((skill, index) => (
            <div
              key={index}
              className="glass-dark p-6 rounded-xl hover:scale-105 transition-all duration-300 group animate-slide-in-left border border-accent/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-4">

                <div className="w-12 h-12 bg-gradient-to-br from-accent to-tech rounded-lg flex items-center justify-center group-hover:animate-glow-pulse">
                  <skill.icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="text-xl font-bold">{skill.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/30"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
