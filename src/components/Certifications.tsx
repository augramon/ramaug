import { Code, Database, Palette, Rocket, Cloud, Shield, Code2, CodeSquare } from "lucide-react";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiPython, SiHtml5, SiJavascript, SiCss3, SiDjango, SiFlask, SiMysql } from 'react-icons/si';
import LogoLoop from './folio_ui/LogoLoop';
import PixelBlast from './folio_ui/PixelBlast';

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
      <div style={{ width: '100%', height: '100%', position: 'absolute', opacity: 0.3 }}>
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="blue"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          speed={0.6}
          edgeFade={0.25}
          transparent
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
                <span className="text-accent">Certificações</span> & Habilidades
              </>
            ) : (
              <>
                <span className="text-accent">Certifications</span> &
                Skills
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
