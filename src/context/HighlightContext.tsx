import { createContext, type Dispatch, type SetStateAction } from "react";

export type HighlightContextType = {
  highlightedIds: number[];
  percentedRowId: number | null;
  setHighlightedIds: Dispatch<SetStateAction<number[]>>;
  setPercentedRowId: Dispatch<SetStateAction<number | null>>;
};

export const HighlightContext = createContext<HighlightContextType | null>(
  null,
);
