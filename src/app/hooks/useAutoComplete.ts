'use client';

import { useRouter } from 'next/navigation';
import { useId, useState, useMemo } from 'react';

import algoliasearch from 'algoliasearch/lite';

import {
  AutocompleteState,
  BaseItem,
  createAutocomplete
} from '@algolia/autocomplete-core';

import { getAlgoliaResults } from '@algolia/autocomplete-preset-algolia';

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_DOCSEARCH_APP_ID as string,
  process.env.NEXT_PUBLIC_DOCSEARCH_API_KEY as string
);

export function useAutoComplete() {
  const id = useId();
  const router = useRouter();

  const [autocompleteState, setAutocompleteState] =
    useState<AutocompleteState<BaseItem>>();

  const autocomplete = useMemo(
    () =>
      createAutocomplete({
        id,
        autoFocus: true,
        openOnFocus: true,
        placeholder: 'Search documentation',
        defaultActiveItemId: 0,
        onStateChange({ state }) {
          setAutocompleteState(state);
        },
        shouldPanelOpen({ state }) {
          return state.query !== '';
        },
        getSources() {
          return [
            {
              sourceId: 'documentation',
              getItemInputValue({ item }) {
                return item.query as string;
              },
              getItemUrl({ item }) {
                const url = new URL(item.url as string);
                return `${url.pathname}${url.hash}`;
              },
              onSelect({ itemUrl }) {
                router.push(itemUrl || '');
              },
              getItems({ query }) {
                return getAlgoliaResults({
                  searchClient,
                  queries: [
                    {
                      query,
                      indexName: process.env
                        .NEXT_PUBLIC_DOCSEARCH_INDEX_NAME as string,
                      params: {
                        hitsPerPage: 5,
                        highlightPreTag:
                          '<mark class="bg-transparent text-current">',
                        highlightPostTag: '</mark>'
                      }
                    }
                  ]
                });
              }
            }
          ];
        }
      }),
    [id, router]
  );

  return {
    autocomplete,
    autocompleteState
  };
}
