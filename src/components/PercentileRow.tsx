import { useMatrixContext } from "../hooks/useMatrixContext";
import { buildPercentileColumns } from "../utils/buildPercentileColumns";
import { getPercentile } from "../utils/mathCalculat";

export const PercentileRow = () => {
  const { matrix } = useMatrixContext();

  const columnsValue = buildPercentileColumns(matrix);
  const percentileRow = columnsValue.map((col) => getPercentile(col, 0.6));

  return (
    <tr>
      {percentileRow.map((cell) => (
        <td key={cell}>{cell.toFixed(1)}</td>
      ))}
    </tr>
  );
};
