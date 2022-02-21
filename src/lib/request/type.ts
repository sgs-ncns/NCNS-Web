export type userInfoType = {
	account_name: string;
	follow_status: boolean | null;
	follower_count: number;
	following_count: number;
	user_id: number;
	introduce: string | null;
	nickname: string;
	post_count: number;
	subscribe_status: boolean | null;
	subscribing_count: number | null;
};

export type responseType = {
	response_code: string;
	message: string;
	data: any;
};

export type followerInfoType = {
	id: number;
	account_name: string;
	nickname: string;
};

export type userPostsType = {
	account_name: string;
	comment_count: number;
	content: string;
	created_at: string;
	image_path: string;
	like_count: number;
	post_id: number;
	user_id: number;
	liking: boolean;
};
