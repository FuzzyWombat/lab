import React from "react";
export type ReactAdapterProps<P = {}> = P & {
    component: React.FunctionComponent<P> | React.ComponentClass<P> | keyof React.ReactHTML | string;
    children?: React.ReactNode;
};
export type ReactAdapterState = {
    Component: React.ReactNode;
};
export declare class ReactAdapter<P = {}> extends React.Component<ReactAdapterProps<P>, ReactAdapterState> {
    private refHold;
    constructor(props: ReactAdapterProps<P>);
    init: (hydrate?: boolean) => void;
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): import("react/jsx-runtime").JSX.Element;
}
