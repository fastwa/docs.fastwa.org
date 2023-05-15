import { FC } from 'react';

type Props = {
  href: string;
  children: React.ReactNode;
};

export const Anchor: FC<Props> = ({ href, children }) => {
  const isExternalLink = href.startsWith('http');

  return isExternalLink ? (
    <a href={href}>
      {children}
      <span className="inline-flex">
        <svg
          data-testid="geist-icon"
          fill="none"
          height="14"
          shapeRendering="geometricPrecision"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          width="14"
          className="text-current"
        >
          <path d="M7 17L17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </span>
    </a>
  ) : (
    <a href={href}>{children}</a>
  );
};
