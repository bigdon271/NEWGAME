import { content as defaultContent } from "@/config/content";
import { theme } from "@/config/theme";
import { cn } from "@/lib/utils";
import { HowToPlayCard } from "./HowToPlayCard";
import { howToPlaySchema } from "@/app/schema";

interface HowToPlayProps {
  content?: typeof defaultContent;
}

export function HowToPlay({ content = defaultContent }: HowToPlayProps) {
  const paragraphs = content.howToPlay.description.split('\n\n');

  return (
    <section
      id="how-to-play"
      className={cn(
        "mb-24",
        theme.howToPlay.spacing.section,
        theme.layout.section.scrollMargin  // 添加滚动偏移
      )}
    >
      <h2 className={cn(
        "text-3xl font-bold text-center",
        theme.howToPlay.spacing.title,
        theme.howToPlay.colors.title
      )}>
        {content.howToPlay.title}
      </h2>

      <div className={theme.howToPlay.layout.container}>
        <div className={theme.howToPlay.layout.content}>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className={cn(
              theme.howToPlay.colors.description,
              "mb-4 last:mb-0"
            )}>
              {paragraph}
            </p>
          ))}
        </div>
        <div className={theme.howToPlay.layout.imageContainer}>
          <img
            src={content.howToPlay.image}
            alt={content.howToPlay.imageAlt}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}




