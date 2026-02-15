import { useContext } from "react";
import { HighlightContext } from "../context/HighlightContext";

export const useHighlightContext = () => {
  const context = useContext(HighlightContext);

  if (!context) {
    throw new Error(
      "useHighlightContext must be used within HighlightProvider",
    );
  }

  return context;
};
