import { LOCATION_CHANGE } from './action-types.json';
import reducer from './reducer.js';

describe('reducer', () => {
	it('returns the default state with no arguments provided', () => {
		expect(reducer()).toEqual({});
	});

	it('assigns the payload to state when receiving the LOCATION_CHANGE action', () => {
		const state = { foo: 'foo' };
		const payload = { bar: 'bar' };
		const action = { type: LOCATION_CHANGE, payload };

		expect(reducer(state, action)).toEqual(payload);
	});

	it('returns the current state when receiving an unknown action', () => {
		const state = { foo: 'foo' };
		const payload = { bar: 'bar' };
		const action = { type: 'UNKNOWN', payload };

		expect(reducer(state, action)).toEqual(state);
	});
});
