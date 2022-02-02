export const MODIFY_PAGE_SIZE = "MODIFY_PAGE_SIZE";

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
