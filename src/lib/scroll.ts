export const PROGRESS_BAR_HEIGHT = 3;

export function getHeaderOffset(): number {
  if (typeof window === "undefined") return 88;

  const header = document.querySelector("header");
  const headerHeight = header?.getBoundingClientRect().height ?? 72;

  return headerHeight + 12;
}

export function scrollToSection(
  sectionId: string,
  behavior: ScrollBehavior = "smooth"
): boolean {
  const element = document.getElementById(sectionId);
  if (!element) return false;

  const offset = getHeaderOffset();
  const top =
    element.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: Math.max(0, top),
    behavior,
  });

  window.history.pushState(null, "", `#${sectionId}`);

  return true;
}

export function scrollToTop(behavior: ScrollBehavior = "smooth") {
  window.scrollTo({ top: 0, behavior });
  window.history.pushState(null, "", window.location.pathname);
}
