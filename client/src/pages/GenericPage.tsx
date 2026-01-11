import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRoute } from "wouter";

const pageContent: Record<string, { title: string; content: React.ReactNode }> = {
  "about": {
    title: "集团概况",
    content: (
      <div className="space-y-6 text-lg leading-relaxed text-gray-800">
        <p>
          企来集团是一家专注于数字经济领域的领军企业，致力于成为政府数字化转型的核心伙伴。集团积极响应国家"数字中国"战略，通过构建"20大平台"，深化政企混改赋能，推动区域经济高质量发展。
        </p>
        <p>
          作为连接政府与市场的桥梁，企来集团依托强大的技术实力和丰富的产业资源，协助地方政府解决招商难、融资难、管理难等痛点问题。我们提供从顶层设计到落地运营的全链条服务，为政府决策提供科学依据，为产业升级提供强大动力。
        </p>
        <h3 className="text-xl font-bold text-[#C50F1F] mt-8 mb-4">核心使命</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>紧跟国家战略，践行数字中国</li>
          <li>深化政企混改，赋能区域经济</li>
          <li>构建数字生态，实现共同富裕</li>
        </ul>
      </div>
    )
  },
  "services": {
    title: "政务服务",
    content: (
      <div className="grid grid-cols-2 gap-8">
        <Card className="border-t-4 border-t-[#C50F1F] shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#C50F1F]">招商引资平台</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">利用大数据分析精准匹配产业链上下游企业，提高招商成功率。</p>
            <Button variant="outline" className="border-[#C50F1F] text-[#C50F1F]">进入平台</Button>
          </CardContent>
        </Card>
        <Card className="border-t-4 border-t-[#1E3A8A] shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#1E3A8A]">项目申报系统</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">一站式项目申报管理，全流程数字化跟踪，提升审批效率。</p>
            <Button variant="outline" className="border-[#1E3A8A] text-[#1E3A8A]">进入系统</Button>
          </CardContent>
        </Card>
        <Card className="border-t-4 border-t-[#059669] shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#059669]">产业数据大脑</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">汇聚区域产业数据，提供实时监测与预警，辅助科学决策。</p>
            <Button variant="outline" className="border-[#059669] text-[#059669]">查看数据</Button>
          </CardContent>
        </Card>
        <Card className="border-t-4 border-t-[#D97706] shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#D97706]">企业服务云</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">为辖区企业提供政策推送、诉求办理等全方位服务。</p>
            <Button variant="outline" className="border-[#D97706] text-[#D97706]">访问云平台</Button>
          </CardContent>
        </Card>
      </div>
    )
  },
  "policy": {
    title: "政策文件",
    content: (
      <div className="space-y-4">
        {[
          "国务院关于加强数字政府建设的指导意见",
          "十四五数字经济发展规划",
          "关于构建数据基础制度更好发挥数据要素作用的意见",
          "全国一体化政务大数据体系建设指南",
          "关于进一步深化税收征管改革的意见"
        ].map((policy, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 hover:bg-white hover:border-[#C50F1F] cursor-pointer transition-all group">
            <span className="text-lg text-gray-800 group-hover:text-[#C50F1F] font-medium">{policy}</span>
            <span className="text-sm text-gray-500">2025-12-{20 - index}</span>
          </div>
        ))}
      </div>
    )
  },
  "interaction": {
    title: "互动交流",
    content: (
      <div className="bg-white p-8 border border-gray-200">
        <h3 className="text-xl font-bold mb-6">意见征集</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">您的姓名</label>
            <input type="text" className="w-full border border-gray-300 p-2 rounded-none focus:border-[#C50F1F] outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">联系电话</label>
            <input type="text" className="w-full border border-gray-300 p-2 rounded-none focus:border-[#C50F1F] outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">您的建议</label>
            <textarea className="w-full border border-gray-300 p-2 rounded-none h-32 focus:border-[#C50F1F] outline-none"></textarea>
          </div>
          <Button className="bg-[#C50F1F] hover:bg-[#a00c19] text-white rounded-none px-8">提交建议</Button>
        </div>
      </div>
    )
  },
  "data": {
    title: "数据开放",
    content: (
      <div className="text-center py-12">
        <div className="text-6xl font-bold text-[#C50F1F] mb-4">20+</div>
        <p className="text-xl text-gray-600 mb-8">核心数据平台已接入</p>
        <div className="grid grid-cols-3 gap-6 text-left">
          <div className="p-6 bg-gray-50 border-l-4 border-[#C50F1F]">
            <h4 className="font-bold text-lg mb-2">经济运行数据</h4>
            <p className="text-sm text-gray-500">实时监测区域GDP、税收、投资等核心指标。</p>
          </div>
          <div className="p-6 bg-gray-50 border-l-4 border-[#1E3A8A]">
            <h4 className="font-bold text-lg mb-2">产业发展数据</h4>
            <p className="text-sm text-gray-500">产业链全景图谱，企业画像与发展态势。</p>
          </div>
          <div className="p-6 bg-gray-50 border-l-4 border-[#059669]">
            <h4 className="font-bold text-lg mb-2">民生服务数据</h4>
            <p className="text-sm text-gray-500">教育、医疗、社保等公共服务数据分析。</p>
          </div>
        </div>
      </div>
    )
  }
};

export default function GenericPage() {
  const [match, params] = useRoute("/page/:id");
  const pageId = params?.id || "about";
  const page = pageContent[pageId];

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">页面建设中</h1>
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
        </div>
      </div>

      {/* Header / Logo Area (Simplified) */}
      <header className="bg-white py-6 border-b-4 border-[#C50F1F]">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold tracking-widest text-[#C50F1F]" style={{fontFamily: "'Times New Roman', 'SimSun', serif"}}>
            企来集团 <span className="text-lg text-gray-500 font-normal ml-2">{page.title}</span>
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12">
        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar Navigation */}
          <div className="col-span-3">
            <div className="bg-white border border-gray-200 shadow-sm">
              <div className="bg-[#C50F1F] text-white p-4 font-bold text-lg">
                栏目导航
              </div>
              <ul className="divide-y divide-gray-100">
                {Object.entries(pageContent).map(([key, item]) => (
                  <li key={key}>
                    <a 
                      href={`/page/${key}`} 
                      className={`block p-4 hover:bg-gray-50 hover:text-[#C50F1F] transition-colors flex justify-between items-center ${pageId === key ? 'text-[#C50F1F] font-bold bg-gray-50 border-l-4 border-l-[#C50F1F]' : 'text-gray-700'}`}
                    >
                      {item.title}
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Content Area */}
          <div className="col-span-9">
            <div className="bg-white p-8 shadow-sm border border-gray-200 min-h-[600px]">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                {page.title}
              </h2>
              {page.content}
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
