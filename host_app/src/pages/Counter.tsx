import { lazy, Suspense } from "react";

const CounterPage = lazy(() => import("RemoteEntryReactMF/pages/CounterPage"));

const Counter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CounterPage />
    </Suspense>
  );
};

export default Counter;
