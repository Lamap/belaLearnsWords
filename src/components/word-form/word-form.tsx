import * as React from "react";

export interface IWord { word?: any, appState?: any};
interface IWordState {inputValue: string};

export class WordForm extends React.Component<IWord, IWordState> {
    constructor (props: IWord) {
        super(props);
        this.state = {inputValue: "jenő"};
    }
    private onInputChange(event: any) {
        console.log(event.target.value);
        //this.state = {inputValue: event.target.value};
        this.setState({inputValue: event.target.value});
    }
    render() {
        var to = this.props.appState.to;
        var from = this.props.appState.from;
        var baseWord: sting = this.props.word.content[from];
        var learnWord: string = this.props.word.content[to];
        return (
        	<div>
        		<h1>This is a word</h1>
                <p>{baseWord}</p>
                <input type="text" value={this.state.inputValue} onChange={this.onInputChange.bind(this)}/>
        	</div>
        );
    }
}
