import * as React from "react";

export interface Groups { groups: any[] };

function mapObject(object: any, callback: Function) {
  return Object.keys(object).map(function (key) {
    return callback(key, object[key]);
  });
}

export class Groups extends React.Component<Groups, {}> {
    render() {
        return (
        	<div>
        		<ul>
        		{mapObject(this.props.groups, function(key: string, group: any) {
        			return <li key={group.name} onClick={window.bela.setGroup.bind(this, key)}>{group.name}</li>;
        		})}
        		</ul>
        	</div>
        )
    }
}