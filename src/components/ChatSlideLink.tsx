"use client";

import { appendReferrer } from "@/utils/chatslide-url";

export function ChatSlideLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={appendReferrer(href)}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
    >
      {children}
    </a>
  );
}
