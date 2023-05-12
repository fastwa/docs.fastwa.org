import { FC } from 'react';

export const Sidebar: FC = () => {
  return (
    <aside className="hidden md:flex w-[284px] md:shrink-0 sticky top-[121px] h-[calc(100vh-121px)] md:flex-col md:justify-between">
      <button
        className="hidden mb-2 transition w-full rounded-md items-center border text-sm pl-2 pr-3 py-1.5 text-left px-2 text-[#888] cursor-pointer border-[#444] hover:border-[#666] md:flex"
        type="button"
      >
        Search...
        <kbd className="ml-auto pl-3 flex-none text-xs text-[#444] dark:text-[#666]">
          ⌘ K
        </kbd>
      </button>
    </aside>
  );
};
