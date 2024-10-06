import VueLoader from "../components/VueLoader";
//Lib Components
import {ErrorBoundary} from '@lab/shared'

export function App() {
  return (
    <div>
      <ErrorBoundary><VueLoader /></ErrorBoundary>
    </div>
  );
}

export default App;
