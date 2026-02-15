import type { Cell } from "../types/Cell.type";

export const generateRandomAmount = () => Math.floor(100 + Math.random() * 900);

export const getPercentile = (values: number[], percentile: number) => {
  if (!values.length) return 0;

  const sorted = [...values].sort((a, b) => a - b);
  const pos = (sorted.length - 1) * percentile;
  const lower = Math.floor(pos);
  const upper = Math.ceil(pos);

  if (lower === upper) return sorted[lower];

  return sorted[lower] + (sorted[upper] - sorted[lower]) * (pos - lower);
};

export const calculateRowSum = (cells: Cell[]) =>
  cells.reduce((sum, cell) => sum + cell.amount, 0);

export const calculateRowPercent = (cells: Cell[]) => {
  const sum = calculateRowSum(cells);

  return cells.map((cell) => ({
    ...cell,
    percent: Math.round((cell.amount / sum) * 100),
  }));
};
