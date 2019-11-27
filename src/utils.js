export const setRefreshToken = value => {
	document.cookie = `refreshToken=${value}; expires=${(Date.now() + 86400000).toUTCString()}`
}
