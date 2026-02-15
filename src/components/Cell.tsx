import type { FC } from "react";
import type { CellWithPersent, } from "../types/Cell.type";
import { useMatrixContext } from "../hooks/useMatrixContext";
import cn from 'classnames'
import { highlightNearestValues } from "../utils/highlightNearestValues";
import { useHighlightContext } from "../hooks/useHighlightContext";

type MatrixCellProps = {
    cell: CellWithPersent,
    rowId: number
}

export const MatrixCell: FC<MatrixCellProps> = ({ cell, rowId }) => {
    const { inputValues, matrix, incrementCell } = useMatrixContext();
    const { highlightedIds, percentedRowId, setHighlightedIds } = useHighlightContext()
    const { nearestValue } = inputValues


    const allCells = matrix.flatMap((row) => row.cells);

    const highlightNearest = () => {
        const ids = highlightNearestValues(
            cell,
            allCells,
            nearestValue,
        );
        setHighlightedIds(ids);
    }


    return (
        <td
            key={cell.id}
            onMouseEnter={highlightNearest}
            onMouseLeave={() => setHighlightedIds([])}
            className={cn({
                "cell-hover": highlightedIds.includes(cell.id),
                percent: percentedRowId === rowId,
            })}
            style={{
                background:
                    percentedRowId === rowId
                        ? `hsl(0, 100%, ${100 - (cell.percent ?? 0)}%)`
                        : undefined,
            }}
            onClick={() => incrementCell(rowId, cell.id)}>
            {percentedRowId === rowId ? `${cell.percent}%` : cell.amount}
        </td>
    )
}