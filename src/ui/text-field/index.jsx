import { useContext } from "react";
import { SearchContext } from "@/features/search";

export default function TextField({ value, onChange = {} }) {
  const { url, query } = useContext(SearchContext);
  return (
    <div>
      <input
        className="border"
        {...{
          value,
          onChange,
          type: "text",
        }}
      />
      <div>
        {url} {query}
      </div>
    </div>
  );
}
