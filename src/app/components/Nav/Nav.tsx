import Link from 'next/link';

import { FC } from 'react';
import { Logo } from '../Logo';

const navigation = [
  {
    name: 'Docs',
    href: '/',
    external: false
  },
  {
    name: 'Templates',
    href: '/templates',
    external: true
  },
  {
    name: 'Github',
    href: 'https://github.com/fastwa/fastwa',
    external: true
  }
];

export const Navbar: FC = () => {
  return (
    <header className="h-[64px] sticky top-0 z-50 flex flex-col w-full antialiased backdrop-blur-sm backdrop-saturate-200 bg-black/50 border-b border-[#333]">
      <nav className="mb-[-1px] h-full flex gap-6 items-center w-full max-w-screen-xl px-4 mx-auto">
        <a href="/">
          <Logo />
        </a>
        {navigation.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-sm relative transition-colors duration-200 text-gray-500 hover:text-gray-100"
          >
            {item.name}
            {item.external && (
              <svg
                aria-hidden="true"
                className="absolute top-[0.5px] right-[-10px] text-[#444]"
                height="7"
                viewBox="0 0 6 6"
                width="7"
              >
                <path
                  d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
                  fill="currentColor"
                />
              </svg>
            )}
          </Link>
        ))}
      </nav>
    </header>
  );
};
