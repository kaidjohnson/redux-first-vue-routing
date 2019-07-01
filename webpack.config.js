const path = require('path');

module.exports = {
	mode: 'production',
	entry: path.resolve(__dirname, 'src/index.js'),
	output: {
		path: path.resolve(__dirname, 'build/dist'),
		filename: 'redux-first-vue-router.js',
		library: 'ReduxFirstVueRouter',
		libraryTarget: 'umd'
	}
};
