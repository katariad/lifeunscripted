// lib/sanitizeHtml.ts
"use client";

import DOMPurify from "dompurify";

export function sanitizeHtml(html: string): string {
  if (typeof window === "undefined") return html; // Prevents SSR crash
  return DOMPurify.sanitize(html);
}
