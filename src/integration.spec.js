import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createLocalVue } from '@vue/test-utils';
import { middleware, default as plugin, reducer } from './index.js';
import VueRouter from 'vue-router';

const routes = [
	{ name: 'foo', path: '/foo' }
];

describe('redux-first-vue-routing', () => {
	let router;
	let store;

	beforeAll(() => {
		jest.spyOn(global.console, 'warn').mockImplementation();
	});

	afterAll(() => {
		global.console.warn.mockRestore();
	});

	beforeEach(() => {
		const rootReducer = combineReducers({ router: reducer });
		router = new VueRouter({ routes });
		store = createStore(rootReducer, {}, applyMiddleware(middleware(router)));

		const localVue = createLocalVue();
		localVue.use(VueRouter);
		localVue.use(plugin, { router, store });

		router.onError(() => {});
	});

	it('syncs router state in the store when router navigation occurs', () => {
		router.push({ name: 'foo' });

		expect(store.getState().router).toEqual({
			fullPath: '/foo',
			hash: '',
			meta: {},
			name: 'foo',
			params: {},
			path: '/foo',
			query: {},
		});
	});

	it('syncs resulting router state to the store when navigating to an unknown route', () => {
		router.push({ name: 'bar' });

		expect(store.getState().router).toEqual({
			fullPath: '/',
			hash: '',
			meta: {},
			name: 'bar',
			params: {},
			path: '/',
			query: {}
		});
	});

	it('does not store a canceled navigation', () => {
		router.beforeResolve((to, from, next) => {
			if (to.matched.length) {
				next();
			}
		});

		jest.spyOn(store, 'dispatch');
		router.push({ name: 'foo' });
		router.push({ name: 'bar' });

		expect(store.dispatch.mock.calls.length).toBe(1);
	});
});
