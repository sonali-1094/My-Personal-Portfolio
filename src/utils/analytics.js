const ANALYTICS_EVENT = "portfolio:track";

export function trackEvent(eventName, payload = {}) {
  if (typeof window === "undefined") {
    return;
  }

  const eventPayload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    ...payload,
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, payload);
  }

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: eventName, ...payload });
  }

  window.dispatchEvent(new CustomEvent(ANALYTICS_EVENT, { detail: eventPayload }));
}

export const analyticsEventName = ANALYTICS_EVENT;
