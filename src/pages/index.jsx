import { SearchProvider } from "@/features/search";

import TextField from "@/ui/text-field";
import Label from "@/ui/label";

export default function Homepage() {
  return (
    <div className="mt-16 container mx-auto">
      <SearchProvider>
        <TextField />
        <Label>hello</Label>
      </SearchProvider>
    </div>
  );
}
