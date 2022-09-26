/* eslint-disable react/prop-types */
import React, { Component, ReactNode } from 'react';
interface State {
  hasError: boolean;
}
interface Props {
  children?: ReactNode;
}
export class ErrorBoundaries extends Component<Props> {
  public state: State = {
    hasError: false
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(_error: string) {
    return {
      hasError: true
    };
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something Went Wrong</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundaries;
