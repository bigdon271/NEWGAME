/**
 * 内容配置 - 适配层
 * 
 * 这个文件提供向后兼容的内容配置
 * 实际数据来自新的 site.config.ts
 */

import { siteConfig, getFooterGameLinks } from './site.config';

export const content = {
  header: {
    title: siteConfig.metadata.name,
    search: {
      placeholder: "Find your next favorite game...",
      ariaLabel: "Search games",
      buttonAriaLabel: "Search",
    },
    navigation: {
      links: [
        { text: "Start Play", href: "#game-section" },
        { text: "Hot Games", href: "#other-games" },
        { text: "Features", href: "#features" },
        { text: "What Is", href: "#what-is" },
        { text: "How to Play", href: "#how-to-play" },
        { text: "FAQ", href: "#faq" },
      ]
    }
  },
  footer: {
    about: {
      title: "About",
      description: `Play ${siteConfig.metadata.name} - a free physics-based battle game right in your browser. No downloads required.`,
    },
    quickLinks: {
      title: "Quick Links",
      links: siteConfig.links.quickLinks,
    },
    games: {
      title: "Games",
      links: getFooterGameLinks(),
    },
    social: {
      title: "Share",
      links: [
        {
          icon: "Facebook",
          href: `https://www.facebook.com/sharer.php?t=${encodeURIComponent(siteConfig.metadata.name)}&u=${encodeURIComponent(siteConfig.metadata.url)}`
        },
        {
          icon: "Twitter",
          href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(siteConfig.metadata.name)}&url=${encodeURIComponent(siteConfig.metadata.url)}&hashtags=${siteConfig.links.social.twitter || ''},Games`
        }
      ]
    },
    legal: {
      title: "Legal",
      links: [
        { text: "About Us", href: "/about" },
        { text: "Contact Us", href: "/contact" },
        { text: "Privacy Policy", href: "/privacy-policy" },
        { text: "Terms of Service", href: "/terms-of-service" }
      ]
    },
    copyright: {
      text: `© {year} ${siteConfig.metadata.name}. All rights reserved.`,
      subText: "All games on this platform are free to play and do not require downloads."
    }
  },
  // 移除 rating（根据用户要求）
  gameSection: {
    title: siteConfig.mainGame.name,
    game: {
      url: `/${siteConfig.mainGame.slug}.embed`,
      title: siteConfig.mainGame.slug,
      externalUrl: siteConfig.mainGame.iframeSrc
    }
  },
  otherGames: {
    title: "Hot Games",
    cardLabels: {
      playButton: "Play Now",
    }
  },
  howToPlay: {
    title: siteConfig.mainGame.content.howToPlay.title,
    description: siteConfig.mainGame.content.howToPlay.description,
    image: siteConfig.mainGame.content.howToPlay.image,
    imageAlt: siteConfig.mainGame.content.howToPlay.imageAlt
  },
  whatIs: {
    title: siteConfig.mainGame.content.whatIs.title,
    description: siteConfig.mainGame.content.whatIs.description,
    logo: {
      src: siteConfig.mainGame.content.whatIs.logo,
      alt: siteConfig.mainGame.content.whatIs.logoAlt
    }
  },
  faq: {
    title: siteConfig.mainGame.content.faq.title,
    items: siteConfig.mainGame.content.faq.items.map((item, index) => ({
      value: `faq-${index}`,
      question: item.question,
      answer: item.answer
    }))
  },
  features: {
    title: siteConfig.mainGame.features.title,
    items: siteConfig.mainGame.features.items
  }
} as const;
