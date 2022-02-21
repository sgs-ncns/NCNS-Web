import RequestButton from "components/atoms/RequestButton";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import FeedBody from "../Feed/FeedBody";
import { MentionsInput, Mention } from "react-mentions";
import { followers, hashtags } from "mocks/tags";
import Image from "components/atoms/Image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers";
import { uploadImage } from "utils/amplify";
import { checkResponseCode } from "lib/utils";
import { sendPostInfo } from "lib/request/post";
import { useNavigate } from "react-router-dom";
import { closeModal } from "reducers/modalReducer";
import { sendPostNotify } from "lib/request/notify";

// 이미지 업로드를 할 수 있는 컴포넌트입니다.
// 이 컴포넌트에는 흐름을 넣었습니다.
// 1. 사진을 업로드 할 수 있는 버튼을 클릭합니다.
// 2. 사진 파일을 업로드 시 이미지 미리보기가 생성됩니다.
// 3. 다음 버튼을 누르면 글을 작성할 수 있는 칸이 뜨게 됩니다.
// 4. 게시 버튼을 누르면 글이 게시됩니다.

function ImgUploadBox() {
	const [preview, setPreview] = useState(null);
	const [file, setFile] = useState<File>(null);
	const [contents, setContents] = useState<string>("");
	// const [hashtags, setHashtags] = useState<Array<string>>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isFirst, setFirst] = useState<boolean>(true);
	const [isSecond, setSecond] = useState<boolean>(false);
	const userId = useSelector((state: RootState) => state.userReducer.userId);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const accountName = useSelector(
		(state: RootState) => state.userReducer.accountName,
	);
	const ref = useRef(null);

	// 업로드 버튼을 누른 후 사진을 첨부하면 파일 리더를 통해 미리보기 기능을 제공합니다.
	const onLoadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!event.target.files) return;

		const file = event.target.files[0];
		setFile(file);

		const reader = new FileReader();
		reader.onload = () => {
			setPreview(reader.result);
		};
		reader.readAsDataURL(file);
	};

	//흐름이 있기에 다음 스탭으로 이동할 수 있는 로직입니다.
	//isFirst와 isSecond를 통해 흐름이 움직입니다.
	const toNextStep = () => {
		if (isFirst === true) {
			setFirst(false);
			setSecond(true);
		}
		if (isSecond === true) {
			// TODO : 게시 로직 추가하기
			const imagePath = uploadImage(file, userId);
			sendPostInfo(accountName, contents, imagePath)
				.then((res: string) => {
					if (checkResponseCode(res) === "00") {
						alert("게시물이 등록되었습니다!");
						sendPostNotify(accountName)
							.then((res) => {
								console.log(res);
								return;
							})
							.catch((err) => console.log(err));
						onReset();
						dispatch(closeModal());
						navigate("/");
					} else throw Error("실패");
				})
				.catch((err: any) => {
					console.log(err);
					return;
				});
		}
	};

	// 취소 버튼을 눌렀을 때, 모든 흐름을 처음으로 돌립니다.
	const onReset = () => {
		setFirst(true);
		setSecond(false);
		setContents(null);
		setPreview(null);
	};

	return (
		<Wrapper>
			<h2>새 게시물 만들기</h2>
			{isFirst && preview && (
				<UploadBox ref={ref}>
					<Image src={preview} category={"rectangle"} />
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
			{preview ? (
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
			{isFirst && !preview && (
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
	width: 50%;
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
