export const emailHandler = (
	email: string,
	callback: { (state: boolean): void; (arg0: boolean): any },
): void => {
	const regEmail =
		/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;

	regEmail.test(email) ? callback(true) : callback(false);
};
