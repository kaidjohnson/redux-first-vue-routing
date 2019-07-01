import { createLocalVue } from '@vue/test-utils';
import { LOCATION_CHANGE } from './action-types.json';
import plugin from './plugin.js';

const router = {
	beforeEach: jest.fn()
};

const store = {
	dispatch: jest.fn()
};

const next = jest.fn();
const to = {};
const from = {};

describe('plugin', () => {
	it('uses the beforeEach hook of the provided router and dispatches a LOCATION_CHANGE action in the callback', () => {
		createLocalVue().use(plugin, { router, store });
		expect(router.beforeEach).toHaveBeenCalledWith(expect.any(Function));
		expect(store.dispatch).not.toHaveBeenCalled();

		router.beforeEach.mock.calls[0][0](to, from, next);
		expect(store.dispatch).toHaveBeenCalledWith({
			type: LOCATION_CHANGE,
			payload: to
		});
	});
});
