import { motion } from "framer-motion";
import { ArrowRight, Instagram, Mail, Phone, Camera, Palette, Megaphone, Calendar, CheckCircle2, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroBg from "@assets/generated_images/elegant_creative_studio_workspace_background.png";
import restaurantImg from "@assets/generated_images/modern_moroccan_restaurant_interior.png";
import galaImg from "@assets/generated_images/luxury_gala_dinner_event_setting.png";
import portraitImg from "@assets/IMG_0685_1764789357001.jpeg";

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

  const navLinks = [
    { name: "À propos", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Offres", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-serif font-bold tracking-wider text-primary">
          STUDIO A
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-primary transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Nav Overlay */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-white/10 p-4 md:hidden flex flex-col space-y-4 animate-in slide-in-from-top-5">
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
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Background" 
          className="w-full h-full object-cover opacity-40"
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
            Branding • Marketing • Photographie • Événementiel
          </motion.p>
          <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold mb-6 leading-tight text-white">
            Ayoub Ouhaddou
          </motion.h1>
          <motion.p variants={fadeIn} className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl mb-10 leading-relaxed">
            Je transforme chaque idée en une expérience visuelle et émotionnelle qui marque durablement.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Button size="lg" className="rounded-none px-8 py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all gap-2" asChild>
              <a href="#portfolio">
                Voir mes projets <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] bg-muted/30 border border-white/10 flex items-center justify-center group overflow-hidden"
          >
            <img 
              src={portraitImg} 
              alt="Ayoub Ouhaddou" 
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-background/80 backdrop-blur-sm border border-white/10">
              <p className="font-serif text-lg text-primary">Ayoub Ouhaddou</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Directeur Artistique</p>
            </div>
          </motion.div>

          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={staggerContainer}
          >
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-serif font-bold mb-8">
              À propos de moi
            </motion.h2>
            <motion.div variants={fadeIn} className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Je suis un professionnel multidisciplinaire spécialisé en Branding, Marketing digital, Photographie et Organisation d’événements.
              </p>
              <p>
                J’aide les marques, entreprises et projets à construire une présence forte, cohérente et mémorable grâce à une combinaison de vision artistique, stratégie moderne et exécution professionnelle.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                {[
                  "Branding & Identité",
                  "Stratégie Marketing",
                  "Photographie Pro",
                  "Direction Artistique",
                  "Gestion d'Événements",
                  "Storytelling"
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
  const projects = [
    {
      title: "Identité Digitale Restaurant",
      location: "Marrakech",
      image: restaurantImg,
      category: "Branding & Photographie",
      description: "Création d’une identité numérique complète pour un restaurant moderne à Marrakech : moodboard, photos professionnelles, ligne éditoriale et stratégie sociale.",
      tags: ["Food Photography", "Social Media", "Branding"]
    },
    {
      title: "Dîner de Gala Premium",
      location: "Événement Privé",
      image: galaImg,
      category: "Organisation & Direction Artistique",
      description: "Organisation complète d'un dîner de gala haut de gamme. Concept 'Élégance & Lumière', scénographie, coordination logistique et couverture photographique.",
      tags: ["Event Planning", "Scénographie", "Coordination"]
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Sélection de projets récents démontrant mon approche créative.</p>
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
                <div className="absolute top-4 left-4 z-20 bg-background/90 backdrop-blur px-3 py-1 text-xs font-medium tracking-widest uppercase">
                  {project.category}
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs border border-white/10 px-2 py-1 text-muted-foreground">
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
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Branding & Identité",
      items: ["Logos", "Chartes graphiques", "Concept créatif", "Univers de marque"]
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Marketing & Com",
      items: ["Stratégies digitales", "Storytelling", "Lignes éditoriales", "Campagnes"]
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photographie Pro",
      items: ["Produit", "Ambiance", "Corporate", "Lifestyle", "Événementiel"]
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Événementiel",
      items: ["Dîners de gala", "Lancements", "Activations", "Événements hybrides"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Mes Offres</h2>
          <p className="text-muted-foreground">Des solutions sur mesure pour vos besoins créatifs.</p>
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
              <Card className="h-full bg-secondary/10 border-white/5 hover:border-primary/30 transition-colors duration-300 rounded-none">
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
  return (
    <section className="py-24 bg-primary/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif font-bold mb-8"
          >
            Pourquoi me choisir ?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12"
          >
            Je combine créativité, technique et stratégie pour offrir une identité forte, une communication claire et une exécution professionnelle.
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
              <p className="font-medium">Je construis des identités</p>
            </div>
            <div>
              <p className="text-4xl font-serif text-primary mb-2">2</p>
              <p className="font-medium">Je crée des expériences</p>
            </div>
            <div>
              <p className="text-4xl font-serif text-primary mb-2">3</p>
              <p className="font-medium">Je valorise des projets</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-background pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">STUDIO A</h3>
            <p className="text-muted-foreground mb-6">
              Transformer chaque idée en une expérience visuelle et émotionnelle qui marque durablement.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
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
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Branding</li>
              <li>Marketing</li>
              <li>Photographie</li>
              <li>Événementiel</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Travaillons ensemble</h4>
            <p className="text-muted-foreground mb-4">Prêt à lancer votre projet ?</p>
            <Button className="w-full rounded-none bg-white text-black hover:bg-gray-200">
              Me contacter
            </Button>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ayoub Ouhaddou - Studio A Events. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <WhyMe />
      <Footer />
    </div>
  );
}
