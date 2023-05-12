'use client';

import { useState, useEffect, useCallback } from 'react';

export function useTableOfContent(tableOfContent: any) {
  const [currentSection, setCurrentSection] = useState(tableOfContent[0]?.id);

  const getHeadings = useCallback(() => {
    function* traverse(node: any): any {
      if (Array.isArray(node)) {
        for (const child of node) {
          yield* traverse(child);
        }
      } else {
        const element = document.getElementById(node.id);
        if (!element) return;

        const style = window.getComputedStyle(element);
        const scrollMt = parseFloat(style.scrollMarginTop);

        const top =
          window.scrollY + element.getBoundingClientRect().top - scrollMt;

        yield { id: node.id, top };

        for (const child of node.children ?? []) {
          yield* traverse(child);
        }
      }
    }

    return Array.from(traverse(tableOfContent));
  }, [tableOfContent]);

  useEffect(() => {
    const headings = getHeadings() as any;

    if (tableOfContent.length === 0 || headings.length === 0) return;

    function onScrollListener() {
      const sortedHeadings = headings
        .concat([])
        .sort((a: { top: number }, b: { top: number }) => a.top - b.top);

      const top = window.pageYOffset;
      let current = sortedHeadings[0].id;

      for (let i = 0; i < sortedHeadings.length; i++) {
        if (top >= sortedHeadings[i].top - 100) {
          current = sortedHeadings[i].id;
        }
      }

      setCurrentSection(current);
    }

    window.addEventListener('scroll', onScrollListener, {
      capture: true,
      passive: true
    });

    onScrollListener();

    return () => {
      window.removeEventListener('scroll', onScrollListener, {
        capture: true
      });
    };
  }, [getHeadings, tableOfContent]);

  return { currentSection };
}
