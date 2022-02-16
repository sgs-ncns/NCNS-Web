export type userInfoType = {
	account_name: string;
	follower_count: number;
	following_count: number;
	id: number;
	introduce: string | null;
	nickname: string;
	post_count: number;
};

export type responseType = {
	response_code: string;
	message: string;
	data: any;
};
