# 游戏网站模板配置指南

## 📁 新的配置架构

```
config/
├── index.ts              # 配置主入口（统一导出）
├── site.config.ts        # 👈 站点核心配置（修改这个文件）
├── types/                # 类型定义
│   ├── index.ts
│   ├── site.ts           # 站点配置类型
│   ├── game.ts           # 游戏配置类型
│   └── theme.ts          # 主题配置类型
├── games/                # 游戏库
│   ├── index.ts
│   └── library.ts        # 所有可用游戏配置
├── themes/               # 主题预设
│   ├── index.ts
│   └── presets.ts        # 6套主题配色
├── sites/                # 站点配置存档
│   ├── index.ts
│   ├── crazy-cattle.ts   # 当前站点配置
│   └── _template.ts      # 新站点模板
└── content.ts            # 适配层（向后兼容）
```

## 🎨 6套主题预设

| 主题ID | 名称 | 适用场景 |
|--------|------|----------|
| `warm` | 暖阳橙光 | 休闲游戏（当前使用） |
| `ocean` | 深海蔚蓝 | 休闲/益智游戏 |
| `forest` | 翠林清风 | 农场/模拟类游戏 |
| `sunset` | 霞光紫韵 | 音乐/创意类游戏 |
| `cyber` | 赛博霓虹 | 射击/竞技类游戏 |
| `minimal` | 极简素雅 | 棋牌/文字类游戏 |

## 🚀 快速开始：创建新站点

### 方法一：修改 site.config.ts

1. 打开 `config/site.config.ts`
2. 修改以下配置：

```typescript
export const siteConfig: SiteConfig = {
  // 1. 修改站点信息
  metadata: {
    name: '你的站点名称',
    domain: 'your-domain.com',
    url: 'https://your-domain.com',
    // ...
  },
  
  // 2. 修改主游戏（首页SEO核心）
  mainGame: {
    slug: 'your-main-game',
    name: 'Your Main Game',
    // ... 完整的游戏配置
  },
  
  // 3. 选择6个子游戏
  subGameSlugs: [
    'basketball-bros-unblocked',
    'cheese-chompers-3d',
    // ... 从游戏库选择
  ],
  
  // 4. 选择主题
  theme: 'ocean',  // warm | ocean | forest | sunset | cyber | minimal
  
  // 5. 修改外链
  links: { /* ... */ },
};
```

### 方法二：从模板创建

1. 复制 `config/sites/_template.ts`
2. 重命名并填写所有 `TODO` 项
3. 将配置复制到 `site.config.ts`

## 🎮 可用游戏列表

在 `subGameSlugs` 中可以使用以下游戏：

| Slug | 游戏名称 |
|------|----------|
| `crazy-cattle-3d` | Crazy Cattle 3D |
| `basketball-bros-unblocked` | Basketball Bros Unblocked |
| `cheese-chompers-3d` | Cheese Chompers 3D |
| `brainrot-clicker` | Italian Brainrot Clicker |
| `pokemon-gamma-emerald` | Pokemon Gamma Emerald |
| `sprunki-incredibox` | Sprunki Incredibox |
| `futbol-libre` | Futbol Libre |
| `crazy-cow-3d` | Crazy Cow 3D |
| `crazy-chicken-3d` | Crazy Chicken 3D |

## 📝 添加新游戏到游戏库

编辑 `config/games/library.ts`，添加新游戏：

```typescript
'your-new-game': {
  slug: 'your-new-game',
  name: 'Your New Game',
  shortDesc: '简短描述...',
  image: '/assets/your-new-game/screenshot.png',
  iframeSrc: '/game/your-new-game/index.html',
  
  seo: {
    titleTemplate: '{name} | Free Games | {domain}',
    description: 'SEO描述...',
    keywords: ['keyword1', 'keyword2'],
  },
  
  content: {
    whatIs: { /* ... */ },
    howToPlay: { /* ... */ },
    faq: { /* ... */ },
  },
},
```

## 🖼️ 图片资源清单

创建新站点时需要准备以下图片：

```
public/assets/img/
├── favicon.ico          # 网站图标
├── favicon-16x16.png    # 16x16 图标
├── favicon-32x32.png    # 32x32 图标
├── apple-touch-icon.png # 180x180 Apple图标
├── android-chrome-192x192.png  # Logo
├── android-chrome-512x512.png  # 大Logo
├── og-image.png         # OG图片 (1200x630)
└── site.webmanifest     # PWA配置

public/assets/{game-slug}/
├── {game-slug}.png      # 游戏截图
└── {game-slug}-logo.png # 游戏Logo
```

## 🔧 页面结构

### 首页包含
- ✅ 游戏嵌入区 (GameSection)
- ✅ 热门游戏 (OtherGames) - 6个子游戏
- ✅ 特性介绍 (Features) - 4项
- ✅ 游戏介绍 (WhatIs)
- ✅ 玩法说明 (HowToPlay)
- ✅ FAQ
- ❌ 评分 (已移除)

### 子游戏页面包含
- ✅ 游戏嵌入区
- ✅ 热门游戏
- ✅ 游戏介绍 (WhatIs)
- ✅ 玩法说明 (HowToPlay)
- ✅ FAQ
- ❌ Features (已简化)

## 📋 部署清单

- [ ] 修改 `site.config.ts` 配置
- [ ] 准备所有图片资源
- [ ] 准备游戏嵌入文件 (`public/game/{slug}/index.html`)
- [ ] 运行 `npm run build` 检查错误
- [ ] 部署到目标域名
- [ ] 配置域名DNS
- [ ] 提交搜索引擎索引

## 💡 提示

1. **切换主题**: 只需修改 `theme: 'ocean'` 即可切换整站配色
2. **更换主游戏**: 修改 `mainGame` 配置即可更换首页游戏
3. **调整子游戏**: 修改 `subGameSlugs` 数组即可更换推荐游戏
4. **类型检查**: TypeScript 会自动检查配置是否完整

