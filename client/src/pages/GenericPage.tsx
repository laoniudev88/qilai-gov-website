import { useRoute, Link } from "wouter";
import { policyDocuments } from "@/lib/newsData";
import { ChevronRight, ArrowRight, ChevronLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function GenericPage() {
  const { t } = useLanguage();
  const [match, params] = useRoute("/page/:id");
  const pageId = match ? params.id : "overview";

  const pageContent: Record<string, { title: string; content: React.ReactNode }> = {
    overview: {
      title: t('group_overview_title'),
      content: (
        <div className="space-y-6 text-lg leading-loose text-gray-800 font-song">
          <p className="indent-8">
            {t('group_overview_p1')}
          </p>
          <p className="indent-8">
            {t('group_overview_p2')}
          </p>
          <div className="bg-gray-50 p-6 border border-gray-200 rounded-sm mt-8">
            <h3 className="text-xl font-bold text-[#b91c1c] mb-4">{t('core_business_segments')}</h3>
            <ul className="grid grid-cols-2 gap-4">
              <li className="flex items-center gap-2"><span className="text-[#b91c1c]">●</span> {t('digital_government_construction')}</li>
              <li className="flex items-center gap-2"><span className="text-[#b91c1c]">●</span> {t('data_element_assetization')}</li>
              <li className="flex items-center gap-2"><span className="text-[#b91c1c]">●</span> {t('industrial_park_digital_investment')}</li>
              <li className="flex items-center gap-2"><span className="text-[#b91c1c]">●</span> {t('cross_border_data_circulation')}</li>
            </ul>
          </div>
        </div>
      )
    },
    policy: {
      title: t('policy_news_title'),
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-loose text-gray-800 font-song indent-8 mb-8">
            {t('policy_news_intro')}
          </p>
          <div className="border-t border-gray-200">
            <ul className="divide-y divide-dashed divide-gray-200">
              {policyDocuments.map((doc, index) => (
                <li key={index} className="py-4 hover:bg-gray-50 transition-colors px-2">
                  <a href={doc.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group">
                    <div className="flex-1">
                      <h4 className="text-lg font-song text-gray-800 group-hover:text-[#b91c1c] group-hover:font-bold transition-all">
                        {doc.title}
                      </h4>
                      <span className="text-sm text-gray-500 mt-1 block">{t('source')}{doc.source}</span>
                    </div>
                    <span className="text-gray-400 font-song">{doc.date}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    service: {
      title: t('digital_services_title'),
      content: (
        <div className="space-y-6 text-lg leading-loose text-gray-800 font-song">
          <p className="indent-8">
            {t('digital_services_intro')}
          </p>
          <div className="grid grid-cols-3 gap-6 mt-8">
            {[
              { title: "数字招商", desc: "产业分析、项目匹配、全流程跟踪" },
              { title: "营商环境", desc: "政策推送、诉求直达、满意度测评" },
              { title: "数字监管", desc: "数据监测、风险预警、协同执法" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#b91c1c] font-bold text-xl">{idx + 1}</span>
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    interaction: {
      title: t('interaction_title'),
      content: (
        <div className="space-y-6 text-lg leading-loose text-gray-800 font-song">
          <p className="indent-8">
            {t('interaction_intro')}
          </p>
          <div className="bg-[#fff9f9] border border-[#ffcccc] p-8 rounded-sm mt-6 text-center">
            <h3 className="text-2xl font-bold text-[#b91c1c] mb-4">{t('appointment_cooperation')}</h3>
            <p className="text-gray-700 mb-6">{t('submit_intent')}</p>
            <button className="bg-[#b91c1c] text-white px-8 py-3 rounded-sm font-bold hover:bg-[#a11818] transition-colors shadow-md">
              {t('submit_button')}
            </button>
            <p className="text-sm text-gray-500 mt-4">{t('system_maintenance')}</p>
          </div>
        </div>
      )
    },
    data: {
      title: t('open_data_title'),
      content: (
        <div className="space-y-6 text-lg leading-loose text-gray-800 font-song">
          <p className="indent-8">
            {t('open_data_intro')}
          </p>
          <div className="border border-gray-200 rounded-sm overflow-hidden mt-6">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="p-4 font-bold text-gray-700">{t('data_name')}</th>
                  <th className="p-4 font-bold text-gray-700">{t('release_date')}</th>
                  <th className="p-4 font-bold text-gray-700">{t('format')}</th>
                  <th className="p-4 font-bold text-gray-700">{t('operation')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { name: "2025年中国数字经济发展白皮书", date: "2025-12-01", fmt: "PDF" },
                  { name: "全国各省市营商环境指数报告", date: "2025-11-15", fmt: "PDF" },
                  { name: "数据要素市场化配置改革案例集", date: "2025-10-20", fmt: "PDF" }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="p-4 text-gray-800">{row.name}</td>
                    <td className="p-4 text-gray-600">{row.date}</td>
                    <td className="p-4 text-gray-600"><span className="bg-gray-100 px-2 py-1 text-xs rounded">{row.fmt}</span></td>
                    <td className="p-4">
                      <button className="text-[#b91c1c] hover:underline text-sm">{t('apply_download')}</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    cooperation: {
      title: t('local_cooperation_title'),
      content: (
        <div className="space-y-6 text-lg leading-loose text-gray-800 font-song">
          <p className="indent-8">
            {t('local_cooperation_intro')}
          </p>
          <div className="grid grid-cols-2 gap-6 mt-6">
            {[
              { city: "湖南省岳阳市", desc: t('yueyang_desc') },
              { city: "甘肃省兰州市", desc: t('lanzhou_desc') },
              { city: "广东省珠海市", desc: t('zhuhai_desc') },
              { city: "浙江省长兴县", desc: t('changxing_desc') },
              { city: "福建省厦门市", desc: t('xiamen_desc') },
              { city: "江苏省常州市", desc: t('changzhou_desc') }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm hover:border-[#b91c1c] transition-colors group cursor-pointer">
                <h4 className="text-xl font-bold text-gray-800 group-hover:text-[#b91c1c] mb-2">{item.city}</h4>
                <p className="text-gray-600 text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )
    }
  };

  const currentData = pageContent[pageId] || pageContent["overview"];

  return (
    <div className="min-h-screen bg-[#f9f9f9] font-song">
      {/* 顶部导航 (复用Home的Header) */}
      <header className="bg-[#b91c1c] text-white">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex gap-4">
          </div>
        </div>
      </header>

      {/* Logo区域 (简化版) */}
      <div className="bg-white border-b-4 border-[#b91c1c] shadow-sm">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/images/logo.png" alt="国徽" className="w-16 h-16" />
            <div>
              <h1 className="text-4xl font-bold text-[#b91c1c] font-song">{t('company_name')}</h1>
            </div>
          </div>
          <Link href="/" className="text-[#b91c1c] font-bold hover:underline flex items-center gap-1">
            <ChevronLeft className="w-4 h-4" /> {t('nav_home')}
          </Link>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-12 gap-8">
          {/* 侧边导航 */}
          <div className="col-span-3">
            <div className="bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden">
              <div className="bg-[#b91c1c] text-white p-4 font-bold text-lg font-song">
                {t('column_navigation')}
              </div>
              <ul className="divide-y divide-gray-100">
                {Object.entries(pageContent).map(([key, item]) => (
                  <li key={key}>
                    <Link href={`/page/${key}`}>
                      <div className={`block p-4 hover:bg-gray-50 hover:text-[#b91c1c] transition-colors flex justify-between items-center cursor-pointer ${pageId === key ? 'text-[#b91c1c] font-bold bg-gray-50 border-l-4 border-l-[#b91c1c]' : 'text-gray-700'}`}>
                        {item.title}
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 内容区域 */}
          <div className="col-span-9">
            <div className="bg-white shadow-lg rounded-sm min-h-[600px] border border-gray-200">
              {/* 页面标题 */}
              <div className="border-b border-gray-200 px-12 py-8 bg-gray-50">
                <h2 className="text-3xl font-bold text-[#b91c1c] font-song flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#b91c1c] block"></span>
                  {currentData.title}
                </h2>
              </div>
              
              {/* 页面内容 */}
              <div className="px-12 py-10">
                {currentData.content}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-[#f0f0f0] border-t border-gray-300 mt-12 py-8 font-song text-center text-gray-500 text-sm">
        <p>{t('sponsor')} &nbsp;&nbsp; {t('copyright')}</p>
      </footer>
    </div>
  );
}
