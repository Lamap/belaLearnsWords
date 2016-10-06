import * as React from "react";

export interface IHeader { showLogo?: boolean};

export class Header extends React.Component<IHeader, {}> {
    constructor (props: IHeader) {
        super(props);
    }
    render() {
        return (
        	<div>
        		<h1>Béla learns words</h1>
                {this.props.showLogo ? <span>Logo</span> : null}
        	</div>
        );
    }
}
