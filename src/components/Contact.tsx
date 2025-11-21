import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import bgVideo from "@/assets/backgroundVideo.mp4";

interface ContactProps {
  language: "pt" | "en";
}

const contactSchema = z.object({
  name: z.string().trim().min(2, "Nome muito curto").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  message: z.string().trim().min(10, "Mensagem muito curta").max(1000),
});

export const Contact = ({ language }: ContactProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<any>({});

  const content = {
    pt: {
      title: "Entre em Contato",
      subtitle: "Vamos conversar sobre seu próximo projeto",
      name: "Nome",
      email: "Email",
      message: "Mensagem",
      send: "Enviar Mensagem",
      downloadCV: "Baixar Currículo",
      info: [
        { icon: Mail, text: "contato.ramaug@gmail.com" },
        { icon: Phone, text: "+55 (71) 993180-4880" },
        { icon: MapPin, text: "Bahia, Brasil" },
      ],
      socials: [
        { icon: Github, url: "https://github.com/augramon" },
        { icon: Linkedin, url: "https://www.linkedin.com/in/ramon-augusto-878a772ba/" },
        // { icon: Instagram, url: "https://instagram.com" },
      ],
    },
    en: {
      title: "Get in Touch",
      subtitle: "Let's talk about your next project",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      downloadCV: "Download Resume",
      info: [
        { icon: Mail, text: "contato.ramaug@gmail.com" },
        { icon: Phone, text: "+55 (71) 993180-4880" },
        { icon: MapPin, text: "Bahia, Brazil" },
      ],
      socials: [
        { icon: Github, url: "https://github.com/augramon" },
        { icon: Linkedin, url: "https://linkedin.com/in/ramon-augusto-878a772ba/" },
        // { icon: Instagram, url: "https://instagram.com" },
      ],
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      setErrors({});
      
      toast({
        title: language === "pt" ? "Mensagem enviada!" : "Message sent!",
        description: language === "pt" ? "Obrigado pelo contato. Retornarei em breve!" : "Thank you for contacting. I'll get back to you soon!",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors: any = {};
        err.errors.forEach((error) => {
          if (error.path[0]) {
            fieldErrors[error.path[0]] = error.message;
          }
        });
        setErrors(fieldErrors);
      }
    }
  };

  return (
    
    <section id="contact" className="relative py-20 min-h-screen flex items-center justify-center">

      <video 
      src={bgVideo}
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover opacity-[0.2] scale-x-[-1] rotate-180"
      
      ></video>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            {content[language].title}
          </h2>
          <p className="text-muted-foreground text-lg">{content[language].subtitle}</p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              {content[language].info.map((item, index) => (
                <div key={index} className="flex items-center gap-4 animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-tech rounded-lg flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              {content[language].socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <Button className="w-full md:w-auto bg-tech hover:bg-tech/90 gap-2">
              <Download className="h-4 w-4" />
              {content[language].downloadCV}
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-slide-in-right">
            <div>
              <Input
                placeholder={content[language].name}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="glass border-accent/30"
              />
              {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <Input
                type="email"
                placeholder={content[language].email}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="glass border-accent/30"
              />
              {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <Textarea
                placeholder={content[language].message}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="glass border-accent/30 min-h-[150px]"
              />
              {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
            </div>

            <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
              {content[language].send}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
