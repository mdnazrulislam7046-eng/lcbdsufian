/**
 * Helper to safely handle configurable external links.
 * If the link is still a placeholder (e.g. 'YOUR_FORM_LINK_HERE'),
 * it returns false or triggers helpful developer guidance.
 */
export function isPlaceholderLink(url: string | undefined): boolean {
  if (!url) return true;
  return url.startsWith("YOUR_") || url.includes("PLACEHOLDER") || url.trim() === "";
}

export function openExternalLink(url: string, fallbackAction?: () => void) {
  if (!url || isPlaceholderLink(url)) {
    if (fallbackAction) {
      fallbackAction();
    }
    return false;
  }

  // If phone number without tel:
  if (url.match(/^[0-9+ -]+$/) && !url.startsWith("http")) {
    window.location.href = `tel:${url.replace(/[^0-9+]/g, "")}`;
    return true;
  }

  const validUrl = url.startsWith("http://") || url.startsWith("https://") || url.startsWith("tel:") || url.startsWith("mailto:")
    ? url
    : `https://${url}`;

  window.open(validUrl, "_blank", "noopener,noreferrer");
  return true;
}
