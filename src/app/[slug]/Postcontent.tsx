"use client";
import { sanitizeHtml } from "@/lib/sanitizeHtml";

export default function PostContent({ html }: { html: string }) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: sanitizeHtml(html) }}
      className="prose"
    />
  );
}
