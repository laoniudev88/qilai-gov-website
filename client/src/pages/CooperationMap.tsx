import { Link } from "wouter";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

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
  { name: "柳州市", coordinates: [109.411703, 24.314617], type: "extended" },
  
  // 新增随机城市 (第一批)
  { name: "哈尔滨市", coordinates: [126.642464, 45.756967], type: "extended" },
  { name: "长春市", coordinates: [125.3245, 43.886841], type: "extended" },
  { name: "沈阳市", coordinates: [123.429096, 41.796767], type: "extended" },
  { name: "大连市", coordinates: [121.618622, 38.91459], type: "extended" },
  { name: "呼和浩特市", coordinates: [111.670801, 40.818311], type: "extended" },
  { name: "包头市", coordinates: [109.840405, 40.658168], type: "extended" },
  { name: "西安市", coordinates: [108.948024, 34.263161], type: "extended" },
  { name: "宝鸡市", coordinates: [107.14487, 34.369315], type: "extended" },
  { name: "咸阳市", coordinates: [108.705117, 34.333439], type: "extended" },
  { name: "汉中市", coordinates: [107.028621, 33.077668], type: "extended" },
  { name: "成都市", coordinates: [104.065735, 30.659462], type: "extended" },
  { name: "重庆市", coordinates: [106.504962, 29.533155], type: "extended" },
  { name: "南宁市", coordinates: [108.320004, 22.82402], type: "extended" },
  { name: "桂林市", coordinates: [110.299121, 25.274215], type: "extended" },
  { name: "北海市", coordinates: [109.119254, 21.473343], type: "extended" },
  { name: "拉萨市", coordinates: [91.132212, 29.660361], type: "extended" },
  { name: "日喀则市", coordinates: [88.885148, 29.267519], type: "extended" },
  { name: "喀什地区", coordinates: [75.989138, 39.467664], type: "extended" },
  { name: "伊犁州", coordinates: [81.317946, 43.92186], type: "extended" },
  { name: "酒泉市", coordinates: [98.510795, 39.744023], type: "extended" },

  // 新增随机城市 (第二批)
  { name: "合肥市", coordinates: [117.227239, 31.820587], type: "extended" },
  { name: "芜湖市", coordinates: [118.376278, 31.326319], type: "extended" },
  { name: "南昌市", coordinates: [115.854691, 28.683258], type: "extended" },
  { name: "赣州市", coordinates: [114.934719, 25.831829], type: "extended" },
  { name: "太原市", coordinates: [112.548879, 37.87059], type: "extended" },
  { name: "大同市", coordinates: [113.295259, 40.09031], type: "extended" },
  { name: "郑州市", coordinates: [113.625368, 34.7466], type: "extended" },
  { name: "洛阳市", coordinates: [112.431965, 34.647308], type: "extended" },
  { name: "武汉市", coordinates: [114.305393, 30.593099], type: "extended" },
  { name: "宜昌市", coordinates: [111.286471, 30.691967], type: "extended" },
  { name: "长沙市", coordinates: [112.938814, 28.228209], type: "extended" },
  { name: "衡阳市", coordinates: [112.572521, 26.896835], type: "extended" },
  { name: "石家庄市", coordinates: [114.51486, 38.042307], type: "extended" },
  { name: "唐山市", coordinates: [118.180194, 39.630867], type: "extended" },
  { name: "济南市", coordinates: [117.1205, 36.651017], type: "extended" },
  { name: "潍坊市", coordinates: [119.161756, 36.706774], type: "extended" },
  { name: "林芝市", coordinates: [94.36149, 29.649128], type: "extended" },
  { name: "昌都市", coordinates: [97.17292, 31.14005], type: "extended" },
  { name: "延安市", coordinates: [109.489727, 36.585455], type: "extended" },
  { name: "榆林市", coordinates: [109.734734, 38.278863], type: "extended" }
];

const allCities = [...coreCities, ...extendedCities];

export default function CooperationMap() {
  const { t } = useLanguage();
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  
  // Get translated city name from Chinese city name
  const getCityName = (chineseCityName: string): string => {
    const cityMap: {[key: string]: string} = {
      "岳阳市": t('city_yueyang'),
      "兰州市": t('city_lanzhou'),
      "珠海市": t('city_zhuhai'),
      "长兴县": t('city_changxing'),
      "厦门市": t('city_xiamen'),
      "常州市": t('city_changzhou'),
      "都江堰市": t('city_dujiangyan'),
      "温州市": t('city_wenzhou'),
      "绍兴市": t('city_shaoxing'),
      "南通市": t('city_nantong'),
      "扬州市": t('city_yangzhou'),
      "徐州市": t('city_xuzhou'),
      "青岛市": t('city_qingdao'),
      "烟台市": t('city_yantai'),
      "福州市": t('city_fuzhou'),
      "泉州市": t('city_quanzhou'),
      "海口市": t('city_haikou'),
      "绵阳市": t('city_mianyang'),
      "天水市": t('city_tianshui'),
      "贵阳市": t('city_guiyang'),
      "遵义市": t('city_zunyi'),
      "昆明市": t('city_kunming'),
      "大理州": t('city_dali'),
      "银川市": t('city_yinchuan'),
      "西宁市": t('city_xining'),
      "乌鲁木齐": t('city_urumqi'),
      "柳州市": t('city_liuzhou'),
      "哈尔滨市": t('city_harbin'),
      "长春市": t('city_changchun'),
      "沈阳市": t('city_shenyang'),
      "大连市": t('city_dalian'),
      "呼和浩特市": t('city_hohhot'),
      "包头市": t('city_baotou'),
      "西安市": t('city_xian'),
      "宝鸡市": t('city_baoji'),
      "咸阳市": t('city_xianyang'),
      "汉中市": t('city_hanzhong'),
      "成都市": t('city_chengdu'),
      "重庆市": t('city_chongqing'),
      "南宁市": t('city_nanning'),
      "桂林市": t('city_guilin'),
      "北海市": t('city_beihai'),
      "拉萨市": t('city_lhasa'),
      "日喀则市": t('city_shigatse'),
      "喀什地区": t('city_kashgar'),
      "伊犁州": t('city_yili'),
      "酒泉市": t('city_jiuquan'),
      "合肥市": t('city_hefei'),
      "芜湖市": t('city_wuhu'),
      "南昌市": t('city_nanchang'),
      "赣州市": t('city_ganzhou'),
      "太原市": t('city_taiyuan'),
      "大同市": t('city_datong'),
      "郑州市": t('city_zhengzhou'),
      "洛阳市": t('city_luoyang'),
      "武汉市": t('city_wuhan'),
      "宜昌市": t('city_yichang'),
      "长沙市": t('city_changsha'),
      "衡阳市": t('city_hengyang'),
      "石家庄市": t('city_shijiazhuang'),
      "唐山市": t('city_tangshan'),
      "济南市": t('city_jinan'),
      "潍坊市": t('city_weifang'),
      "林芝市": t('city_nyingchi'),
      "昌都市": t('city_chamdo'),
      "延安市": t('city_yanan'),
      "榆林市": t('city_yulin')
    };
    return cityMap[chineseCityName] || chineseCityName;
  };

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
            <img src="/images/logo.png" alt={t('national_emblem_alt')} className="w-16 h-16" />
            <div>
              <h1 className="text-4xl font-bold text-[#b91c1c] font-song">{t('company_name')}</h1>
            </div>
          </div>
          <Link href="/" className="text-[#b91c1c] font-bold hover:underline flex items-center gap-1">
            <ChevronLeft className="w-4 h-4" /> {t('return_to_home')}
          </Link>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-12 gap-8">
          {/* 侧边导航 */}
          <div className="col-span-3">
            <div className="bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden">
                <div className="bg-[#b91c1c] text-white p-4 font-bold text-lg font-song">
                {t('column_navigation_title')}
              </div>
              <ul className="divide-y divide-gray-100">
                <li>
                  <Link href="/page/overview">
                      <div className="block p-4 hover:bg-gray-50 hover:text-[#b91c1c] transition-colors flex justify-between items-center cursor-pointer text-gray-700">
                       {t('group_overview_nav')} <ChevronRight className="w-4 h-4" />
                     </div>
                  </Link>
                </li>
                <li>
                  <Link href="/page/cooperation">
                     <div className="block p-4 text-[#b91c1c] font-bold bg-gray-50 border-l-4 border-l-[#b91c1c] flex justify-between items-center cursor-pointer">
                       {t('local_cooperation_nav')} <ChevronRight className="w-4 h-4" />
                     </div>
                  </Link>
                </li>
                {/* 其他导航项... */}
              </ul>
            </div>
            
            {/* 统计数据卡片 */}
            <div className="mt-6 bg-white border border-gray-200 shadow-sm rounded-sm p-6">
              <h3 className="text-lg font-bold text-[#b91c1c] mb-4 border-b border-gray-100 pb-2">{t('cooperation_overview')}</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold text-gray-800">27+</div>
                  <div className="text-sm text-gray-500">{t('covered_cities_count')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-800">150+</div>
                  <div className="text-sm text-gray-500">{t('landed_projects_count')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-800">500亿+</div>
                  <div className="text-sm text-gray-500">{t('driven_investment_count')}</div>
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
                  {t('national_network_layout')}
                </h2>
                <div className="flex gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ce1126]"></span>
                    <span>{t('core_strategic_node')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#fbbf24]"></span>
                    <span>{t('expansion_cooperation_node')}</span>
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
                    {allCities.map((city, idx) => {
                      const displayName = getCityName(city.name);
                      return (
                      <Marker 
                        key={idx} 
                        coordinates={city.coordinates as [number, number]}
                        onMouseEnter={() => setHoveredCity(displayName)}
                        onMouseLeave={() => setHoveredCity(null)}
                      >
                        <g className="cursor-pointer group">
                          {/* 呼吸灯效果光圈 - 所有节点都发光 */}
                          <circle 
                            r={city.type === 'core' ? 8 : 6} 
                            fill={city.type === 'core' ? "#ce1126" : "#fbbf24"} 
                            className="animate-ping opacity-75" 
                          />
                          {/* 实心点 - 所有节点都点亮 */}
                          <circle 
                            r={city.type === 'core' ? 4 : 3} 
                            fill={city.type === 'core' ? "#ce1126" : "#fbbf24"} 
                            stroke="#fff" 
                            strokeWidth={1} 
                            className="drop-shadow-[0_0_4px_rgba(251,191,36,0.8)]"
                          />
                          
                          {/* 悬停或核心城市显示名称 */}
                          {(city.type === 'core' || hoveredCity === displayName) && (
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
                              {displayName}
                            </text>
                          )}
                        </g>
                      </Marker>
                    );
                    })}
                  </ZoomableGroup>
                </ComposableMap>
                
                {/* 悬浮提示框 */}
                {hoveredCity && (
                  <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-4 rounded shadow-lg border border-gray-200 max-w-xs">
                    <h4 className="font-bold text-[#ce1126] mb-1">{hoveredCity}</h4>
                    <p className="text-xs text-gray-600">
                      {coreCities.find(c => getCityName(c.name) === hoveredCity) 
                        ? t('core_strategic_partner_desc') 
                        : t('key_expansion_area_desc')}
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
        <p>{t('sponsor_unit')} &nbsp;&nbsp; {t('copyright_unit')}</p>
      </footer>
    </div>
  );
}
