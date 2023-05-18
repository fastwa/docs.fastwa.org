import {
  AutocompleteApi,
  AutocompleteState,
  BaseItem
} from '@algolia/autocomplete-core';

import { FC, SVGProps } from 'react';

type SearchInputProps = {
  autocomplete?: AutocompleteApi<BaseItem>;
  autocompleteState?: AutocompleteState<BaseItem>;
  onClose: () => void;
};

const LoadingIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <circle cx="10" cy="10" r="5.5" strokeLinejoin="round" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.5 10a5.5 5.5 0 1 0-5.5 5.5"
      />
      <defs>
        <linearGradient
          x1="13"
          x2="9.5"
          y1="9"
          y2="15"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="currentColor" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const SearchInput: FC<SearchInputProps> = ({
  autocomplete,
  autocompleteState
}) => {
  const inpuProps: any = autocomplete?.getInputProps({ inputElement: null });

  return (
    <div className="border-[#333] border-b">
      <input
        className="appearance-none py-4 px-4 w-[calc(100%-36px)] text-white outline-none rounded-t-lg bg-transparent md:border-t-none placeholder:text-[#666] [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden [&::-webkit-search-results-button]:hidden [&::-webkit-search-results-decoration]:hidden"
        {...inpuProps}
      />
      {autocompleteState?.status === 'stalled' && (
        <div className="absolute inset-y-0 right-3 flex items-center">
          <LoadingIcon className="h-5 w-5 animate-spin stroke-zinc-200 text-zinc-900 dark:stroke-zinc-800 dark:text-emerald-400" />
        </div>
      )}
    </div>
  );
};
