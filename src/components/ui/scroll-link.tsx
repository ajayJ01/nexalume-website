"use client";

import { scrollToSection, scrollToTop } from "@/lib/scroll";
import { cn } from "@/lib/utils";

interface ScrollLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  onNavigate?: () => void;
}

export function ScrollLink({
  href,
  onClick,
  onNavigate,
  className,
  children,
  ...props
}: ScrollLinkProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    if (href === "#" || href === "#top" || href === "/") {
      event.preventDefault();
      scrollToTop();
      onNavigate?.();
      return;
    }

    if (!href.startsWith("#")) return;

    const sectionId = href.slice(1);
    if (!sectionId) return;

    event.preventDefault();
    onNavigate?.();

    requestAnimationFrame(() => {
      setTimeout(() => {
        scrollToSection(sectionId);
        if (sectionId === "start-project") {
          setTimeout(() => {
            document.getElementById("name")?.focus({ preventScroll: true });
          }, 350);
        }
      }, 80);
    });
  };

  return (
    <a href={href} onClick={handleClick} className={cn(className)} {...props}>
      {children}
    </a>
  );
}
