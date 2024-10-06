import { Suspense } from "react";
import VueLoader from "../components/VueLoader";
//Lib Components
import {ErrorBoundary} from '@lab/shared'

export function App() {
  return (
    <div>
      <ErrorBoundary><VueLoader /></ErrorBoundary>
      <Suspense><ErrorBoundary><VueLoader /></ErrorBoundary></Suspense>
    </div>
  );
}

export default App;
