/**
 * TypeScript 类型定义和配置导出
 * 
 * 适配层 - 提供向后兼容的 siteConfig 导出
 */

import { siteConfig as newSiteConfig } from './site.config';

// 定义旧的配置类型（保持向后兼容）
export interface SiteConfig {
  name: string;
  description: string;
  domain: string;
  url: string;
  email: string;
  author: string;
  social: {
    twitter: string;
    facebook: string;
  };
  metadata: {
    keywords: string[];
    themeColor: string;
    manifestPath: string;
  };
  images: {
    icon: {
      favicon: string;
      favicon16: string;
      favicon32: string;
      apple: string;
    };
    og: string;
  };
}

// 从新配置生成旧格式的配置
export const siteConfig: SiteConfig = {
  name: newSiteConfig.metadata.name,
  description: newSiteConfig.metadata.description,
  domain: newSiteConfig.metadata.domain,
  url: newSiteConfig.metadata.url,
  email: newSiteConfig.metadata.email,
  author: newSiteConfig.metadata.author,
  social: {
    twitter: newSiteConfig.links.social.twitter || '',
    facebook: newSiteConfig.links.social.facebook || '',
  },
  metadata: {
    keywords: newSiteConfig.mainGame.seo.keywords,
    themeColor: "#ffffff",
    manifestPath: newSiteConfig.images.manifest,
  },
  images: {
    icon: {
      favicon: newSiteConfig.images.favicon,
      favicon16: newSiteConfig.images.favicon16,
      favicon32: newSiteConfig.images.favicon32,
      apple: newSiteConfig.images.appleTouchIcon,
    },
    og: newSiteConfig.images.ogImage,
  },
};
