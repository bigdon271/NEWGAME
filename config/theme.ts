/**
 * 主题配置 - 适配层
 * 
 * 从新的主题系统生成旧格式的配置
 */

import { siteConfig } from './site.config';
import { getThemeClasses } from './themes/presets';

// 获取当前主题
const themeClasses = getThemeClasses(siteConfig.theme);

export const theme = {
  header: {
    colors: {
      background: themeClasses.header.bg,
      border: "border-b border-white/10",
      text: themeClasses.header.text,
      hover: "hover:text-slate-900 dark:hover:text-white hover:scale-105 transition-all",
    },
    layout: {
      height: "h-16",
      position: "sticky top-0",
      zIndex: "z-50",
      blur: "backdrop-blur-sm shadow-lg shadow-black/5",
      logo: {
        wrapper: "flex items-center gap-4",
        image: "object-contain",
      },
      nav: {
        wrapper: "flex items-center gap-6 mr-4",
        list: "hidden md:flex items-center space-x-8",
      }
    },
    spacing: {
      container: "container",
      nav: "space-x-4 lg:space-x-6",
      search: "space-x-2",
    },
  },
  footer: {
    colors: {
      background: themeClasses.footer.bg,
      border: "border-t border-white/10",
      text: themeClasses.footer.text,
      mutedText: themeClasses.footer.textMuted,
      hover: "hover:text-slate-900 dark:hover:text-white",
    },
    layout: {
      padding: "py-8",
      container: "container mx-auto px-4",
      grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
    },
    spacing: {
      sectionTitle: "mb-4",
      linkList: "space-y-2",
    },
  },
  layout: {
    section: {
      spacing: "mb-24",
      scrollMargin: "scroll-mt-16"
    }
  },
  howToPlay: {
    colors: {
      title: "text-foreground",
      description: "text-muted-foreground",
      stepNumber: "bg-primary text-primary-foreground"
    },
    layout: {
      section: "",
      container: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",
      content: "prose prose-neutral dark:prose-invert max-w-none",
      imageContainer: "rounded-lg overflow-hidden",
      card: "overflow-hidden"
    },
    spacing: {
      section: "py-12",
      title: "mb-8",
      content: "space-y-4"
    }
  },
  whatIs: {
    colors: {
      card: "bg-card",
      title: "text-foreground",
      description: "text-muted-foreground",
      link: "text-primary hover:underline"
    },
    layout: {
      section: "",
      container: "container",
      card: "rounded-lg shadow-lg",
      logo: "object-contain",
      logoWrapper: "flex justify-center"
    },
    spacing: {
      section: "mb-16",
      card: "p-8",
      title: "mb-4",
      description: "mb-6",
      links: "gap-6"
    },
    typography: {
      title: "text-3xl font-bold",
      description: "text-lg leading-relaxed whitespace-pre-line",
      link: "font-semibold"
    }
  },
  faq: {
    spacing: {
      section: "mb-16",
      title: "mb-8"
    },
    typography: {
      title: "text-3xl font-bold text-center"
    },
    layout: {
      section: "",
      accordion: "w-full"
    }
  },
  gameSection: {
    colors: {
      container: "bg-card",
      fullscreenButton: "bg-black/20 hover:bg-black/40 text-white"
    },
    layout: {
      section: "text-center",
      container: "aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl relative",
      iframe: "w-full h-full border-0",
      fullscreenButton: "absolute top-2 right-2 p-2 rounded-lg transition-colors"
    },
    spacing: {
      section: "mb-24",
      title: "mb-8",
      container: "mb-16"
    },
    typography: {
      title: "text-4xl font-bold"
    }
  },
  otherGames: {
    layout: {
      section: "mb-16",
      grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
      card: "overflow-hidden hover:shadow-lg transition-shadow",
      image: "w-full h-48 object-cover"
    },
    spacing: {
      title: "mb-8",
      cardTitle: "mb-2",
      cardDescription: "mb-4"
    },
    typography: {
      title: "text-3xl font-bold text-center",
      cardTitle: "text-lg text-center"
    }
  },
  features: {
    colors: {
      item1: themeClasses.feature.colors[0],
      item2: themeClasses.feature.colors[1],
      item3: themeClasses.feature.colors[2],
      item4: themeClasses.feature.colors[3],
    }
  }
} as const;
