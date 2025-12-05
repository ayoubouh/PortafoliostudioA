import { motion } from "framer-motion";
import { ArrowRight, Instagram, Mail, Phone, Camera, Palette, Megaphone, Calendar, CheckCircle2, Menu, X, Moon, Sun, Globe } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroBg from "@assets/generated_images/elegant_creative_studio_workspace_background.png";
import restaurantImg from "@assets/generated_images/modern_moroccan_restaurant_interior.png";
import galaImg from "@assets/generated_images/luxury_gala_dinner_event_setting.png";
import portraitImg from "@assets/IMG_0685_1764789357001.jpeg";
import { useTheme } from "@/components/theme-provider";
import { useLanguage } from "@/lib/language-context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t, dir } = useLanguage();

  const navLinks = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.portfolio"), href: "#portfolio" },
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5 transition-colors duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-serif font-bold tracking-wider text-primary">
          STUDIO A
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-primary transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}

          <div className="flex items-center gap-2 border-l border-border pl-4 rtl:border-r rtl:border-l-0 rtl:pr-4 rtl:pl-0 ml-4 rtl:mr-4 rtl:ml-0">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("fr")}>
                  Français
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("ar")}>
                  العربية
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
             <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("fr")}>
                  Français
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("ar")}>
                  العربية
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button className="text-foreground" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-white/10 p-4 md:hidden flex flex-col space-y-4 animate-in slide-in-from-top-5 shadow-xl">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

const Hero = () => {
  const { t, dir } = useLanguage();
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Background" 
          className="w-full h-full object-cover opacity-40 dark:opacity-40 opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p variants={fadeIn} className="text-primary font-medium tracking-[0.2em] mb-4 uppercase text-sm md:text-base">
            {t("hero.subtitle")}
          </motion.p>
          <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold mb-6 leading-tight text-foreground">
            {t("hero.title")}
          </motion.h1>
          <motion.p variants={fadeIn} className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl mb-10 leading-relaxed">
            {t("hero.description")}
          </motion.p>
          <motion.div variants={fadeIn}>
            <Button size="lg" className="rounded-none px-8 py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all gap-2" asChild>
              <a href="#portfolio">
                {t("hero.cta")} 
                {dir === 'ltr' ? <ArrowRight className="w-5 h-5" /> : <ArrowRight className="w-5 h-5 rotate-180" />}
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-background relative transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] bg-muted/30 border border-border flex items-center justify-center group overflow-hidden"
          >
            <img 
              src={portraitImg} 
              alt="Ayoub Ouhaddou" 
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-background/80 backdrop-blur-sm border border-border">
              <p className="font-serif text-lg text-primary">{t("hero.title")}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{t("about.role")}</p>
            </div>
          </motion.div>

          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={staggerContainer}
          >
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-serif font-bold mb-8">
              {t("about.title")}
            </motion.h2>
            <motion.div variants={fadeIn} className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                {t("about.desc1")}
              </p>
              <p>
                {t("about.desc2")}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                {[
                  t("skill.branding"),
                  t("skill.marketing"),
                  t("skill.photo"),
                  t("skill.direction"),
                  t("skill.event"),
                  t("skill.storytelling")
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t("project1.title"),
      location: "Marrakech",
      image: restaurantImg,
      category: t("project1.cat"),
      description: t("project1.desc"),
      tags: ["Food Photography", "Social Media", "Branding"]
    },
    {
      title: t("project2.title"),
      location: "Événement Privé",
      image: galaImg,
      category: t("project2.cat"),
      description: t("project2.desc"),
      tags: ["Event Planning", "Scénographie", "Coordination"]
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-secondary/20 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">{t("portfolio.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t("portfolio.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3] mb-6">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 z-20 bg-background/90 backdrop-blur px-3 py-1 text-xs font-medium tracking-widest uppercase">
                  {project.category}
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs border border-border px-2 py-1 text-muted-foreground">
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: t("service1.title"),
      items: [t("skill.branding"), "Logos", "Concepts", "Identité"]
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: t("service2.title"),
      items: [t("skill.marketing"), "Storytelling", "Social Media", "Ads"]
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: t("service3.title"),
      items: ["Produit", "Lifestyle", "Corporate", "Event"]
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: t("service4.title"),
      items: ["Gala", "Lancements", "Activations", "Organisation"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-background transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">{t("services.title")}</h2>
          <p className="text-muted-foreground">{t("services.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-secondary/10 border-border hover:border-primary/30 transition-colors duration-300 rounded-none">
                <CardContent className="p-8">
                  <div className="mb-6 text-primary p-3 bg-primary/10 w-fit">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-4">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyMe = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-primary/5 relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif font-bold mb-8"
          >
            {t("why.title")}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12"
          >
            {t("why.subtitle")}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-b border-primary/20 py-12"
          >
            <div>
              <p className="text-4xl font-serif text-primary mb-2">1</p>
              <p className="font-medium">{t("why.1")}</p>
            </div>
            <div>
              <p className="text-4xl font-serif text-primary mb-2">2</p>
              <p className="font-medium">{t("why.2")}</p>
            </div>
            <div>
              <p className="text-4xl font-serif text-primary mb-2">3</p>
              <p className="font-medium">{t("why.3")}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-background pt-24 pb-12 border-t border-border transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">STUDIO A</h3>
            <p className="text-muted-foreground mb-6">
              {t("footer.desc")}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">{t("footer.contact")}</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:studio.a.events27gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                  studio.a.events27gmail.com
                </a>
              </li>
              <li>
                <a href="tel:0621695312" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-5 h-5" />
                  0621695312
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                  Studio A events
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">{t("footer.services")}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>{t("skill.branding")}</li>
              <li>{t("skill.marketing")}</li>
              <li>{t("skill.photo")}</li>
              <li>{t("skill.event")}</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">{t("footer.work")}</h4>
            <p className="text-muted-foreground mb-4">{t("footer.ready")}</p>
            <Button className="w-full rounded-none bg-foreground text-background hover:bg-foreground/90">
              {t("footer.cta")}
            </Button>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ayoub Ouhaddou - Studio A Events. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};

import { AiChatBot } from "@/components/ai-chat-bot";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-black transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <WhyMe />
      <Footer />
      <AiChatBot />
      <WhatsAppButton />
    </div>
  );
}
