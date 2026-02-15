import { calculateRowPercent, calculateRowSum } from "../utils/mathCalculat";
import { useHighlightContext } from "../hooks/useHighlightContext";
import { useMatrixContext } from "../hooks/useMatrixContext";
import { MatrixCell } from "./MatrixCell";
import { PercentileRow } from "./PercentileRow";
import cn from "classnames";
import "../styles/MatrixTable.scss";

export const MatrixTable = () => {
  const { removeRow, matrix } = useMatrixContext();
  const { percentedRowId, setPercentedRowId } = useHighlightContext();

  return (
    <section className="matrix">
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
                  className={cn({ "hovered-sum": percentedRowId === id })}
                  onMouseEnter={() => setPercentedRowId(id)}
                  onMouseLeave={() => setPercentedRowId(null)}>
                  {calculateRowSum(cells)}
                </td>
                <td className="remove-button" onClick={() => removeRow(id)}>- Remove row</td>
              </tr>
            ))}
            <PercentileRow />
          </tbody>
        </table>
      )}
    </section>
  );
};
