import { useEffect, useRef } from "react";
import { trackScrollDepth, trackSectionView } from "@/core/helpers/analytics";

export function useScrollTracker() {
  const trackedDepths = useRef<Set<number>>(new Set());
  const trackedSections = useRef<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      if (documentHeight <= 0) return;

      const scrollTop = window.scrollY;
      const scrollPercent = Math.round((scrollTop / documentHeight) * 100);

      // Track milestones: 25, 50, 75, 90, 100
      const thresholds = [25, 50, 75, 90, 100];
      for (const threshold of thresholds) {
        if (scrollPercent >= threshold && !trackedDepths.current.has(threshold)) {
          trackedDepths.current.add(threshold);
          trackScrollDepth(threshold);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Section view observer using IntersectionObserver
    const sections = ["projects", "techs", "aboutme"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id && !trackedSections.current.has(id)) {
              trackedSections.current.add(id);
              trackSectionView(id);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);
}
