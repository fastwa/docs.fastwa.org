import { FC, PropsWithChildren } from 'react';

export const Prose: FC<PropsWithChildren> = ({ children }) => (
  <div className="prose prose-invert w-full min-w-0 max-w-6xl custom-li">
    {children}
  </div>
);
