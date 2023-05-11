import { FC, PropsWithChildren } from 'react';

export const Prose: FC<PropsWithChildren> = ({ children }) => (
  <article className="prose prose-invert prose-lg prose-li:before:content-['-'] prose-code:bg-[#2a2828]">
    {children}
  </article>
);
