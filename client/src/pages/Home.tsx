import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { sortedNews } from "@/lib/newsData";
import { ChevronRight, Search } from "lucide-react";
import { useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");

  // 模拟数据：企来集团在全国各地的合作项目增长趋势
  const projectData = [
    { year: '2021', projects: 12, investment: 3.5 },
    { year: '2022', projects: 28, investment: 8.2 },
    { year: '2023', projects: 45, investment: 15.6 },
    { year: '2024', projects: 86, investment: 32.4 },
    { year: '2025', projects: 130, investment: 58.9 },
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-serif text-[#333]">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200 py-2">
        <div className="container mx-auto flex justify-between items-center text-sm text-gray-600">
          <div className="flex space-x-4">
            <span>2026年1月11日 星期日</span>
            <span>农历乙巳年</span>
          </div>
          <div className="flex space-x-4">
            <span className="cursor-pointer hover:text-[#C50F1F]">无障碍阅读</span>
            <span className="cursor-pointer hover:text-[#C50F1F]">登录</span>
            <span className="cursor-pointer hover:text-[#C50F1F]">注册</span>
          </div>
        </div>
      </div>

      {/* Header / Logo Area */}
      <header className="bg-white py-8 relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" 
             style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23C50F1F\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}>
        </div>
        
        <div className="container mx-auto flex flex-col items-center justify-center relative z-10">
          <h1 className="text-5xl font-bold tracking-widest text-[#C50F1F] mb-2" style={{fontFamily: "'Times New Roman', 'SimSun', serif"}}>企来集团</h1>
          <p className="text-xl tracking-[0.5em] text-gray-600 uppercase">Qilai Group</p>
          <div className="mt-6 w-full max-w-3xl flex items-center border-2 border-[#C50F1F] rounded-none overflow-hidden">
            <input 
              type="text" 
              placeholder="请输入关键字查询" 
              className="flex-1 px-4 py-2 outline-none text-gray-700 placeholder-gray-400"
            />
            <button className="bg-[#C50F1F] text-white px-8 py-2 font-bold hover:bg-[#a00c19] transition-colors flex items-center">
              <Search className="w-5 h-5 mr-2" />
              搜索
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-[#C50F1F] text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto">
          <ul className="flex justify-center space-x-0">
            {["首页", "集团概况", "新闻中心", "政务服务", "政策文件", "互动交流", "数据开放"].map((item, index) => (
              <li key={index} className="flex-1 text-center group relative">
                <a href="#" className="block py-4 text-lg font-medium hover:bg-[#a00c19] transition-colors border-r border-[#d6303e] last:border-r-0">
                  {item}
                </a>
                {/* Dropdown indicator */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section with Leaders */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-12 gap-8">
            {/* Main Leader Photos - Taking up significant space */}
            <div className="col-span-8 relative">
              <div className="grid grid-cols-2 gap-4 h-[500px]">
                <div className="relative overflow-hidden border border-gray-200 shadow-sm group">
                  <img 
                    src="/images/xi_jinping_1.jpg" 
                    alt="习近平总书记" 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-white text-xl font-bold text-center">紧跟国家战略 践行数字中国</h3>
                  </div>
                </div>
                <div className="relative overflow-hidden border border-gray-200 shadow-sm group">
                  <img 
                    src="/images/li_qiang_1.jpg" 
                    alt="李强总理" 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-white text-xl font-bold text-center">深化政企混改 赋能区域经济</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Important Headlines */}
            <div className="col-span-4 flex flex-col justify-between">
              <div className="bg-white border border-gray-200 p-6 h-full shadow-sm">
                <h2 className="text-2xl font-bold text-[#C50F1F] mb-4 border-b-2 border-[#C50F1F] pb-2 inline-block">
                  要闻聚焦
                </h2>
                <ul className="space-y-6">
                  {sortedNews.slice(0, 4).map((news) => (
                    <li key={news.id} className="group">
                      <a href="#" className="block">
                        <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#C50F1F] transition-colors line-clamp-2 mb-1 leading-snug">
                          {news.title}
                        </h3>
                        <p className="text-sm text-gray-500">{news.date}</p>
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  <Button variant="outline" className="w-full border-[#C50F1F] text-[#C50F1F] hover:bg-[#C50F1F] hover:text-white rounded-none">
                    查看更多 <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="container mx-auto py-12">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Column: News List */}
          <div className="col-span-8">
            <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-2">
              <div className="flex space-x-6">
                {["全部", "时政要闻", "集团动态", "地方合作"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-lg font-bold pb-2 border-b-2 transition-colors ${
                      activeTab === tab 
                        ? "text-[#C50F1F] border-[#C50F1F]" 
                        : "text-gray-600 border-transparent hover:text-[#C50F1F]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {sortedNews.map((news) => (
                <div key={news.id} className="flex gap-6 border-b border-gray-100 pb-6 group cursor-pointer hover:bg-gray-50 p-4 -mx-4 transition-colors">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#C50F1F] transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3 mb-3 leading-relaxed text-justify">
                      {news.content.substring(0, 150)}...
                    </p>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <span className="bg-gray-100 px-2 py-0.5 text-gray-600">{news.category}</span>
                      <span>{news.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Services & Links */}
          <div className="col-span-4 space-y-8">
            {/* Service Card 1 */}
            <Card className="rounded-none border-t-4 border-t-[#C50F1F] shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-bold text-[#C50F1F]">政务服务直通车</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {["招商引资", "项目申报", "数据查询", "政策咨询"].map((item) => (
                    <Button key={item} variant="outline" className="h-12 rounded-none border-gray-300 hover:border-[#C50F1F] hover:text-[#C50F1F] bg-gray-50">
                      {item}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Data Visualization Card */}
            <Card className="rounded-none border-t-4 border-t-[#C50F1F] shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-bold text-[#C50F1F]">发展数据概览</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={projectData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="year" tick={{fontSize: 12}} />
                      <YAxis yAxisId="left" tick={{fontSize: 12}} />
                      <YAxis yAxisId="right" orientation="right" tick={{fontSize: 12}} />
                      <Tooltip 
                        contentStyle={{borderRadius: '0px', border: '1px solid #ccc'}}
                        itemStyle={{fontSize: '12px'}}
                      />
                      <Legend wrapperStyle={{fontSize: '12px'}} />
                      <Line yAxisId="left" type="monotone" dataKey="projects" name="合作项目数" stroke="#C50F1F" strokeWidth={2} dot={{r: 4}} activeDot={{r: 6}} />
                      <Line yAxisId="right" type="monotone" dataKey="investment" name="投资额(亿元)" stroke="#1E3A8A" strokeWidth={2} dot={{r: 4}} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">数据来源：企来集团战略发展部</p>
              </CardContent>
            </Card>

            {/* Service Card 2 */}
            <Card className="rounded-none border-t-4 border-t-[#1E3A8A] shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-bold text-[#1E3A8A]">重点专题</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-4 border-l-4 border-[#1E3A8A] cursor-pointer hover:bg-blue-100 transition-colors">
                  <h4 className="font-bold text-[#1E3A8A] mb-1">数字中国建设</h4>
                  <p className="text-sm text-gray-600">全面推进数字经济与实体经济深度融合</p>
                </div>
                <div className="bg-blue-50 p-4 border-l-4 border-[#1E3A8A] cursor-pointer hover:bg-blue-100 transition-colors">
                  <h4 className="font-bold text-[#1E3A8A] mb-1">政企混改试点</h4>
                  <p className="text-sm text-gray-600">探索新时代政企合作新模式</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="bg-[#f8f9fa] p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-800 mb-4">联系我们</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p>地址：广东省深圳市新安六路华丰金融港十楼</p>
                <p>电话：0755-88888888</p>
                <p>邮箱：contact@qilai.com</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#333] text-white py-12 border-t-4 border-[#C50F1F]">
        <div className="container mx-auto">
          <div className="grid grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-bold mb-4 border-b border-gray-600 pb-2 inline-block">关于企来</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">集团简介</a></li>
                <li><a href="#" className="hover:text-white">组织架构</a></li>
                <li><a href="#" className="hover:text-white">发展历程</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 border-b border-gray-600 pb-2 inline-block">政务公开</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">政策法规</a></li>
                <li><a href="#" className="hover:text-white">规划计划</a></li>
                <li><a href="#" className="hover:text-white">统计数据</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 border-b border-gray-600 pb-2 inline-block">互动交流</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">在线访谈</a></li>
                <li><a href="#" className="hover:text-white">意见征集</a></li>
                <li><a href="#" className="hover:text-white">网上调查</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 border-b border-gray-600 pb-2 inline-block">关注我们</h4>
              <div className="flex space-x-4">
                <div className="w-24 h-24 bg-white p-1">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs text-center">
                    微信公众号
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Separator className="bg-gray-700 mb-8" />
          <div className="text-center text-gray-400 text-sm space-y-2">
            <p>版权所有 © 企来集团 2026 | 粤ICP备XXXXXXXX号</p>
            <p>建议使用 1920*1080 分辨率浏览本站</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
