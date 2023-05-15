'use client';

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';

type SearchContext = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const SearchContext = createContext({} as SearchContext);

export function SearchProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      setIsOpen(true);
    }

    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <SearchContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SearchContext.Provider>
  );
}

export const useSearch = () => useContext(SearchContext);
