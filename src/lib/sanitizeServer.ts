// lib/sanitizeServer.ts
import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";

const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);

export function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html);
}
