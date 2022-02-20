import Amplify, { Auth, Storage } from "aws-amplify";
import { createFolderName } from "./format";
export const S3_ADDRESS =
	"https://sgsncns130837-dev.s3.ap-northeast-2.amazonaws.com/public/";

Amplify.configure({
	Auth: {
		identityPoolId: "ap-northeast-2:88bbdf71-f8db-4267-bbf7-496a072f5b8a", //REQUIRED - Amazon Cognito Identity Pool ID
		region: "ap-northeast-2", // REQUIRED - Amazon Cognito Region
		// userPoolId: "XX-XXXX-X_abcd1234", //OPTIONAL - Amazon Cognito User Pool ID
		// userPoolWebClientId: "XX-XXXX-X_abcd1234", //OPTIONAL - Amazon Cognito Web Client ID
	},
	Storage: {
		AWSS3: {
			bucket: "sgsncns130837-dev", //REQUIRED -  Amazon S3 bucket name
			region: "ap-northeast-2", //OPTIONAL -  Amazon service region
		},
	},
});

export const requestImages = async (
	userId: number,
	s3FolderName: string,
	imageCount?: number,
) => {
	try {
		const res = await Storage.list(`${userId}/${s3FolderName}/`);
		const res2 = await Storage.list(`${userId}`);
		console.log("EEMMEMEMEM", res2);
		if (imageCount) return res.splice(0, imageCount);
		return res;
	} catch (err) {
		console.log(err);
		return;
	}
};

// export const requestFolders = async(
// 	userId:number,
// ) => {
// 	try {

// 	}
// }

export const uploadImage = (files: File, userId: number) => {
	const reader = new FileReader();
	const date = new Date(+new Date() + 3240 * 10000)
		.toISOString()
		.replace("T", " ")
		.replace(/\..*/, "");
	const foldername = `${userId.toString()}/${date}/${files.name}`;
	Storage.put(foldername, files, {
		resumable: true,
		completeCallback: (event) => {
			console.log(`Successfully uploaded ${event.key}`);
		},
		errorCallback: (err) => {
			console.error("Unexpected error while uploading", err);
		},
	});
	return date;
};
