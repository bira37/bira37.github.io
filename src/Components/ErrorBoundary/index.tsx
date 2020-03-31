import React from "react";
import s from "./styles.scss";
interface ErrorBoundaryState {
  hasError: boolean;
  error: any;
  errorInfo: any;
}

class ErrorBoundary extends React.Component<any, ErrorBoundaryState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  componentDidCatch(error: any, errorInfo: any): void {
    this.setState({
      hasError: true,
      error,
      errorInfo
    });
  }

  render(): any {
    if (this.state.hasError) {
      return (
        <div className={`${s.styleError} ${s.centered}`}>
          <h1>Uh-oh. Something went wrong.</h1>
          <h2>{this.state.error.toString()}</h2>
          <h3>{JSON.stringify(this.state.errorInfo, null, 4)}</h3>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
