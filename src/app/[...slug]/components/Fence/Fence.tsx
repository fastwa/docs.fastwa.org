'use client';

import cx from 'classnames';

import { theme } from './theme';
import { Highlight } from 'prism-react-renderer';
import { FC, useState, useEffect } from 'react';

type Props = {
  children: string;
  language: string;
};

export const Fence: FC<Props> = ({ children, language = 'bash' }) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const timeout = setTimeout(() => setIsCopied(false), 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isCopied]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(children).then(() => setIsCopied(true));
  };

  return (
    <div className="not-prose">
      <div className="group relative my-4 rounded-lg border border-[#2e2e2e]">
        <Highlight code={children.trim()} language={language} theme={theme}>
          {({ tokens, getTokenProps }) => (
            <pre className="py-5 text-[#EAEAEA] bg-[#0A0A0A] border-[#2e2e2e] rounded-lg overflow-auto">
              <code>
                {tokens.map((line, index) => (
                  <span key={index} className="px-5 h-5 block">
                    <span className="pr-4 select-none opacity-50 text-right">
                      {index + 1}
                    </span>
                    {line.map((token, tokenIndex) => (
                      <span key={tokenIndex} {...getTokenProps({ token })} />
                    ))}
                    {'\n'}
                  </span>
                ))}
              </code>
            </pre>
          )}
        </Highlight>
        <button
          className="absolute top-3.5 right-3.5 overflow-hidden rounded-[5px] flex justify-center items-center w-8 h-8 font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100 hover:bg-[#1f1f1f] hover:text-[#a0a0a0]"
          onClick={copyToClipboard}
        >
          <svg
            fill="none"
            height={20}
            shapeRendering="geometricPrecision"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            width={20}
            className={cx(
              'pointer-events-none flex items-center gap-0.5 transition duration-300',
              isCopied && '-translate-y-1.5 opacity-0'
            )}
          >
            <path d="M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z" />
          </svg>
          <svg
            fill="none"
            height="20"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            width="20"
            className={cx(
              'pointer-events-none flex items-center absolute transition duration-300',
              !isCopied && 'translate-y-1.5 opacity-0'
            )}
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </button>
      </div>
    </div>
  );
};
