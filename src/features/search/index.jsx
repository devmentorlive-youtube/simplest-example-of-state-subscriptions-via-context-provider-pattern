import { useState, createContext } from "react";
export const SearchContext = createContext(undefined);

export function SearchProvider({ children }) {
  const [url, setUrl] = useState("hello");
  const [query, setQuery] = useState("world");

  return (
    <SearchContext.Provider
      value={{
        url,
        query,
      }}>
      {children}
    </SearchContext.Provider>
  );
}
