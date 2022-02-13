import RequestButton from "components/atoms/RequestButton";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import FeedBody from "../Feed/FeedBody";
import { MentionsInput, Mention } from "react-mentions";
import { followers, hashtags } from "mocks/tags";

// 이미지 업로드를 할 수 있는 컴포넌트입니다.
// 클릭 시 이미지 업로드가 되며, preview 기능을 구현할 예정입니다.

function ImgUploadBox() {
	const [files, setFiles] = useState(null);
	const [contents, setContents] = useState<string>("");
	// const [hashtags, setHashtags] = useState<Array<string>>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isFirst, setFirst] = useState<boolean>(true);
	const [isSecond, setSecond] = useState<boolean>(false);
	const ref = useRef(null);

	const onLoadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!event.target.files) return;

		const file = event.target.files[0];

		const reader = new FileReader();
		reader.onload = () => {
			setFiles([reader.result]);
		};
		// console.log(imgArray);
		reader.readAsDataURL(file);
	};

	const toNextStep = () => {
		if (isFirst === true) {
			setFirst(false);
			setSecond(true);
		}
		if (isSecond === true) {
			alert(contents);
			onReset();
		}
	};

	const onReset = () => {
		setFirst(true);
		setSecond(false);
		setContents(null);
		setFiles(null);
	};

	return (
		<Wrapper>
			<h2>새 게시물 만들기</h2>
			{isFirst && files && (
				<UploadBox ref={ref}>
					<FeedBody src={files} />
				</UploadBox>
			)}
			{isSecond && (
				<InputArea
					value={contents}
					onChange={(e) => setContents(e.target.value)}
				>
					<Mention trigger="@" data={followers} />
					<Mention trigger="#" data={hashtags} />
				</InputArea>
			)}
			{files ? (
				<ButtonGrid>
					<RequestButton type={"button"} primary={false} onClick={toNextStep}>
						{isFirst && "다음"}
						{isSecond && "게시"}
					</RequestButton>
					<RequestButton type={"button"} onClick={onReset} primary={false}>
						취소
					</RequestButton>
				</ButtonGrid>
			) : (
				<StyledDiv>
					<StyledLabel htmlFor="input-file">
						<p>업로드</p>
					</StyledLabel>
				</StyledDiv>
			)}
			{isFirst && !files && (
				<StyledInput
					type="file"
					id="input-file"
					accept="img/*"
					onChange={onLoadFile}
				/>
			)}
		</Wrapper>
	);
}

export default ImgUploadBox;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const UploadBox = styled.div`
	border: 1px solid blue;
	width: 70%;
	margin-bottom: 3%;
`;

const ButtonGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	height: 35px;
	width: 40%;
	justify-content: center;
	align-items: center;
`;

const InputArea = styled(MentionsInput)`
	width: 80%;
	margin-bottom: 10px;
	height: 50%;
	overflow: visible;
`;

const StyledDiv = styled.div`
	display: flex;
	height: 35px;
	border-radius: 3px;
	width: 20%;
	justify-content: center;
	align-items: center;
	border: 1px solid black;
	color: #ffffff;
	background: #3598f0;
	border: none;
	font-size: 14px;
	font-weight: 600;
	border-radius: 3px;
	cursor: pointer;
`;

const StyledLabel = styled.label`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

const StyledInput = styled.input`
	display: none;
`;
