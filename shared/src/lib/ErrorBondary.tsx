import React from 'react'

type ErrorBoundaryProps = {
    children: React.ReactNode;
    fallback?: React.ReactNode;
}

type State = {
    hasError?: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
    public state: State = {hasError: false}
  
    static getDerivedStateFromError(_: Error): State {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
      // You can also log the error to an error reporting service
      console.error('Error Boundary Error: ',error,errorInfo)
    }
  
    render() {
      if (this.state.hasError) {
        return this.props.fallback ? this.props.fallback : <section>Something Went Wrong. Please Try Again!</section>
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;