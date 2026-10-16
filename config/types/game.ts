/**
 * 游戏配置类型定义
 */

// FAQ 项目
export interface FAQItem {
  question: string;
  answer: string;
}

// 特性项目
export interface FeatureItem {
  title: string;
  description: string;
}

// 游戏基础信息（用于游戏卡片展示）
export interface GameBasicInfo {
  slug: string;           // URL路径标识
  name: string;           // 显示名称
  shortDesc: string;      // 简短描述（游戏卡片用）
  image: string;          // 游戏卡片图片
  iframeSrc: string;      // iframe嵌入地址
  externalUrl?: string;   // 外部游戏链接（可选）
}

// 游戏详细内容（用于游戏详情页）
export interface GameDetailContent {
  // What Is 部分
  whatIs: {
    title: string;
    description: string;  // 支持 \n\n 换行
    logo: string;
    logoAlt: string;
  };

  // How to Play 部分
  howToPlay: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
  };

  // FAQ 部分
  faq: {
    title: string;
    items: FAQItem[];
  };
}

// 主游戏完整配置（首页用，包含Features）
export interface MainGameConfig extends GameBasicInfo {
  // SEO配置
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };

  // Features 部分（仅首页有）
  features: {
    title: string;
    items: FeatureItem[];
  };

  // 详细内容
  content: GameDetailContent;
}

// 子游戏完整配置（子页面用，无Features）
export interface SubGameConfig extends GameBasicInfo {
  // SEO配置
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };

  // 详细内容（无Features）
  content: GameDetailContent;
}

// 游戏库中的游戏配置（可复用）
export interface GameLibraryItem extends GameBasicInfo {
  // SEO配置
  seo: {
    titleTemplate: string;    // 标题模板，如 "{name} | Free Games | {domain}"
    description: string;
    keywords: string[];
  };

  // Features（可选，仅当作为主游戏时使用）
  features?: {
    title: string;
    items: FeatureItem[];
  };

  // 详细内容
  content: GameDetailContent;
}

