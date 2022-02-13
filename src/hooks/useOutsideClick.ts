import React, { RefObject, useEffect } from "react";

// custom hook을 작성해보았습니다.
// 바깥쪽을 클릭하면 바깥쪽을 클릭했다는 정보만 받아 콜백 함수를 부르는 형식이기에
// 결합도가 낮고 재사용성이 좋다고 말할 수 있을 것 같습니다.

//useRef의 정보를 받아옵니다. 우선은 any로 두고 ref의 타입을 맞춘 후 MutableRefObject로 변경할 예정입니다.
const useOutsideClick = (ref: any, callback: () => void) => {
	const handleClick = (e: MouseEvent) => {
		// 만약 마우스 이벤트가 ref에 연결된 element 바깥쪽일 때
		if (ref.current && !ref.current.contains(e.target)) {
			callback();
		}
	};

	// 컴포넌트 생성 시 EventListener를 추가합니다.
	useEffect(() => {
		document.addEventListener("click", handleClick);
		return () => {
			document.removeEventListener("click", handleClick);
		};
	});
};

export default useOutsideClick;
