import cx from 'classnames';
import Link from 'next/link';

import { FC } from 'react';
import { usePathname } from 'next/navigation';

import { navigation } from '@/lib/navigation';

export const Navigation: FC = () => {
  const pathname = usePathname();

  return (
    <div data-docs-crowler>
      {navigation.map((category, index) => (
        <ul key={index}>
          <li className="relative mt-6">
            <h3 className="mb-[4px] px-2 text-sm font-medium text-white">
              {category.name}
            </h3>
            <div>
              <div>
                <ul className="mb-8">
                  {category.items.map((item, index) => (
                    <li className="my-1.5" key={index}>
                      <Link
                        href={item.href}
                        className={cx(
                          'flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm',
                          pathname === item.href
                            ? 'font-medium text-blue-600 dark:text-blue-500'
                            : 'text-[#888] hover:text-[#fafafa]'
                        )}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
};
