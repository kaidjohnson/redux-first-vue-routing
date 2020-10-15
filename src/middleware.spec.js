import { BACK, FORWARD, GO, PUSH, REPLACE } from './action-types.js';
import middleware from './middleware.js';

describe('middleware', () => {
	let runner;

	beforeEach(() => {
		const push = jest.fn().mockImplementation((payload) => `pushed ${payload}`);
		const replace = jest.fn().mockImplementation((payload) => `replaced ${payload}`);
		const go = jest.fn().mockImplementation((payload) => `gone ${payload}`);
		const back = jest.fn().mockReturnValue('reversed');
		const forward = jest.fn().mockReturnValue('forwarded');

		const next = jest.fn().mockImplementation((action) => action.type);
		const router = { push, replace, go, back, forward };
		runner = middleware(router)()(next);
	});

	describe('receiving an unknown action', () => {
		it('returns the result of the next action', () => {
			expect(runner({ type: 'UNKNOWN' })).toEqual('UNKNOWN');
		});
	});

	describe('receiving a PUSH action', () => {
		it('returns the result of the router push method', () => {
			expect(runner({ type: PUSH, payload: ['foo'] })).toEqual('pushed foo');
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
