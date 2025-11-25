import { Code, Database, Palette, Rocket, Cloud, Shield, Code2, CodeSquare } from "lucide-react";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiPython, SiHtml5, SiJavascript, SiCss3, SiDjango, SiFlask, SiMysql } from 'react-icons/si';
import LogoLoop from './folio_ui/LogoLoop';
import Particles from './folio_ui/Particles';
import RotatingText from './folio_ui/RotatingText'

interface SkillsProps {
  language: "pt" | "en";
}

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiPython />, title: "Python", href: "https://python.com" },
  { node: <SiJavascript />, title: "Javascript", href: "https://javascript.com" },
  { node: <SiHtml5 />, title: "HTML", href: "https://html.com" },
  { node: <SiCss3 />, title: "CSS", href: "https://css.com" },
  { node: <SiDjango />, title: "Django", href: "https://django.com" },
  { node: <SiFlask />, title: "Flask", href: "https://flask.com" },
  { node: <SiMysql />, title: "MySQL", href: "https://mysql.com" },

];


export const Skills = ({ language }: SkillsProps) => {
  const content = {
    pt: {
      // titulo unico certificações
      // title: "",
      subtitle: "Algumas tecnologias que conheço",
      skills: [
        {
          icon: SiTypescript,
          title: "TypeScript",
          items: ["Udemy", "2025"],
        },
        {
          icon: Code2,
          title: "Full-Stack Avançado",
          items: ["Infinity School", "2024"],
        },
        {
          icon: SiReact,
          title: "React",
          items: ["Udemy", "2025"],
        },
        {
          icon: Code2,
          title: "FlutterFlow Avançado",
          items: ["Udemy", "2025"],
        },
      ],
    },
    en: {
      // titulo unico certificações em inglês
      // title: "",
      subtitle: "Some technologies I know",
      skills: [
        {
          icon: SiTypescript,
          title: "TypeScript",
          items: ["Udemy", "2025"],
        },
        {
          icon: Code2,
          title: "Advanced Full-Stack",
          items: ["Infinity School", "2024"],
        },
        {
          icon: SiReact,
          title: "React",
          items: ["Udemy", "2025"],
        },
        {
          icon: Code2,
          title: "Advanced FlutterFlow",
          items: ["Udemy", "2025"],
        },
      ],
    },
  };

  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* background */}
      <div className="absolute inset-0 top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-[0.3]">
        <Particles
          particleColors={['#ffffff', '#1F2E99']}
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

          {/* titulo unico certificações */}
          {/* <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            {content[language].title}
          </h2> */}

          {/* titulo isolado */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in flex items-center justify-center gap-2 flex-wrap">
            {language === "pt" ? (
              <>
                <span>CERTIFICAÇÕES &</span>
                <RotatingText
                  texts={['HABILIDADES', 'ESTUDOS', 'CONHECIMENTOS']}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-blue-400 text-black/80 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </>
            ) : (
              <>
                CERTIFICATIONS & <RotatingText
                  texts={['SSKILLS', 'STUDIES', 'KNOWLEDGE']}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-blue-400 text-black/80 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </>
            )}
          </h2>

          {/* subtitulo */}
          <p className="text-muted-foreground text-lg mt-12">
            {content[language].subtitle}
          </p>

          <div style={{ height: '50px', position: 'relative', overflow: 'hidden', marginTop: '20px' }}>

            {/* loop horizontal dos icones */}
            <LogoLoop
              logos={techLogos}
              speed={60}
              direction="right"
              logoHeight={48}
              gap={78}
              hoverSpeed={0}
              scaleOnHover
              // fadeOut
              // fadeOutColor="accent"
              ariaLabel="Technology partners"
            />

            {/* loop vertical dos icones */}
            {/* <LogoLoop
              logos={techLogos}
              speed={80}
              direction="up"
              logoHeight={48}
              gap={40}
              hoverSpeed={20}
              fadeOut
            /> */}

          </div>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {content[language].skills.map((skill, index) => (
            <div
              key={index}
              className="glass-dark p-6 rounded-xl hover:scale-105 transition-all duration-300 group animate-slide-in-left border border-accent/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-4">

                {/* icones */}
                <div className="w-12 h-12 bg-blue-400 to-tech rounded-lg flex items-center justify-center group-hover:animate-glow-pulse">
                  <skill.icon className="h-6 w-6 text-black/80" />
                </div>

                {/* nome da certificação */}
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
    </section >
  );
};
