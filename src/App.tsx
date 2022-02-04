import React, { FunctionComponent, useEffect } from "react";
import ReactModal from "react-modal";
import { useDispatch } from "react-redux";
import { modifyPageWidth } from "reducers/pageWidthReducer";
import Router from "router/index";

ReactModal.setAppElement("#root");

const App: FunctionComponent = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const resizeListener = () => {
			dispatch(modifyPageWidth(window.innerWidth));
		};
		window.addEventListener("resize", resizeListener);
		return () => {
			window.removeEventListener("resize", resizeListener);
		};
	}, []);

	return <Router />;
};

export default App;
