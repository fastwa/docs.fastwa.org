import { FC } from 'react';

export const Footer: FC = () => (
  <footer className="bg-[#111] border-y border-[#333]">
    <div className="mx-auto w-full max-w-screen-xl my-14 mb-20 px-4">
      <p className="text-xs text-[#888]">
        Copyright © {new Date().getFullYear()} GPL 3.0 by&nbsp;
        <a
          className="text-blue-500 font-bold no-underline"
          href="https://github.com/Nata4n"
        >
          Natan Rodrigues
        </a>
      </p>
    </div>
  </footer>
);
