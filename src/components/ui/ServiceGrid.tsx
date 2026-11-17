"use client";

import { ReactNode, useEffect, useRef } from "react";

interface ServiceGridProps {
  className?: string;
  children: ReactNode;
}

/**
 * Grid of service cards. Opening or closing "What's included" on one card does
 * the same for the other cards in its row, so a row never has one tall card
 * beside empty ones.
 */
export function ServiceGrid({ className, children }: ServiceGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const syncRow = (event: Event) => {
      const changed = event.target as HTMLDetailsElement;
      const card = changed.closest<HTMLElement>(".service-card");
      if (!card) return;

      grid.querySelectorAll<HTMLElement>(".service-card").forEach((other) => {
        if (other.offsetTop !== card.offsetTop) return;
        const details = other.querySelector("details");
        if (details && details.open !== changed.open) {
          details.open = changed.open;
        }
      });
    };

    // "toggle" does not bubble, so listen during the capture phase.
    grid.addEventListener("toggle", syncRow, true);
    return () => grid.removeEventListener("toggle", syncRow, true);
  }, []);

  return (
    <div ref={gridRef} className={className}>
      {children}
    </div>
  );
}
