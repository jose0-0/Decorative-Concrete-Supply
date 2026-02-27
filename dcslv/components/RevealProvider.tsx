"use client";
import { useReveal } from "@/hooks/useReveal";

/**
 * Drop this anywhere inside your layout or page.
 * It has no visible output — it just activates the
 * IntersectionObserver that drives all .reveal animations.
 *
 * Usage in app/layout.tsx or app/page.tsx:
 *   <RevealProvider />
 */
export default function RevealProvider() {
  useReveal();
  return null;
}
