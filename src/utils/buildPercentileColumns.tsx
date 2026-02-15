import type { Row } from "../types/Cell.type";

export const buildPercentileColumns = (matrix: Row[]): number[][] => {
    if (!matrix.length) return [];

    return matrix[0].cells.map((_, colIndex) =>
        matrix.map((row) => row.cells[colIndex].amount),
    );
};