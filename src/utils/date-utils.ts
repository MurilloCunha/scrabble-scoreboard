export const secondsToTime = (seconds: number): string => {
	return new Date(seconds)
		.toISOString()
		.substr(11,8)
		.replace(":","h ")
		.replace(":","m ") + "s"
}