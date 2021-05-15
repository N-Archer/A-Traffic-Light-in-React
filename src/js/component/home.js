import React, { useState } from "react";

//include images into your bundle

//create your first component
export function Home() {
	const [active, setActive] = useState(null);
	return (
		<div
			id="trafficLight"
			className="d-flex align-items-center flex-column justify content-center">
			<div
				onClick={() => setActive("red")}
				className={active !== "red" ? "light" : "light red"}></div>
			<div
				onClick={() => setActive("yellow")}
				className={
					active !== "yellow" ? "light" : "light yellow"
				}></div>
			<div
				onClick={() => setActive("green")}
				className={active !== "green" ? "light" : "light green"}></div>
		</div>
	);
}
