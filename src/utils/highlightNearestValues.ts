import type { Cell } from "../types/Cell.type";

export const highlightNearestValues = (
  hoveredCell: Cell,
  cells: Cell[],
  highlightValue: number,
) => {
  const nearestCell = cells
    .map((cell) => ({
      ...cell,
      distance: Math.abs(cell.amount - hoveredCell.amount),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, highlightValue)
    .map((cell) => cell.id);

  return nearestCell;
};
