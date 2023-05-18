import {
  AutocompleteApi,
  AutocompleteCollection,
  BaseItem
} from '@algolia/autocomplete-core';

import { motion } from 'framer-motion';
import { FC, useState } from 'react';
import { AutocompleteItem } from './AutocompleteItem';

type SearchResultsProps = {
  query?: string;
  autocomplete?: AutocompleteApi<BaseItem>;
  collection?: AutocompleteCollection<BaseItem>;
};

export const SearchResults: FC<SearchResultsProps> = ({
  query,
  autocomplete,
  collection
}) => {
  const [position, setPosition] = useState(-48);

  const handlePosition = (height?: number) => {
    setPosition(height || 0);
  };

  if (collection?.items.length === 0) {
    return (
      <div className="p-6 text-center select-none">
        <p className="mt-2 text-sm text-[#888]">
          No results for <span className="text-white">&quot;{query}&quot;</span>
        </p>
      </div>
    );
  }

  return (
    <ul {...autocomplete?.getListProps()}>
      {position >= 0 && (
        <motion.div
          className="rounded-lg w-[calc(100%-16px)] h-[48px] absolute transition-transform duration-150 bg-[#33333370]"
          style={{ translateY: position }}
        />
      )}
      {collection?.items.map((result, index) => (
        <AutocompleteItem
          key={index}
          result={result}
          handlePosition={handlePosition}
          autocomplete={autocomplete}
          collection={collection}
        />
      ))}
    </ul>
  );
};
