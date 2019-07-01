import * as actionCreators from './action-creators.js';
import * as reduxFirstVueRouter from './index.js';
import middleware from './middleware.js';
import reducer from './reducer.js';

describe('redux-first-vue-router', () => {
	it('exports a PUSH action type', () => {
		expect(reduxFirstVueRouter.PUSH).toEqual('@@redux-first-vue-router/PUSH');
	});

	it('exports a REPLACE action type', () => {
		expect(reduxFirstVueRouter.REPLACE).toEqual('@@redux-first-vue-router/REPLACE');
	});

	it('exports a GO action type', () => {
		expect(reduxFirstVueRouter.GO).toEqual('@@redux-first-vue-router/GO');
	});

	it('exports a BACK action type', () => {
		expect(reduxFirstVueRouter.BACK).toEqual('@@redux-first-vue-router/BACK');
	});

	it('exports a FORWARD action type', () => {
		expect(reduxFirstVueRouter.FORWARD).toEqual('@@redux-first-vue-router/FORWARD');
	});

	it('exports a LOCATION_CHANGE action type', () => {
		expect(reduxFirstVueRouter.LOCATION_CHANGE).toEqual('@@redux-first-vue-router/LOCATION_CHANGE');
	});

	it('exports a push action creator', () => {
		expect(reduxFirstVueRouter.push).toBe(actionCreators.push);
	});

	it('exports a replace action creator', () => {
		expect(reduxFirstVueRouter.replace).toBe(actionCreators.replace);
	});

	it('exports a go action creator', () => {
		expect(reduxFirstVueRouter.go).toBe(actionCreators.go);
	});

	it('exports a back action creator', () => {
		expect(reduxFirstVueRouter.back).toBe(actionCreators.back);
	});

	it('exports a forward action creator', () => {
		expect(reduxFirstVueRouter.forward).toBe(actionCreators.forward);
	});

	it('exports a locationChange action creator', () => {
		expect(reduxFirstVueRouter.locationChange).toBe(actionCreators.locationChange);
	});

	it('exports a routerMiddleware method', () => {
		expect(reduxFirstVueRouter.middleware).toBe(middleware);
	});

	it('exports a routerReducer method', () => {
		expect(reduxFirstVueRouter.reducer).toBe(reducer);
	});
});
