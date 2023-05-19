'use client';

import cx from 'classnames';

import { MobileNavigation } from '../Navigation';
import { FC, useEffect, useState } from 'react';

export const MobileSidebar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    }
  }, [isOpen]);

  return (
    <div className="fixed w-full top-[64px] z-10 md:hidden py-3 px-4 border-b border-[#333] backdrop-blur-sm backdrop-saturate-200 antialiased bg-black/50">
      <div className="flex flex-col justify-between">
        <button
          className="flex items-center gap-1"
          type="button"
          onClick={handleOpen}
        >
          <svg
            fill="none"
            height="16"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            width="16"
            className={cx(
              'text-current transition-transform',
              isOpen && 'rotate-90'
            )}
          >
            <path d="M9 18l6-6-6-6" />
          </svg>{' '}
          <span>Menu</span>
        </button>
      </div>
      {isOpen && (
        <div className="h-screen w-full block" data-docs-crowler>
          <MobileNavigation />
        </div>
      )}
    </div>
  );
};
