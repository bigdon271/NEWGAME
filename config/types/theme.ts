/**
 * 主题配置类型定义
 */

// 主题ID
export type ThemeId = 
  | 'warm'      // 暖色调（amber/orange）
  | 'ocean'     // 海洋蓝
  | 'forest'    // 森林绿
  | 'sunset'    // 日落紫红
  | 'cyber'     // 赛博朋克
  | 'minimal';  // 极简黑白

// 颜色配置
export interface ThemeColors {
  // Header/Footer 渐变背景
  headerBg: string;
  footerBg: string;
  
  // 主色调
  primary: string;
  primaryHover: string;
  
  // 文字颜色
  text: string;
  textMuted: string;
  
  // 边框
  border: string;
  
  // 特性标题颜色（4个）
  featureColors: [string, string, string, string];
}

// 完整主题配置
export interface ThemeConfig {
  id: ThemeId;
  name: string;
  description: string;
  colors: {
    light: ThemeColors;
    dark: ThemeColors;
  };
}

