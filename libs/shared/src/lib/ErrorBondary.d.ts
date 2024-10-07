import React from 'react';
type ErrorBoundaryProps = {
    children: React.ReactNode;
    fallback?: React.ReactNode;
};
type State = {
    hasError?: boolean;
};
export declare class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
    state: State;
    static getDerivedStateFromError(_: Error): State;
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void;
    render():
        | string
        | number
        | boolean
        | Iterable<React.ReactNode>
        | import('react/jsx-runtime').JSX.Element
        | null
        | undefined;
}
export default ErrorBoundary;
