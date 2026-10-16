/**
 * 游戏数据 - 适配层
 * 
 * 从新的配置系统生成游戏列表
 * 只使用配置中定义的游戏（主游戏 + 6个子游戏）
 */

import { siteConfig } from '@/config/site.config';
import { gameLibrary } from '@/config/games/library';

export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

// 从新配置生成游戏列表（仅主游戏 + 子游戏）
function generateGames(): Record<string, Game> {
  const games: Record<string, Game> = {};

  // 添加主游戏
  games[siteConfig.mainGame.slug] = {
    id: siteConfig.mainGame.slug,
    title: siteConfig.mainGame.name,
    description: siteConfig.mainGame.shortDesc,
    image: siteConfig.mainGame.image,
    url: '/',
  };

  // 只添加配置中的子游戏
  for (const slug of siteConfig.subGameSlugs) {
    const game = gameLibrary[slug];
    if (game) {
      // 如果配置了 externalUrl，直接使用它作为 url
      // 否则使用本地路由 /slug
      const url = game.externalUrl ? game.externalUrl : `/${game.slug}`;

      games[slug] = {
        id: game.slug,
        title: game.name,
        description: game.shortDesc,
        image: game.image,
        url: url,
      };
    }
  }

  return games;
}

export const games: Record<string, Game> = generateGames();

// 获取其他游戏列表（用于展示）
export function getOtherGames(): Game[] {
  // 仅返回子游戏，不包含主游戏
  return getSubGames();
}

// 获取子游戏列表（不包含主游戏）
export function getSubGames(): Game[] {
  return siteConfig.subGameSlugs
    .map(slug => games[slug])
    .filter((game): game is Game => game !== undefined);
}
