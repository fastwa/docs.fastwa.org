'use client';

import { FC } from 'react';
import { useSearch } from '@/app/contexts';
import { Navigation } from '../Navigation';

export const Sidebar: FC = () => {
  const { setIsOpen } = useSearch();

  return (
    <aside className="w-[284px] shrink-0 hidden md:block">
      <div className="sticky top-[121px]">
        <div className="flex flex-col">
          <button
            className="hidden mb-2 transition w-full rounded-md items-center border text-sm pl-2 pr-3 py-1.5 text-left px-2 text-[#888] cursor-pointer border-[#444] hover:border-[#666] md:flex focus-visible:outline-none"
            type="button"
            onClick={() => setIsOpen(true)}
          >
            Search...
            <kbd className="ml-auto pl-3 flex-none text-xs text-[#444] dark:text-[#666]">
              ⌘ K
            </kbd>
          </button>
        </div>
        <Navigation />
      </div>
    </aside>
  );
};
