import React from 'react';

type ErrorBoundaryProps = {
    children: React.ReactNode;
    fallback?: React.ReactNode;
};

type State = {
    hasError?: boolean;
};

export class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
    public override state: State = { hasError: false };

    static getDerivedStateFromError(_: Error): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    override componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.error('Error Boundary Error: ', error, errorInfo);
    }

    override render() {
        if (this.state.hasError) {
            return this.props.fallback ? (
                this.props.fallback
            ) : (
                <section>Something Went Wrong. Please Try Again!</section>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
