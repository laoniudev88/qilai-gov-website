import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { sortedNews, policyDocuments } from "@/lib/newsData";
import { ChevronRight, Search, Globe, FileText, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");
  const { language, setLanguage, t } = useLanguage();

  // 模拟数据：企来集团在全国各地的合作项目增长趋势
  const projectData = [
    { year: '2021', projects: 12, investment: 3.5 },
    { year: '2022', projects: 28, investment: 8.2 },
    { year: '2023', projects: 45, investment: 15.6 },
    { year: '2024', projects: 86, investment: 32.4 },
    { year: '2025', projects: 130, investment: 58.9 },
  ];

  // 过滤新闻列表
  const filteredNews = activeTab === "all" 
    ? sortedNews 
    : sortedNews.filter(news => news.category === activeTab);

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-serif text-[#333]">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200 py-2">
        <div className="container mx-auto flex justify-between items-center text-sm text-gray-600">
          <div className="flex space-x-4">
            <span>{t('date_format')}</span>
            <span>{t('lunar_date')}</span>
          </div>
          <div className="flex space-x-4 items-center">
            <div className="flex items-center space-x-2 mr-4 border-r border-gray-300 pr-4">
              <Globe className="w-4 h-4" />
              <button 
                onClick={() => setLanguage('zh')} 
                className={`hover:text-[#C50F1F] ${language === 'zh' ? 'font-bold text-[#C50F1F]' : ''}`}
              >
                CN
              </button>
              <span>/</span>
              <button 
                onClick={() => setLanguage('en')} 
                className={`hover:text-[#C50F1F] ${language === 'en' ? 'font-bold text-[#C50F1F]' : ''}`}
              >
                EN
              </button>
              <span>/</span>
              <button 
                onClick={() => setLanguage('fr')} 
                className={`hover:text-[#C50F1F] ${language === 'fr' ? 'font-bold text-[#C50F1F]' : ''}`}
              >
                FR
              </button>
            </div>
            <span className="cursor-pointer hover:text-[#C50F1F]">{t('accessibility')}</span>
            {/* 移除所有登录注册入口，保持纯净 */}
          </div>
        </div>
      </div>

      {/* Header / Logo Area */}
      <header className="bg-white py-10 relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" 
             style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23C50F1F\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}>
        </div>
        
        <div className="container mx-auto flex flex-col items-center justify-center relative z-10">
          {/* 品牌字体升级：72px 方正小标宋/仿宋体，加粗带阴影 */}
          <h1 className="text-[72px] font-bold tracking-widest text-[#C50F1F] mb-4 leading-none" 
              style={{
                fontFamily: "'FangSong', 'STFangsong', 'SimSun', serif",
                textShadow: "2px 2px 4px rgba(0,0,0,0.15), 1px 1px 0px rgba(255,255,255,0.5)"
              }}>
            {t('company_name')}
          </h1>
          <p className="text-xl tracking-[0.8em] text-gray-600 uppercase font-serif">Qilai Group</p>
          
          <div className="mt-8 w-full max-w-3xl flex items-center border-2 border-[#C50F1F] rounded-none overflow-hidden shadow-sm">
            <input 
              type="text" 
              placeholder={t('search_placeholder')}
              className="flex-1 px-6 py-3 outline-none text-gray-700 placeholder-gray-400 text-lg"
            />
            <button className="bg-[#C50F1F] text-white px-10 py-3 font-bold hover:bg-[#a00c19] transition-colors flex items-center text-lg">
              <Search className="w-6 h-6 mr-2" />
              {t('search_button')}
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-[#C50F1F] text-white shadow-md sticky top-0 z-50 border-t border-[#a00c19]">
        <div className="container mx-auto">
          <ul className="flex justify-center space-x-0">
            {[
              { name: t('nav_home'), link: "/" },
              { name: t('nav_about'), link: "/page/about" },
              { name: "政策要闻", link: "/#news" },
              { name: t('nav_services'), link: "/page/services" },
              { name: t('nav_policy'), link: "/page/policy" },
              { name: t('nav_interaction'), link: "/page/interaction" },
              { name: t('nav_data'), link: "/page/data" }
            ].map((item, index) => (
              <li key={index} className="flex-1 text-center group relative">
                <a href={item.link} className="block py-4 text-xl font-medium hover:bg-[#a00c19] transition-colors border-r border-[#d6303e] last:border-r-0 font-serif tracking-wide">
                  {item.name}
                </a>
                {/* Dropdown indicator */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section with Xi Jinping Background */}
      <section className="relative w-full h-[650px] overflow-hidden bg-gray-100">
        {/* Background Image - 习近平总书记2025年新年贺词高清照 */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/xi_jinping_2025_hero.jpg" 
            alt="习近平总书记2025年新年贺词" 
            className="w-full h-full object-cover object-top"
          />
          {/* Overlay for text readability - 渐变遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        {/* Content Overlay */}
        <div className="container mx-auto h-full relative z-10 flex items-center">
          <div className="max-w-3xl text-white pl-10 border-l-[10px] border-[#C50F1F] ml-10">
            <h2 className="text-6xl font-bold mb-8 leading-tight tracking-wide font-serif" 
                style={{textShadow: "2px 2px 4px rgba(0,0,0,0.8)"}} 
                dangerouslySetInnerHTML={{__html: t('hero_title')}}>
            </h2>
            <p className="text-3xl font-light mb-10 tracking-widest opacity-95 font-serif" style={{textShadow: "1px 1px 2px rgba(0,0,0,0.8)"}}>
              {t('hero_subtitle')}
            </p>
            <Button className="bg-[#C50F1F] hover:bg-[#a00c19] text-white px-10 py-7 text-xl rounded-none border-2 border-transparent hover:border-white transition-all shadow-lg">
              {t('hero_button')} <ChevronRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Important Headlines Section */}
      <section className="bg-white border-b border-gray-200 py-10">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8 border-b-2 border-[#C50F1F] pb-2">
            <h2 className="text-3xl font-bold text-[#C50F1F] flex items-center">
              <span className="w-2 h-8 bg-[#C50F1F] mr-3"></span>
              {t('news_focus')}
            </h2>
            <a href="#" className="text-base text-gray-600 hover:text-[#C50F1F] flex items-center font-serif">
              {t('more_news')} <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          
          <div className="grid grid-cols-4 gap-8">
            {sortedNews.slice(0, 4).map((news) => (
              <div key={news.id} className="group cursor-pointer h-full">
                <div className="bg-white h-full border border-gray-200 hover:border-[#C50F1F] hover:shadow-lg transition-all flex flex-col">
                  {/* 如果有图片则显示图片，否则显示默认占位 */}
                  <div className="h-48 bg-gray-100 overflow-hidden relative">
                    {news.category === "政策要闻" ? (
                      <div className="w-full h-full bg-[#C50F1F]/5 flex items-center justify-center text-[#C50F1F]">
                        <FileText className="w-16 h-16 opacity-20" />
                        <span className="absolute bottom-2 right-2 bg-[#C50F1F] text-white text-xs px-2 py-1">权威发布</span>
                      </div>
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                        <span className="text-4xl font-serif text-gray-300">Qilai</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#C50F1F] transition-colors line-clamp-2 mb-3 leading-snug font-serif">
                      {news.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4 font-serif border-b border-gray-100 pb-2">{news.date}</p>
                    <p className="text-base text-gray-600 line-clamp-3 leading-relaxed text-justify font-serif flex-1">
                      {news.content.substring(0, 80)}...
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="container mx-auto py-12">
        <div className="grid grid-cols-12 gap-10">
          {/* Left Column: News List */}
          <div className="col-span-8">
            <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-0">
              <div className="flex space-x-8">
                {["全部", "政策要闻", "集团动态", "地方合作"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab === "全部" ? "all" : tab)}
                    className={`text-xl font-bold pb-4 border-b-4 transition-colors font-serif ${
                      (activeTab === "all" && tab === "全部") || activeTab === tab
                        ? "text-[#C50F1F] border-[#C50F1F]" 
                        : "text-gray-600 border-transparent hover:text-[#C50F1F]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              {filteredNews.map((news) => (
                <div key={news.id} className="flex gap-8 border-b border-gray-100 pb-8 group cursor-pointer hover:bg-gray-50 p-6 -mx-6 transition-colors rounded-sm">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#C50F1F] transition-colors font-serif">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3 mb-4 leading-loose text-justify text-lg font-serif indent-8">
                      {news.content.substring(0, 180)}...
                    </p>
                    <div className="flex items-center text-sm text-gray-500 space-x-6 font-serif">
                      <span className={`px-3 py-1 ${news.category === "政策要闻" ? "bg-red-50 text-[#C50F1F]" : "bg-gray-100 text-gray-600"}`}>
                        {news.category}
                      </span>
                      <span>{news.date}</span>
                      {news.source && <span>来源：{news.source}</span>}
                      {news.url && (
                        <a href={news.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-[#C50F1F] hover:underline">
                          阅读原文 <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Services & Links */}
          <div className="col-span-4 space-y-10">
            
            {/* Premier Li Qiang Photo Section */}
            <div className="w-full mb-6 shadow-md border border-gray-200">
              <div className="relative">
                <img 
                  src="/images/li_qiang_2025_side.jpg" 
                  alt="李强总理2025年工作照" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white font-bold text-lg font-serif">国务院总理李强主持召开国务院常务会议</p>
                </div>
              </div>
            </div>

            {/* Policy Documents Links - Direct to Ministries */}
            <Card className="rounded-none border-t-4 border-t-[#C50F1F] shadow-sm bg-white">
              <CardHeader className="pb-3 border-b border-gray-100">
                <CardTitle className="text-xl font-bold text-[#C50F1F] flex items-center font-serif">
                  <FileText className="w-5 h-5 mr-2" />
                  国家政策文件库
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  {policyDocuments.slice(0, 8).map((doc, idx) => (
                    <li key={idx} className="border-b border-gray-100 last:border-0 pb-2 last:pb-0">
                      <a href={doc.url} target="_blank" rel="noopener noreferrer" className="group block">
                        <p className="text-base text-gray-700 group-hover:text-[#C50F1F] line-clamp-1 font-serif mb-1 transition-colors">
                          {doc.title}
                        </p>
                        <div className="flex justify-between text-xs text-gray-400">
                          <span>{doc.source}</span>
                          <span>{doc.date}</span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full mt-4 text-[#C50F1F] hover:text-[#a00c19] hover:bg-red-50 font-serif">
                  查看更多政策 <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Local Cooperation Links - Direct to News */}
            <Card className="rounded-none border-t-4 border-t-[#1E3A8A] shadow-sm bg-white">
              <CardHeader className="pb-3 border-b border-gray-100">
                <CardTitle className="text-xl font-bold text-[#1E3A8A] flex items-center font-serif">
                  <Globe className="w-5 h-5 mr-2" />
                  地方合作动态
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { city: "兰州市", title: "兰州市政府投资项目座谈会成功举办", id: "2" },
                    { city: "岳阳市", title: "岳阳市政府共话新消费试点新机遇", id: "1" },
                    { city: "六盘水", title: "六盘水市政府考察团莅临企来集团调研", id: "news-lps" }, // 需确保ID存在
                    { city: "厦门市", title: "厦门市考察团深化政企合作交流", id: "news-xm" },
                    { city: "常州市", title: "常州市政府代表团考察数字经济项目", id: "news-cz" }
                  ].map((item, idx) => (
                    <a 
                      key={idx} 
                      href={`#news`} // 实际应跳转到具体详情页，此处简化为锚点
                      onClick={() => setActiveTab("地方合作")}
                      className="flex items-center p-3 bg-blue-50 border-l-4 border-[#1E3A8A] hover:bg-blue-100 transition-colors group"
                    >
                      <span className="font-bold text-[#1E3A8A] mr-3 whitespace-nowrap">{item.city}</span>
                      <span className="text-sm text-gray-600 group-hover:text-[#1E3A8A] line-clamp-1 font-serif">
                        {item.title}
                      </span>
                      <ChevronRight className="w-4 h-4 ml-auto text-gray-400 group-hover:text-[#1E3A8A]" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Data Visualization Card */}
            <Card className="rounded-none border-t-4 border-t-[#C50F1F] shadow-sm bg-white">
              <CardHeader className="pb-2 border-b border-gray-100">
                <CardTitle className="text-xl font-bold text-[#C50F1F] font-serif">发展数据概览</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={projectData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                      <XAxis dataKey="year" tick={{fontSize: 12, fontFamily: 'serif'}} axisLine={false} tickLine={false} />
                      <YAxis yAxisId="left" tick={{fontSize: 12, fontFamily: 'serif'}} axisLine={false} tickLine={false} />
                      <YAxis yAxisId="right" orientation="right" tick={{fontSize: 12, fontFamily: 'serif'}} axisLine={false} tickLine={false} />
                      <Tooltip 
                        contentStyle={{borderRadius: '0px', border: '1px solid #eee', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', fontFamily: 'serif'}}
                        itemStyle={{fontSize: '12px'}}
                      />
                      <Legend wrapperStyle={{fontSize: '12px', fontFamily: 'serif', paddingTop: '10px'}} />
                      <Line yAxisId="left" type="monotone" dataKey="projects" name="合作项目数" stroke="#C50F1F" strokeWidth={2} dot={{r: 4, fill: '#C50F1F'}} activeDot={{r: 6}} />
                      <Line yAxisId="right" type="monotone" dataKey="investment" name="投资额(亿元)" stroke="#1E3A8A" strokeWidth={2} dot={{r: 4, fill: '#1E3A8A'}} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs text-gray-400 mt-2 text-center font-serif">数据来源：企来集团战略发展部</p>
              </CardContent>
            </Card>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#333] text-white py-16 border-t-[6px] border-[#C50F1F]">
        <div className="container mx-auto">
          <div className="grid grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="text-xl font-bold mb-6 border-b border-gray-600 pb-3 inline-block font-serif">关于企来</h4>
              <ul className="space-y-3 text-gray-400 text-base font-serif">
                <li><a href="#" className="hover:text-white transition-colors">集团简介</a></li>
                <li><a href="#" className="hover:text-white transition-colors">组织架构</a></li>
                <li><a href="#" className="hover:text-white transition-colors">发展历程</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6 border-b border-gray-600 pb-3 inline-block font-serif">政务公开</h4>
              <ul className="space-y-3 text-gray-400 text-base font-serif">
                <li><a href="#" className="hover:text-white transition-colors">政策法规</a></li>
                <li><a href="#" className="hover:text-white transition-colors">规划计划</a></li>
                <li><a href="#" className="hover:text-white transition-colors">统计数据</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6 border-b border-gray-600 pb-3 inline-block font-serif">互动交流</h4>
              <ul className="space-y-3 text-gray-400 text-base font-serif">
                <li><a href="#" className="hover:text-white transition-colors">在线访谈</a></li>
                <li><a href="#" className="hover:text-white transition-colors">意见征集</a></li>
                <li><a href="#" className="hover:text-white transition-colors">网上调查</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6 border-b border-gray-600 pb-3 inline-block font-serif">相关链接</h4>
              <ul className="space-y-3 text-gray-400 text-base font-serif">
                <li><a href="https://www.gov.cn" target="_blank" className="hover:text-white transition-colors">中国政府网</a></li>
                <li><a href="https://www.ndrc.gov.cn" target="_blank" className="hover:text-white transition-colors">国家发展改革委</a></li>
                <li><a href="https://www.miit.gov.cn" target="_blank" className="hover:text-white transition-colors">工业和信息化部</a></li>
              </ul>
            </div>
          </div>
          <Separator className="bg-gray-700 mb-8" />
          <div className="text-center text-gray-400 text-sm space-y-3 font-serif">
            <p>{t('footer_copyright')} | 粤ICP备XXXXXXXX号</p>
            <p>建议使用 1920*1080 分辨率浏览本站</p>
            {/* 彻底移除所有联系方式 */}
          </div>
        </div>
      </footer>
    </div>
  );
}
