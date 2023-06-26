import { FC } from 'react';
import { Logo } from '../Logo';

export const Footer: FC = () => (
  <footer className="bg-[#111] border-y border-[#333]">
    <div>
      <div className="flex justify-center gap-3 items-center w-full my-8 mb-12">
        <Logo />
        <p className="text-xs text-[#888]">
          Copyright © {new Date().getFullYear()}, GPL 3.0. &nbsp;
          <a
            className="text-blue-500 font-bold no-underline"
            href="https://github.com/natanrce"
          >
            Natan Rodrigues
          </a>
          .
        </p>
      </div>
    </div>
  </footer>
);
