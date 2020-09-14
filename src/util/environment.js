
function isDev() {
	return process.env.NODE_ENV === 'development';
}

function isProd() {
	return process.env.NODE_ENV === 'production';
}

function isPreview() {
	return isProd();
}

function getSiteRoot() {
	return isPreview() ? '/lenssen-inc-website/' : '/';
}

function getPublicUrlRoot() {
	return isDev() ? process.env.PUBLIC_URL : getSiteRoot();
}

export { isPreview, isProd, isDev, getSiteRoot, getPublicUrlRoot };
