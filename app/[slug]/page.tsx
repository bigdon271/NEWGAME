
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/config/site.config';
import { gameLibrary } from '@/config/games/library';
import { GamePageTemplate } from '@/components/templates/GamePageTemplate';

// Generate static params for all known games (main + sub)
export async function generateStaticParams() {
  const allGameSlugs = [
    siteConfig.mainGame.slug,
    ...siteConfig.subGameSlugs
  ];
  
  return allGameSlugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const game = gameLibrary[params.slug];
  
  if (!game) {
    return {};
  }

  // Replace placeholders in title template
  const title = game.seo.titleTemplate
    .replace('{name}', game.name)
    .replace('{domain}', siteConfig.metadata.domain);

  return {
    title: title,
    description: game.seo.description,
    keywords: game.seo.keywords,
    alternates: {
      canonical: `/${game.slug}`,
    },
  };
}

export default function GamePage({ params }: { params: { slug: string } }) {
  const game = gameLibrary[params.slug];

  if (!game) {
    notFound();
  }

  // Transform game data to match template expectations
  // Note: logic adapted to match what seems to be effectively used by headers/footers/etc
  const gameConfig = {
    metadata: {
      title: game.name, // Used for internal page titles primarily
      description: game.seo.description,
      url: `/${game.slug}`,
    },
    content: {
      gameSection: {
        title: game.name,
        game: {
          url: game.iframeSrc, // Or embed/iframe URL logic if needed
          title: game.name,
          externalUrl: game.iframeSrc // fallback
        }
      },
      ...game.content,
      // Ensure features exist if template uses them, fallback to main game's or empty
      features: game.features || (siteConfig.mainGame.slug === game.slug ? siteConfig.mainGame.features : undefined)
    }
  };

  return <GamePageTemplate gameConfig={gameConfig} />;
}
