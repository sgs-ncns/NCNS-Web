const BASE_URL = "http://15.165.120.145:9000";

export const SEND_LIKE_API = "http://localhost:8000/api/notify/like";
export const GET_NOTIFICATION_API = "http://localhost:8000/api/notify";
export const SEND_SIGNUP_INFO_API = BASE_URL + "/api/user";
// export const SEND_LOGIN_INFO_API = BASE_URL + "/api/auth";
export const SEND_LOGIN_ACCOUNT_API = BASE_URL + "/api/auth/account";
export const SEND_LOGIN_EMAIL_API = BASE_URL + "/api/auth/local";

// 유저 서버
export const SEND_DUPLICATE_EMAIL = BASE_URL + "/api/user/email";
export const SEND_DUPLICATE_ACCOUNT = BASE_URL + "/api/user/account";
