import React, { FunctionComponent } from "react";
import styled from "styled-components";

type HomeProps = {
	navbar?: React.ReactNode;
};

const Home: FunctionComponent<HomeProps> = (props) => {
	const { navbar } = props;
	return (
		<>
			{navbar && <>{navbar}</>}
			<StyledWrapper>
				<Grid>
					<FirstItem>
						<div>story</div>
					</FirstItem>
					<SecondItem>
						<>sdfdddddddddddddddddddddddddd</>
					</SecondItem>
					<ThirdItem>
						<>sdjfhsdjkhfsdjkfsdlkf</>
					</ThirdItem>
				</Grid>
			</StyledWrapper>
		</>
	);
};

export default Home;

const StyledWrapper = styled.div`
	display: flex;
	background: #fafafa;
	justify-content: center;
`;

const Grid = styled.div`
	max-width: 935px;
	display: grid;
	grid-template-areas:
		"story sidebar"
		"feed sidebar";
	border: 1px solid black;
	padding: 30px 0px 0px;
`;

const FirstItem = styled.div`
	grid-area: story;
	width: 614px;
	height: 84px;
	margin: 0px 0px 24px;
	padding: 16px 0px;
	border: 1px solid blue;
`;
const SecondItem = styled.div`
	grid-area: feed;
	width: 614px;
	height: 1000px;
	margin: 0px 28px 0px 0px;
	border: 1px solid black;
`;
const ThirdItem = styled.div`
	grid-area: sidebar;
	width: 293px;
	border: 1px solid green;
`;

//max-width로 바꾸기
//flex direction ???margin: 0px 0px 30px;
