/**
 * Helper de Analítica para GA4 (G-ED75E00YVK) y Google Tag Manager (GTM-WMRX93DP)
 * Domain: germanhyt.site
 */

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Envía un evento personalizado a dataLayer (GTM) y gtag (GA4)
 */
export function trackEvent(eventName: string, eventParams: Record<string, any> = {}): void {
  try {
    const payload = {
      event: eventName,
      domain: "germanhyt.site",
      timestamp: new Date().toISOString(),
      ...eventParams,
    };

    // Push a GTM dataLayer
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(payload);

      // Trigger directo a gtag si está disponible
      if (typeof window.gtag === "function") {
        window.gtag("event", eventName, eventParams);
      }
    }
  } catch (error) {
    console.warn("[Analytics] Error enviando evento:", error);
  }
}

/**
 * Registra clics en botones o elementos interactivos
 */
export function trackClick(elementName: string, extraParams: Record<string, any> = {}): void {
  trackEvent("click_interaction", {
    element_name: elementName,
    ...extraParams,
  });
}

/**
 * Registra clics en enlaces externos (GitHub, WhatsApp, etc.)
 */
export function trackOutboundLink(url: string, label: string): void {
  trackEvent("outbound_link_click", {
    link_url: url,
    link_label: label,
  });
}

/**
 * Registra envíos de formularios o contacto (mailto)
 */
export function trackFormSubmit(formName: string, details: Record<string, any> = {}): void {
  trackEvent("form_submission", {
    form_name: formName,
    ...details,
  });
}

/**
 * Registra cambio de filtro de categorías de proyectos
 */
export function trackFilterChange(category: string): void {
  trackEvent("filter_projects_by_category", {
    category_selected: category || "Todas",
  });
}

/**
 * Registra la visualización / clic en un proyecto
 */
export function trackProjectView(id: number | string, title: string, category: string): void {
  trackEvent("select_project_item", {
    project_id: id,
    project_title: title,
    project_category: category,
  });
}

/**
 * Registra cambio de tema (Dark / Light)
 */
export function trackThemeToggle(newTheme: string): void {
  trackEvent("theme_toggle", {
    theme_selected: newTheme,
  });
}

/**
 * Registra la profundidad de scroll alcanzada
 */
export function trackScrollDepth(depthPercent: number): void {
  trackEvent("scroll_depth_reached", {
    scroll_depth_percent: depthPercent,
  });
}

/**
 * Registra la visualización de secciones clave (#projects, #techs, #aboutme)
 */
export function trackSectionView(sectionId: string): void {
  trackEvent("section_view", {
    section_id: sectionId,
  });
}
