if (typeof process == 'object') {
	module.exports = process.env.NODE_ENV
} else if (typeof window != 'undefined') {
	if (/^\w+:\/\/localhost:3\d{3}\//.test(location.href)) {
		module.exports = 'development'
	}
	if (typeof localStorage == 'object') {
		var ctx = localStorage.getItem('runtime-context')
		if (ctx != null) module.exports = ctx
	}
	if (!module.exports) module.exports = 'production'
}