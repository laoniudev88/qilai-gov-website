import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { newsData, sortedNews, policyDocuments } from "@/lib/newsData";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [, setLocation] = useLocation();

  // 筛选出有图片的“要闻聚焦”新闻（排除六盘水，只保留兰州、厦门、心之力、珠海）
  const featuredNews = newsData.filter(
    (item) => item.image && item.category !== "政策要闻"
  );

  // 自动轮播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredNews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredNews.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredNews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredNews.length) % featuredNews.length);
  };

  return (
    <div className="min-h-screen bg-white font-song">
      {/* 顶部导航 */}
      <header className="bg-[#b91c1c] text-white">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex gap-4">
            <span className="hover:underline cursor-pointer">首页</span>
            <span className="hover:underline cursor-pointer">政策</span>
            <span className="hover:underline cursor-pointer">服务</span>
            <span className="hover:underline cursor-pointer">互动</span>
          </div>
          <div className="flex gap-4">
            <span className="cursor-pointer hover:text-yellow-200">English</span>
            <span className="cursor-pointer hover:text-yellow-200">Français</span>
            <span className="cursor-pointer hover:text-yellow-200">无障碍</span>
          </div>
        </div>
      </header>

      {/* Logo区域 */}
      <div className="bg-white border-b-4 border-[#b91c1c] shadow-sm relative z-10">
        <div className="container mx-auto px-4 py-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            {/* 国徽已移除 */}
            <div>
              <h1 className="text-[72px] font-bold tracking-wider text-[#b91c1c] font-song leading-none drop-shadow-sm" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.1)" }}>
                企来集团
              </h1>
              <p className="text-xl text-gray-600 mt-2 tracking-[0.2em] font-song font-bold">
                QILAI GROUP OFFICIAL WEBSITE
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 border border-gray-300 rounded px-3 py-1.5 bg-gray-50">
            <input 
              type="text" 
              placeholder="请输入关键字" 
              className="outline-none text-sm w-48 bg-transparent font-song"
            />
            <button className="text-[#b91c1c] font-bold">搜索</button>
          </div>
        </div>
      </div>

      {/* 主导航栏 */}
      <nav className="bg-[#b91c1c] text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <ul className="flex justify-between items-center h-14 text-lg font-bold font-song">
            <li className="flex-1 text-center hover:bg-[#a11818] h-full flex items-center justify-center cursor-pointer transition-colors border-r border-[#a11818]/50">
              <Link href="/">首页</Link>
            </li>
            {[
              { name: "集团概况", path: "/page/overview" },
              { name: "政策要闻", path: "/page/policy" },
              { name: "政务服务", path: "/page/service" },
              { name: "互动交流", path: "/page/interaction" },
              { name: "数据开放", path: "/page/data" },
              { name: "地方合作", path: "/page/cooperation" }
            ].map((item) => (
              <li key={item.name} className="flex-1 text-center hover:bg-[#a11818] h-full flex items-center justify-center cursor-pointer transition-colors border-r border-[#a11818]/50">
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* 核心内容区 */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* 左侧：习近平总书记照片 (占8列) */}
          <div className="col-span-8 relative group cursor-pointer overflow-hidden rounded-sm shadow-md border border-gray-200">
            <img 
              src="/images/xi_jinping_2025.jpg" 
              alt="习近平总书记" 
              className="w-full h-[600px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8 pt-24">
              <h2 className="text-4xl font-bold text-white mb-4 font-song leading-tight drop-shadow-lg">
                习近平：加快建设数字中国，充分释放数据要素价值
              </h2>
              <p className="text-xl text-gray-100 font-song leading-relaxed drop-shadow-md max-w-4xl">
                习近平总书记强调，要深入推进数字中国建设，健全数据要素基础制度，建设开放共享安全的全国一体化数据市场。
              </p>
            </div>
          </div>

          {/* 右侧：李强总理照片 & 地方合作 (占4列) */}
          <div className="col-span-4 flex flex-col gap-6">
            {/* 李强总理板块 */}
            <div className="bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden group">
              <div className="relative h-[320px] overflow-hidden">
                <img 
                  src="/images/li_qiang_2025.jpg" 
                  alt="李强总理工作照" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white font-song">
                    李强：大力发展数字经济，加快数据要素市场化配置
                  </h3>
                </div>
              </div>
              <div className="p-4 bg-gray-50 border-t border-gray-100">
                <ul className="space-y-3 text-sm font-song">
                  <li className="flex items-start gap-2 text-gray-700 hover:text-[#b91c1c] cursor-pointer transition-colors">
                    <span className="text-[#b91c1c] mt-1">●</span>
                    坚持改革创新和开放合作，持续优化数字经济发展环境
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 hover:text-[#b91c1c] cursor-pointer transition-colors">
                    <span className="text-[#b91c1c] mt-1">●</span>
                    协同完善数据基础制度和数字基础设施，推进数据要素市场化配置
                  </li>
                </ul>
              </div>
            </div>

            {/* 地方合作列表（实化链接） */}
            <div className="bg-white border border-gray-200 shadow-sm rounded-sm p-5 flex-1">
              <h3 className="text-xl font-bold text-[#b91c1c] mb-4 pb-2 border-b-2 border-[#b91c1c] font-song flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#b91c1c] block"></span>
                地方合作
              </h3>
              <ul className="space-y-0 divide-y divide-dashed divide-gray-200">
                {[
                  { name: "甘肃省兰州市", id: "2" },
                  { name: "广东省珠海市", id: "news-zh-cx" },
                  { name: "浙江省长兴县", id: "news-zh-cx" },
                  { name: "福建省厦门市", id: "news-xm" },
                  { name: "江苏省常州市", id: "news-xm" },
                  { name: "四川省都江堰市", id: "news-xm" }
                ].map((city) => (
                  <li key={city.name} className="group">
                    <Link href={`/news/${city.id}`}>
                      <div className="flex items-center justify-between py-3 px-2 hover:bg-red-50 cursor-pointer transition-colors rounded-sm">
                        <span className="text-gray-700 font-song text-lg group-hover:text-[#b91c1c] group-hover:font-bold transition-all">
                          {city.name}
                        </span>
                        <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#b91c1c] transition-colors" />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 要闻聚焦（全图片轮播重构） */}
        <div className="mt-12 mb-12">
          <div className="flex items-center justify-between mb-6 border-b-2 border-[#b91c1c] pb-2">
            <h2 className="text-3xl font-bold text-[#b91c1c] font-song flex items-center gap-3">
              <span className="w-2 h-8 bg-[#b91c1c] block"></span>
              要闻聚焦
            </h2>
            <div className="flex gap-2">
              <button 
                onClick={prevSlide}
                className="p-2 bg-gray-100 hover:bg-[#b91c1c] hover:text-white transition-colors rounded-sm border border-gray-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextSlide}
                className="p-2 bg-gray-100 hover:bg-[#b91c1c] hover:text-white transition-colors rounded-sm border border-gray-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="relative h-[500px] bg-gray-100 rounded-sm overflow-hidden shadow-lg group">
            {featuredNews.map((news, index) => (
              <div
                key={news.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Link href={`/news/${news.id}`}>
                  <div className="relative w-full h-full cursor-pointer">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-8 pt-32">
                      <div className="container mx-auto px-4">
                        <span className="inline-block bg-[#b91c1c] text-white px-3 py-1 text-sm mb-3 rounded-sm font-bold">
                          {news.category}
                        </span>
                        <h3 className="text-3xl font-bold text-white mb-2 font-song leading-tight drop-shadow-lg hover:underline decoration-2 underline-offset-4">
                          {news.title}
                        </h3>
                        <p className="text-gray-200 text-lg font-song line-clamp-2 max-w-4xl drop-shadow-md">
                          {news.content.substring(0, 120)}...
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            
            {/* 轮播指示器 */}
            <div className="absolute bottom-6 right-8 z-20 flex gap-2">
              {featuredNews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? "bg-[#b91c1c] w-8" 
                      : "bg-white/50 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 政策文件列表（实化链接） */}
        <div className="grid grid-cols-12 gap-8 mt-12">
          <div className="col-span-12">
            <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-2">
              <h2 className="text-2xl font-bold text-[#b91c1c] font-song flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#b91c1c] block"></span>
                政策文件
              </h2>
              <Link href="/page/policy">
                <span className="text-sm text-gray-500 hover:text-[#b91c1c] cursor-pointer flex items-center gap-1">
                  更多 <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
            <div className="bg-white border border-gray-200 shadow-sm rounded-sm p-6">
              <ul className="grid grid-cols-2 gap-x-12 gap-y-4">
                {policyDocuments.map((doc, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <span className="text-[#b91c1c] mt-1.5 text-xs">●</span>
                    <a 
                      href={doc.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[#b91c1c] hover:underline font-song text-lg truncate flex-1 transition-colors"
                    >
                      {doc.title}
                    </a>
                    <span className="text-gray-400 text-sm whitespace-nowrap font-song">{doc.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 底部版权 */}
        <footer className="mt-16 border-t-4 border-[#b91c1c] bg-gray-100 py-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-[#b91c1c] font-bold text-2xl mb-4 font-song tracking-widest">企来集团</p>
            <p className="text-gray-500 text-sm mb-2 font-song">
              版权所有 © 2025 企来集团 | 建议使用 1920×1080 分辨率浏览
            </p>
            <p className="text-gray-400 text-xs font-song">
              京ICP备12345678号 | 京公网安备11010502030242号
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
