'use client';
import { FC, useState } from 'react';

export const Search: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-0 top-1/4 rounded-t-lg overflow-y-auto pt-1 pb-2 bg-gray-0 mx-auto max-w-2xl w-full  md:top-1/4 md:left-1/2 md:-translate-x-1/2 md:rounded-lg md:border md:bg-gray-100 md:border-white/20 md:bottom-auto">
          <input
            className="py-4 px-4 w-full outline-none border-b rounded-t-lg border-gray-200 bg-transparent md:border-t-none"
            type="text"
            placeholder="Search documentation"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="absolute hidden right-4 top-[26px] border border-gray-200 transition text-xs text-gray-400 px-1 rounded-[4px] h-[20px] font-medium hover:text-gray-500 hover:bg-gray-100 md:block"
          >
            ESC
          </button>
        </div>
      )}
    </>
  );
};
