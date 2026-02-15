import { Controls } from "./components/Controls";
import { MatrixTable } from "./components/MatrixTable";
import { MatrixProvider } from "./context/MatrixProvider";
import { HighlightProvider } from "./context/HighlightProvider";
import './styles/MatrixTable.scss'

function App() {
  return (
    <MatrixProvider>
      <HighlightProvider>
        <Controls />
        <MatrixTable />
      </HighlightProvider>
    </MatrixProvider>
  );
}

export default App;
