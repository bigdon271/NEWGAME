/**
 * 游戏库 - 所有可复用的游戏配置
 * 
 * 这个文件包含所有可以在网站中使用的游戏配置
 * 每个游戏可以作为主游戏（首页）或子游戏使用
 * 
 * ⚠️ 注意：只保留了1个完整示例游戏，其他5个为空模板占位
 */

import type { GameLibraryItem } from '../types/game';

// ============================================================
// 空模板占位图片
// ============================================================
const PLACEHOLDER_IMAGE = '/assets/img/placeholder-game.png';

// ============================================================
// 创建空模板游戏
// ============================================================
function createPlaceholderGame(slug: string, index: number): GameLibraryItem {
  const name = `Game Slot ${index}`;
  return {
    slug,
    name,
    shortDesc: 'Coming soon... Stay tuned for this exciting new game!',
    image: PLACEHOLDER_IMAGE,
    iframeSrc: '',  // 空iframe，需要添加实际游戏时填写

    seo: {
      titleTemplate: '{name} | Free Games | {domain}',
      description: `${name} - A new game coming soon to our platform. Stay tuned!`,
      keywords: ['game', 'free online', 'coming soon'],
    },

    content: {
      whatIs: {
        title: `About ${name}`,
        description: 'This game is coming soon! We are working hard to bring you an amazing gaming experience. Stay tuned for updates.',
        logo: '/assets/img/android-chrome-512x512.png',
        logoAlt: `${name} Logo`,
      },
      howToPlay: {
        title: `How to Play ${name}`,
        description: 'Instructions will be available once the game is released. Check back soon!',
        image: PLACEHOLDER_IMAGE,
        imageAlt: `${name} Guide`,
      },
      faq: {
        title: `${name} FAQ`,
        items: [
          { question: 'When will this game be available?', answer: 'We are working on adding this game soon. Please check back later!' },
          { question: 'Will it be free to play?', answer: 'Yes, all games on our platform are free to play!' },
          { question: 'Will it work on mobile?', answer: 'We aim to make all our games mobile-friendly.' },
        ],
      },
    },
  };
}

// ============================================================
// 游戏库配置
// ============================================================

export const gameLibrary: Record<string, GameLibraryItem> = {

  // ============================================================
  // 📌 示例游戏 - Crazy Cattle 3D（完整配置）
  // ============================================================
  'crazy-cattle-3d': {
    slug: 'crazy-cattle-3d',
    name: 'Crazy Cattle 3D',
    shortDesc: 'The original free online 3D action game with explosive physics-based gameplay. Control crazy cattle and battle it out!',
    image: '/assets/crazycattle3d-howto.jpg',
    iframeSrc: '/game/crazycattle3d/index.html',

    seo: {
      titleTemplate: '{name} | Play Free Online Game | {domain}',
      description: 'Play Crazy Cattle 3D unblocked online for free. Control crazy cattle in this 3D action game. No download required, start playing instantly in your browser!',
      keywords: ['crazy cattle', '3d game', 'online game', 'free game', 'physics game', 'battle royale'],
    },

    features: {
      title: 'Revolutionary Features of Crazy Cattle 3D - Play Free Online Game',
      items: [
        {
          title: 'Advanced Physics Engine',
          description: 'Crazy Cattle 3D introduces a groundbreaking physics engine specifically designed for authentic cattle movement. Every animal responds realistically to environmental factors, creating dynamic and unpredictable gameplay moments when you play this free game.',
        },
        {
          title: 'Global Battle Environments',
          description: "Explore Crazy Cattle 3D's three meticulously crafted battle arenas: Ireland's rolling hills, Iceland's volcanic terrain, and New Zealand's mountainous landscape. Each environment in this unblocked online game features carefully balanced power-up locations.",
        },
        {
          title: 'Pure Skill-Based Combat',
          description: 'Crazy Cattle 3D sets itself apart with a pure skill-based progression system - no paid advantages, just pure tactical gameplay when you play Crazy Cattle 3D online free.',
        },
        {
          title: 'Battle Royale Innovation',
          description: "Experience Crazy Cattle 3D's unique take on the battle royale format, where physics-based combat meets strategic gameplay in this free to play online game.",
        },
      ],
    },

    content: {
      whatIs: {
        title: 'Everything about Crazy Cattle 3D - Play Game Online Free',
        description: "Crazy Cattle 3D is an independently developed free online battle royale game where players control explosive sheep across varied terrain. You can play this game unblocked anytime. Unlike traditional battle royales, we focus on physics-based gameplay with momentum and collision mechanics rather than weapon collection.\n\nMaster the art of sheep locomotion across three distinct environments in this exciting online game: the rolling hills of Ireland, volcanic Iceland, and mountainous New Zealand. Each map offers unique strategic opportunities, creating a chaotic yet strategic 30-minute battle experience.\n\nWhile the game's high difficulty level may challenge newcomers, mastering our unique physics system delivers a deeply satisfying experience. Play this free online game directly in your browser unblocked - no downloads needed, just pure explosive sheep action that keeps you coming back for more.",
        logo: '/assets/img/android-chrome-512x512.png',
        logoAlt: 'Crazy Cattle 3D - Free Online Unblocked Game Logo',
      },
      howToPlay: {
        title: 'How to Play Crazy Cattle 3D Online Free - Game Controls & Guide',
        description: "Playing Crazy Cattle 3D online unblocked is easy: Use WASD keys for movement and mouse for precise sheep steering when you play this free browser game. The space bar triggers your special collision ability in Crazy Cattle 3D - master the timing for devastating impacts.\n\nSuccess in Crazy Cattle 3D multiplayer battles depends on mastering the physics-based momentum system in this online game. Strategically build speed by moving downhill in the 3D arena, then unleash powerful attacks or execute quick escapes.\n\nWin more Crazy Cattle 3D matches by starting defensively - focus on survival and strategic positioning. Study each arena's layout to discover prime attack positions and danger zones.",
        image: '/assets/crazycattle3d-howto.jpg',
        imageAlt: 'Crazy Cattle 3D Game Guide - Play Online Unblocked, Controls, Physics, and Strategy Tutorial',
      },
      faq: {
        title: 'Frequently Asked Questions - Crazy Cattle 3D Online Game',
        items: [
          { question: 'Where can I find and play the original Crazy Cattle 3D online?', answer: 'The original Crazy Cattle 3D game can officially be found on itch.io. However, you can also play Crazy Cattle 3D unblocked on various free online games websites that host web-based versions.' },
          { question: 'Can I play Crazy Cattle 3D online on my mobile device?', answer: 'Yes, since Crazy Cattle 3D is available in web-based environments, you can often play this free online game on mobile devices that support modern web browsers.' },
          { question: 'How difficult is the Crazy Cattle 3D online game for new players?', answer: "Crazy Cattle 3D is designed with an intuitive physics-based control system that's easy to grasp but challenging to master." },
          { question: 'What are the technical requirements to play Crazy Cattle 3D online smoothly?', answer: 'To best play Crazy Cattle 3D online, we recommend using a modern browser (Chrome, Firefox, or Edge) and a stable internet connection.' },
          { question: 'What game modes are available when you play Crazy Cattle 3D online?', answer: 'Crazy Cattle 3D currently features an exciting single-player arena mode where you compete against intelligent AI opponents.' },
        ],
      },
    },
  },

  // ============================================================
  // 🎮 子游戏占位模板（等待填充真实数据）
  // ============================================================

  // 子游戏 1 - 占位
  'sub-game-1': createPlaceholderGame('sub-game-1', 1),

  // 子游戏 2 - 占位
  'sub-game-2': createPlaceholderGame('sub-game-2', 2),

  // 子游戏 3 - 占位 (内部游戏)
  'sub-game-3': createPlaceholderGame('sub-game-3', 3),

  // 子游戏 4 - 外部链接演示 (Example)
  'sub-game-4': {
    ...createPlaceholderGame('sub-game-4', 4),
    name: 'External Game (Example)',
    externalUrl: 'https://example.com',
  },

  // 子游戏 5 - 外部链接演示 (Bing)
  'sub-game-5': {
    ...createPlaceholderGame('sub-game-5', 5),
    name: 'External Game (Bing)',
    externalUrl: 'https://www.bing.com',
  },

  // 子游戏 6 - 外部链接演示 (Yahoo)
  'sub-game-6': {
    ...createPlaceholderGame('sub-game-6', 6),
    name: 'External Game (Yahoo)',
    externalUrl: 'https://www.yahoo.com',
  },
};

// ============================================================
// 工具函数
// ============================================================

/**
 * 获取所有游戏列表
 */
export function getAllGames(): GameLibraryItem[] {
  return Object.values(gameLibrary);
}

/**
 * 根据slug获取游戏配置
 */
export function getGameBySlug(slug: string): GameLibraryItem | undefined {
  return gameLibrary[slug];
}

/**
 * 根据slug数组获取游戏列表
 */
export function getGamesBySlugs(slugs: string[]): GameLibraryItem[] {
  return slugs
    .map(slug => gameLibrary[slug])
    .filter((game): game is GameLibraryItem => game !== undefined);
}

/**
 * 获取游戏基础信息（用于卡片展示）
 */
export function getGameBasicInfo(slug: string) {
  const game = gameLibrary[slug];
  if (!game) return undefined;

  return {
    slug: game.slug,
    name: game.name,
    shortDesc: game.shortDesc,
    image: game.image,
    iframeSrc: game.iframeSrc,
    externalUrl: game.externalUrl,
  };
}
