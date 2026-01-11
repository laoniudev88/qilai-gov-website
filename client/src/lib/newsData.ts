export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  content: string;
  image?: string;
  source?: string;
  url?: string;
}

export const newsData: NewsItem[] = [
  {
    id: "1",
    title: "习近平发表二〇二五年新年贺词",
    date: "2024-12-31",
    category: "要闻聚焦",
    content: "新年前夕，国家主席习近平通过中央广播电视总台和互联网，发表了二〇二五年新年贺词。全文如下：大家好！冬至阳生，岁回律转。在这辞旧迎新的美好时刻，我在北京向大家致以新年的祝福！",
    image: "/images/xi_jinping_2025.jpg",
    source: "新华社"
  },
  {
    id: "2",
    title: "兰州市政府考察团莅临企来集团调研",
    date: "2024-11-15",
    category: "地方合作",
    content: "近日，兰州市政府考察团一行莅临企来集团总部进行实地调研。双方就共建西部数字经济产业园、推动‘东数西算’节点建设等议题进行了深入交流。考察团高度评价了企来集团在数据要素资产化领域的创新实践，并表示将全力支持企来集团在兰业务落地，共同打造西部数字经济新高地。",
    image: "/images/news_lanzhou.jpg",
    source: "企来集团"
  },
  {
    id: "news-zh-cx",
    title: "珠海市、长兴县政府代表团莅临企来集团考察交流",
    date: "2024-12-20",
    category: "地方合作",
    content: "近日，珠海市经济技术开发区招商局与浙江省长兴县政府代表团联合莅临企来集团考察交流。企来集团董事长刘昊璋热情接待了来访领导。\n\n座谈会上，刘昊璋董事长详细介绍了企来集团在数字经济、产业招商及数据要素市场化配置方面的核心优势与战略布局。他表示，企来集团始终致力于通过数字化手段赋能实体经济，希望能与珠海、长兴两地在产业园区运营、跨境数据流动及新能源产业链招商等领域开展深度合作。\n\n珠海市代表团领导对企来集团的专业能力给予了高度评价，并重点介绍了珠海经开区的区位优势与产业政策，诚挚邀请企来集团参与大湾区数字经济建设。长兴县代表团领导也分享了长兴在智能制造与绿色能源方面的发展成果，期待双方能携手共建长三角绿色智造高地。\n\n三方还就具体合作模式、落地路径及政策支持等细节进行了深入探讨，并达成了多项初步合作意向。此次考察为企来集团进一步拓展华南与华东市场奠定了坚实基础。",
    image: "/images/news_zhuhai_changxing.jpg",
    source: "企来集团"
  },
  {
    id: "news-xm",
    title: "厦门、常州、都江堰多地政府联合考察企来集团",
    date: "2024-10-28",
    category: "地方合作",
    content: "近日，福建省厦门市、江苏省常州市及四川省都江堰市等多地政府代表团齐聚企来集团，开展联合考察调研。企来集团高层领导陪同接待。\n\n此次多地联合考察旨在探索跨区域数据要素流通与产业协同发展的新模式。考察团一行参观了企来集团数字展厅，详细了解了集团在公共数据授权运营、企业数据资产入表及产业大脑建设等方面的最新成果。\n\n座谈会上，各方围绕“数字中国”建设背景下的区域合作机遇展开了热烈讨论。厦门市代表重点关注了跨境数据流动试点的合作机会；常州市代表希望能引入企来集团的工业互联网平台，赋能当地制造业转型升级；都江堰市代表则对智慧文旅与数字乡村建设表达了浓厚兴趣。\n\n企来集团表示，将充分发挥自身技术与资源优势，为各地量身定制数字化转型方案，推动数字技术与实体经济深度融合，助力各地经济高质量发展。",
    image: "/images/news_xiamen.jpg",
    source: "企来集团"
  },
  {
    id: "news-xzl",
    title: "企来集团与心之力达成战略合作，共建医疗数据生态",
    date: "2024-09-10",
    category: "企业动态",
    content: "近日，企来集团与国内领先的心血管医疗科技企业“心之力”正式签署战略合作协议。双方将依托各自优势，在医疗健康大数据挖掘、AI辅助诊断及个性化健康管理等领域展开深度合作。\n\n根据协议，企来集团将利用其强大的数据治理与隐私计算技术，为心之力提供安全合规的数据流通服务；心之力则将开放其丰富的临床数据资源与算法模型，共同探索医疗数据要素价值化的新路径。\n\n此次合作标志着企来集团在“数据要素×医疗健康”领域迈出了重要一步，未来双方将携手打造国家级医疗健康数据产业示范项目。",
    image: "/images/news_xinzhili.jpg",
    source: "企来集团"
  }
];

export const policyDocuments = [
  {
    title: "中共中央 国务院关于构建数据基础制度更好发挥数据要素作用的意见",
    date: "2022-12-19",
    source: "新华社",
    url: "http://www.gov.cn/zhengce/2022-12/19/content_5732695.htm"
  },
  {
    title: "“十四五”数字经济发展规划",
    date: "2022-01-12",
    source: "国务院",
    url: "http://www.gov.cn/zhengce/content/2022-01/12/content_5667817.htm"
  },
  {
    title: "数字中国建设整体布局规划",
    date: "2023-02-27",
    source: "中共中央、国务院",
    url: "http://www.gov.cn/zhengce/2023-02/27/content_5743484.htm"
  },
  {
    title: "国家数据局等部门关于印发《“数据要素×”三年行动计划（2024—2026年）》的通知",
    date: "2024-01-05",
    source: "国家数据局",
    url: "https://www.ndrc.gov.cn/xxgk/zcfb/tz/202401/t20240105_1363143.html"
  },
  {
    title: "关于促进数据安全产业发展的指导意见",
    date: "2023-01-13",
    source: "工业和信息化部等十六部门",
    url: "http://www.gov.cn/zhengce/zhengceku/2023-01/14/content_5736866.htm"
  },
  {
    title: "全国一体化政务大数据体系建设指南",
    date: "2022-10-28",
    source: "国务院办公厅",
    url: "http://www.gov.cn/zhengce/content/2022-10/28/content_5722325.htm"
  },
  {
    title: "关于进一步深化税收征管改革的意见",
    date: "2021-03-24",
    source: "中共中央办公厅、国务院办公厅",
    url: "http://www.gov.cn/zhengce/2021-03/24/content_5595384.htm"
  },
  {
    title: "关于推进社会信用体系建设高质量发展促进形成新发展格局的意见",
    date: "2022-03-29",
    source: "中共中央办公厅、国务院办公厅",
    url: "http://www.gov.cn/zhengce/2022-03/29/content_5682281.htm"
  },
  {
    title: "关于加强数字政府建设的指导意见",
    date: "2022-06-23",
    source: "国务院",
    url: "http://www.gov.cn/zhengce/content/2022-06/23/content_5697299.htm"
  },
  {
    title: "关于加快建设全国统一大市场的意见",
    date: "2022-04-10",
    source: "中共中央、国务院",
    url: "http://www.gov.cn/zhengce/2022-04/10/content_5684385.htm"
  }
];

export const sortedNews = [...newsData].sort((a, b) => 
  new Date(b.date).getTime() - new Date(a.date).getTime()
);
