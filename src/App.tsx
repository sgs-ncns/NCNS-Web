import React, { FunctionComponent, useEffect } from "react";
import ReactModal from "react-modal";
import { useDispatch } from "react-redux";
import { modifyPageWidth } from "reducers/pageWidthReducer";
import Router from "router/index";

ReactModal.setAppElement("#root");

// 페이지 사이즈 정보를 저장하는 reducer에 보내는 dispatch를 이벤트 리스너로 만들었습니다.

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
