//catch all TS error from Kent C Dodds:  https://kentcdodds.com/blog/get-a-catch-block-error-message-with-typescript

export function getErrorMessage(error: unknown) {
	if (error instanceof Error) return error.message;
	return String(error);
}
