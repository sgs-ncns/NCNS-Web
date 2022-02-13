export const MODIFY_PAGE_SIZE = "MODIFY_PAGE_SIZE";

// 페이지 사이즈 조정을 리듀서로 해보자라는 생각을 담아 만들었습니다..
// 리소스에 대한 트레이드 오프가 있었지만, 언제 어디서든 편하게 원하는 사이즈로 반응형을 만들 수 있다는 장점이 있는 것 같습니다.

type PageState = {
	width: number;
};

type PageAction = ReturnType<typeof modifyPageWidth>;

const initialState: PageState = {
	width: window.innerWidth,
};

export const modifyPageWidth = (pageWidth: number) => {
	console.log(`pagewidth: ${pageWidth}`);
	return { type: MODIFY_PAGE_SIZE, pageWidth };
};

const pageWidthReducer = (
	state: PageState = initialState,
	action: PageAction,
) => {
	switch (action.type) {
		case MODIFY_PAGE_SIZE:
			return {
				...state,
				width: action.pageWidth,
			};
		default:
			return state;
	}
};

export default pageWidthReducer;
