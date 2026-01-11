import { useRoute, Link } from "wouter";
import { newsData } from "@/lib/newsData";
import { ChevronRight, Printer, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NewsDetail() {
  const { t } = useLanguage();
  const [match, params] = useRoute("/news/:id");
  const news = newsData.find((n) => n.id === params?.id);

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">{t('news_not_found')}</p>
          <Link href="/">
            <Button className="bg-[#C50F1F] hover:bg-[#a00c19]">{t('return_to_home_btn')}</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-serif">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="container mx-auto text-sm text-gray-600 flex items-center">
          <Link href="/" className="hover:text-[#C50F1F]">{t('breadcrumb_home')}</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-gray-400">{news.category}</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-gray-800 truncate max-w-md">{t('breadcrumb_content')}</span>
        </div>
      </div>

      <main className="container mx-auto py-12 bg-white mt-8 shadow-sm border border-gray-200 min-h-[800px]">
        <article className="max-w-4xl mx-auto px-8">
          {/* Title Area */}
          <div className="text-center border-b border-gray-200 pb-8 mb-10">
            <h1 className="text-4xl font-bold text-[#333] leading-tight mb-6 font-serif">
              {news.title}
            </h1>
            <div className="flex justify-center items-center text-sm text-gray-500 space-x-6 font-sans">
              <span>{t('publish_time')}：{news.date}</span>
              <span>{t('source')}：{news.source || t('qilai_group_source')}</span>
              <div className="flex items-center space-x-4 ml-4">
                <button className="flex items-center hover:text-[#C50F1F]" onClick={() => window.print()}>
                  <Printer className="w-4 h-4 mr-1" /> {t('print_btn')}
                </button>
                <button className="flex items-center hover:text-[#C50F1F]">
                  <Share2 className="w-4 h-4 mr-1" /> {t('share_btn')}
                </button>
              </div>
            </div>
          </div>

          {/* Content Area - People's Daily Style */}
          <div className="prose prose-lg max-w-none text-gray-800 font-serif">
            {/* Image if available */}
            {news.image && (
              <div className="mb-8 text-center">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="mx-auto max-h-[500px] object-contain border border-gray-100 shadow-sm"
                />
                <p className="text-sm text-gray-500 mt-2 italic">{news.title}</p>
              </div>
            )}

            {/* Text Content */}
            <div className="text-[18px] leading-[2.0] text-justify tracking-wide">
              <ReactMarkdown
                components={{
                  p: ({node, ...props}) => <p className="mb-6 indent-[2em]" {...props} />,
                  h2: ({node, ...props}) => <h2 className="text-2xl font-bold text-[#C50F1F] mt-10 mb-6 border-l-4 border-[#C50F1F] pl-4" {...props} />,
                  ul: ({node, ...props}) => <ul className="list-disc pl-8 mb-6 space-y-2" {...props} />,
                  li: ({node, ...props}) => <li className="pl-2" {...props} />,
                  strong: ({node, ...props}) => <strong className="font-bold text-[#333]" {...props} />,
                }}
              >
                {news.content}
              </ReactMarkdown>
            </div>
          </div>

          {/* Editor Info */}
          <div className="mt-16 pt-8 border-t border-gray-200 text-right text-sm text-gray-500 font-sans">
            <p>{t('editor_info')}</p>
          </div>
        </article>
      </main>
    </div>
  );
}
