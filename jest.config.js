module.exports = {
	collectCoverage: true,
	collectCoverageFrom: [
		'**/src/**/*.js',
		'!**/src/**/*.spec.js'
	],
	coverageDirectory: 'build/coverage',
	coverageReporters: ['html', 'text', 'text-summary'],
	moduleFileExtensions: ['js'],
	testMatch: [
		'**/src/**/*.spec.js'
	],
	transform: {
		'^.+\\.js$': 'babel-jest'
	}
};
