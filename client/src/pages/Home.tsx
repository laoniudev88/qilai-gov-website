import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { newsData, policyDocuments, leaderSlides } from "@/lib/newsData";
import { ChevronLeft, ChevronRight, Search, Building2, FileText, BarChart3, Globe, ShieldCheck, Cpu } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  const [currentXiSlide, setCurrentXiSlide] = useState(0);
  const [currentLiSlide, setCurrentLiSlide] = useState(0);
  const [currentNewsSlide, setCurrentNewsSlide] = useState(0);
  const [, setLocation] = useLocation();

  // 分离领导人数据
  const xiSlides = leaderSlides.filter(slide => slide.id === 1);
  const liSlides = leaderSlides.filter(slide => slide.id === 2);

  // 过滤出企来集团新闻（排除领导人新闻），并优先展示地方考察新闻
  const groupNews = newsData.filter(item => 
    !item.id.startsWith('xi') && 
    !item.id.startsWith('li') && 
    item.image
  ).sort((a, b) => {
    // 优先展示特定的地方考察新闻
    const priorityIds = ['news-yueyang-2024', '2', 'news-zh-cx', 'news-xm'];
    const aPriority = priorityIds.indexOf(a.id);
    const bPriority = priorityIds.indexOf(b.id);
    
    if (aPriority !== -1 && bPriority !== -1) return aPriority - bPriority;
    if (aPriority !== -1) return -1;
    if (bPriority !== -1) return 1;
    return 0;
  });

  // 习近平轮播自动切换
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentXiSlide((prev) => (prev + 1) % xiSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [xiSlides.length]);

  // 李强轮播自动切换
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLiSlide((prev) => (prev + 1) % liSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [liSlides.length]);

  // 集团新闻轮播自动切换
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNewsSlide((prev) => (prev + 1) % groupNews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [groupNews.length]);

  return (
    <div className="min-h-screen bg-white font-serif text-[#333]">
      {/* 顶部红条 */}
      <div className="bg-[#ce1126] text-white h-10">
        <div className="container mx-auto px-4 h-full flex justify-between items-center text-sm font-song">
          <div className="flex space-x-6">
            {/* 顶部导航已移除 */}
          </div>
          <div className="flex space-x-4"></div>
        </div>
      </div>

      {/* Logo与搜索区 */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* 左侧Logo */}
          <div>
            <h1 className="text-[72px] font-bold text-[#ce1126] tracking-widest font-song leading-none" style={{ fontFamily: '"FZXiaoBiaoSong-B05S", "FangSong", serif', textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
              {t('company_name')}
            </h1>

          </div>
          
          {/* 右侧搜索框 */}
          <div className="flex items-center">
            <div className="relative flex border border-gray-300 rounded-sm overflow-hidden">
              <input
                type="text"
                placeholder={t('search_placeholder')}
                className="pl-3 pr-2 py-2 w-64 text-sm focus:outline-none font-song"
              />
              <button className="bg-white text-[#ce1126] px-4 py-2 text-sm font-bold font-song hover:bg-gray-50 transition-colors">
                {t('search_button')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 主导航栏 */}
      <nav className="bg-[#ce1126] text-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-14 text-lg font-bold font-song">
            <Link href="/" className="flex-1 text-center hover:bg-[#a30d1d] h-full flex items-center justify-center transition-colors">{t('nav_home')}</Link>
            <Link href="/page/about" className="flex-1 text-center hover:bg-[#a30d1d] h-full flex items-center justify-center transition-colors">{t('nav_about')}</Link>
            <Link href="/page/policy" className="flex-1 text-center hover:bg-[#a30d1d] h-full flex items-center justify-center transition-colors">{t('policy_news_title')}</Link>
            <Link href="/page/service" className="flex-1 text-center hover:bg-[#a30d1d] h-full flex items-center justify-center transition-colors">{t('nav_services')}</Link>
            <Link href="/page/interaction" className="flex-1 text-center hover:bg-[#a30d1d] h-full flex items-center justify-center transition-colors">{t('nav_interaction')}</Link>
            <Link href="/page/data" className="flex-1 text-center hover:bg-[#a30d1d] h-full flex items-center justify-center transition-colors">{t('nav_data')}</Link>
            <Link href="/page/cooperation" className="flex-1 text-center hover:bg-[#a30d1d] h-full flex items-center justify-center transition-colors">{t('nav_cooperation')}</Link>
          </div>
        </div>
      </nav>

      {/* 核心展示区 (Hero Section) - 双轮播 */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8 h-[550px]">
          
          {/* 左侧：习近平总书记轮播 (8列) */}
          <div className="col-span-8 h-full relative overflow-hidden shadow-sm border border-gray-200 bg-gray-100 group cursor-pointer"
               onClick={() => setLocation(`/news/${xiSlides[currentXiSlide].id}`)}>
            {/* 图片层 */}
            <div className="absolute inset-0 transition-opacity duration-1000">
              <img 
                src={xiSlides[currentXiSlide].image} 
                alt={xiSlides[currentXiSlide].title} 
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            {/* 渐变遮罩与文字 */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 pt-24">
              <h2 className="text-3xl font-bold text-white mb-3 font-song leading-tight drop-shadow-lg">
                {xiSlides[currentXiSlide].title}
              </h2>
              <p className="text-white/90 text-lg font-song line-clamp-2 drop-shadow-md">
                {xiSlides[currentXiSlide].summary}
              </p>
            </div>

            {/* 轮播指示器 */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              {xiSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentXiSlide(idx); }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    idx === currentXiSlide ? "bg-[#ce1126] w-6" : "bg-white/50 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* 右侧：李强总理轮播 (4列) */}
          <div className="col-span-4 h-full flex flex-col shadow-sm border border-gray-200 bg-white group cursor-pointer"
               onClick={() => setLocation(`/news/${liSlides[currentLiSlide].id}`)}>
            {/* 上半部分：照片 */}
            <div className="h-[60%] overflow-hidden relative">
              <img 
                src={liSlides[currentLiSlide].image} 
                alt={liSlides[currentLiSlide].title} 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* 下半部分：内容 */}
            <div className="h-[40%] bg-[#ce1126] p-6 text-white flex flex-col justify-center relative overflow-hidden">
              {/* 装饰性背景纹理 */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
                   style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '10px 10px' }}>
              </div>
              
              <h2 className="text-xl font-bold mb-4 leading-tight font-song relative z-10 line-clamp-3">
                {liSlides[currentLiSlide].title}
              </h2>
              
              {/* 轮播指示器 */}
              <div className="absolute bottom-4 right-4 flex space-x-2 z-20">
                {liSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); setCurrentLiSlide(idx); }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentLiSlide ? "bg-white w-4" : "bg-white/40 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 地方合作通栏 */}
      <div className="bg-[#f8f9fa] border-y border-gray-200 py-8 mb-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#ce1126] font-song flex items-center">
              <span className="w-2 h-8 bg-[#ce1126] mr-3"></span>
              {t('local_cooperation_title')}
            </h2>
            <Link href="/page/cooperation" className="text-sm text-gray-600 hover:text-[#ce1126] font-song">{t('view_national_network')}</Link>
          </div>
          
          <div className="grid grid-cols-6 gap-4">
            {[
              { name: t('yueyang_city_short'), id: "news-qilai-xinzhili-5", image: "/images/yueyang_bg_hd.jpg" },
              { name: t('lanzhou_city_short'), id: "news-qilai-xinzhili-6", image: "/images/lanzhou_bg_hd.jpg" },
              { name: t('zhuhai_city_short'), id: "news-qilai-xinzhili-1", image: "/images/zhuhai_bg_hd.jpg" },
              { name: t('changxing_city_short'), id: "news-qilai-xinzhili-1", image: "/images/changxing_bg_hd.jpg" },
              { name: t('xiamen_city_short'), id: "news-qilai-xinzhili-2", image: "/images/xiamen_bg_hd.jpg" },
              { name: t('changzhou_city_short'), id: "news-qilai-xinzhili-2", image: "/images/changzhou_bg_hd.jpg" }
            ].map((city) => (
              <Link 
                key={city.name} 
                href={`/news/${city.id}`}
                className="group relative h-32 overflow-hidden rounded-lg shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 block"
              >
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${city.image})` }}></div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white drop-shadow-md tracking-wider font-song">{city.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 主要内容区 */}
      <main className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-12 gap-8">
          {/* 左侧：要闻聚焦 (仅展示集团新闻) */}
          <div className="col-span-8">
            <div className="flex items-center mb-6 border-b-2 border-[#ce1126] pb-2">
              <h2 className="text-2xl font-bold text-[#ce1126] font-song">{t('news_focus')}</h2>
            </div>
            
            <div className="relative h-[350px] overflow-hidden rounded-sm shadow-sm group cursor-pointer"
                 onClick={() => setLocation(`/news/${groupNews[currentNewsSlide].id}`)}>
              <div className="absolute inset-0 transition-transform duration-700 ease-in-out"
                   style={{ transform: `translateX(-${currentNewsSlide * 100}%)` }}>
                <div className="flex h-full">
                  {groupNews.map((news) => (
                    <div key={news.id} className="min-w-full h-full relative">
                      <img 
                        src={news.image} 
                        alt={news.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 pt-20">
                        <h3 className="text-2xl font-bold text-white mb-2 font-song drop-shadow-md">
                          {news.title}
                        </h3>
                        <p className="text-white/90 text-base line-clamp-2 font-song max-w-4xl">
                          {news.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 新闻轮播控制 */}
              <button 
                onClick={(e) => { e.stopPropagation(); setCurrentNewsSlide((prev) => (prev - 1 + groupNews.length) % groupNews.length); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full text-white hover:bg-black/50 transition-colors backdrop-blur-sm"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); setCurrentNewsSlide((prev) => (prev + 1) % groupNews.length); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full text-white hover:bg-black/50 transition-colors backdrop-blur-sm"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* 新闻列表 */}
            <div className="mt-6 space-y-4">
              {groupNews.slice(0, 5).map((news) => (
                <Link key={news.id} href={`/news/${news.id}`} className="block group border-b border-gray-100 pb-4 last:border-0">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-lg font-song text-gray-800 group-hover:text-[#ce1126] transition-colors truncate flex-1 pr-8">
                      {news.title}
                    </h3>
                    <span className="text-sm text-gray-500 font-sans whitespace-nowrap">{news.date}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-1 font-song">{news.content}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* 右侧：政策文件 */}
          <div className="col-span-4">
            <div className="flex items-center mb-6 border-b-2 border-[#ce1126] pb-2">
              <h2 className="text-2xl font-bold text-[#ce1126] font-song">{t('policy_documents')}</h2>
            </div>
            <div className="bg-gray-50 p-6 rounded-sm border border-gray-100 h-[350px] overflow-y-auto custom-scrollbar">
              <ul className="space-y-4">
                {policyDocuments.map((doc, index) => (
                  <li key={index} className="group">
                    <a href={doc.link} target="_blank" rel="noopener noreferrer" className="block">
                      <h3 className="text-base font-song text-gray-800 group-hover:text-[#ce1126] transition-colors leading-snug mb-1">
                        {doc.title}
                      </h3>
                      <div className="flex justify-between text-xs text-gray-500 font-sans mt-1">
                        <span>{doc.source}</span>
                        <span>{doc.date}</span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* 快速入口 */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <Link href="/page/service" className="bg-[#ce1126] text-white p-4 text-center rounded-sm hover:bg-[#a30d1d] transition-colors flex flex-col items-center justify-center h-24">
                <Building2 className="w-8 h-8 mb-2" />
                <span className="font-bold font-song">{t('digital_services_link')}</span>
              </Link>
              <Link href="/page/data" className="bg-[#ce1126] text-white p-4 text-center rounded-sm hover:bg-[#a30d1d] transition-colors flex flex-col items-center justify-center h-24">
                <BarChart3 className="w-8 h-8 mb-2" />
                <span className="font-bold font-song">{t('open_data_link')}</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* 底部数据数字服务板块 */}
      <div className="bg-gray-100 py-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#ce1126] font-song mb-2">{t('data_element_empowerment')}</h2>
            <p className="text-gray-600 font-song">{t('comprehensive_support')}</p>
          </div>
          
          <div className="grid grid-cols-4 gap-6">
            {[
              { title: t('data_asset_registration'), icon: FileText, desc: t('data_asset_registration_desc') },
              { title: t('public_data_authorization'), icon: ShieldCheck, desc: t('public_data_authorization_desc') },
              { title: t('industry_brain_construction'), icon: Cpu, desc: t('industry_brain_construction_desc') },
              { title: t('cross_border_data_flow_service'), icon: Globe, desc: t('cross_border_data_flow_desc') },
              { title: t('data_trading_matching'), icon: BarChart3, desc: t('data_trading_matching_desc') },
              { title: t('digital_government_consulting'), icon: Building2, desc: t('digital_government_consulting_desc') },
              { title: t('data_security_assessment'), icon: ShieldCheck, desc: t('data_security_assessment_desc') },
              { title: t('digital_talent_training'), icon: FileText, desc: t('digital_talent_training_desc') }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-all border-t-4 border-[#ce1126] group cursor-pointer">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-[#ce1126] group-hover:bg-[#ce1126] group-hover:text-white transition-colors">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold ml-4 font-song text-gray-800">{service.title}</h3>
                </div>
                <p className="text-gray-600 text-sm font-song leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 页脚 */}
      <footer className="bg-[#ce1126] text-white py-8 mt-auto">
        <div className="container mx-auto px-4 text-center font-song">
          <p className="mb-4 text-lg font-bold">{t('company_name_with_logo')}</p>
          <div className="text-sm opacity-80 space-y-2">
            <p>{t('footer_copyright_full')}</p>
            
          </div>
        </div>
      </footer>
    </div>
  );
}
