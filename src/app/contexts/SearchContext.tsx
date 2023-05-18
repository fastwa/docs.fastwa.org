'use client';

import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useCallback,
  useState
} from 'react';

type SearchContext = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const SearchContext = createContext({} as SearchContext);

export function SearchProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

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
    <SearchContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </SearchContext.Provider>
  );
}

export const useSearch = () => useContext(SearchContext);
