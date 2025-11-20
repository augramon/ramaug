import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [language, setLanguage] = useState<"pt" | "en">("pt");

  return (
    <div className="min-h-screen">
      <Navbar language={language} onLanguageChange={setLanguage} />
      <Hero language={language} />
      <About language={language} />
      <Skills language={language} />
      <Projects language={language} />
      <Testimonials language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
};

export default Index;
