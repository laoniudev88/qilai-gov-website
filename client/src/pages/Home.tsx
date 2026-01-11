import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { newsData, policyDocuments, leaderSlides } from "@/lib/newsData";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

export default function Home() {
  const [currentLeaderSlide, setCurrentLeaderSlide] = useState(0);
  const [currentNewsSlide, setCurrentNewsSlide] = useState(0);
  const [, setLocation] = useLocation();

  // 过滤出带图的新闻用于要闻聚焦轮播
  const featuredNews = newsData.filter(item => item.image && !item.id.startsWith('xi') && !item.id.startsWith('ding') && !item.id.startsWith('zhang'));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLeaderSlide((prev) => (prev + 1) % leaderSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNewsSlide((prev) => (prev + 1) % featuredNews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [featuredNews.length]);

  const nextLeaderSlide = () => {
    setCurrentLeaderSlide((prev) => (prev + 1) % leaderSlides.length);
  };

  const prevLeaderSlide = () => {
    setCurrentLeaderSlide((prev) => (prev - 1 + leaderSlides.length) % leaderSlides.length);
  };

  const nextNewsSlide = () => {
    setCurrentNewsSlide((prev) => (prev + 1) % featuredNews.length);
  };

  const prevNewsSlide = () => {
    setCurrentNewsSlide((prev) => (prev - 1 + featuredNews.length) % featuredNews.length);
  };

  return (
    <div className="min-h-screen bg-white font-serif text-[#333]">
      {/* 顶部红条 */}
      <div className="bg-[#ce1126] text-white h-10">
        <div className="container mx-auto px-4 h-full flex justify-between items-center text-sm font-song">
          <div className="flex space-x-6">
            <Link href="/" className="hover:underline">首页</Link>
            <Link href="/page/policy" className="hover:underline">政策</Link>
            <Link href="/page/service" className="hover:underline">服务</Link>
            <Link href="/page/interaction" className="hover:underline">互动</Link>
          </div>
          <div className="flex space-x-4">
            <span className="cursor-pointer hover:underline">English</span>
            <span className="cursor-pointer hover:underline">Français</span>
            <span className="cursor-pointer hover:underline">无障碍</span>
          </div>
        </div>
      </div>

      {/* Logo与搜索区 */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* 左侧Logo */}
          <div>
            <h1 className="text-[72px] font-bold text-[#ce1126] tracking-widest font-song leading-none" style={{ fontFamily: '"FZXiaoBiaoSong-B05S", "FangSong", serif', textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
              企来集团
            </h1>
            <p className="text-xl text-gray-600 mt-2 tracking-[0.3em] font-sans uppercase">
              QILAI GROUP OFFICIAL WEBSITE
            </p>
          </div>
          
          {/* 右侧搜索框 */}
          <div className="flex items-center">
            <div className="relative flex border border-gray-300 rounded-sm overflow-hidden">
              <input
                type="text"
                placeholder="请输入关键字"
                className="pl-3 pr-2 py-2 w-64 text-sm focus:outline-none font-song"
              />
              <button className="bg-white text-[#ce1126] px-4 py-2 text-sm font-bold font-song hover:bg-gray-50 transition-colors">
                搜索
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 主导航栏 */}
      <nav className="bg-[#ce1126] text-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-14 text-lg font-bold font-song">
            <Link href="/" className="flex-1 text-center hover:bg-[#a30d1d] h-full flex items-center justify-center transition-colors">首页</Link>
            <Link href="/page/about" className="flex-1 text-center hover:bg-[#a30d1d] h-full flex items-center justify-center transition-colors">集团概况</Link>
            <Link href="/page/policy" className="flex-1 text-center hover:bg-[#a30d1d] h-full flex items-center justify-center transition-colors">政策要闻</Link>
            <Link href="/page/service" className="flex-1 text-center hover:bg-[#a30d1d] h-full flex items-center justify-center transition-colors">政务服务</Link>
            <Link href="/page/interaction" className="flex-1 text-center hover:bg-[#a30d1d] h-full flex items-center justify-center transition-colors">互动交流</Link>
            <Link href="/page/data" className="flex-1 text-center hover:bg-[#a30d1d] h-full flex items-center justify-center transition-colors">数据开放</Link>
            <Link href="/page/cooperation" className="flex-1 text-center hover:bg-[#a30d1d] h-full flex items-center justify-center transition-colors">地方合作</Link>
          </div>
        </div>
      </nav>

      {/* 核心展示区 (Hero Section) */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8 h-[550px]">
          
          {/* 左侧：习近平总书记 (8列) */}
          <div className="col-span-8 h-full relative overflow-hidden shadow-sm border border-gray-200 bg-gray-100">
            <img 
              src="/images/xi_jinping_2025.jpg" 
              alt="习近平总书记" 
              className="w-full h-full object-cover object-top"
            />
            {/* 渐变遮罩，确保文字可读性 */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          {/* 右侧：李强总理 (4列) */}
          <div className="col-span-4 h-full flex flex-col space-y-0 shadow-sm border border-gray-200 bg-white">
            {/* 上半部分：照片 */}
            <div className="h-[60%] overflow-hidden relative">
              <img 
                src="/images/li_qiang_2025.jpg" 
                alt="李强总理" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            {/* 下半部分：内容 */}
            <div className="h-[40%] bg-[#ce1126] p-6 text-white flex flex-col justify-center relative overflow-hidden">
              {/* 装饰性背景纹理 */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
                   style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '10px 10px' }}>
              </div>
              
              <h2 className="text-xl font-bold mb-4 leading-tight font-song relative z-10">
                李强：大力发展数字经济，加快数据要素市场化配置
              </h2>
              <ul className="space-y-3 text-sm font-song text-white/90 relative z-10">
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></span>
                  <span>坚持改革创新和开放合作，持续优化数字经济发展环境</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></span>
                  <span>协同完善数据基础制度和数字基础设施，推进数据要素市场化配置</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 其余内容区 (保持原有结构但微调样式) */}
      <main className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-12 gap-8">
          {/* 左侧：要闻聚焦 */}
          <div className="col-span-8">
            <div className="flex items-center mb-6 border-b-2 border-[#ce1126] pb-2">
              <h2 className="text-2xl font-bold text-[#ce1126] font-song">要闻聚焦</h2>
            </div>
            
            <div className="relative h-[350px] overflow-hidden rounded-sm shadow-sm group cursor-pointer"
                 onClick={() => setLocation(`/news/${featuredNews[currentNewsSlide].id}`)}>
              <div className="absolute inset-0 transition-transform duration-700 ease-in-out"
                   style={{ transform: `translateX(-${currentNewsSlide * 100}%)` }}>
                <div className="flex h-full">
                  {featuredNews.map((news) => (
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
                onClick={(e) => { e.stopPropagation(); prevNewsSlide(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full text-white hover:bg-black/50 transition-colors backdrop-blur-sm"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); nextNewsSlide(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full text-white hover:bg-black/50 transition-colors backdrop-blur-sm"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* 右侧：政策文件与地方合作 */}
          <div className="col-span-4 space-y-8">
            {/* 政策文件直通车 */}
            <div className="bg-white border-t-4 border-[#ce1126] shadow-sm">
              <div className="bg-[#f8f9fa] p-3 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-bold text-[#ce1126] font-song">政策文件直通车</h3>
                <Link href="/page/policy" className="text-xs text-gray-500 hover:text-[#ce1126]">更多 &gt;</Link>
              </div>
              <ul className="divide-y divide-gray-100">
                {policyDocuments.slice(0, 5).map((doc, index) => (
                  <li key={index} className="p-3 hover:bg-gray-50 transition-colors">
                    <a href={doc.url} target="_blank" rel="noopener noreferrer" className="block group">
                      <p className="text-sm text-gray-800 group-hover:text-[#ce1126] line-clamp-2 font-song leading-relaxed">
                        {doc.title}
                      </p>
                      <span className="text-xs text-gray-400 mt-1 block">{doc.source}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 地方合作 */}
            <div className="bg-white border-t-4 border-[#ce1126] shadow-sm">
              <div className="bg-[#f8f9fa] p-3 border-b border-gray-200">
                <h3 className="text-lg font-bold text-[#ce1126] font-song">地方合作</h3>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: "兰州市", id: "2" },
                    { name: "珠海市", id: "news-zh-cx" },
                    { name: "长兴县", id: "news-zh-cx" },
                    { name: "厦门市", id: "news-xm" },
                    { name: "常州市", id: "news-xm" },
                    { name: "都江堰市", id: "news-xm" }
                  ].map((city) => (
                    <Link 
                      key={city.name} 
                      href={`/news/${city.id}`}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm hover:bg-[#ce1126] hover:text-white transition-colors rounded-sm font-song"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-[#f0f0f0] border-t border-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-8 mb-4 text-sm text-gray-600 font-song">
            <Link href="/page/about" className="hover:text-[#ce1126]">关于我们</Link>
            <Link href="/page/policy" className="hover:text-[#ce1126]">法律声明</Link>
            <Link href="/page/service" className="hover:text-[#ce1126]">网站地图</Link>
          </div>
          <p className="text-sm text-gray-500 font-song">
            Copyright © 2025 企来集团 版权所有
          </p>
        </div>
      </footer>
    </div>
  );
}
