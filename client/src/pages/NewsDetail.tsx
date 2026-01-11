import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { newsData } from "@/lib/newsData";
import { ChevronLeft, Printer, Share2 } from "lucide-react";
import { useRoute } from "wouter";
import { Streamdown } from "streamdown";

export default function NewsDetail() {
  const [match, params] = useRoute("/news/:id");
  const news = newsData.find(n => n.id === params?.id);

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">文章未找到</h1>
          <Button onClick={() => window.history.back()}>返回上一页</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-serif text-[#333]">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200 py-2">
        <div className="container mx-auto flex justify-between items-center text-sm text-gray-600">
          <div className="flex space-x-4">
            <a href="/" className="hover:text-[#C50F1F] flex items-center">
              <ChevronLeft className="w-4 h-4 mr-1" /> 返回首页
            </a>
          </div>
          <div className="flex space-x-4">
            <span className="cursor-pointer hover:text-[#C50F1F] flex items-center">
              <Printer className="w-4 h-4 mr-1" /> 打印
            </span>
            <span className="cursor-pointer hover:text-[#C50F1F] flex items-center">
              <Share2 className="w-4 h-4 mr-1" /> 分享
            </span>
          </div>
        </div>
      </div>

      {/* Header / Logo Area (Simplified) */}
      <header className="bg-white py-6 border-b-4 border-[#C50F1F]">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold tracking-widest text-[#C50F1F]" style={{fontFamily: "'Times New Roman', 'SimSun', serif"}}>
            企来集团 <span className="text-lg text-gray-500 font-normal ml-2">新闻中心</span>
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12">
        <div className="bg-white p-12 shadow-sm border border-gray-200 min-h-[800px]">
          {/* Article Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
              {news.title}
            </h1>
            <div className="flex justify-center items-center text-sm text-gray-500 space-x-6">
              <span>发布时间：{news.date}</span>
              <span>来源：企来集团新闻办</span>
              <span>分类：{news.category}</span>
            </div>
            <Separator className="mt-8 bg-gray-200" />
          </div>

          {/* Article Body */}
          <div className="article-content max-w-none">
            <Streamdown>{news.content}</Streamdown>
          </div>

          {/* Article Footer */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex justify-between text-gray-600">
              <span className="cursor-pointer hover:text-[#C50F1F]">上一篇：无</span>
              <span className="cursor-pointer hover:text-[#C50F1F]">下一篇：无</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#333] text-white py-8 mt-12">
        <div className="container mx-auto text-center text-sm text-gray-400">
          <p>版权所有 © 企来集团 2026</p>
        </div>
      </footer>
    </div>
  );
}
