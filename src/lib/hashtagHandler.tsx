import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const hashtagHandler = (text: Array<string> | string) => {
	if (typeof text === "string") {
		switch (text.charAt(0)) {
			case "#": {
				const splitText = text.substring(1);
				return <Link to={`explore/tags/${splitText}`}>{text}</Link>;
			}
			default:
				return <div>text</div>;
		}
	} else {
		return (
			<div>
				{text.map((v, i) => {
					switch (v.charAt(0)) {
						case "#": {
							const splitText = v.substring(1);
							return <Link to={`explore/tags/${splitText}`}>{v}</Link>;
						}
						default:
							return v;
					}
				})}
			</div>
		);
	}
};

export default hashtagHandler;
