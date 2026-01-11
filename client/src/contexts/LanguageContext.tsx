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
    zh: "数字服务",
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
  },
  "nav_cooperation": {
    zh: "地方合作",
    en: "Local Cooperation",
    fr: "Coopération Locale"
  },
  "official_website": {
    zh: "QILAI GROUP OFFICIAL WEBSITE",
    en: "QILAI GROUP OFFICIAL WEBSITE",
    fr: "SITE OFFICIEL DU GROUPE QILAI"
  },
  "local_cooperation_title": {
    zh: "地方合作",
    en: "Local Cooperation",
    fr: "Coopération Locale"
  },
  "view_national_network": {
    zh: "查看全国合作网络 >",
    en: "View National Network >",
    fr: "Voir le Réseau National >"
  },
  "core_strategic_partner": {
    zh: "企来集团核心战略合作伙伴，已落地数字经济产业园项目。",
    en: "Core strategic partner of Qilai Group, Digital Economy Industrial Park project has landed.",
    fr: "Partenaire stratégique principal du Groupe Qilai, le projet de Parc Industriel d'Économie Numérique a atterri."
  },
  "key_expansion_area": {
    zh: "企来集团重点拓展区域，正在推进数据要素市场化配置改革合作。",
    en: "Key expansion area of Qilai Group, promoting cooperation in market-oriented allocation reform of data elements.",
    fr: "Zone d'expansion clé du Groupe Qilai, promouvant la coopération dans la réforme de l'allocation orientée vers le marché des éléments de données."
  },
  "national_network_layout": {
    zh: "全国合作网络格局",
    en: "National Cooperation Network Layout",
    fr: "Configuration du Réseau National de Coopération"
  },
  "core_strategic_node": {
    zh: "核心战略节点",
    en: "Core Strategic Node",
    fr: "Nœud Stratégique Principal"
  },
  "expansion_cooperation_node": {
    zh: "拓展合作节点",
    en: "Expansion Cooperation Node",
    fr: "Nœud de Coopération d'Expansion"
  },
  "column_navigation": {
    zh: "栏目导航",
    en: "Navigation",
    fr: "Navigation"
  },
  "cooperation_overview": {
    zh: "合作概览",
    en: "Cooperation Overview",
    fr: "Aperçu de la Coopération"
  },
  "covered_cities": {
    zh: "覆盖城市",
    en: "Covered Cities",
    fr: "Villes Couvertes"
  },
  "landed_projects": {
    zh: "落地项目",
    en: "Landed Projects",
    fr: "Projets Atterris"
  },
  "driven_investment": {
    zh: "带动投资",
    en: "Driven Investment",
    fr: "Investissement Généré"
  },
  "sponsor": {
    zh: "主办单位：企来集团",
    en: "Sponsor: Qilai Group",
    fr: "Commanditaire : Groupe Qilai"
  },
  "copyright": {
    zh: "版权所有：企来集团",
    en: "Copyright: Qilai Group",
    fr: "Droit d'auteur : Groupe Qilai"
  },
  "group_overview_title": {
    zh: "集团概况",
    en: "Group Overview",
    fr: "Aperçu du Groupe"
  },
  "group_overview_p1": {
    zh: "企来集团（Qilai Group）是国内领先的数字经济产业服务商，致力于通过大数据、人工智能、区块链等前沿技术，为各级政府及企业提供全方位的数字化转型解决方案。",
    en: "Qilai Group is a leading digital economy industry service provider in China, dedicated to providing comprehensive digital transformation solutions for governments and enterprises at all levels through cutting-edge technologies such as big data, artificial intelligence, and blockchain.",
    fr: "Le Groupe Qilai est un fournisseur de services de l'industrie de l'économie numérique de premier plan en Chine, dédié à fournir des solutions complètes de transformation numérique pour les gouvernements et les entreprises à tous les niveaux grâce à des technologies de pointe telles que le big data, l'intelligence artificielle et la blockchain."
  },
  "group_overview_p2": {
    zh: "集团紧密围绕国家“数字中国”战略，深耕数据要素市场化配置改革，构建了从数据采集、治理、流通到应用的全产业链服务体系。我们始终坚持“赋能实体经济、服务国家战略”的使命，助力地方政府优化营商环境，推动区域经济高质量发展。",
    en: "The Group closely follows the national 'Digital China' strategy, deeply cultivates the market-oriented allocation reform of data elements, and builds a whole industry chain service system from data collection, governance, circulation to application. We always adhere to the mission of 'empowering the real economy and serving national strategies', helping local governments optimize the business environment and promoting high-quality regional economic development.",
    fr: "Le Groupe suit de près la stratégie nationale 'Chine Numérique', cultive profondément la réforme de l'allocation orientée vers le marché des éléments de données et construit un système de services de toute la chaîne industrielle, de la collecte, de la gouvernance, de la circulation à l'application des données. Nous adhérons toujours à la mission d'« autonomiser l'économie réelle et de servir les stratégies nationales », aidant les gouvernements locaux à optimiser l'environnement des affaires et à promouvoir un développement économique régional de haute qualité."
  },
  "core_business_segments": {
    zh: "核心业务板块",
    en: "Core Business Segments",
    fr: "Segments d'Activité Principaux"
  },
  "digital_government_construction": {
    zh: "数字政府建设与运营",
    en: "Digital Government Construction and Operation",
    fr: "Construction et Exploitation du Gouvernement Numérique"
  },
  "data_element_assetization": {
    zh: "数据要素资产化服务",
    en: "Data Element Assetization Service",
    fr: "Service d'Activatisation des Éléments de Données"
  },
  "industrial_park_digital_investment": {
    zh: "产业园区数字化招商",
    en: "Industrial Park Digital Investment Promotion",
    fr: "Promotion de l'Investissement Numérique dans les Parcs Industriels"
  },
  "cross_border_data_circulation": {
    zh: "跨境数据流通与交易",
    en: "Cross-border Data Circulation and Trading",
    fr: "Circulation et Commerce Transfrontaliers de Données"
  },
  "policy_news_title": {
    zh: "政策要闻",
    en: "Policy News",
    fr: "Nouvelles Politiques"
  },
  "policy_news_intro": {
    zh: "深入贯彻落实党中央、国务院关于构建数据基础制度、更好发挥数据要素作用的决策部署，及时发布国家部委最新政策文件，为数字经济发展提供政策指引。",
    en: "Deeply implement the decision-making arrangements of the CPC Central Committee and the State Council on building basic data systems and better playing the role of data elements, timely release the latest policy documents of national ministries and commissions, and provide policy guidance for the development of the digital economy.",
    fr: "Mettre en œuvre en profondeur les dispositions décisionnelles du Comité central du PCC et du Conseil des Affaires d'État sur la construction de systèmes de données de base et le meilleur rôle des éléments de données, publier en temps opportun les derniers documents politiques des ministères et commissions nationaux et fournir des orientations politiques pour le développement de l'économie numérique."
  },
  "source": {
    zh: "来源：",
    en: "Source: ",
    fr: "Source : "
  },
  "digital_services_title": {
    zh: "数字服务",
    en: "Digital Services",
    fr: "Services Numériques"
  },
  "digital_services_intro": {
    zh: "企来集团数字服务平台，旨在为政府部门提供高效、便捷的数字化服务工具。我们通过“互联网+数字服务”模式，助力政府实现“一网通办”、“跨省通办”，提升行政效能和公共服务水平。",
    en: "Qilai Group Digital Service Platform aims to provide efficient and convenient digital service tools for government departments. Through the 'Internet + Digital Service' model, we help the government achieve 'One Network for All' and 'Cross-provincial Handling', improving administrative efficiency and public service levels.",
    fr: "La plateforme de services numériques du Groupe Qilai vise à fournir des outils de services numériques efficaces et pratiques aux ministères. Grâce au modèle « Internet + Service Numérique », nous aidons le gouvernement à réaliser « Un Réseau pour Tous » et « Traitement Transprovincial », améliorant l'efficacité administrative et les niveaux de service public."
  },
  "digital_investment": {
    zh: "数字招商",
    en: "Digital Investment",
    fr: "Investissement Numérique"
  },
  "digital_investment_desc": {
    zh: "产业分析、项目匹配、全流程跟踪",
    en: "Industry analysis, project matching, full process tracking",
    fr: "Analyse industrielle, correspondance de projets, suivi complet du processus"
  },
  "business_environment": {
    zh: "营商环境",
    en: "Business Environment",
    fr: "Environnement des Affaires"
  },
  "business_environment_desc": {
    zh: "政策推送、诉求直达、满意度测评",
    en: "Policy push, direct appeal, satisfaction evaluation",
    fr: "Poussée politique, appel direct, évaluation de la satisfaction"
  },
  "digital_supervision": {
    zh: "数字监管",
    en: "Digital Supervision",
    fr: "Supervision Numérique"
  },
  "digital_supervision_desc": {
    zh: "数据监测、风险预警、协同执法",
    en: "Data monitoring, risk warning, collaborative law enforcement",
    fr: "Surveillance des données, avertissement de risque, application collaborative de la loi"
  },
  "interaction_title": {
    zh: "互动交流",
    en: "Interaction",
    fr: "Interaction"
  },
  "interaction_intro": {
    zh: "搭建政企沟通桥梁，倾听各界声音。欢迎各级政府领导、专家学者及企业家朋友莅临企来集团考察指导，共商数字经济发展大计。",
    en: "Build a bridge for government-enterprise communication and listen to voices from all walks of life. We welcome government leaders at all levels, experts, scholars, and entrepreneurs to visit Qilai Group for inspection and guidance, and discuss the development plan of the digital economy.",
    fr: "Construire un pont pour la communication gouvernement-entreprise et écouter les voix de tous les horizons. Nous accueillons les dirigeants gouvernementaux à tous les niveaux, les experts, les universitaires et les entrepreneurs pour visiter le Groupe Qilai pour inspection et orientation, et discuter du plan de développement de l'économie numérique."
  },
  "appointment_cooperation": {
    zh: "预约考察 / 商务合作",
    en: "Appointment for Inspection / Business Cooperation",
    fr: "Rendez-vous pour Inspection / Coopération Commerciale"
  },
  "submit_intent": {
    zh: "请通过以下官方渠道提交您的合作意向，我们将有专人与您对接。",
    en: "Please submit your cooperation intention through the following official channels, and we will have a dedicated person to contact you.",
    fr: "Veuillez soumettre votre intention de coopération via les canaux officiels suivants, et nous aurons une personne dédiée pour vous contacter."
  },
  "submit_button": {
    zh: "在线提交意向书",
    en: "Submit Letter of Intent Online",
    fr: "Soumettre une Lettre d'Intention en Ligne"
  },
  "system_maintenance": {
    zh: "（系统正在维护中，请稍后访问）",
    en: "(System is under maintenance, please visit later)",
    fr: "(Le système est en maintenance, veuillez visiter plus tard)"
  },
  "open_data_title": {
    zh: "数据开放",
    en: "Open Data",
    fr: "Données Ouvertes"
  },
  "open_data_intro": {
    zh: "依托国家数据局相关政策，企来集团积极推动公共数据资源的开发利用。本栏目将定期发布脱敏后的行业分析报告、宏观经济指数及产业发展白皮书。",
    en: "Relying on the relevant policies of the National Data Bureau, Qilai Group actively promotes the development and utilization of public data resources. This column will regularly release desensitized industry analysis reports, macroeconomic indices, and industrial development white papers.",
    fr: "S'appuyant sur les politiques pertinentes du Bureau National des Données, le Groupe Qilai promeut activement le développement et l'utilisation des ressources de données publiques. Cette rubrique publiera régulièrement des rapports d'analyse sectorielle désensibilisés, des indices macroéconomiques et des livres blancs sur le développement industriel."
  },
  "data_name": {
    zh: "数据名称",
    en: "Data Name",
    fr: "Nom des Données"
  },
  "release_date": {
    zh: "发布日期",
    en: "Release Date",
    fr: "Date de Publication"
  },
  "format": {
    zh: "格式",
    en: "Format",
    fr: "Format"
  },
  "operation": {
    zh: "操作",
    en: "Operation",
    fr: "Opération"
  },
  "apply_download": {
    zh: "申请下载",
    en: "Apply for Download",
    fr: "Demander le Téléchargement"
  },
  "local_cooperation_intro": {
    zh: "企来集团已与全国多个省市建立了深度交流对接合作关系，通过“数字+产业”双轮驱动对接，助力地方经济腾飞。",
    en: "Qilai Group has established deep exchange and docking cooperation relationships with many provinces and cities across the country, helping local economies take off through 'Digital + Industry' dual-wheel drive docking.",
    fr: "Le Groupe Qilai a établi des relations de coopération d'échange et d'amarrage approfondies avec de nombreuses provinces et villes à travers le pays, aidant les économies locales à décoller grâce à l'amarrage à double roue « Numérique + Industrie »."
  },
  "yueyang_desc": {
    zh: "建设长江中游城市群数字经济创新发展示范区，推动传统产业数字化升级。",
    en: "Build a demonstration zone for innovative development of the digital economy in the middle reaches of the Yangtze River urban agglomeration, and promote the digital upgrading of traditional industries.",
    fr: "Construire une zone de démonstration pour le développement innovant de l'économie numérique dans l'agglomération urbaine du cours moyen du fleuve Yangtze et promouvoir la mise à niveau numérique des industries traditionnelles."
  },
  "lanzhou_desc": {
    zh: "共建西部数字经济产业园，打造‘东数西算’重要节点与数据要素流通枢纽。",
    en: "Jointly build the Western Digital Economy Industrial Park, create an important node for 'East Data, West Computing' and a data element circulation hub.",
    fr: "Construire conjointement le Parc Industriel de l'Économie Numérique de l'Ouest, créer un nœud important pour « Données de l'Est, Calcul de l'Ouest » et un centre de circulation des éléments de données."
  },
  "zhuhai_desc": {
    zh: "深化粤港澳大湾区产业协同，推动海洋经济与智慧城市的数字化转型。",
    en: "Deepen industrial collaboration in the Guangdong-Hong Kong-Macao Greater Bay Area, and promote the digital transformation of the marine economy and smart cities.",
    fr: "Approfondir la collaboration industrielle dans la région de la Grande Baie Guangdong-Hong Kong-Macao et promouvoir la transformation numérique de l'économie marine et des villes intelligentes."
  },
  "changxing_desc": {
    zh: "聚焦新能源与智能制造，构建长三角绿色智造高地与县域数字治理样板。",
    en: "Focus on new energy and intelligent manufacturing, build a green intelligent manufacturing highland in the Yangtze River Delta and a model for county-level digital governance.",
    fr: "Se concentrer sur les nouvelles énergies et la fabrication intelligente, construire un haut lieu de la fabrication intelligente verte dans le delta du fleuve Yangtze et un modèle de gouvernance numérique au niveau du comté."
  },
  "xiamen_desc": {
    zh: "探索跨境数据流动试点，建设数字自贸区与两岸数字经济融合发展示范区。",
    en: "Explore cross-border data flow pilots, build a digital free trade zone and a demonstration zone for the integrated development of the digital economy across the Taiwan Strait.",
    fr: "Explorer des pilotes de flux de données transfrontaliers, construire une zone de libre-échange numérique et une zone de démonstration pour le développement intégré de l'économie numérique à travers le détroit de Taiwan."
  },
  "changzhou_desc": {
    zh: "打造长三角工业互联网与数字制造融合发展标杆，赋能新能源之都建设。",
    en: "Create a benchmark for the integrated development of industrial Internet and digital manufacturing in the Yangtze River Delta, and empower the construction of the new energy capital.",
    fr: "Créer une référence pour le développement intégré de l'Internet industriel et de la fabrication numérique dans le delta du fleuve Yangtze, et autonomiser la construction de la capitale des nouvelles énergies."
  },
  "data_element_empowerment": {
    zh: "数据要素赋能服务",
    en: "Data Element Empowerment Services",
    fr: "Services d'Autonomisation des Éléments de Données"
  },
  "comprehensive_support": {
    zh: "全方位助力政府数字化转型与数据价值释放",
    en: "Comprehensive support for government digital transformation and data value release",
    fr: "Soutien complet à la transformation numérique du gouvernement et à la libération de la valeur des données"
  },
  "data_asset_registration": {
    zh: "数据资产登记",
    en: "Data Asset Registration",
    fr: "Enregistrement des Actifs de Données"
  },
  "data_asset_registration_desc": {
    zh: "提供合规的数据资产权属登记与确权服务",
    en: "Provide compliant data asset ownership registration and confirmation services",
    fr: "Fournir des services d'enregistrement et de confirmation de propriété d'actifs de données conformes"
  },
  "public_data_authorization": {
    zh: "公共数据授权",
    en: "Public Data Authorization",
    fr: "Autorisation des Données Publiques"
  },
  "public_data_authorization_desc": {
    zh: "协助政府构建公共数据授权运营机制",
    en: "Assist governments in building public data authorization and operation mechanisms",
    fr: "Aider les gouvernements à construire des mécanismes d'autorisation et d'exploitation des données publiques"
  },
  "industry_brain_construction": {
    zh: "产业大脑建设",
    en: "Industry Brain Construction",
    fr: "Construction du Cerveau Industriel"
  },
  "industry_brain_construction_desc": {
    zh: "打造区域特色产业大脑，赋能产业升级",
    en: "Build regional characteristic industry brain, empower industry upgrade",
    fr: "Construire un cerveau industriel caractéristique régional, autonomiser la mise à niveau industrielle"
  },
  "cross_border_data_flow_service": {
    zh: "跨境数据流动",
    en: "Cross-border Data Flow",
    fr: "Flux de Données Transfrontaliers"
  },
  "cross_border_data_flow_desc": {
    zh: "提供安全合规的跨境数据传输解决方案",
    en: "Provide secure and compliant cross-border data transmission solutions",
    fr: "Fournir des solutions de transmission de données transfrontalières sécurisées et conformes"
  },
  "data_trading_matching": {
    zh: "数据交易撮合",
    en: "Data Trading Matching",
    fr: "Appariement du Commerce de Données"
  },
  "data_trading_matching_desc": {
    zh: "连接供需双方，促进数据要素高效流通",
    en: "Connect supply and demand, promote efficient circulation of data elements",
    fr: "Connecter l'offre et la demande, promouvoir la circulation efficace des éléments de données"
  },
  "digital_government_consulting": {
    zh: "数字政府咨询",
    en: "Digital Government Consulting",
    fr: "Consultation sur le Gouvernement Numérique"
  },
  "digital_government_consulting_desc": {
    zh: "提供顶层设计与数字化转型战略咨询",
    en: "Provide top-level design and digital transformation strategy consulting",
    fr: "Fournir des conseils en conception de haut niveau et en stratégie de transformation numérique"
  },
  "data_security_assessment": {
    zh: "数据安全评估",
    en: "Data Security Assessment",
    fr: "Évaluation de la Sécurité des Données"
  },
  "data_security_assessment_desc": {
    zh: "全流程数据安全风险评估与合规审计",
    en: "Full-process data security risk assessment and compliance audit",
    fr: "Évaluation des risques de sécurité des données et audit de conformité du processus complet"
  },
  "digital_talent_training": {
    zh: "数字人才培训",
    en: "Digital Talent Training",
    fr: "Formation des Talents Numériques"
  },
  "digital_talent_training_desc": {
    zh: "培养专业化的数字经济管理与技术人才",
    en: "Cultivate professional digital economy management and technical talents",
    fr: "Cultiver des talents professionnels en gestion de l'économie numérique et en technologie"
  },
  "company_name_with_logo": {
    zh: "企来集团 QILAI GROUP",
    en: "Qilai Group QILAI GROUP",
    fr: "Groupe Qilai QILAI GROUP"
  },
  "footer_copyright_full": {
    zh: "版权所有 © 2025 企来集团 保留所有权利",
    en: "Copyright © 2025 Qilai Group All Rights Reserved",
    fr: "Droit d'auteur © 2025 Groupe Qilai Tous Droits Réservés"
  },
  "digital_services_link": {
    zh: "数字服务",
    en: "Digital Services",
    fr: "Services Numériques"
  },
  "open_data_link": {
    zh: "数据开放",
    en: "Open Data",
    fr: "Données Ouvertes"
  },
  "digital_investment_promotion": {
    zh: "数字招商",
    en: "Digital Investment Promotion",
    fr: "Promotion de l'Investissement Numérique"
  },
  "digital_investment_promotion_desc": {
    zh: "产业分析、项目匹配、全流程跟踪",
    en: "Industry analysis, project matching, full process tracking",
    fr: "Analyse industrielle, correspondance de projets, suivi complet du processus"
  },
  "business_environment_service": {
    zh: "营商环境",
    en: "Business Environment",
    fr: "Environnement des Affaires"
  },
  "business_environment_service_desc": {
    zh: "政策推送、诉求直达、满意度测评",
    en: "Policy push, direct appeal, satisfaction evaluation",
    fr: "Poussée politique, appel direct, évaluation de la satisfaction"
  },
  "digital_supervision_service": {
    zh: "数字监管",
    en: "Digital Supervision",
    fr: "Supervision Numérique"
  },
  "digital_supervision_service_desc": {
    zh: "数据监测、风险预警、协同执法",
    en: "Data monitoring, risk warning, collaborative law enforcement",
    fr: "Surveillance des données, avertissement de risque, application collaborative de la loi"
  },
  "digital_economy_white_paper": {
    zh: "2025年中国数字经济发展白皮书",
    en: "2025 China Digital Economy Development White Paper",
    fr: "Livre Blanc sur le Développement de l'Économie Numérique de la Chine 2025"
  },
  "business_environment_index_report": {
    zh: "全国各省市营商环境指数报告",
    en: "National Business Environment Index Report",
    fr: "Rapport d'Indice d'Environnement des Affaires National"
  },
  "data_element_reform_cases": {
    zh: "数据要素市场化配置改革案例集",
    en: "Data Element Market-oriented Allocation Reform Cases",
    fr: "Recueil de Cas de Réforme de l'Allocation Orientée vers le Marché des Éléments de Données"
  },
  "cooperation_overview": {
    zh: "合作概览",
    en: "Cooperation Overview",
    fr: "Aperçu de la Coopération"
  },
  "covered_cities_count": {
    zh: "覆盖城市",
    en: "Covered Cities",
    fr: "Villes Couvertes"
  },
  "landed_projects_count": {
    zh: "落地项目",
    en: "Landed Projects",
    fr: "Projets Atterris"
  },
  "driven_investment_count": {
    zh: "带动投资",
    en: "Driven Investment",
    fr: "Investissement Généré"
  },
  "national_network_layout": {
    zh: "全国合作网络格局",
    en: "National Cooperation Network Layout",
    fr: "Configuration du Réseau National de Coopération"
  },
  "core_strategic_node": {
    zh: "核心战略节点",
    en: "Core Strategic Node",
    fr: "Nœud Stratégique Principal"
  },
  "expansion_cooperation_node": {
    zh: "拓展合作节点",
    en: "Expansion Cooperation Node",
    fr: "Nœud de Coopération d'Expansion"
  },
  "return_to_home": {
    zh: "返回首页",
    en: "Return to Home",
    fr: "Retour à l'Accueil"
  },
  "column_navigation_title": {
    zh: "栏目导航",
    en: "Navigation",
    fr: "Navigation"
  },
  "group_overview_nav": {
    zh: "集团概况",
    en: "Group Overview",
    fr: "Aperçu du Groupe"
  },
  "local_cooperation_nav": {
    zh: "地方合作",
    en: "Local Cooperation",
    fr: "Coopération Locale"
  },
  "core_strategic_partner_desc": {
    zh: "企来集团核心战略合作伙伴，已落地数字经济产业园项目。",
    en: "Core strategic partner of Qilai Group, Digital Economy Industrial Park project has landed.",
    fr: "Partenaire stratégique principal du Groupe Qilai, le projet de Parc Industriel d'Économie Numérique a atterri."
  },
  "key_expansion_area_desc": {
    zh: "企来集团重点拓展区域，正在推进数据要素市场化配置改革合作。",
    en: "Key expansion area of Qilai Group, promoting cooperation in market-oriented allocation reform of data elements.",
    fr: "Zone d'expansion clé du Groupe Qilai, promouvant la coopération dans la réforme de l'allocation orientée vers le marché des éléments de données."
  },
  "sponsor_unit": {
    zh: "主办单位：企来集团",
    en: "Sponsor: Qilai Group",
    fr: "Commanditaire : Groupe Qilai"
  },
  "copyright_unit": {
    zh: "版权所有：企来集团",
    en: "Copyright: Qilai Group",
    fr: "Droit d'auteur : Groupe Qilai"
  },
  "national_emblem_alt": {
    zh: "国徽",
    en: "National Emblem",
    fr: "Emblème National"
  },
  "yueyang_city": {
    zh: "湖南省岳阳市",
    en: "Yueyang, Hunan Province",
    fr: "Yueyang, Province du Hunan"
  },
  "lanzhou_city": {
    zh: "甘肃省兰州市",
    en: "Lanzhou, Gansu Province",
    fr: "Lanzhou, Province du Gansu"
  },
  "zhuhai_city": {
    zh: "广东省珠海市",
    en: "Zhuhai, Guangdong Province",
    fr: "Zhuhai, Province du Guangdong"
  },
  "changxing_city": {
    zh: "浙江省长兴县",
    en: "Changxing County, Zhejiang Province",
    fr: "Comté de Changxing, Province du Zhejiang"
  },
  "xiamen_city": {
    zh: "福建省厦门市",
    en: "Xiamen, Fujian Province",
    fr: "Xiamen, Province du Fujian"
  },
  "changzhou_city": {
    zh: "江苏省常州市",
    en: "Changzhou, Jiangsu Province",
    fr: "Changzhou, Province du Jiangsu"
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
