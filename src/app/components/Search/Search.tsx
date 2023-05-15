'use client';
import { useSearch } from '@/app/contexts';
import { FC, useEffect } from 'react';

export const Search: FC = () => {
  const { isOpen, setIsOpen } = useSearch();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = isOpen ? 'hidden' : 'unset';
      document.body.style.paddingRight = isOpen ? `${scrollbarWidth}px` : '0';
    }
  }, [isOpen]);

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0">
          <div
            className="absolute bg-black/80 h-full w-full"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed bottom-0 top-1/4 rounded-t-lg overflow-y-auto pt-1 pb-2 bg-black mx-auto max-w-2xl w-full md:top-1/4 md:left-1/2 md:-translate-x-1/2 md:rounded-lg md:border md:bg-[#111] md:border-white/20 md:bottom-auto">
            <input
              autoFocus
              className="py-4 px-4 w-full text-white outline-none border-b rounded-t-lg border-[#333] bg-transparent md:border-t-none placeholder:text-[#666]"
              type="text"
              placeholder="Search documentation"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="absolute hidden right-4 top-[26px] border border-[#333] transition text-xs text-[#666] px-1 rounded-[4px] h-[20px] font-medium hover:text-[#888] hover:bg-[#111] md:block"
            >
              Esc
            </button>
          </div>
          {/* <div className="rounded-lg h-[48px] absolute transition-transform duration-150 bg-[#33333370] w-full" /> */}
        </div>
      )}
    </div>
  );
};
