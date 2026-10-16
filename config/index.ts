/**
 * 配置模块主入口
 * 
 * 统一导出所有配置相关的内容
 */

// 站点配置（核心）
export { 
  siteConfig, 
  getResolvedSiteConfig, 
  getAllDisplayGames,
  getFooterGameLinks,
  getCopyrightText,
} from './site.config';

// 类型定义
export type { 
  SiteConfig, 
  SiteMetadata, 
  SiteImages, 
  SocialLinks, 
  QuickLink,
  ResolvedSiteConfig,
} from './types/site';

export type { 
  GameBasicInfo, 
  GameLibraryItem, 
  GameDetailContent,
  MainGameConfig,
  SubGameConfig,
  FAQItem,
  FeatureItem,
} from './types/game';

export type { 
  ThemeConfig, 
  ThemeId, 
  ThemeColors,
} from './types/theme';

// 游戏库
export { 
  gameLibrary, 
  getAllGames, 
  getGameBySlug, 
  getGamesBySlugs,
  getGameBasicInfo,
} from './games/library';

// 主题
export { 
  themePresets, 
  getTheme, 
  getThemeClasses,
} from './themes/presets';

