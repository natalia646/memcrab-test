import { useState, type ChangeEvent, type FC, type ReactNode } from "react";
import { MatrixContext } from "./MatrixContext";
import type { Row } from "../types/Cell.type";
import { generateRandomAmount } from "../utils/mathCalculat";

let idCellCounter = 0;
let idRowCounter = 0;
const initInputValues = {
  rows: 0,
  columns: 0,
  nearestValue: 0,
};

export const MatrixProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [inputValues, setInputValues] = useState(initInputValues);
  const [matrix, setMatrix] = useState<Row[]>([]);

  const { rows, columns } = inputValues;

  const changeInputValue = (
    event: ChangeEvent<HTMLInputElement, HTMLInputElement>,
    field: string,
    maxValue: number,
  ) => {
    const value = +event.target.value;
    setInputValues((prev) => ({
      ...prev,
      [field]: Math.min(maxValue, Math.max(0, value)),
    }));
  };

  const generateRow = (): Row => ({
    id: idRowCounter++,
    cells: Array.from({ length: columns }, () => ({
      id: idCellCounter++,
      amount: generateRandomAmount(),
    })),
  });

  const addRow = () => {
    if (!matrix.length) return;

    const newRow = generateRow();
    setInputValues((prev) => ({ ...prev, rows: prev.rows + 1 }));
    setMatrix((prev) => [...prev, newRow]);
  };

  const removeRow = (id: number) => {
    if (!matrix.length) return;

    const deletedRow = matrix.find((row) => row.id === id);

    setMatrix((prev) => prev.filter((row) => row.id !== deletedRow?.id));
    setInputValues((prev) => ({ ...prev, rows: prev.rows - 1 }));
  };

  const incrementCell = (rowId: number, cellId: number) => {
    setMatrix((prev) =>
      prev.map((row) =>
        rowId === row.id
          ? {
              ...row,
              cells: row.cells.map((cell) =>
                cell.id === cellId
                  ? { ...cell, amount: cell.amount + 1 }
                  : cell,
              ),
            }
          : row,
      ),
    );
  };
  const generateMatrix = () => {
    if (rows && columns) {
      idCellCounter = 0;
      idRowCounter = 0;
      setMatrix(Array.from({ length: rows }, generateRow));
    }
  };

  return (
    <MatrixContext.Provider
      value={{
        inputValues,
        matrix,
        changeInputValue,
        generateMatrix,
        addRow,
        removeRow,
        incrementCell,
      }}>
      {children}
    </MatrixContext.Provider>
  );
};
