import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'zh' | 'en' | 'fr';

interface Translations {
  [key: string]: {
    zh: string;
    en: string;
    fr: string;
  };
}

const translations: Translations = {
  "company_name": {
    zh: "企来集团",
    en: "Qilai Group",
    fr: "Groupe Qilai"
  },
  "company_subtitle": {
    zh: "新闻中心",
    en: "News Center",
    fr: "Centre de Nouvelles"
  },
  "search_placeholder": {
    zh: "请输入关键字查询",
    en: "Enter keywords to search",
    fr: "Entrez des mots-clés pour rechercher"
  },
  "search_button": {
    zh: "搜索",
    en: "Search",
    fr: "Rechercher"
  },
  "nav_home": {
    zh: "首页",
    en: "Home",
    fr: "Accueil"
  },
  "nav_about": {
    zh: "集团概况",
    en: "About Us",
    fr: "À Propos"
  },
  "nav_news": {
    zh: "新闻中心",
    en: "News",
    fr: "Nouvelles"
  },
  "nav_services": {
    zh: "政务服务",
    en: "Services",
    fr: "Services"
  },
  "nav_policy": {
    zh: "政策文件",
    en: "Policies",
    fr: "Politiques"
  },
  "nav_interaction": {
    zh: "互动交流",
    en: "Interaction",
    fr: "Interaction"
  },
  "nav_data": {
    zh: "数据开放",
    en: "Open Data",
    fr: "Données Ouvertes"
  },
  "hero_title": {
    zh: "紧跟国家战略<br/>践行数字中国",
    en: "Following National Strategy<br/>Practicing Digital China",
    fr: "Suivre la Stratégie Nationale<br/>Pratiquer la Chine Numérique"
  },
  "hero_subtitle": {
    zh: "深化政企混改 · 赋能区域经济",
    en: "Deepening Mixed Reform · Empowering Regional Economy",
    fr: "Approfondir la Réforme Mixte · Autonomiser l'Économie Régionale"
  },
  "hero_button": {
    zh: "了解更多",
    en: "Learn More",
    fr: "En Savoir Plus"
  },
  "news_focus": {
    zh: "要闻聚焦",
    en: "Headlines",
    fr: "Gros Titres"
  },
  "more_news": {
    zh: "更多新闻",
    en: "More News",
    fr: "Plus de Nouvelles"
  },
  "footer_copyright": {
    zh: "版权所有 © 企来集团 2026",
    en: "Copyright © Qilai Group 2026",
    fr: "Droit d'auteur © Groupe Qilai 2026"
  },
  "accessibility": {
    zh: "无障碍阅读",
    en: "Accessibility",
    fr: "Accessibilité"
  },
  "login": {
    zh: "登录",
    en: "Login",
    fr: "Connexion"
  },
  "register": {
    zh: "注册",
    en: "Register",
    fr: "S'inscrire"
  },
  "date_format": {
    zh: "2026年1月11日 星期日",
    en: "Sunday, January 11, 2026",
    fr: "Dimanche 11 Janvier 2026"
  },
  "lunar_date": {
    zh: "农历乙巳年",
    en: "Lunar Year of the Snake",
    fr: "Année Lunaire du Serpent"
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh');

  const t = (key: string) => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
