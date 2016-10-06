import * as React from "react";

export interface IWord { word?: any};

export class WordForm extends React.Component<IWord, {}> {
    constructor (props: IWord) {
        super(props);
    }
    render() {
        return (
        	<div>
        		<h1>This is a word</h1>
                {this.props.word}
        	</div>
        );
    }
}
