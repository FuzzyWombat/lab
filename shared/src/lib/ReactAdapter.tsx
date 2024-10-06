import React from "react"
import ReactDOM, { hydrate }  from "react-dom"

export type ReactAdapterProps<P = {}> = P & {
    component: React.FunctionComponent<P> | React.ComponentClass<P> | keyof React.ReactHTML | string;
    children?: React.ReactNode;
}

export type ReactAdapterState = {
    Component: React.ReactNode;
}

export class ReactAdapter<P = {}> extends React.Component<ReactAdapterProps<P>, ReactAdapterState> {
    private refHold: HTMLDivElement | null = null;

    constructor(props: ReactAdapterProps<P>){
        super(props)
        this.refHold
    }

    init = (hydrate?: boolean) => {
        (async () => {
            const {component, children, ...rest} = this.props;

            const renderMethod = hydrate? ReactDOM.hydrate : ReactDOM.render;

            renderMethod(React.createElement(component as string, rest, children), this.refHold)
        })();
    }

    override componentDidUpdate(): void {
        this.init(true)
    }

    override componentDidMount(): void {
        this.init()
    }

    override render(){
        return <div ref={(ref) => (this.refHold = ref)} />
    }
}