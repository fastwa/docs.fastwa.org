'use client';

import { FC, useState } from 'react';

export const MobileSidebar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="sticky top-[64px] z-10 md:hidden py-3 px-4 border-b border-[#333] backdrop-blur-sm backdrop-saturate-200 antialiased bg-black/50">
      <div className="flex flex-col justify-between">
        <button
          className="flex items-center gap-1"
          type="button"
          onClick={handleOpen}
        >
          <svg
            data-testid="geist-icon"
            fill="none"
            height="16"
            shapeRendering="geometricPrecision"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            width="16"
            className="text-current"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>{' '}
          <span>Menu</span>
        </button>
      </div>
    </div>
  );
};
