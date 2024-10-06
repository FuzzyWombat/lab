import { Suspense } from "react";
//Custom Components
import VueLoader from "../components/VueLoader";
import LegacyLoader from "../components/LegacyLoader";
//Lib Components
import {ErrorBoundary} from '@lab/shared'

export function App() {
  return (
    <ErrorBoundary>
      <VueLoader />
      <LegacyLoader />
    </ErrorBoundary>
  );
}

export default App;
