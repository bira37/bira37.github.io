import React from "react";
import ToggleButton from "./Components/Button/index";
import ErrorBoundary from "./Components/ErrorBoundary";
import Text from "./Components/Text/index";

const App = (): JSX.Element => {
  return (
    <ErrorBoundary>
      <Text />
      <ToggleButton message="Click here to show/hide the message" />
    </ErrorBoundary>
  );
};

export default App;
