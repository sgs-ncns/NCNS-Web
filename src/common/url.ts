export const BASE_URL = "http://15.165.120.145:9000";

export const SEND_LIKE_API = "http://localhost:8000/api/notify/like";
export const GET_NOTIFICATION_API = "http://localhost:8000/api/notify";
export const SEND_SIGNUP_INFO_API = BASE_URL + "/api/user";
// export const SEND_LOGIN_INFO_API = BASE_URL + "/api/auth";
export const SEND_LOGIN_ACCOUNT_API = BASE_URL + "/api/auth/account";
export const SEND_LOGIN_EMAIL_API = BASE_URL + "/api/auth/local";

// 유저 서버
export const SEND_DUPLICATE_EMAIL = BASE_URL + "/api/user/email";
export const SEND_DUPLICATE_ACCOUNT = BASE_URL + "/api/user/account";

//홈페이지
export const GET_USER_PROFILE_INFO = "/api/user/";

//프로필 페이지
export const GET_FOLLOWER_INFO = "/api/user/";
export const GET_FOLLOWING_INFO = "/api/user/";
export const GET_SUBSCRIBE_INFO = "/api/user/subscribing/";
export const USER_POSTS = "/api/post";

//팔로우 및 깐부 신청
export const SEND_FOLLOW = "/api/user/follow/";
export const SEND_SUBSCRIBE = "/api/user/subscribe/";
