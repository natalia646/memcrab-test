import { createContext, type ChangeEvent } from "react";
import type { InputValues, Row } from "../types/Cell.type";


export type MatrixContextType = {
    inputValues: InputValues;
    matrix: Row[];
    highlightedIds: number[];
    percentedRowId: number | null;

    changeInputValue: (event: ChangeEvent<HTMLInputElement, HTMLInputElement>, field: string, maxValue: number) => void,
    generateMatrix: () => void
    addRow: () => void,
    removeRow: (id: number) => void,
    incrementCell: (rowId: number, cellId: number) => void,
}

export const MatrixContext = createContext<MatrixContextType | null>(null);