import { useContext } from "react";
import { SearchContext } from "@/features/search";

export default function Label({ children }) {
  const { url, query } = useContext(SearchContext);
  return (
    <div className="border">
      <div>
        {url} {query}
      </div>

      <div>{children}</div>
    </div>
  );
}
