import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  fr: {
    "nav.about": "À propos",
    "nav.portfolio": "Portfolio",
    "nav.services": "Offres",
    "nav.contact": "Contact",
    "hero.subtitle": "Branding • Marketing • Photographie • Événementiel",
    "hero.title": "Ayoub Ouhaddou",
    "hero.description": "Je transforme chaque idée en une expérience visuelle et émotionnelle qui marque durablement.",
    "hero.cta": "Voir mes projets",
    "about.title": "À propos de moi",
    "about.role": "Directeur Artistique",
    "about.desc1": "Je suis un professionnel multidisciplinaire spécialisé en Branding, Marketing digital, Photographie et Organisation d’événements.",
    "about.desc2": "J’aide les marques, entreprises et projets à construire une présence forte, cohérente et mémorable grâce à une combinaison de vision artistique, stratégie moderne et exécution professionnelle.",
    "skill.branding": "Branding & Identité",
    "skill.marketing": "Stratégie Marketing",
    "skill.photo": "Photographie Pro",
    "skill.direction": "Direction Artistique",
    "skill.event": "Gestion d'Événements",
    "skill.storytelling": "Storytelling",
    "portfolio.title": "Portfolio",
    "portfolio.subtitle": "Sélection de projets récents démontrant mon approche créative.",
    "project1.title": "Identité Digitale Restaurant",
    "project1.desc": "Création d’une identité numérique complète pour un restaurant moderne à Marrakech : moodboard, photos professionnelles, ligne éditoriale et stratégie sociale.",
    "project1.cat": "Branding & Photographie",
    "project2.title": "Dîner de Gala Premium",
    "project2.desc": "Organisation complète d'un dîner de gala haut de gamme. Concept 'Élégance & Lumière', scénographie, coordination logistique et couverture photographique.",
    "project2.cat": "Organisation & Direction Artistique",
    "services.title": "Mes Offres",
    "services.subtitle": "Des solutions sur mesure pour vos besoins créatifs.",
    "service1.title": "Branding & Identité",
    "service2.title": "Marketing & Com",
    "service3.title": "Photographie Pro",
    "service4.title": "Événementiel",
    "why.title": "Pourquoi me choisir ?",
    "why.subtitle": "Je combine créativité, technique et stratégie pour offrir une identité forte, une communication claire et une exécution professionnelle.",
    "why.1": "Je construis des identités",
    "why.2": "Je crée des expériences",
    "why.3": "Je valorise des projets",
    "footer.desc": "Transformer chaque idée en une expérience visuelle et émotionnelle qui marque durablement.",
    "footer.contact": "Contact",
    "footer.services": "Services",
    "footer.work": "Travaillons ensemble",
    "footer.cta": "Me contacter",
    "footer.ready": "Prêt à lancer votre projet ?",
    "footer.rights": "Tous droits réservés.",
  },
  ar: {
    "nav.about": "من أنا",
    "nav.portfolio": "أعمالي",
    "nav.services": "خدماتي",
    "nav.contact": "اتصل بي",
    "hero.subtitle": "علامة تجارية • تسويق • تصوير • تنظيم فعاليات",
    "hero.title": "أيوب أحدو",
    "hero.description": "أحول كل فكرة إلى تجربة بصرية وعاطفية تترك أثراً دائماً.",
    "hero.cta": "شاهد مشاريعي",
    "about.title": "من أنا",
    "about.role": "مدير فني",
    "about.desc1": "أنا محترف متعدد التخصصات متخصص في العلامات التجارية، التسويق الرقمي، التصوير الفوتوغرافي وتنظيم الفعاليات.",
    "about.desc2": "أساعد العلامات التجارية والشركات والمشاريع على بناء حضور قوي ومتماسك لا يُنسى من خلال مزيج من الرؤية الفنية والاستراتيجية الحديثة والتنفيذ الاحترافي.",
    "skill.branding": "العلامة التجارية والهوية",
    "skill.marketing": "استراتيجية التسويق",
    "skill.photo": "تصوير احترافي",
    "skill.direction": "إدارة فنية",
    "skill.event": "إدارة الفعاليات",
    "skill.storytelling": "سرد القصص",
    "portfolio.title": "أعمالي",
    "portfolio.subtitle": "مجموعة مختارة من المشاريع الحديثة التي تظهر نهجي الإبداعي.",
    "project1.title": "هوية رقمية لمطعم",
    "project1.desc": "إنشاء هوية رقمية كاملة لمطعم حديث في مراكش: لوحة الإلهام، صور احترافية، خط تحريري واستراتيجية اجتماعية.",
    "project1.cat": "علامة تجارية & تصوير",
    "project2.title": "عشاء فاخر",
    "project2.desc": "تنظيم كامل لعشاء فاخر. مفهوم 'أناقة ونور'، سينوغرافيا، تنسيق لوجستي وتغطية تصويرية.",
    "project2.cat": "تنظيم & إدارة فنية",
    "services.title": "خدماتي",
    "services.subtitle": "حلول مخصصة لاحتياجاتك الإبداعية.",
    "service1.title": "العلامة التجارية والهوية",
    "service2.title": "التسويق والاتصال",
    "service3.title": "تصوير احترافي",
    "service4.title": "تنظيم الفعاليات",
    "why.title": "لماذا تختارني؟",
    "why.subtitle": "أجمع بين الإبداع والتقنية والاستراتيجية لتقديم هوية قوية، واتصال واضح وتنفيذ احترافي.",
    "why.1": "أبني هويات",
    "why.2": "أخلق تجارب",
    "why.3": "أثمن المشاريع",
    "footer.desc": "أحول كل فكرة إلى تجربة بصرية وعاطفية تترك أثراً دائماً.",
    "footer.contact": "اتصل بي",
    "footer.services": "خدماتي",
    "footer.work": "لنعمل معاً",
    "footer.cta": "تواصل معي",
    "footer.ready": "جاهز لإطلاق مشروعك؟",
    "footer.rights": "جميع الحقوق محفوظة.",
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['fr']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir: language === 'ar' ? 'rtl' : 'ltr' }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
