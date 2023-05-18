'use client';

import { FC, createRef } from 'react';

import {
  AutocompleteApi,
  AutocompleteCollection,
  BaseItem
} from '@algolia/autocomplete-core';

import { useSearch } from '@/app/contexts';

type ResultItem = {
  [k: string]: any;
};

type Props = {
  result: BaseItem;
  handlePosition: (index?: number) => void;
  autocomplete?: AutocompleteApi<BaseItem>;
  collection: AutocompleteCollection<BaseItem>;
};

const resolveResult = (result: ResultItem) => {
  const allLevels = Object.keys(result.hierarchy);
  const hierarchy = Object.entries(result._highlightResult.hierarchy).filter(
    ([, { value }]: any) => Boolean(value)
  );
  const levels = hierarchy.map(([level]) => level);

  const level: any =
    result.type === 'content'
      ? levels.pop()
      : levels
          .filter(
            (level) =>
              allLevels.indexOf(level) <= allLevels.indexOf(result.type)
          )
          .pop();

  return {
    titleHtml: result._highlightResult.hierarchy[level].value,
    contentHtml: result._snippetResult?.content?.value
  };
};

export const AutocompleteItem: FC<Props> = ({
  result,
  autocomplete,
  handlePosition,
  collection
}) => {
  const titleRef = createRef<HTMLDivElement>();
  const contentRef = createRef<HTMLDivElement>();

  const { onClose } = useSearch();
  const { titleHtml, contentHtml } = resolveResult(result);

  const itemProps: any = autocomplete?.getItemProps({
    item: result,
    source: collection.source
  });

  const handleMouseEnter = (height?: number) => {
    handlePosition(height);
  };

  return (
    <li {...itemProps}>
      <div onClick={onClose}>
        <div
          ref={titleRef}
          onMouseEnter={() => handleMouseEnter(titleRef.current?.offsetTop)}
          className="h-12 px-4 flex items-center gap-2 text-sm w-full text-[#888] rounded-md duration-150 transition relative cursor-pointer"
        >
          <svg
            fill="none"
            height="20"
            shapeRendering="geometricPrecision"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            width="20"
          >
            <path d="M7.06883 21.6H16.219C18.7973 21.6 20.8879 19.5093 20.8879 16.9312V5.86885C20.8879 3.29074 18.7973 1.20001 16.219 1.20001H7.06883C4.49072 1.20001 2.39999 3.29074 2.39999 5.86885V16.9312C2.39999 19.5093 4.49072 21.6 7.06883 21.6Z" />
            <path d="M15.3946 15.842H7.89178M15.3946 11.245H7.89178M10.755 6.6586H7.89232" />
          </svg>
          <div dangerouslySetInnerHTML={{ __html: titleHtml }} />
        </div>
        {contentHtml && (
          <div
            ref={contentRef}
            className="flex relative cursor-pointer"
            onMouseEnter={() => handleMouseEnter(contentRef.current?.offsetTop)}
          >
            <div className="border-l-2 border-[#333] ml-[25px] h-12 w-full px-4 flex items-center gap-2 text-sm text-[#888] overflow-hidden">
              <svg
                height="20"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="20"
                className="flex-shrink-0"
              >
                <path d="M17 10H3" />
                <path d="M21 6H3" />
                <path d="M21 14H3" />
                <path d="M17 18H3" />
              </svg>
              <span
                className="overflow-hidden overflow-ellipsis whitespace-nowrap"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />
            </div>
          </div>
        )}
      </div>
    </li>
  );
};
