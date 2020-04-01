import React from "react";
import ErrorBoundary from "./Components/ErrorBoundary";
import HomePage from "./Components/HomePage";

const App = (): JSX.Element => {
  return (
    <ErrorBoundary>
      <HomePage />
    </ErrorBoundary>
  );
};

export default App;
