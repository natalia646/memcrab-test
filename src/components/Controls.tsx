import { Input } from "./Input";
import { useMatrixContext } from "../hooks/useMatrixContext";

export const Controls = () => {
  const { changeInputValue, generateMatrix, addRow, inputValues, matrix } =
    useMatrixContext();
  const { columns, rows, nearestValue } = inputValues;

  return (
    <>
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

      <button disabled={!rows && !columns} onClick={generateMatrix}>
        Generate matrix
      </button>

      {!!matrix.length && (
        <button className="add-row" onClick={addRow}>
          + Add row
        </button>
      )}
    </>
  );
};
