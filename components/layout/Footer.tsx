import Link from "next/link";
import { Facebook, Twitter, LucideIcon } from "lucide-react";
import { theme } from "@/config/theme";
import { content } from "@/config/content";
import { layout } from "@/config/layout";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const SocialIcons: Record<string, LucideIcon> = {
  Facebook,
  Twitter,
};

export function Footer() {
  if (!layout.footer.isVisible) return null;

  const footerClassName = cn(
    theme.footer.colors.border,
    theme.footer.colors.background
  );

  const containerClassName = cn(
    theme.footer.layout.container,
    theme.footer.layout.padding
  );

  // Override theme grid to 3 columns for Left/Right alignment with empty center
  const gridClassName = cn("grid grid-cols-1 md:grid-cols-3 gap-8");

  return (
    <footer className={footerClassName}>
      <div className={containerClassName}>
        <div className={gridClassName}>
          {/* About Section */}
          {layout.footer.sections.about && (
            <div className="md:text-center">
              <h3 className={cn("font-semibold", theme.footer.spacing.sectionTitle)}>
                {content.footer.about.title}
              </h3>
              <p className={theme.footer.colors.mutedText}>
                {content.footer.about.description}
              </p>
            </div>
          )}

          {/* Games Section */}
          {layout.footer.sections.games && (
            <div className="md:col-start-3 md:text-center">
              <h3 className={cn("font-bold", theme.footer.spacing.sectionTitle)}>
                {content.footer.games.title}
              </h3>
              <ul className={theme.footer.spacing.linkList}>
                {content.footer.games.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={cn(
                        "text-sm",
                        theme.footer.colors.mutedText,
                        theme.footer.colors.hover
                      )}
                      target="_blank"
                      rel="noopener"  // 只使用 noopener 以传递权重
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Quick Links Section - Removed */}
          {/* Social Links Section - Removed */}
        </div>

        {/* Copyright and Legal Section - 重新设计的部分 */}
        <div className="mt-8 pt-8 border-t">
          {/* Updated Copyright and Legal Links Section */}
          <div className="text-center">
            {/* Copyright Line */}
            <p className={cn("text-sm", theme.footer.colors.mutedText, "mb-2 md:mb-4")}>
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>

            {/* Links Line */}
            {(() => {
              const allLegalLinks = content.footer.legal.links;
              const desiredOrder = ["About Us", "Privacy Policy", "Terms of Service", "Contact Us"];
              const orderedLinks = desiredOrder
                .map(text => allLegalLinks.find(link => link.text === text))
                .filter(link => link !== undefined) as { text: string; href: string }[];

              if (layout.footer.sections.legal && orderedLinks.length > 0) {
                return (
                  <nav aria-label="Footer legal links">
                    <ul className="flex flex-wrap justify-center">
                      {orderedLinks.map((link, index) => (
                        <li key={link.href} className="flex items-center">
                          <Link
                            href={link.href}
                            className={cn(
                              "text-sm",
                              theme.footer.colors.mutedText,
                              theme.footer.colors.hover,
                              "px-2" // Add padding for spacing around pipes
                            )}
                          >
                            {link.text}
                          </Link>
                          {index < orderedLinks.length - 1 && (
                            <span className={cn("text-sm", theme.footer.colors.mutedText)} aria-hidden="true">|</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                );
              }
              return null;
            })()}
          </div>

        </div>
      </div>
    </footer>
  );
}
