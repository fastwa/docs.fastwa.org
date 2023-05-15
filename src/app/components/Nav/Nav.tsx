import Link from 'next/link';
import { FC } from 'react';

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
    <header className="h-[64px] sticky top-0 z-50 flex flex-col w-full antialiased backdrop-blur-sm backdrop-saturate-200 bg-white/80 dark:bg-black/50 border-b border-[#333]">
      <nav className="mb-[-1px] h-full flex gap-6 items-center w-full max-w-screen-xl px-4 mx-auto">
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="48"
            height="48"
            viewBox="0 0 383.999984 386"
            version="1.0"
          >
            <defs>
              <clipPath id="94817846a2">
                <path
                  d="M 9.726562 106 L 374.226562 106 L 374.226562 272 L 9.726562 272 Z M 9.726562 106 "
                  clipRule="nonzero"
                />
              </clipPath>
            </defs>
            <g clipPath="url(#94817846a2)">
              <path
                fill="#ffffff"
                d="M 36.058594 106.886719 C 86.695312 106.886719 107.601562 108.25 163.304688 192.582031 C 163.304688 192.582031 193.339844 233.363281 229.792969 231.289062 C 229.792969 231.289062 254.785156 236.800781 277.039062 184.292969 C 299.316406 131.761719 317.539062 102.730469 374.246094 110.332031 C 374.246094 110.332031 347.921875 133.824219 344.203125 143.847656 C 340.492188 153.875 280.195312 228.519531 247.234375 233.699219 C 252.070312 235.082031 258.832031 236.800781 270.277344 234.726562 C 270.277344 234.726562 282.089844 235.433594 283.953125 241.296875 C 272.316406 240.269531 233.839844 252.019531 225.746094 258.246094 C 217.65625 264.488281 189.894531 281.097656 167.648438 264.152344 C 172.402344 263.433594 199.050781 258.410156 211.378906 246.25 C 190.640625 246.496094 156.226562 239.578125 130.554688 215.046875 C 104.925781 190.507812 42.804688 116.546875 9.726562 111.023438 L 36.058594 106.886719 "
                fillOpacity="1"
                fillRule="nonzero"
              />
            </g>
          </svg>
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
