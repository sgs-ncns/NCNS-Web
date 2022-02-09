import { Divider } from "common/styles";
import React, { useState } from "react";
import styled from "styled-components";

function ImgUploadBox() {
	const [files, setFiles] = useState<string>("");

	const onLoadFile = (event: { target: { files: any } }) => {
		const file = event.target.files;
		console.log(file);
		setFiles(file);
	};

	return (
		<Wrapper>
			<h2>새 게시물 만들기</h2>
			<UploadBox>sdfsdfs</UploadBox>
			<StyledDiv>
				<StyledLabel htmlFor="input-file">
					<p>업로드</p>
				</StyledLabel>
			</StyledDiv>
			<StyledInput
				type="file"
				id="input-file"
				accept="img/*"
				onChange={onLoadFile}
			/>
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
	height: 70%;
	margin-bottom: 3%;
`;

const StyledDiv = styled.div`
	display: flex;
	height: 35px;
	border-radius: 3px;
	width: 20%;
	justify-content: center;
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
