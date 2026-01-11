import React, { createContext, useContext } from 'react';

interface Translations {
  [key: string]: string;
}

const translations: Translations = {
  "company_name": "企来集团",
  "company_subtitle": "新闻中心",
  "search_placeholder": "请输入关键字查询",
  "search_button": "搜索",
  "nav_home": "首页",
  "nav_about": "集团概况",
  "nav_news": "新闻中心",
  "nav_services": "数字服务",
  "nav_cooperation": "地方合作",
  "nav_data": "数据开放",
  "nav_interaction": "互动交流",
  "nav_network": "全国网络格局",
  "footer_about": "关于我们",
  "footer_contact": "联系我们",
  "footer_privacy": "隐私政策",
  "footer_terms": "服务条款",
  "back_home": "返回首页",
  "read_more": "查看详情",
  "news_category": "新闻分类",
  "news_date": "发布日期",
  "news_source": "信息来源",
  "policy_documents": "政策文件",
  "local_cooperation": "地方合作",
  "digital_services": "数字服务",
  "digital_investment": "数字招商",
  "digital_governance": "数字监管",
  "data_trading": "数据交易",
  "smart_city": "智慧城市",
  "group_overview": "集团概况",
  "policy_news": "政策要闻",
  "interactive_exchange": "互动交流",
  "data_openness": "数据开放",
  "national_network": "全国网络格局",
  "core_business": "8大核心业务",
  "data_element_empowerment": "数据要素赋能服务",
  "city_yueyang": "岳阳",
  "city_lanzhou": "兰州",
  "city_zhuhai": "珠海",
  "city_changxing": "长兴",
  "city_xiamen": "厦门",
  "city_changzhou": "常州",
};

interface LanguageContextType {
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const t = (key: string) => translations[key] || key;

  return (
    <LanguageContext.Provider value={{ t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
