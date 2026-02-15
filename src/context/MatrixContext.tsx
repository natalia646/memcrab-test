import { createContext, type ChangeEvent, type Dispatch, type SetStateAction } from "react";
import type { InputValues, Row } from "../types/Cell.type";


export type MatrixContextType = {
    inputValues: InputValues;
    matrix: Row[];

    changeInputValue: (event: ChangeEvent<HTMLInputElement, HTMLInputElement>, field: string, maxValue: number) => void,
    generateMatrix: () => void
    addRow: () => void,
    removeRow: (id: number) => void,
    incrementCell: (rowId: number, cellId: number) => void,
}

export const MatrixContext = createContext<MatrixContextType | null>(null);