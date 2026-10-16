/**
 * 站点配置 - 整个网站的核心配置文件
 * 
 * 要创建新站点，只需：
 * 1. 复制此文件
 * 2. 修改以下配置
 * 3. 部署到新域名
 */

import type { SiteConfig } from './types/site';
import { gameLibrary } from './games/library';

// ============================================================
// 当前站点配置
// ============================================================

/**
 * ⚠️ 核心策略说明 (CRITICAL STRATEGY NOTE):
 * 
 * 1. 【主游戏是绝对核心】(Main Game is KING):
 *    - 整个网站的域名 (Domain)、SEO标题、关键词全是围绕 Main Game 设定的。
 *    - Main Game 决定了网站的流量来源和核心定位。
 * 
 * 2. 【子游戏仅作填充】(Sub Games are Filler):
 *    - 子游戏仅仅是为了丰富页面内容，增加页面数量。
 *    - 主要目的是为了通过 Google AdSense 审核 (内容丰富度)。
 *    - 不要为了子游戏去调整核心 SEO 策略。
 */

export const siteConfig: SiteConfig = {

  // ============ 站点元数据 ============
  metadata: {
    name: 'Crazy Cattle 3D',
    domain: 'crazy-cattle.net',
    url: 'https://crazy-cattle.net',
    email: 'support@crazy-cattle.net',
    author: 'Crazy Cattle 3D',
    description: 'Play Crazy Cattle 3D unblocked online for free. Control crazy cattle in this 3D action game. No download required, start playing instantly in your browser!',
  },

  // ============ 主游戏配置（首页SEO核心）============
  mainGame: {
    // 基础信息
    slug: 'crazy-cattle-3d',
    name: 'Crazy Cattle 3D',
    shortDesc: 'The original free online 3D action game with explosive physics-based gameplay.',
    image: '/assets/crazycattle3d-howto.jpg',
    iframeSrc: '/game/crazycattle3d/index.html',

    // SEO配置
    seo: {
      title: 'Crazy Cattle 3D | Unblocked Free Game | crazy-cattle.net',
      description: 'Play Crazy Cattle 3D unblocked online for free. Control crazy cattle in this 3D action game. No download required, start playing instantly in your browser!',
      keywords: ['crazy cattle', '3d game', 'online game', 'free game', 'physics game', 'battle royale', 'unblocked'],
    },

    // Features（仅首页有）
    features: {
      title: 'Revolutionary Features of Crazy Cattle 3D - Play Free Online Game',
      items: [
        {
          title: 'Advanced Physics Engine',
          description: 'Crazy Cattle 3D introduces a groundbreaking physics engine specifically designed for authentic cattle movement. Every animal responds realistically to environmental factors, creating dynamic and unpredictable gameplay moments when you play this free game. The physics system in Crazy Cattle 3D ensures precise collision detection, allowing players to execute tactical maneuvers like momentum-based attacks and strategic dodges.',
        },
        {
          title: 'Global Battle Environments',
          description: "Explore Crazy Cattle 3D's three meticulously crafted battle arenas: Ireland's rolling hills perfect for building momentum and executing aerial strikes, Iceland's treacherous volcanic terrain offering tactical hazard zones, and New Zealand's mountainous landscape enabling vertical combat strategies. Each environment in this unblocked online game features carefully balanced power-up locations and strategic choke points.",
        },
        {
          title: 'Pure Skill-Based Combat',
          description: 'Crazy Cattle 3D sets itself apart with a pure skill-based progression system - no paid advantages, just pure tactical gameplay when you play Crazy Cattle 3D online free. Master the physics-based combat where perfectly timed collisions send opponents flying off the map.',
        },
        {
          title: 'Battle Royale Innovation',
          description: "Experience Crazy Cattle 3D's unique take on the battle royale format, where physics-based combat meets strategic gameplay. Each 30-minute match features a dynamically shrinking arena that forces tactical confrontations. The streamlined gameplay loop makes Crazy Cattle 3D easy to understand but challenging to master in this free to play online game.",
        },
      ],
    },

    // 详细内容
    content: {
      whatIs: {
        title: 'Everything about Crazy Cattle 3D - Play Game Online Free',
        description: "Crazy Cattle 3D is an independently developed free online battle royale game where players control explosive sheep across varied terrain. You can play this game unblocked anytime. Unlike traditional battle royales, we focus on physics-based gameplay with momentum and collision mechanics rather than weapon collection.\n\nMaster the art of sheep locomotion across three distinct environments in this exciting online game: the rolling hills of Ireland, volcanic Iceland, and mountainous New Zealand. Each map offers unique strategic opportunities, creating a chaotic yet strategic 30-minute battle experience.\n\nWhile the game's high difficulty level may challenge newcomers, mastering our unique physics system delivers a deeply satisfying experience. Play this free online game directly in your browser unblocked - no downloads needed, just pure explosive sheep action that keeps you coming back for more.",
        logo: '/assets/img/android-chrome-512x512.png',
        logoAlt: 'Crazy Cattle 3D - Free Online Unblocked Game Logo',
      },
      howToPlay: {
        title: 'How to Play Crazy Cattle 3D Online Free - Game Controls & Guide',
        description: "Playing Crazy Cattle 3D online unblocked is easy: Use WASD keys for movement and mouse for precise sheep steering when you play this free browser game. The space bar triggers your special collision ability in Crazy Cattle 3D - master the timing for devastating impacts. Perfect your control over the sheep's momentum as you navigate through the 3D battle arena.\n\nSuccess in Crazy Cattle 3D multiplayer battles depends on mastering the physics-based momentum system in this online game. Strategically build speed by moving downhill in the 3D arena, then unleash powerful attacks or execute quick escapes. Crazy Cattle 3D's unique collision mechanics reward skillful timing.\n\nWin more Crazy Cattle 3D matches by starting defensively - focus on survival and strategic positioning. Study each arena's layout to discover prime attack positions and danger zones. After defeats when you play Crazy Cattle 3D, spectate top players to learn pro techniques. Keep practicing this free online physics game!",
        image: '/assets/crazycattle3d-howto.jpg',
        imageAlt: 'Crazy Cattle 3D Game Guide - Play Online Unblocked, Controls, Physics, and Strategy Tutorial',
      },
      faq: {
        title: 'Frequently Asked Questions - Crazy Cattle 3D Online Game',
        items: [
          {
            question: 'Where can I find and play the original Crazy Cattle 3D online?',
            answer: 'The original Crazy Cattle 3D game can officially be found on itch.io. However, you can also play Crazy Cattle 3D unblocked on various free online games websites that host web-based versions. This allows you to play the game directly in your browser on Windows, Mac, Linux, and other web-supported environments.',
          },
          {
            question: 'Can I play Crazy Cattle 3D online on my mobile device?',
            answer: 'Yes, since Crazy Cattle 3D is available in web-based environments (as a browser game), you can often play this free online game on mobile devices (phones and tablets) that support modern web browsers. Look for unblocked versions to play the game on the go.',
          },
          {
            question: 'Who is the creator of the Crazy Cattle 3D game?',
            answer: "Currently, little is publicly known about the specific original creator or development team behind the Crazy Cattle 3D game. Most assets appear to be original works. Many players enjoy playing this free online game for its unique physics and fun regardless!",
          },
          {
            question: 'How difficult is the Crazy Cattle 3D online game for new players?',
            answer: "Crazy Cattle 3D is designed with an intuitive physics-based control system that's easy to grasp but challenging to master. The game starts with basic movement mechanics, allowing new players to enjoy immediate action while gradually discovering advanced techniques when you play this free game.",
          },
          {
            question: 'What are the technical requirements to play Crazy Cattle 3D online smoothly?',
            answer: 'To best play Crazy Cattle 3D online for free and unblocked, we recommend using a modern browser (Chrome, Firefox, or Edge) and a stable internet connection. The game is optimized to run smoothly on most devices.',
          },
        ],
      },
    },
  },

  // ============ 子游戏列表（5个，加上主游戏共6个）============
  // 从游戏库(library.ts)中选择游戏slug填入
  subGameSlugs: [
    'sub-game-1',
    'sub-game-2',
    'sub-game-3',
    'sub-game-4',
    'sub-game-5',
    'sub-game-6',
  ],

  // ============ 主题配色 ============
  theme: 'warm',

  // ============ 外链配置 ============
  links: {
    social: {
      twitter: 'CrazyCattle',
      facebook: 'CrazyCattle',
      telegram: 'https://t.me/s/free_unblocked_games',
      github: 'https://github.com/WeiWenxing/crazycattle3d',
      pinterest: 'https://www.pinterest.com/pin/581245895696208484/',
    },
    quickLinks: [
      { text: 'Telegram', href: 'https://t.me/s/free_unblocked_games' },
      { text: 'CAL', href: 'https://cal.com/vincent-ai' },
      { text: 'Patreon', href: 'https://www.patreon.com/posts/play-free-crazy-130738673' },
      { text: 'Linktr', href: 'https://linktr.ee/vincent20250520' },
      { text: 'Creem', href: 'https://www.creem.io/bip/vincent-ai' },
      { text: 'GetAllMyLinks', href: 'https://getallmylinks.com/vincent' },
      { text: 'AllMyLinks', href: 'https://allmylinks.com/vincent04065' },
      { text: 'Pinterest | Crazy Cattle 3D', href: 'https://www.pinterest.com/pin/581245895696208484/' },
      { text: 'Pinterest | Doodle Baseball', href: 'https://www.pinterest.com/pin/581245895696901681/' },
      { text: 'Github | Crazy Cattle 3D', href: 'https://github.com/WeiWenxing/crazycattle3d/blob/main/README_EN.md' },
      { text: 'H5 Joy Games', href: 'https://h5joy.org' },
      { text: 'Shootz Game', href: 'https://shootz.net' },
    ],
  },

  // ============ 图片资源 ============
  images: {
    favicon: '/assets/img/favicon.ico',
    favicon16: '/assets/img/favicon-16x16.png',
    favicon32: '/assets/img/favicon-32x32.png',
    appleTouchIcon: '/assets/img/apple-touch-icon.png',
    logo: '/assets/img/android-chrome-192x192.png',
    ogImage: '/assets/img/crazy-cattle-3d-og-image.png',
    manifest: '/assets/img/site.webmanifest',
  },

  // ============ 页脚配置 ============
  footer: {
    copyright: '© {year} {siteName}. All rights reserved.',
  },
};

// ============================================================
// 工具函数
// ============================================================

/**
 * 获取解析后的站点配置（包含完整的子游戏数据）
 */
export function getResolvedSiteConfig() {
  const subGames = siteConfig.subGameSlugs
    .map(slug => {
      const game = gameLibrary[slug];
      if (!game) return null;
      return {
        slug: game.slug,
        name: game.name,
        shortDesc: game.shortDesc,
        image: game.image,
        iframeSrc: game.iframeSrc,
        externalUrl: game.externalUrl,
      };
    })
    .filter((game): game is NonNullable<typeof game> => game !== null);

  return {
    ...siteConfig,
    subGames,
  };
}

/**
 * 获取所有游戏列表（主游戏 + 子游戏）用于展示
 */
export function getAllDisplayGames() {
  const mainGame = {
    slug: siteConfig.mainGame.slug,
    name: siteConfig.mainGame.name,
    shortDesc: siteConfig.mainGame.shortDesc,
    image: siteConfig.mainGame.image,
    url: '/',
  };

  const subGames = siteConfig.subGameSlugs.map(slug => {
    const game = gameLibrary[slug];
    return {
      slug: game?.slug || slug,
      name: game?.name || slug,
      shortDesc: game?.shortDesc || '',
      image: game?.image || '',
      url: `/${slug}`,
    };
  });

  return [mainGame, ...subGames];
}

/**
 * 获取页脚游戏链接列表
 */
export function getFooterGameLinks() {
  return getAllDisplayGames().map(game => ({
    text: game.name,
    href: game.url,
  }));
}

/**
 * 替换版权文本中的占位符
 */
export function getCopyrightText() {
  return siteConfig.footer.copyright
    .replace('{year}', new Date().getFullYear().toString())
    .replace('{siteName}', siteConfig.metadata.name);
}

