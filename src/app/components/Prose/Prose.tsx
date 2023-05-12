import { FC, PropsWithChildren } from 'react';

export const Prose: FC<PropsWithChildren> = ({ children }) => (
  <div className="prose prose-invert w-full min-w-0 max-w-6xl prose-ul prose-li:list-none prose-li:before:content-['-'] prose-code:bg-[#2a2828]">
    {children}
  </div>
);
