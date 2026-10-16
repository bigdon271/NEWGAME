/**
 * 站点配置类型定义
 */

import type { ThemeId } from './theme';
import type { MainGameConfig, GameBasicInfo } from './game';

// 社交链接
export interface SocialLinks {
  twitter?: string;
  facebook?: string;
  telegram?: string;
  github?: string;
  pinterest?: string;
}

// 快速链接
export interface QuickLink {
  text: string;
  href: string;
}

// 图片资源配置
export interface SiteImages {
  // Favicon相关
  favicon: string;
  favicon16: string;
  favicon32: string;
  appleTouchIcon: string;
  
  // Logo
  logo: string;
  
  // OG图片
  ogImage: string;
  
  // Manifest
  manifest: string;
}

// 站点元数据
export interface SiteMetadata {
  name: string;
  domain: string;
  url: string;
  email: string;
  author: string;
  description: string;
}

// 完整站点配置
export interface SiteConfig {
  // ============ 站点元数据 ============
  metadata: SiteMetadata;
  
  // ============ 主游戏配置（首页SEO核心）============
  mainGame: MainGameConfig;
  
  // ============ 子游戏列表（6个slug）============
  subGameSlugs: string[];
  
  // ============ 主题配置 ============
  theme: ThemeId;
  
  // ============ 外链配置 ============
  links: {
    social: SocialLinks;
    quickLinks: QuickLink[];
  };
  
  // ============ 图片资源 ============
  images: SiteImages;
  
  // ============ 页脚配置 ============
  footer: {
    copyright: string;  // 如 "© {year} {siteName}. All rights reserved."
  };
}

// 用于生成的站点运行时配置（包含解析后的子游戏数据）
export interface ResolvedSiteConfig extends Omit<SiteConfig, 'subGameSlugs'> {
  subGames: GameBasicInfo[];
}

