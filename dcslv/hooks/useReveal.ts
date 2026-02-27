"use client";
import { useEffect } from "react";

/**
 * Attaches an IntersectionObserver to every element with the `.reveal` class.
 * When an element enters the viewport it receives the `.visible` class,
 * which triggers the fade-up transition defined in globals.css.
 *
 * Also uses a MutationObserver to watch for any `.reveal` elements that are
 * added to the DOM after the initial render (e.g. lazy-mounted components),
 * which solves the timing gap between Next.js hydration and useEffect firing.
 *
 * Call this once via <RevealProvider /> in your layout.
 */
export function useReveal(threshold: number = 0.08) {
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Stop watching once revealed — it only needs to fire once
            intersectionObserver.unobserve(entry.target);
          }
        });
      },
      { threshold },
    );

    // Observe a single element, making sure it hasn't already been revealed
    const observe = (el: Element) => {
      if (!el.classList.contains("visible")) {
        intersectionObserver.observe(el);
      }
    };

    // Observe all .reveal elements already in the DOM
    document.querySelectorAll(".reveal").forEach(observe);

    // Watch for new .reveal elements added after initial render
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;

          // Check if the added node itself is a reveal element
          if (node.classList.contains("reveal")) {
            observe(node);
          }

          // Also check any reveal descendants inside the added node
          node.querySelectorAll(".reveal").forEach(observe);
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true, // watch for added/removed children
      subtree: true, // watch the entire DOM tree
    });

    return () => {
      intersectionObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [threshold]);
}
