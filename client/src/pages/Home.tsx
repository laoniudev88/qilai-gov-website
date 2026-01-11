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
      {/* 顶部导航 */}
      <header className="bg-[#2d68c4] text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-10 text-sm">
            <div className="flex space-x-6">
              <Link href="/" className="hover:underline">首页</Link>
              <Link href="/page/policy" className="hover:underline">政策</Link>
              <Link href="/page/service" className="hover:underline">服务</Link>
              <Link href="/page/interaction" className="hover:underline">互动</Link>
              <Link href="/page/data" className="hover:underline">数据</Link>
            </div>
            <div className="flex items-center space-x-4">
              <span className="cursor-pointer hover:underline">English</span>
              <span className="cursor-pointer hover:underline">Français</span>
              <div className="relative">
                <input
                  type="text"
                  placeholder="搜索..."
                  className="pl-2 pr-8 py-0.5 rounded text-black text-xs w-32 focus:w-48 transition-all"
                />
                <Search className="w-3 h-3 absolute right-2 top-1.5 text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 品牌区域 */}
      <div className="bg-white border-b border-gray-200 py-8 shadow-sm relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-[72px] font-bold text-[#ce1126] tracking-widest font-song leading-tight drop-shadow-md" style={{ fontFamily: '"FZXiaoBiaoSong-B05S", "FangSong", serif' }}>
            企来集团
          </h1>
          <p className="text-xl text-gray-600 mt-2 tracking-[0.5em] font-song">
            QILAI GROUP
          </p>
        </div>
        {/* 装饰性背景纹理 */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none z-0" 
             style={{ backgroundImage: 'radial-gradient(#ce1126 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>
      </div>

      {/* 主要内容区 */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          
          {/* 左侧：领导人指示轮播区 (8列) */}
          <div className="col-span-8 space-y-8">
            {/* 领导人轮播 */}
            <div className="relative bg-[#f8f9fa] border border-gray-200 rounded-sm overflow-hidden shadow-sm group h-[500px]">
              <div className="absolute inset-0 transition-transform duration-700 ease-in-out" 
                   style={{ transform: `translateX(-${currentLeaderSlide * 100}%)` }}>
                <div className="flex h-full">
                  {leaderSlides.map((slide) => (
                    <div key={slide.id} className="min-w-full h-full relative flex">
                      {/* 左侧图片 */}
                      <div className="w-1/2 h-full relative">
                        <img 
                          src={slide.image} 
                          alt={slide.title} 
                          className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
                      </div>
                      {/* 右侧文字 */}
                      <div className="w-1/2 p-10 flex flex-col justify-center bg-white">
                        <h2 className="text-3xl font-bold text-[#ce1126] mb-6 leading-tight font-song">
                          {slide.title}
                        </h2>
                        <div className="w-16 h-1 bg-[#ce1126] mb-6"></div>
                        <p className="text-lg text-gray-700 leading-relaxed text-justify font-song">
                          {slide.content}
                        </p>
                        <div className="mt-8 text-sm text-gray-500 font-song">
                          来源：{slide.source}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* 轮播控制 */}
              <button 
                onClick={prevLeaderSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white text-[#ce1126]"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextLeaderSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white text-[#ce1126]"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              {/* 指示器 */}
              <div className="absolute bottom-6 right-10 flex space-x-2">
                {leaderSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentLeaderSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentLeaderSlide === index ? "bg-[#ce1126]" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* 要闻聚焦 (全图片轮播) */}
            <div className="mt-12">
              <div className="flex items-center mb-6 border-b-2 border-[#ce1126] pb-2">
                <h2 className="text-2xl font-bold text-[#ce1126] font-song">要闻聚焦</h2>
              </div>
              
              <div className="relative h-[400px] overflow-hidden rounded-sm shadow-md group cursor-pointer"
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
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8 pt-24">
                          <h3 className="text-3xl font-bold text-white mb-3 font-song drop-shadow-md">
                            {news.title}
                          </h3>
                          <p className="text-white/90 text-lg line-clamp-2 font-song max-w-4xl">
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
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 p-3 rounded-full text-white hover:bg-black/50 transition-colors backdrop-blur-sm"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); nextNewsSlide(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 p-3 rounded-full text-white hover:bg-black/50 transition-colors backdrop-blur-sm"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* 右侧：侧边栏 (4列) */}
          <div className="col-span-4 space-y-8">
            {/* 李强总理照片 */}
            <div className="bg-white border border-gray-200 p-1 shadow-sm">
              <img 
                src="/images/li_qiang_2025.jpg" 
                alt="李强总理" 
                className="w-full h-auto block"
              />
              <div className="bg-[#f0f0f0] p-3 text-center">
                <p className="text-[#ce1126] font-bold text-lg font-song">李强</p>
                <p className="text-sm text-gray-600">中共中央政治局常委<br/>国务院总理</p>
              </div>
            </div>

            {/* 政策文件直通车 */}
            <div className="bg-white border-t-4 border-[#ce1126] shadow-sm">
              <div className="bg-[#f8f9fa] p-3 border-b border-gray-200">
                <h3 className="text-lg font-bold text-[#ce1126] font-song">政策文件直通车</h3>
              </div>
              <ul className="divide-y divide-gray-100">
                {policyDocuments.slice(0, 6).map((doc, index) => (
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
              <div className="p-2 bg-[#f8f9fa] text-center border-t border-gray-200">
                <Link href="/page/policy" className="text-xs text-gray-500 hover:text-[#ce1126]">查看更多 &gt;</Link>
              </div>
            </div>

            {/* 地方合作 */}
            <div className="bg-white border-t-4 border-[#2d68c4] shadow-sm">
              <div className="bg-[#f8f9fa] p-3 border-b border-gray-200">
                <h3 className="text-lg font-bold text-[#2d68c4] font-song">地方合作</h3>
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
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm hover:bg-[#2d68c4] hover:text-white transition-colors rounded-sm font-song"
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
      <footer className="bg-[#f0f0f0] border-t border-gray-300 mt-12 py-8">
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
