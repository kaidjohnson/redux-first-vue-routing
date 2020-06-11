import { BACK, FORWARD, GO, PUSH, REPLACE, UPDATE } from './action-types.json';
import middleware from './middleware.js';

describe('middleware', () => {
	let runner;
	let router;
	let next;

	beforeEach(() => {
		const currentRoute = {
			name: 'currentRoute',
			query: {
				sort: 'name',
				sortAscending: 'true'
			}
		};
		const push = jest.fn().mockImplementation((payload) => `pushed ${JSON.stringify(payload)}`);
		const replace = jest.fn().mockImplementation((payload) => `replaced ${payload}`);
		const go = jest.fn().mockImplementation((payload) => `gone ${payload}`);
		const back = jest.fn().mockReturnValue('reversed');
		const forward = jest.fn().mockReturnValue('forwarded');
		next = jest.fn().mockImplementation((action) => action.type);
		router = { currentRoute, push, replace, go, back, forward };
		runner = middleware(router)()(next);
	});

	describe('receiving an unknown action', () => {
		it('returns the result of the next action', () => {
			expect(runner({ type: 'UNKNOWN' })).toEqual('UNKNOWN');
		});
	});

	describe('receiving a PUSH action', () => {
		it('returns the result of the router push method', () => {
			expect(runner({ type: PUSH, payload: ['foo'] })).toEqual('pushed "foo"');
		});
	});

	describe('receiving an UPDATE action', () => {
		let results;
		let queryUpdates;

		describe('and the query on the current route does not change', () => {
			beforeEach(() => {
				queryUpdates = {
					sort: 'name',
					sortAscending: 'true'
				};
				results = runner({ type: UPDATE, payload: [queryUpdates] });
			});

			it('does not call the router push method', () => {
				expect(router.push).not.toHaveBeenCalled();
			});

			it('calls next with the action', () => {
				expect(next).toHaveBeenCalledWith({ type: UPDATE, payload: [queryUpdates] });
			});

			it('returns the result of next', () => {
				expect(results).toBe(UPDATE);
			});
		});

		describe('and the query on the current route is changed', () => {
			beforeEach(() => {
				queryUpdates = { sort: 'bar' };
				results = runner({ type: UPDATE, payload: [queryUpdates] });
			});

			it('calls the router push method with the updated query', () => {
				expect(router.push).toHaveBeenCalledWith({ query: { sort: 'bar', sortAscending: 'true' } });
			});

			it('returns the result of the router push method', () => {
				expect(results).toEqual('pushed {"query":{"sort":"bar","sortAscending":"true"}}');
			});
		});
	});

	describe('receiving a REPLACE action', () => {
		it('returns the result of the router replace method', () => {
			expect(runner({ type: REPLACE, payload: ['foo'] })).toEqual('replaced foo');
		});
	});

	describe('receiving a GO action', () => {
		it('returns the result of the router go method', () => {
			expect(runner({ type: GO, payload: 'foo' })).toEqual('gone foo');
		});
	});

	describe('receiving a BACK action', () => {
		it('returns the result of the router go method', () => {
			expect(runner({ type: BACK })).toEqual('reversed');
		});
	});

	describe('receiving a FORWARD action', () => {
		it('returns the result of the router go method', () => {
			expect(runner({ type: FORWARD })).toEqual('forwarded');
		});
	});
});
