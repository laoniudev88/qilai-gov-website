import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { newsData, policyDocuments, leaderSlides } from "@/lib/newsData";
import { ChevronLeft, ChevronRight, Search, Building2, FileText, BarChart3, Globe, ShieldCheck, Cpu } from "lucide-react";

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
            {/* 顶部导航已移除，避免重复 */}
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

      {/* 地方合作通栏 (提升至显耀位置) */}
      <div className="bg-[#f8f9fa] border-y border-gray-200 py-8 mb-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#ce1126] font-song flex items-center">
              <span className="w-2 h-8 bg-[#ce1126] mr-3"></span>
              地方合作
            </h2>
            <Link href="/page/cooperation" className="text-sm text-gray-600 hover:text-[#ce1126] font-song">查看全国合作网络 &gt;</Link>
          </div>
          
          <div className="grid grid-cols-6 gap-4">
            {[
              { name: "兰州市", id: "2", color: "bg-blue-900" },
              { name: "珠海市", id: "news-zh-cx", color: "bg-cyan-700" },
              { name: "长兴县", id: "news-zh-cx", color: "bg-green-700" },
              { name: "厦门市", id: "news-xm", color: "bg-indigo-700" },
              { name: "常州市", id: "news-xm", color: "bg-orange-700" },
              { name: "都江堰", id: "news-xm", color: "bg-teal-700" }
            ].map((city) => (
              <Link 
                key={city.name} 
                href={`/news/${city.id}`}
                className="group relative h-24 overflow-hidden rounded-sm shadow-sm hover:shadow-md transition-all block"
              >
                <div className={`absolute inset-0 ${city.color} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
                {/* 装饰性地图纹理 */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")' }}></div>
                
                <div className="absolute inset-0 p-4 flex flex-col justify-center items-center text-center text-white">
                  <h3 className="text-2xl font-bold font-song group-hover:scale-110 transition-transform tracking-widest">{city.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 主要内容区 */}
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

          {/* 右侧：政策文件 */}
          <div className="col-span-4 space-y-8">
            {/* 政策文件直通车 */}
            <div className="bg-white border-t-4 border-[#ce1126] shadow-sm h-full">
              <div className="bg-[#f8f9fa] p-3 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-bold text-[#ce1126] font-song">政策文件直通车</h3>
                <Link href="/page/policy" className="text-xs text-gray-500 hover:text-[#ce1126]">更多 &gt;</Link>
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
            </div>
          </div>
        </div>
      </main>

      {/* 底部：数据政务服务 (新增板块) */}
      <div className="bg-[#f0f4f8] py-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#333] font-song mb-2">数据要素赋能服务</h2>
            <div className="w-16 h-1 bg-[#ce1126] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-4 gap-6">
            {[
              { icon: <Building2 className="w-8 h-8" />, title: "数据资产登记", desc: "合规确权，资产入表" },
              { icon: <ShieldCheck className="w-8 h-8" />, title: "公共数据授权", desc: "安全开放，价值流通" },
              { icon: <BarChart3 className="w-8 h-8" />, title: "数据产品挂牌", desc: "场内交易，撮合匹配" },
              { icon: <Globe className="w-8 h-8" />, title: "跨境数据流动", desc: "合规出海，全球互联" },
              { icon: <Cpu className="w-8 h-8" />, title: "产业大脑建设", desc: "数智赋能，强链补链" },
              { icon: <FileText className="w-8 h-8" />, title: "数字化转型", desc: "咨询规划，落地实施" },
              { icon: <Search className="w-8 h-8" />, title: "数据信用查询", desc: "企业征信，风险画像" },
              { icon: <Building2 className="w-8 h-8" />, title: "园区智慧运营", desc: "招商引资，降本增效" }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex items-start space-x-4 group cursor-pointer">
                <div className="p-3 bg-blue-50 text-[#2d68c4] rounded-full group-hover:bg-[#ce1126] group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1 font-song group-hover:text-[#ce1126] transition-colors">{service.title}</h3>
                  <p className="text-sm text-gray-500">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 页脚 */}
      <footer className="bg-[#333] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-8 mb-8 border-b border-gray-700 pb-8">
            <div>
              <h4 className="text-lg font-bold mb-4 font-song">关于我们</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/page/about" className="hover:text-white">集团简介</Link></li>
                <li><Link href="/page/about" className="hover:text-white">组织架构</Link></li>
                <li><Link href="/page/about" className="hover:text-white">发展历程</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 font-song">政策法规</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/page/policy" className="hover:text-white">国家政策</Link></li>
                <li><Link href="/page/policy" className="hover:text-white">地方条例</Link></li>
                <li><Link href="/page/policy" className="hover:text-white">行业标准</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 font-song">政务服务</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/page/service" className="hover:text-white">办事指南</Link></li>
                <li><Link href="/page/service" className="hover:text-white">常见问题</Link></li>
                <li><Link href="/page/service" className="hover:text-white">在线咨询</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 font-song">联系方式</h4>
              <p className="text-gray-400 text-sm mb-2">地址：北京市海淀区...</p>
              <p className="text-gray-400 text-sm">邮箱：contact@qilai.gov.cn</p>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500 font-song">
            <p>Copyright © 2025 企来集团 版权所有 | 京ICP备12345678号</p>
            <p className="mt-2">建议使用 1920x1080 分辨率浏览本站</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
