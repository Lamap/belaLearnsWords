/// <reference path="../typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Header } from "./components/BelaHeader";
import { Groups } from "./components/Groups";
import { WordForm } from "./components/word-form/word-form";

let bela: any = {
	setGroup: function(group: any) {
		console.log("setGroup", group);
		bela.data.loadedGroup = group;
	},
	data: {
		loadedGroup: null,
		loadedWord: 0,
		groups: {
			allWords: {
				name: "All the words"
			},
			someOther: {
				name: "some other group"
			}
		},
		words: [
			{
				content: {
					cz: "pes",
					hu: "kutya",
					en: "dog"
				},
				learnt: {
					hu: {
						cz:  0
					},
					cz: {
						hu: 0
					}
				},
				groups: ["allWords"]
			},
			{
				content: {
					cz: "slon",
					hu: "elefánt",
					en: "elephant"
				},
				learnt: {
					hu: {
						cz:  0
					},
					cz: {
						hu: 0
					}
				},
				groups: ["allWords"]
			}
		]
	}
};
ReactDOM.render(
    <div><Header /><Groups groups={bela.data.groups}/><WordForm word="bééééla"/></div>,
    document.getElementById("bela-learns-words")
);
