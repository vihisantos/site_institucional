// Analytics utility for site_institucional

declare global {
  interface Window {
    gtag: (command: "config" | "event" | "js", targetId: string | Date, config?: Record<string, unknown>) => void;
    dataLayer: unknown[];
  }
}

export function trackPageView(path?: string) {
  if (typeof window.gtag !== "undefined") {
    window.gtag("config", "G-SBC8653FRP", {
      page_path: path || window.location.pathname,
    });
  }
}

export function trackEvent(eventName: string, eventParams?: Record<string, unknown>) {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", eventName, eventParams);
  }
}

export function trackContactMethod(method: string) {
  trackEvent("contact_click", { method });
}

export function trackFormSubmit(formName: string, success: boolean) {
  trackEvent(success ? "form_submit" : "form_error", {
    form_name: formName,
  });
}

export function trackServiceClick(serviceName: string) {
  trackEvent("click", { category: "service", label: serviceName });
}

export function trackBlogPostClick(postTitle: string) {
  trackEvent("select_content", { content_type: "blog_post", item_name: postTitle });
}

export function trackThemeChange(theme: string) {
  trackEvent("change_theme", { theme });
}

export function trackExternalLink(url: string, label: string) {
  trackEvent("click", { category: "external_link", label, url });
}