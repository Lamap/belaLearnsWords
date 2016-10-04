import * as React from "react";

export interface IGroups {
    groups: any[];
};

function mapObject(object: any, callback: Function, ...rest: any[]) {
  return Object.keys(object).map(function (key) {
    return callback(key, object[key], rest);
  });
}

export class Groups extends React.Component<IGroups, any> {
    constructor(props: IGroups) {
        super(props);
    }
    private setGroup(group: any) {
        console.log("ejjhajdihó");
        console.log(group);
    }
    render() {
        return (
        	<div>
        		<ul>
        		{mapObject(this.props.groups, function(key: string, group: any, rest: any) {
        		    var setGroup: Function = rest[0];
        			return <li key={group.name} onClick={setGroup.bind(this, group)}>{group.name}</li>;
        		}, this.setGroup)}
        		</ul>
        	</div>
        )
    }
}
