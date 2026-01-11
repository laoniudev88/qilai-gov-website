import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { MapView } from "@/components/Map";

// 合作城市数据（含坐标）
const cooperationCities = [
  // 核心示范城市
  { name: "岳阳市", lat: 29.3637, lng: 113.1202, type: "core", desc: "数据要素市场化配置改革试点" },
  { name: "兰州市", lat: 36.0611, lng: 103.8343, type: "core", desc: "西部数字经济产业园合作" },
  { name: "珠海市", lat: 22.2707, lng: 113.5767, type: "core", desc: "跨境数据流动先行区" },
  { name: "长兴县", lat: 31.0060, lng: 119.9078, type: "core", desc: "县域数字化转型标杆" },
  { name: "厦门市", lat: 24.4798, lng: 118.0894, type: "core", desc: "海洋大数据交易中心" },
  { name: "常州市", lat: 31.8112, lng: 119.9741, type: "core", desc: "工业互联网数据赋能" },
  
  // 新增20个合作城市
  { name: "北京市", lat: 39.9042, lng: 116.4074, type: "partner", desc: "政务数据共享交换平台" },
  { name: "上海市", lat: 31.2304, lng: 121.4737, type: "partner", desc: "金融数据要素流通试点" },
  { name: "深圳市", lat: 22.5431, lng: 114.0579, type: "partner", desc: "数据交易所战略合作" },
  { name: "成都市", lat: 30.5728, lng: 104.0668, type: "partner", desc: "智慧蓉城数据底座" },
  { name: "武汉市", lat: 30.5928, lng: 114.3055, type: "partner", desc: "光谷数字经济产业集群" },
  { name: "杭州市", lat: 30.2741, lng: 120.1551, type: "partner", desc: "城市大脑数据运营" },
  { name: "南京市", lat: 32.0603, lng: 118.7969, type: "partner", desc: "软件谷数据产业合作" },
  { name: "重庆市", lat: 29.5630, lng: 106.5516, type: "partner", desc: "西部数据交易中心" },
  { name: "西安市", lat: 34.3416, lng: 108.9398, type: "partner", desc: "丝路科学城数字园区" },
  { name: "苏州市", lat: 31.2989, lng: 120.5853, type: "partner", desc: "工业大数据应用示范" },
  { name: "天津市", lat: 39.0842, lng: 117.2009, type: "partner", desc: "北方大数据交易中心" },
  { name: "郑州市", lat: 34.7466, lng: 113.6253, type: "partner", desc: "中原数字经济产业园" },
  { name: "长沙市", lat: 28.2282, lng: 112.9388, type: "partner", desc: "马栏山视频文创数据" },
  { name: "青岛市", lat: 36.0671, lng: 120.3826, type: "partner", desc: "工业互联网标识解析" },
  { name: "宁波市", lat: 29.8683, lng: 121.5440, type: "partner", desc: "港航物流数据平台" },
  { name: "合肥市", lat: 31.8206, lng: 117.2272, type: "partner", desc: "量子计算与数据安全" },
  { name: "福州市", lat: 26.0745, lng: 119.2965, type: "partner", desc: "数字中国建设峰会合作" },
  { name: "济南市", lat: 36.6512, lng: 117.1201, type: "partner", desc: "政务云数据中心" },
  { name: "沈阳市", lat: 41.8057, lng: 123.4315, type: "partner", desc: "东北数字经济桥头堡" },
  { name: "昆明市", lat: 24.8801, lng: 102.8329, type: "partner", desc: "面向南亚东南亚数据通道" }
];

export default function CooperationMap() {
  const mapRef = useRef<google.maps.Map | null>(null);

  const handleMapReady = (map: google.maps.Map) => {
    mapRef.current = map;

    // 创建信息窗口
    const infoWindow = new google.maps.InfoWindow();

    // 遍历添加标记
    cooperationCities.forEach((city) => {
      const marker = new google.maps.Marker({
        position: { lat: city.lat, lng: city.lng },
        map: map,
        title: city.name,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: city.type === "core" ? 8 : 5,
          fillColor: city.type === "core" ? "#ce1126" : "#1e40af",
          fillOpacity: 0.9,
          strokeWeight: 2,
          strokeColor: "#ffffff",
        },
      });

      // 点击标记显示详情
      marker.addListener("click", () => {
        const contentString = `
          <div style="padding: 8px; min-width: 200px;">
            <h3 style="color: #ce1126; font-size: 18px; font-weight: bold; margin-bottom: 8px; font-family: serif;">${city.name}</h3>
            <p style="color: #333; font-size: 14px; margin-bottom: 8px;">${city.desc}</p>
            <a href="/news/2" style="color: #1e40af; text-decoration: underline; font-size: 12px;">查看合作详情 ></a>
          </div>
        `;
        infoWindow.setContent(contentString);
        infoWindow.open(map, marker);
      });
    });
  };

  return (
    <div className="min-h-screen bg-white font-serif">
      {/* 顶部红条 */}
      <div className="bg-[#ce1126] text-white h-10">
        <div className="container mx-auto px-4 h-full flex justify-between items-center text-sm font-song">
          <div className="flex space-x-6"></div>
          <div className="flex space-x-4">
            <span className="cursor-pointer hover:underline">English</span>
            <span className="cursor-pointer hover:underline">Français</span>
            <span className="cursor-pointer hover:underline">无障碍</span>
          </div>
        </div>
      </div>

      {/* Logo区 */}
      <div className="bg-white py-8 border-b border-gray-100">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className="text-[48px] font-bold text-[#ce1126] tracking-widest font-song leading-none">
              企来集团
            </h1>
            <p className="text-sm text-gray-600 mt-1 tracking-[0.3em] font-sans uppercase">
              QILAI GROUP OFFICIAL WEBSITE
            </p>
          </div>
          <Link href="/" className="text-[#ce1126] hover:underline font-song text-lg">
            &lt; 返回首页
          </Link>
        </div>
      </div>

      {/* 标题区 */}
      <div className="bg-gray-50 py-12 text-center">
        <h2 className="text-4xl font-bold text-[#333] font-song mb-4">全国合作网络</h2>
        <p className="text-gray-600 text-lg font-song max-w-3xl mx-auto">
          企来集团已与全国20+个省市建立深度合作关系，共同推动数据要素市场化配置与数字经济高质量发展。
        </p>
      </div>

      {/* 地图容器 */}
      <div className="h-[800px] w-full relative">
        <MapView 
          onMapReady={handleMapReady}
          initialCenter={{ lat: 34.3416, lng: 108.9398 }} // 以西安为中心
          initialZoom={5}
        />
        
        {/* 浮动统计卡片 */}
        <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm p-6 rounded-sm shadow-lg border-l-4 border-[#ce1126] max-w-xs">
          <h3 className="text-xl font-bold text-[#ce1126] mb-4 font-song">合作概览</h3>
          <div className="space-y-4">
            <div>
              <div className="text-3xl font-bold text-gray-800 font-sans">26+</div>
              <div className="text-sm text-gray-600">合作城市</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-800 font-sans">100+</div>
              <div className="text-sm text-gray-600">落地项目</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-800 font-sans">50亿+</div>
              <div className="text-sm text-gray-600">带动数字经济产值</div>
            </div>
          </div>
        </div>
      </div>

      {/* 城市列表 */}
      <div className="container mx-auto px-4 py-16">
        <h3 className="text-2xl font-bold text-[#ce1126] mb-8 font-song border-l-4 border-[#ce1126] pl-4">
          合作城市名录
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {cooperationCities.map((city, idx) => (
            <div key={idx} className="bg-gray-50 p-4 rounded-sm hover:bg-[#ce1126] hover:text-white transition-colors group cursor-pointer border border-gray-100">
              <div className="font-bold text-lg font-song mb-1">{city.name}</div>
              <div className="text-xs text-gray-500 group-hover:text-white/80 truncate">{city.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 页脚 */}
      <footer className="bg-[#ce1126] text-white py-8">
        <div className="container mx-auto px-4 text-center font-song">
          <p className="mb-4 text-lg font-bold">企来集团 QILAI GROUP</p>
          <div className="text-sm opacity-80 space-y-2">
            <p>版权所有 © 2025 企来集团 保留所有权利</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
