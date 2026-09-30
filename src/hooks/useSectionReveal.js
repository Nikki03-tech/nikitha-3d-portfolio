import { useEffect, useRef, useState } from "react";

/**
 * Returns [ref, isVisible].
 * Attach ref to a container - when it scrolls into view, isVisible flips true.
 * threshold: 0–1, how much of the element must be visible before triggering.
 */
export default function useSectionReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}