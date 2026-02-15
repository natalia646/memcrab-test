import { useState, type FC, type ReactNode } from "react";

import { HighlightContext } from "./HighlightContext";

export const HighlightProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [highlightedIds, setHighlightedIds] = useState<number[]>([]);
  const [percentedRowId, setPercentedRowId] = useState<number | null>(null);

  return (
    <HighlightContext.Provider
      value={{
        highlightedIds,
        percentedRowId,
        setHighlightedIds,
        setPercentedRowId,
      }}>
      {children}
    </HighlightContext.Provider>
  );
};
