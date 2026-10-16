/**
 * 6套游戏网站主题预设
 */

import type { ThemeConfig, ThemeId } from '../types/theme';

// ============ 1. 暖色调 (Warm) - 当前使用 ============
const warmTheme: ThemeConfig = {
  id: 'warm',
  name: '暖阳橙光',
  description: '温暖舒适的amber/orange色调，适合休闲游戏',
  colors: {
    light: {
      headerBg: 'bg-gradient-to-b from-amber-50/90 via-orange-50/85 to-white/80',
      footerBg: 'bg-gradient-to-t from-amber-50/90 via-orange-50/85 to-white/80',
      primary: 'text-orange-600',
      primaryHover: 'hover:text-orange-700',
      text: 'text-slate-800',
      textMuted: 'text-slate-600',
      border: 'border-white/10',
      featureColors: ['text-amber-600', 'text-orange-600', 'text-yellow-600', 'text-red-500'],
    },
    dark: {
      headerBg: 'dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-800/90 dark:to-slate-800/80',
      footerBg: 'dark:bg-gradient-to-t dark:from-slate-900 dark:via-slate-800/90 dark:to-slate-800/80',
      primary: 'dark:text-orange-400',
      primaryHover: 'dark:hover:text-orange-300',
      text: 'dark:text-white/90',
      textMuted: 'dark:text-slate-400',
      border: 'dark:border-white/10',
      featureColors: ['dark:text-amber-400', 'dark:text-orange-400', 'dark:text-yellow-400', 'dark:text-red-400'],
    },
  },
};

// ============ 2. 海洋蓝 (Ocean) ============
const oceanTheme: ThemeConfig = {
  id: 'ocean',
  name: '深海蔚蓝',
  description: '清爽的海洋蓝色调，适合休闲/益智游戏',
  colors: {
    light: {
      headerBg: 'bg-gradient-to-b from-sky-50/90 via-blue-50/85 to-white/80',
      footerBg: 'bg-gradient-to-t from-sky-50/90 via-blue-50/85 to-white/80',
      primary: 'text-blue-600',
      primaryHover: 'hover:text-blue-700',
      text: 'text-slate-800',
      textMuted: 'text-slate-600',
      border: 'border-sky-100/50',
      featureColors: ['text-blue-600', 'text-cyan-600', 'text-teal-600', 'text-sky-600'],
    },
    dark: {
      headerBg: 'dark:bg-gradient-to-b dark:from-slate-900 dark:via-blue-950/50 dark:to-slate-900/80',
      footerBg: 'dark:bg-gradient-to-t dark:from-slate-900 dark:via-blue-950/50 dark:to-slate-900/80',
      primary: 'dark:text-blue-400',
      primaryHover: 'dark:hover:text-blue-300',
      text: 'dark:text-white/90',
      textMuted: 'dark:text-slate-400',
      border: 'dark:border-blue-500/20',
      featureColors: ['dark:text-blue-400', 'dark:text-cyan-400', 'dark:text-teal-400', 'dark:text-sky-400'],
    },
  },
};

// ============ 3. 森林绿 (Forest) ============
const forestTheme: ThemeConfig = {
  id: 'forest',
  name: '翠林清风',
  description: '自然的森林绿色调，适合农场/模拟类游戏',
  colors: {
    light: {
      headerBg: 'bg-gradient-to-b from-emerald-50/90 via-green-50/85 to-white/80',
      footerBg: 'bg-gradient-to-t from-emerald-50/90 via-green-50/85 to-white/80',
      primary: 'text-emerald-600',
      primaryHover: 'hover:text-emerald-700',
      text: 'text-slate-800',
      textMuted: 'text-slate-600',
      border: 'border-emerald-100/50',
      featureColors: ['text-emerald-600', 'text-green-600', 'text-teal-600', 'text-lime-600'],
    },
    dark: {
      headerBg: 'dark:bg-gradient-to-b dark:from-slate-900 dark:via-emerald-950/40 dark:to-slate-900/80',
      footerBg: 'dark:bg-gradient-to-t dark:from-slate-900 dark:via-emerald-950/40 dark:to-slate-900/80',
      primary: 'dark:text-emerald-400',
      primaryHover: 'dark:hover:text-emerald-300',
      text: 'dark:text-white/90',
      textMuted: 'dark:text-slate-400',
      border: 'dark:border-emerald-500/20',
      featureColors: ['dark:text-emerald-400', 'dark:text-green-400', 'dark:text-teal-400', 'dark:text-lime-400'],
    },
  },
};

// ============ 4. 日落紫红 (Sunset) ============
const sunsetTheme: ThemeConfig = {
  id: 'sunset',
  name: '霞光紫韵',
  description: '浪漫的紫红渐变，适合音乐/创意类游戏',
  colors: {
    light: {
      headerBg: 'bg-gradient-to-b from-pink-50/90 via-purple-50/85 to-white/80',
      footerBg: 'bg-gradient-to-t from-pink-50/90 via-purple-50/85 to-white/80',
      primary: 'text-purple-600',
      primaryHover: 'hover:text-purple-700',
      text: 'text-slate-800',
      textMuted: 'text-slate-600',
      border: 'border-purple-100/50',
      featureColors: ['text-purple-600', 'text-pink-600', 'text-fuchsia-600', 'text-violet-600'],
    },
    dark: {
      headerBg: 'dark:bg-gradient-to-b dark:from-slate-900 dark:via-purple-950/40 dark:to-slate-900/80',
      footerBg: 'dark:bg-gradient-to-t dark:from-slate-900 dark:via-purple-950/40 dark:to-slate-900/80',
      primary: 'dark:text-purple-400',
      primaryHover: 'dark:hover:text-purple-300',
      text: 'dark:text-white/90',
      textMuted: 'dark:text-slate-400',
      border: 'dark:border-purple-500/20',
      featureColors: ['dark:text-purple-400', 'dark:text-pink-400', 'dark:text-fuchsia-400', 'dark:text-violet-400'],
    },
  },
};

// ============ 5. 赛博朋克 (Cyber) ============
const cyberTheme: ThemeConfig = {
  id: 'cyber',
  name: '赛博霓虹',
  description: '科技感霓虹配色，适合射击/竞技类游戏',
  colors: {
    light: {
      headerBg: 'bg-gradient-to-b from-violet-100/90 via-fuchsia-50/85 to-cyan-50/80',
      footerBg: 'bg-gradient-to-t from-violet-100/90 via-fuchsia-50/85 to-cyan-50/80',
      primary: 'text-fuchsia-600',
      primaryHover: 'hover:text-fuchsia-700',
      text: 'text-slate-800',
      textMuted: 'text-slate-600',
      border: 'border-fuchsia-100/50',
      featureColors: ['text-fuchsia-600', 'text-cyan-600', 'text-violet-600', 'text-pink-600'],
    },
    dark: {
      headerBg: 'dark:bg-gradient-to-b dark:from-gray-950 dark:via-violet-950/60 dark:to-gray-950/90',
      footerBg: 'dark:bg-gradient-to-t dark:from-gray-950 dark:via-violet-950/60 dark:to-gray-950/90',
      primary: 'dark:text-fuchsia-400',
      primaryHover: 'dark:hover:text-fuchsia-300',
      text: 'dark:text-cyan-50',
      textMuted: 'dark:text-violet-300',
      border: 'dark:border-fuchsia-500/30',
      featureColors: ['dark:text-fuchsia-400', 'dark:text-cyan-400', 'dark:text-violet-400', 'dark:text-pink-400'],
    },
  },
};

// ============ 6. 极简黑白 (Minimal) ============
const minimalTheme: ThemeConfig = {
  id: 'minimal',
  name: '极简素雅',
  description: '干净的黑白灰配色，适合棋牌/文字类游戏',
  colors: {
    light: {
      headerBg: 'bg-gradient-to-b from-gray-50/95 via-slate-50/90 to-white/85',
      footerBg: 'bg-gradient-to-t from-gray-50/95 via-slate-50/90 to-white/85',
      primary: 'text-gray-800',
      primaryHover: 'hover:text-gray-900',
      text: 'text-gray-800',
      textMuted: 'text-gray-500',
      border: 'border-gray-200/50',
      featureColors: ['text-gray-700', 'text-slate-700', 'text-zinc-700', 'text-neutral-700'],
    },
    dark: {
      headerBg: 'dark:bg-gradient-to-b dark:from-gray-950 dark:via-gray-900/95 dark:to-gray-900/90',
      footerBg: 'dark:bg-gradient-to-t dark:from-gray-950 dark:via-gray-900/95 dark:to-gray-900/90',
      primary: 'dark:text-gray-200',
      primaryHover: 'dark:hover:text-white',
      text: 'dark:text-gray-100',
      textMuted: 'dark:text-gray-400',
      border: 'dark:border-gray-700/50',
      featureColors: ['dark:text-gray-300', 'dark:text-slate-300', 'dark:text-zinc-300', 'dark:text-neutral-300'],
    },
  },
};

// ============ 导出所有主题 ============
export const themePresets: Record<ThemeId, ThemeConfig> = {
  warm: warmTheme,
  ocean: oceanTheme,
  forest: forestTheme,
  sunset: sunsetTheme,
  cyber: cyberTheme,
  minimal: minimalTheme,
};

// 获取主题配置
export function getTheme(id: ThemeId): ThemeConfig {
  return themePresets[id];
}

// 获取合并后的主题类名
export function getThemeClasses(id: ThemeId) {
  const theme = themePresets[id];
  return {
    header: {
      bg: `${theme.colors.light.headerBg} ${theme.colors.dark.headerBg}`,
      text: `${theme.colors.light.text} ${theme.colors.dark.text}`,
      border: `${theme.colors.light.border} ${theme.colors.dark.border}`,
    },
    footer: {
      bg: `${theme.colors.light.footerBg} ${theme.colors.dark.footerBg}`,
      text: `${theme.colors.light.text} ${theme.colors.dark.text}`,
      textMuted: `${theme.colors.light.textMuted} ${theme.colors.dark.textMuted}`,
    },
    feature: {
      colors: theme.colors.light.featureColors.map((light, i) => 
        `${light} ${theme.colors.dark.featureColors[i]}`
      ) as [string, string, string, string],
    },
    primary: `${theme.colors.light.primary} ${theme.colors.dark.primary}`,
    primaryHover: `${theme.colors.light.primaryHover} ${theme.colors.dark.primaryHover}`,
  };
}

