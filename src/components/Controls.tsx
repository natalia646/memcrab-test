import { useMatrixContext } from "../hooks/useMatrixContext";
import { Input } from "./Input";

import '../styles/Controls.scss'

export const Controls = () => {
  const {
    inputValues: { columns, rows, nearestValue },
    matrix,
    changeInputValue,
    generateMatrix,
    addRow,
  } = useMatrixContext();

  return (
    <section className="matrix-generator">
      <div className="matrix-generator__fields">
        <Input
          placeholder="rows"
          value={rows || ""}
          onChange={(e) => changeInputValue(e, "rows", 100)}
        />
        <Input
          placeholder="colums"
          value={columns || ""}
          onChange={(e) => changeInputValue(e, "columns", 100)}
        />
        <Input
          placeholder="x"
          value={nearestValue || ""}
          onChange={(e) => changeInputValue(e, "nearestValue", rows * columns)}
        />
      </div>
      <div className="matrix-generator__actions">
        <button disabled={!rows && !columns} onClick={generateMatrix}>
          Generate matrix
        </button>
        {!!matrix.length && (
          <button className="add-row" onClick={addRow}>
            + Add row
          </button>
        )}
      </div>
    </section>
  );
};
