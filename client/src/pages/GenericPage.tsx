import { useRoute, Link } from "wouter";
import { policyDocuments } from "@/lib/newsData";
import { ChevronRight, ArrowRight, ChevronLeft } from "lucide-react";

export default function GenericPage() {
  const [match, params] = useRoute("/page/:id");
  const pageId = match ? params.id : "overview";

  const pageContent: Record<string, { title: string; content: React.ReactNode }> = {
    overview: {
      title: "集团概况",
      content: (
        <div className="space-y-6 text-lg leading-loose text-gray-800 font-song">
          <p className="indent-8">
            企来集团（Qilai Group）是国内领先的数字经济产业服务商，致力于通过大数据、人工智能、区块链等前沿技术，为各级政府及企业提供全方位的数字化转型解决方案。
          </p>
          <p className="indent-8">
            集团紧密围绕国家“数字中国”战略，深耕数据要素市场化配置改革，构建了从数据采集、治理、流通到应用的全产业链服务体系。我们始终坚持“赋能实体经济、服务国家战略”的使命，助力地方政府优化营商环境，推动区域经济高质量发展。
          </p>
          <div className="bg-gray-50 p-6 border border-gray-200 rounded-sm mt-8">
            <h3 className="text-xl font-bold text-[#b91c1c] mb-4">核心业务板块</h3>
            <ul className="grid grid-cols-2 gap-4">
              <li className="flex items-center gap-2"><span className="text-[#b91c1c]">●</span> 数字政府建设与运营</li>
              <li className="flex items-center gap-2"><span className="text-[#b91c1c]">●</span> 数据要素资产化服务</li>
              <li className="flex items-center gap-2"><span className="text-[#b91c1c]">●</span> 产业园区数字化招商</li>
              <li className="flex items-center gap-2"><span className="text-[#b91c1c]">●</span> 跨境数据流通与交易</li>
            </ul>
          </div>
        </div>
      )
    },
    policy: {
      title: "政策要闻",
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-loose text-gray-800 font-song indent-8 mb-8">
            深入贯彻落实党中央、国务院关于构建数据基础制度、更好发挥数据要素作用的决策部署，及时发布国家部委最新政策文件，为数字经济发展提供政策指引。
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
                      <span className="text-sm text-gray-500 mt-1 block">来源：{doc.source}</span>
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
      title: "数字服务",
      content: (
        <div className="space-y-6 text-lg leading-loose text-gray-800 font-song">
          <p className="indent-8">
            企来集团数字服务平台，旨在为政府部门提供高效、便捷的数字化服务工具。我们通过“互联网+数字服务”模式，助力政府实现“一网通办”、“跨省通办”，提升行政效能和公共服务水平。
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
      title: "互动交流",
      content: (
        <div className="space-y-6 text-lg leading-loose text-gray-800 font-song">
          <p className="indent-8">
            搭建政企沟通桥梁，倾听各界声音。欢迎各级政府领导、专家学者及企业家朋友莅临企来集团考察指导，共商数字经济发展大计。
          </p>
          <div className="bg-[#fff9f9] border border-[#ffcccc] p-8 rounded-sm mt-6 text-center">
            <h3 className="text-2xl font-bold text-[#b91c1c] mb-4">预约考察 / 商务合作</h3>
            <p className="text-gray-700 mb-6">请通过以下官方渠道提交您的合作意向，我们将有专人与您对接。</p>
            <button className="bg-[#b91c1c] text-white px-8 py-3 rounded-sm font-bold hover:bg-[#a11818] transition-colors shadow-md">
              在线提交意向书
            </button>
            <p className="text-sm text-gray-500 mt-4">（系统正在维护中，请稍后访问）</p>
          </div>
        </div>
      )
    },
    data: {
      title: "数据开放",
      content: (
        <div className="space-y-6 text-lg leading-loose text-gray-800 font-song">
          <p className="indent-8">
            依托国家数据局相关政策，企来集团积极推动公共数据资源的开发利用。本栏目将定期发布脱敏后的行业分析报告、宏观经济指数及产业发展白皮书。
          </p>
          <div className="border border-gray-200 rounded-sm overflow-hidden mt-6">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="p-4 font-bold text-gray-700">数据名称</th>
                  <th className="p-4 font-bold text-gray-700">发布日期</th>
                  <th className="p-4 font-bold text-gray-700">格式</th>
                  <th className="p-4 font-bold text-gray-700">操作</th>
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
                      <button className="text-[#b91c1c] hover:underline text-sm">申请下载</button>
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
      title: "地方合作",
      content: (
        <div className="space-y-6 text-lg leading-loose text-gray-800 font-song">
          <p className="indent-8">
            企来集团已与全国多个省市建立了深度交流对接合作关系，通过“数字+产业”双轮驱动对接，助力地方经济腾飞。
          </p>
          <div className="grid grid-cols-2 gap-6 mt-6">
            {[
              { city: "甘肃省兰州市", desc: "共建西部数字经济产业园，打造‘东数西算’重要节点。" },
              { city: "广东省珠海市", desc: "深化粤港澳大湾区产业协同，推动海洋经济数字化转型。" },
              { city: "浙江省长兴县", desc: "聚焦新能源与智能制造，构建长三角绿色智造高地。" },
              { city: "福建省厦门市", desc: "探索跨境数据流动试点，建设数字自贸区。" }
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
              <h1 className="text-4xl font-bold text-[#b91c1c] font-song">企来集团</h1>
            </div>
          </div>
          <Link href="/" className="text-[#b91c1c] font-bold hover:underline flex items-center gap-1">
            <ChevronLeft className="w-4 h-4" /> 返回首页
          </Link>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-12 gap-8">
          {/* 侧边导航 */}
          <div className="col-span-3">
            <div className="bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden">
              <div className="bg-[#b91c1c] text-white p-4 font-bold text-lg font-song">
                栏目导航
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
        <p>主办单位：企来集团 &nbsp;&nbsp; 版权所有：企来集团</p>
      </footer>
    </div>
  );
}
