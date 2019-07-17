import * as actionCreators from './action-creators.js';
import * as reduxFirstVueRouting from './index.js';
import middleware from './middleware.js';
import plugin from './plugin.js';
import reducer from './reducer.js';

describe('redux-first-vue-router', () => {
	it('exports a PUSH action type', () => {
		expect(reduxFirstVueRouting.PUSH).toEqual('@@redux-first-vue-router/PUSH');
	});

	it('exports a REPLACE action type', () => {
		expect(reduxFirstVueRouting.REPLACE).toEqual('@@redux-first-vue-router/REPLACE');
	});

	it('exports a GO action type', () => {
		expect(reduxFirstVueRouting.GO).toEqual('@@redux-first-vue-router/GO');
	});

	it('exports a BACK action type', () => {
		expect(reduxFirstVueRouting.BACK).toEqual('@@redux-first-vue-router/BACK');
	});

	it('exports a FORWARD action type', () => {
		expect(reduxFirstVueRouting.FORWARD).toEqual('@@redux-first-vue-router/FORWARD');
	});

	it('exports a LOCATION_CHANGE action type', () => {
		expect(reduxFirstVueRouting.LOCATION_CHANGE).toEqual('@@redux-first-vue-router/LOCATION_CHANGE');
	});

	it('exports a push action creator', () => {
		expect(reduxFirstVueRouting.push).toBe(actionCreators.push);
	});

	it('exports a replace action creator', () => {
		expect(reduxFirstVueRouting.replace).toBe(actionCreators.replace);
	});

	it('exports a go action creator', () => {
		expect(reduxFirstVueRouting.go).toBe(actionCreators.go);
	});

	it('exports a back action creator', () => {
		expect(reduxFirstVueRouting.back).toBe(actionCreators.back);
	});

	it('exports a forward action creator', () => {
		expect(reduxFirstVueRouting.forward).toBe(actionCreators.forward);
	});

	it('exports a locationChange action creator', () => {
		expect(reduxFirstVueRouting.locationChange).toBe(actionCreators.locationChange);
	});

	it('exports a middleware method', () => {
		expect(reduxFirstVueRouting.middleware).toBe(middleware);
	});

	it('exports a reducer method', () => {
		expect(reduxFirstVueRouting.reducer).toBe(reducer);
	});

	it('exports a Vue plugin by default', () => {
		expect(reduxFirstVueRouting.default).toBe(plugin);
	});
});
