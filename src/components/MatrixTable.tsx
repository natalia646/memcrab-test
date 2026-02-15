import { useHighlightContext } from "../hooks/useHighlightContext";
import { useMatrixContext } from "../hooks/useMatrixContext";
import { calculateRowPercent, calculateRowSum } from "../utils/mathCalculat";
import { MatrixCell } from "./Cell";
import { PercentileRow } from "./PercentileRow";

export const MatrixTable = () => {
    const { removeRow, matrix, } = useMatrixContext();
    const {percentedRowId, setPercentedRowId} = useHighlightContext()

    return (
        <>

            {!!matrix.length && (
                <table>

                    <tbody>
                        {matrix.map(({ cells, id }) => (
                            <tr>

                                {(percentedRowId === id
                                    ? calculateRowPercent(cells)
                                    : cells
                                ).map((cell) => (
                                    <MatrixCell cell={cell} rowId={id} />
                                ))}
                                <td
                                    onMouseEnter={() => setPercentedRowId(id)}
                                    onMouseLeave={() => setPercentedRowId(null)}>
                                    {calculateRowSum(cells)}
                                </td>
                                <td>
                                    <button onClick={() => removeRow(id)}>- Remove row</button>
                                </td>
                            </tr>
                        ))}
                        <PercentileRow />
                    </tbody>
                </table>
            )}</>
    )
}