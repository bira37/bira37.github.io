import React from "react";
import ErrorBoundary from "./Components/ErrorBoundary";
import HomePage from "./Components/HomePage";
import Navigation from "./Components/Navigation/index";

const App = (): JSX.Element => {
  return (
    <ErrorBoundary>
      <HomePage />
      <Navigation />
    </ErrorBoundary>
  );
};

export default App;
