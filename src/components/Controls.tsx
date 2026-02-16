import { useMatrixContext } from "../hooks/useMatrixContext";
import { Input } from "./Input";

import "../styles/Controls.scss";

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
          label="Enter rows amount: "
          placeholder="rows"
          value={rows || ""}
          onChange={(e) => changeInputValue(e, "rows", 100)}
        />
        <Input
          label="Enter columns amount: "
          placeholder="colums"
          value={columns || ""}
          onChange={(e) => changeInputValue(e, "columns", 100)}
        />
        <Input
          label="Enter the number of highlighted cells: "
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
