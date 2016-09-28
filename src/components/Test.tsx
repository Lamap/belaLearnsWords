import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

export class Test extends React.Component<HelloProps, {}> {
    render() {
        return <h1>Béla béla béla jenő helye géza {this.props.compiler} and {this.props.framework}!</h1>;
    }
}