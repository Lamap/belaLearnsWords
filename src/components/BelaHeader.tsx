import * as React from "react";

export interface Header { showLogo?: boolean };

export class Header extends React.Component<Header, {}> {
    render() {
        return (
        	<div>
        		<h1>Béla learns words</h1>
        	</div>
        );
    }
}