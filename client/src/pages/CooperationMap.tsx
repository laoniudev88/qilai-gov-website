import { Link } from "wouter";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";
import { useState } from "react";

// 中国地图 GeoJSON 数据 URL (使用阿里云 DataV 的公开数据)
const CHINA_GEO_URL = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/china/china-provinces.json";

// 核心合作城市 (6个)
const coreCities = [
  { name: "岳阳市", coordinates: [113.132855, 29.37029], type: "core" },
  { name: "兰州市", coordinates: [103.823557, 36.058039], type: "core" },
  { name: "珠海市", coordinates: [113.553986, 22.224979], type: "core" },
  { name: "长兴县", coordinates: [119.911479, 31.005258], type: "core" },
  { name: "厦门市", coordinates: [118.11022, 24.490474], type: "core" },
  { name: "常州市", coordinates: [119.946973, 31.772752], type: "core" },
  { name: "都江堰市", coordinates: [103.64709, 30.98863], type: "core" }
];

// 随机选取的20个东西部地级市
const extendedCities = [
  // 东部
  { name: "温州市", coordinates: [120.672111, 28.000575], type: "extended" },
  { name: "绍兴市", coordinates: [120.582112, 29.997117], type: "extended" },
  { name: "南通市", coordinates: [120.864608, 32.016212], type: "extended" },
  { name: "扬州市", coordinates: [119.421003, 32.393159], type: "extended" },
  { name: "徐州市", coordinates: [117.184811, 34.261792], type: "extended" },
  { name: "青岛市", coordinates: [120.355173, 36.082982], type: "extended" },
  { name: "烟台市", coordinates: [121.391382, 37.539297], type: "extended" },
  { name: "福州市", coordinates: [119.306239, 26.075302], type: "extended" },
  { name: "泉州市", coordinates: [118.589421, 24.908853], type: "extended" },
  { name: "海口市", coordinates: [110.33119, 20.031971], type: "extended" },
  
  // 西部
  { name: "绵阳市", coordinates: [104.741722, 31.46402], type: "extended" },
  { name: "天水市", coordinates: [105.724998, 34.578529], type: "extended" },
  { name: "贵阳市", coordinates: [106.713478, 26.578343], type: "extended" },
  { name: "遵义市", coordinates: [106.937265, 27.706626], type: "extended" },
  { name: "昆明市", coordinates: [102.712251, 25.040609], type: "extended" },
  { name: "大理州", coordinates: [100.223675, 25.5969], type: "extended" },
  { name: "银川市", coordinates: [106.278179, 38.46637], type: "extended" },
  { name: "西宁市", coordinates: [101.778916, 36.623178], type: "extended" },
  { name: "乌鲁木齐", coordinates: [87.617733, 43.792818], type: "extended" },
  { name: "柳州市", coordinates: [109.411703, 24.314617], type: "extended" }
];

const allCities = [...coreCities, ...extendedCities];

export default function CooperationMap() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

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
                <li>
                  <Link href="/page/overview">
                    <div className="block p-4 hover:bg-gray-50 hover:text-[#b91c1c] transition-colors flex justify-between items-center cursor-pointer text-gray-700">
                      集团概况 <ChevronRight className="w-4 h-4" />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/page/cooperation">
                    <div className="block p-4 text-[#b91c1c] font-bold bg-gray-50 border-l-4 border-l-[#b91c1c] flex justify-between items-center cursor-pointer">
                      地方合作 <ChevronRight className="w-4 h-4" />
                    </div>
                  </Link>
                </li>
                {/* 其他导航项... */}
              </ul>
            </div>
            
            {/* 统计数据卡片 */}
            <div className="mt-6 bg-white border border-gray-200 shadow-sm rounded-sm p-6">
              <h3 className="text-lg font-bold text-[#b91c1c] mb-4 border-b border-gray-100 pb-2">合作概览</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold text-gray-800">27+</div>
                  <div className="text-sm text-gray-500">覆盖城市</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-800">150+</div>
                  <div className="text-sm text-gray-500">落地项目</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-800">500亿+</div>
                  <div className="text-sm text-gray-500">带动投资</div>
                </div>
              </div>
            </div>
          </div>

          {/* 内容区域 */}
          <div className="col-span-9">
            <div className="bg-white shadow-lg rounded-sm min-h-[800px] border border-gray-200 flex flex-col">
              {/* 页面标题 */}
              <div className="border-b border-gray-200 px-12 py-8 bg-gray-50 flex justify-between items-center">
                <h2 className="text-3xl font-bold text-[#b91c1c] font-song flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#b91c1c] block"></span>
                  全国合作网络格局
                </h2>
                <div className="flex gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ce1126]"></span>
                    <span>核心战略节点</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#fbbf24]"></span>
                    <span>拓展合作节点</span>
                  </div>
                </div>
              </div>
              
              {/* 地图区域 */}
              <div className="flex-1 bg-[#f0f4f8] relative overflow-hidden">
                <ComposableMap
                  projection="geoMercator"
                  projectionConfig={{
                    scale: 800,
                    center: [105, 38]
                  }}
                  className="w-full h-full"
                >
                  <ZoomableGroup>
                    <Geographies geography={CHINA_GEO_URL}>
                      {({ geographies }) =>
                        geographies.map((geo) => (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill="#e5e7eb"
                            stroke="#ffffff"
                            strokeWidth={0.5}
                            style={{
                              default: { fill: "#d1d5db", outline: "none" },
                              hover: { fill: "#9ca3af", outline: "none" },
                              pressed: { fill: "#6b7280", outline: "none" },
                            }}
                          />
                        ))
                      }
                    </Geographies>
                    
                    {/* 城市标记 */}
                    {allCities.map((city) => (
                      <Marker 
                        key={city.name} 
                        coordinates={city.coordinates as [number, number]}
                        onMouseEnter={() => setHoveredCity(city.name)}
                        onMouseLeave={() => setHoveredCity(null)}
                      >
                        <g className="cursor-pointer group">
                          {/* 呼吸灯效果光圈 */}
                          <circle 
                            r={city.type === 'core' ? 8 : 5} 
                            fill={city.type === 'core' ? "#ce1126" : "#fbbf24"} 
                            className="animate-ping opacity-75" 
                          />
                          {/* 实心点 */}
                          <circle 
                            r={city.type === 'core' ? 4 : 3} 
                            fill={city.type === 'core' ? "#ce1126" : "#fbbf24"} 
                            stroke="#fff" 
                            strokeWidth={1} 
                          />
                          
                          {/* 悬停或核心城市显示名称 */}
                          {(city.type === 'core' || hoveredCity === city.name) && (
                            <text
                              textAnchor="middle"
                              y={city.type === 'core' ? -12 : -8}
                              style={{
                                fontFamily: "system-ui",
                                fill: "#374151",
                                fontSize: city.type === 'core' ? "12px" : "10px",
                                fontWeight: "bold",
                                textShadow: "0px 0px 2px #fff"
                              }}
                            >
                              {city.name}
                            </text>
                          )}
                        </g>
                      </Marker>
                    ))}
                  </ZoomableGroup>
                </ComposableMap>
                
                {/* 悬浮提示框 */}
                {hoveredCity && (
                  <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-4 rounded shadow-lg border border-gray-200 max-w-xs">
                    <h4 className="font-bold text-[#ce1126] mb-1">{hoveredCity}</h4>
                    <p className="text-xs text-gray-600">
                      {coreCities.find(c => c.name === hoveredCity) 
                        ? "企来集团核心战略合作伙伴，已落地数字经济产业园项目。" 
                        : "企来集团重点拓展区域，正在推进数据要素市场化配置改革合作。"}
                    </p>
                  </div>
                )}
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
