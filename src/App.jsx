import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Cpu, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Swords, 
  BrainCircuit, 
  Database, 
  Zap,
  Gamepad2,
  Layers,
  Sparkles,
  MessageSquareHeart,
  Ghost,
  BookOpen
} from 'lucide-react';

// --- 样式常量 ---
const COLORS = {
  primary: '#8B5CF6', // 紫色 - 科技/神秘
  secondary: '#EC4899', // 粉色 - 情感/二次元
  accent: '#10B981', // 绿色 - 增长/利润
  dark: '#0F172A', //以此为背景色
  card: '#1E293B',
  text: '#F8FAFC',
  muted: '#94A3B8'
};

const SlideContainer = ({ children, className = '' }) => (
  <div className={`w-full h-full flex flex-col justify-center items-center p-8 md:p-16 animate-fadeIn ${className}`}>
    {children}
  </div>
);

const TitleSlide = ({ startPresentation }) => (
  <SlideContainer className="text-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="mb-6 inline-block p-4 rounded-full bg-violet-500/20 border border-violet-500/50 animate-pulse">
      <Gamepad2 size={64} className="text-violet-400" />
    </div>
    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-white mb-6 leading-tight">
      Next-Gen AI RPG Platform
    </h1>
    <h2 className="text-xl md:text-3xl text-slate-300 font-light mb-12 tracking-wider">
      AI Dungeon 与生成式互动娱乐深度调研与商业计划
    </h2>
    <button 
      onClick={startPresentation}
      className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-violet-500/30 flex items-center gap-2"
    >
      开始演示 <ChevronRight />
    </button>
    <div className="mt-12 text-slate-500 text-sm">
      基于 DeepSeek 模型 • 多模态互动 • 养成系闭环
    </div>
  </SlideContainer>
);

const MarketSlide = () => (
  <SlideContainer>
    <h3 className="text-3xl font-bold text-violet-400 mb-8 self-start">市场机会：范式转移</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
      <div className="flex flex-col justify-center space-y-8">
        <p className="text-2xl text-slate-200 leading-relaxed">
          互动叙事市场正经历从<span className="text-slate-500 line-through">纯文本工具</span>向<span className="text-fuchsia-400 font-bold">智能体 (Agent)</span> 的演进。
        </p>
        <div className="bg-slate-800/50 p-6 rounded-2xl border-l-4 border-violet-500">
          <h4 className="text-lg font-semibold text-violet-300 mb-2">核心洞察</h4>
          <p className="text-slate-300">
            未来的赢家不是单纯的模型提供商，而是能解决<span className="text-white font-bold">记忆遗忘</span>、构建<span className="text-white font-bold">养成闭环</span>并融合<span className="text-white font-bold">多模态</span>的平台。
          </p>
        </div>
      </div>
      
      <div className="bg-slate-800 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <TrendingUp size={120} />
        </div>
        <h4 className="text-xl text-slate-400 mb-6">全球互动叙事市场规模预测</h4>
        <div className="flex items-end space-x-4 h-64 mt-8">
          <div className="w-1/3 bg-slate-600 rounded-t-lg h-[30%] flex flex-col justify-end p-2 relative group">
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-slate-300">$27.8亿</span>
            <div className="text-center text-sm text-slate-400 mt-2">2024</div>
          </div>
          <div className="w-1/3 bg-violet-600 rounded-t-lg h-[100%] flex flex-col justify-end p-2 relative group animate-grow-y">
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-violet-300 font-bold">$88.7亿</span>
            <div className="text-center text-sm text-violet-200 mt-2">2033</div>
          </div>
        </div>
        <div className="mt-6 flex justify-between items-center border-t border-slate-700 pt-4">
          <span className="text-slate-400">年复合增长率 (CAGR)</span>
          <span className="text-2xl font-bold text-green-400">13.6%</span>
        </div>
      </div>
    </div>
  </SlideContainer>
);

const CompetitorSlide = () => {
  const competitors = [
    { name: "Character.AI", tag: "流量巨头", icon: <Users />, color: "text-blue-400", desc: "先发优势大，但变现难，缺乏游戏性，用户流失严重。" },
    { name: "Chai AI", tag: "极致变现", icon: <DollarSign />, color: "text-green-400", desc: "混合小模型，高LTV买量策略，年收$48M+。" },
    { name: "Talkie / 星野", tag: "卡牌养成", icon: <Sparkles />, color: "text-pink-400", desc: "引入Gacha抽卡机制，高频内购，商业化天花板高。" },
    { name: "NovelAI", tag: "硬核工具", icon: <BookOpen />, color: "text-orange-400", desc: "深耕长篇叙事与DND人群，付费意愿强但受众窄。" },
  ];

  return (
    <SlideContainer>
      <h3 className="text-3xl font-bold text-violet-400 mb-8 self-start">竞品格局与痛点</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        {competitors.map((comp, idx) => (
          <div key={idx} className="bg-slate-800/80 p-6 rounded-2xl hover:bg-slate-800 transition-colors border border-slate-700/50 hover:border-violet-500/50">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-slate-900 ${comp.color}`}>{comp.icon}</div>
                <h4 className="text-xl font-bold text-white">{comp.name}</h4>
              </div>
              <span className="text-xs px-2 py-1 rounded bg-slate-700 text-slate-300">{comp.tag}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">{comp.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 w-full max-w-6xl bg-red-900/20 border border-red-500/30 p-6 rounded-xl flex items-start gap-4">
        <Ghost className="text-red-400 flex-shrink-0" />
        <div>
          <h4 className="text-red-300 font-bold mb-1">行业共性痛点</h4>
          <p className="text-red-200/70 text-sm">
            1. <strong>金鱼记忆：</strong>长对话逻辑崩塌，沉浸感破坏。<br/>
            2. <strong>高昂成本：</strong>高质量RP需大模型，推理成本与商业模型互斥。<br/>
            3. <strong>缺乏玩法：</strong>单纯文字接龙，无数值成长与反馈闭环。
          </p>
        </div>
      </div>
    </SlideContainer>
  );
};

const ProductStrategySlide = () => (
  <SlideContainer>
    <h3 className="text-3xl font-bold text-violet-400 mb-2 self-start">产品战略：六位一体</h3>
    <p className="text-slate-400 mb-10 self-start">打造 Next-Gen 互动体验，超越简单的 Chatbot。</p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
      {[
        { title: "极致易用 (Wrapper)", desc: "无需Prompt工程，即开即玩。参考TikTok交互设计。", icon: <Zap /> },
        { title: "UGC 生态", desc: "自动化角色生成，AI辅助编写Lorebook，降低创作门槛。", icon: <Users /> },
        { title: "多模态感官", desc: "实时语音通话(TTS)，动态背景视频生成，打破纯文本限制。", icon: <Layers /> },
        { title: "养成系统", desc: "好感度数值化，解锁专属剧情/照片。构建情感沉没成本。", icon: <MessageSquareHeart /> },
        { title: "游戏化 (Gamification)", desc: "RPG插件系统：HP/MP、背包、战斗结算、状态追踪。", icon: <Swords /> },
        { title: "动态立绘", desc: "Live2D 模型，表情随对话情感实时变化。", icon: <Ghost /> },
      ].map((item, i) => (
        <div key={i} className="bg-slate-800 p-6 rounded-xl border-t-4 border-violet-600 shadow-lg hover:transform hover:-translate-y-1 transition-all">
          <div className="text-violet-400 mb-4">{item.icon}</div>
          <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
          <p className="text-slate-400 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  </SlideContainer>
);

const TechStackSlide = () => (
  <SlideContainer>
    <h3 className="text-3xl font-bold text-violet-400 mb-8 self-start">技术架构：AI原生游戏引擎</h3>
    
    <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl items-stretch">
      {/* Brain Layer */}
      <div className="flex-1 bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-2 opacity-5"><BrainCircuit size={100} /></div>
        <h4 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2"><Cpu /> 大脑层 (Brain)</h4>
        <div className="space-y-4">
          <div className="bg-slate-700/50 p-3 rounded-lg">
            <span className="text-xs text-blue-300 block mb-1">浅层对话 (90%)</span>
            <div className="font-mono text-white">DeepSeek-V3 / Llama-3</div>
            <div className="text-xs text-slate-400">低成本，极速响应闲聊</div>
          </div>
          <div className="bg-blue-900/30 p-3 rounded-lg border border-blue-500/30">
            <span className="text-xs text-blue-300 block mb-1">深层逻辑 (10%)</span>
            <div className="font-mono text-white">DeepSeek-R1 / GPT-4o</div>
            <div className="text-xs text-slate-400">处理战斗结算、复杂推理</div>
          </div>
        </div>
      </div>

      {/* Memory Layer */}
      <div className="flex-1 bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-2 opacity-5"><Database size={100} /></div>
        <h4 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2"><Database /> 记忆层 (Memory)</h4>
        <ul className="space-y-4 text-sm text-slate-300">
          <li className="flex items-start gap-2">
            <span className="text-purple-500 mt-1">●</span>
            <span><strong>知识图谱 (Neo4j):</strong> 记录人物关系、物品状态（如：圣剑在背包）。</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-500 mt-1">●</span>
            <span><strong>向量数据库 (Vector DB):</strong> 检索剧情摘要和情感脉络。</span>
          </li>
          <li className="bg-purple-900/20 p-2 rounded text-purple-200 text-center mt-4">
            彻底解决长程遗忘问题
          </li>
        </ul>
      </div>

      {/* Presentation Layer */}
      <div className="flex-1 bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-2 opacity-5"><Sparkles size={100} /></div>
        <h4 className="text-xl font-bold text-pink-400 mb-4 flex items-center gap-2"><Sparkles /> 表现层</h4>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-2 bg-slate-700/30 rounded">
            <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400">V</div>
            <span className="text-slate-200 text-sm">Live2D 动态立绘</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-slate-700/30 rounded">
            <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400">A</div>
            <span className="text-slate-200 text-sm">TTS 情感语音合成</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-slate-700/30 rounded">
            <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400">S</div>
            <span className="text-slate-200 text-sm">短循环背景视频生成</span>
          </div>
        </div>
      </div>
    </div>
  </SlideContainer>
);

const BusinessModelSlide = () => (
  <SlideContainer>
    <h3 className="text-3xl font-bold text-violet-400 mb-6 self-start">混合变现模型 & 财务测算</h3>
    
    <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl mb-8">
      {/* Subscription */}
      <div className="flex-1 bg-slate-800 rounded-xl p-6 border-t-4 border-blue-500">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-bold text-white">订阅制 (现金牛)</h4>
          <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded">高留存</span>
        </div>
        <div className="space-y-4">
          <div className="p-4 bg-slate-700/30 rounded-lg">
            <div className="flex justify-between mb-1">
              <span className="font-bold text-slate-200">白银会员</span>
              <span className="text-blue-400">$9.99/月</span>
            </div>
            <p className="text-xs text-slate-400">无限对话，基础记忆，无广告</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-amber-500/10 to-slate-700/30 rounded-lg border border-amber-500/20">
            <div className="flex justify-between mb-1">
              <span className="font-bold text-amber-300">黄金会员</span>
              <span className="text-amber-400">$19.99/月</span>
            </div>
            <p className="text-xs text-slate-400">DeepSeek-R1 逻辑模型，无限图片，语音通话，32k Context</p>
          </div>
        </div>
      </div>

      {/* Micro-transactions */}
      <div className="flex-1 bg-slate-800 rounded-xl p-6 border-t-4 border-pink-500">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-bold text-white">内购制 (爆发点)</h4>
          <span className="px-2 py-1 bg-pink-500/20 text-pink-300 text-xs rounded">高 ARPU</span>
        </div>
        <ul className="space-y-3 text-sm text-slate-300">
          <li className="flex items-center gap-2">
            <Zap size={16} className="text-yellow-400" />
            <span><strong>算力包：</strong> 购买额外的逻辑推理或视频生成次数。</span>
          </li>
          <li className="flex items-center gap-2">
            <Sparkles size={16} className="text-pink-400" />
            <span><strong>Gacha 卡池：</strong> 抽取SSR角色卡、动态皮肤、专属语音。</span>
          </li>
          <li className="mt-4 text-xs text-slate-400 italic">
            参考 Talkie 策略，将单用户价值最大化。
          </li>
        </ul>
      </div>
    </div>

    {/* Profit Analysis */}
    <div className="w-full max-w-6xl bg-green-900/10 border border-green-500/30 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-left">
        <h4 className="text-lg font-bold text-green-400 mb-2">DeepSeek 成本红利</h4>
        <p className="text-sm text-green-200/80 max-w-lg">
          DeepSeek V3/R1 将推理成本降低了90%以上。高活用户单日成本仅约 $0.01。
        </p>
      </div>
      <div className="flex items-center gap-8">
        <div className="text-center">
          <div className="text-3xl font-bold text-white">$1.50</div>
          <div className="text-xs text-slate-400">月边际成本 (Est.)</div>
        </div>
        <div className="h-10 w-px bg-slate-600"></div>
        <div className="text-center">
          <div className="text-3xl font-bold text-green-400">80%+</div>
          <div className="text-xs text-slate-400">预估毛利率</div>
        </div>
      </div>
    </div>
  </SlideContainer>
);

const RoadmapSlide = () => (
  <SlideContainer>
    <h3 className="text-3xl font-bold text-violet-400 mb-8 self-start">执行路线图 (GTM)</h3>
    <div className="relative border-l-2 border-slate-700 ml-4 md:ml-12 space-y-12 w-full max-w-5xl">
      
      <div className="relative pl-8 md:pl-12">
        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-violet-500 shadow-[0_0_10px_#8B5CF6]"></div>
        <h4 className="text-xl font-bold text-white mb-2">Phase 1: 最小可行性产品 (MVP)</h4>
        <p className="text-slate-400 text-sm mb-2">核心：低成本高智商</p>
        <div className="flex gap-2 flex-wrap">
          <span className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-300">DeepSeek API 接入</span>
          <span className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-300">基础养成系统</span>
          <span className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-300">Lorebook 自动化</span>
        </div>
      </div>

      <div className="relative pl-8 md:pl-12">
        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-pink-500"></div>
        <h4 className="text-xl font-bold text-white mb-2">Phase 2: 流量与变现</h4>
        <p className="text-slate-400 text-sm mb-2">核心：Gacha + TikTok 传播</p>
        <ul className="text-slate-300 text-sm list-disc pl-4 space-y-1">
          <li>TikTok 病毒营销 ("AI女友吃醋"系列)</li>
          <li>上线抽卡系统与内购商城</li>
          <li>语音通话功能 (TTS) 实装</li>
        </ul>
      </div>

      <div className="relative pl-8 md:pl-12">
        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
        <h4 className="text-xl font-bold text-white mb-2">Phase 3: 生态化</h4>
        <p className="text-slate-400 text-sm mb-2">核心：多人联机 & 创作者经济</p>
        <ul className="text-slate-300 text-sm list-disc pl-4 space-y-1">
          <li>多人跑团模式 (Multiplayer)</li>
          <li>创作者收益分成体系</li>
          <li>角色交易二级市场</li>
        </ul>
      </div>
    </div>
  </SlideContainer>
);

const ConclusionSlide = ({ restart }) => (
  <SlideContainer className="text-center">
    <h2 className="text-4xl font-bold text-white mb-6">我们的愿景</h2>
    <p className="text-2xl text-slate-300 max-w-4xl leading-relaxed mb-12">
      不仅是游戏，更是通往<span className="text-violet-400">元宇宙原住民社交</span>的第一张门票。
    </p>
    
    <div className="grid grid-cols-3 gap-8 max-w-3xl w-full mb-16">
      <div className="text-center">
        <div className="text-3xl font-bold text-white mb-1">MoE</div>
        <div className="text-xs text-slate-500">混合模型架构</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-white mb-1">RPG</div>
        <div className="text-xs text-slate-500">深度数值养成</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-white mb-1">UGC</div>
        <div className="text-xs text-slate-500">创作者生态</div>
      </div>
    </div>

    <button 
      onClick={restart}
      className="px-6 py-3 border border-slate-600 hover:bg-slate-800 text-slate-300 rounded-lg transition-colors flex items-center gap-2"
    >
      <ChevronLeft size={16} /> 重新演示
    </button>
  </SlideContainer>
);

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { component: TitleSlide, props: { startPresentation: () => nextSlide() } },
    { component: MarketSlide, props: {} },
    { component: CompetitorSlide, props: {} },
    { component: ProductStrategySlide, props: {} },
    { component: TechStackSlide, props: {} },
    { component: BusinessModelSlide, props: {} },
    { component: RoadmapSlide, props: {} },
    { component: ConclusionSlide, props: { restart: () => setCurrentSlide(0) } },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(curr => curr + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(curr => curr - 1);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="w-full h-screen bg-slate-900 text-slate-100 font-sans overflow-hidden relative selection:bg-violet-500/30">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-violet-900/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-blue-900/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex flex-col">
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <CurrentSlideComponent {...slides[currentSlide].props} />
        </div>

        {/* Navigation Bar */}
        <div className="h-16 border-t border-slate-800 bg-slate-900/80 backdrop-blur-md flex items-center justify-between pl-6 pr-24 z-20">
          <div className="text-slate-500 text-sm font-mono">
            AI Dungeon Business Plan <span className="mx-2">|</span> {currentSlide + 1} / {slides.length}
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={prevSlide} 
              disabled={currentSlide === 0}
              className="p-2 rounded-full hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
            >
              <ChevronLeft />
            </button>
            <button 
              onClick={nextSlide} 
              disabled={currentSlide === slides.length - 1}
              className="p-2 rounded-full hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-1 bg-slate-800 w-full">
          <div 
            className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500 ease-out"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          ></div>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes grow-y {
          from { height: 0; }
          to { height: 100%; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .animate-grow-y {
          animation: grow-y 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}