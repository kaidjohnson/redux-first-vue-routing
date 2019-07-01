import { back, forward, go, locationChange, push, replace } from './action-creators.js';

describe('action-creators', () => {
	describe('back', () => {
		it('returns an FSA with a namespaced type of "BACK" and no payload', () => {
			expect(back('foo', 'bar', 'baz')).toEqual({
				type: '@@redux-first-vue-router/BACK'
			});
		});
	});

	describe('forward', () => {
		it('returns an FSA with a namespaced type of "FORWARD" and no payload', () => {
			expect(forward('foo', 'bar', 'baz')).toEqual({
				type: '@@redux-first-vue-router/FORWARD'
			});
		});
	});

	describe('go', () => {
		it('returns an FSA with a namespaced type of "GO" and a payload of the first provided argument', () => {
			expect(go('foo', 'bar', 'baz')).toEqual({
				type: '@@redux-first-vue-router/GO',
				payload: 'foo'
			});
		});
	});

	describe('locationChange', () => {
		const payload = {
			to: 'foo'
		};

		const payloadMatched = {
			to: 'foo',
			matched: 'bar'
		};

		it('returns an FSA with a namespaced type of "LOCATION_CHANGE" and a payload of the first provided argument', () => {
			expect(locationChange(payload)).toEqual({
				type: '@@redux-first-vue-router/LOCATION_CHANGE',
				payload: {
					to: 'foo'
				}
			});
		});

		it('returns an FSA with a namespaced type of "LOCATION_CHANGE" and a payload of the first provided argument without the matched property', () => {
			expect(locationChange(payloadMatched)).toEqual({
				type: '@@redux-first-vue-router/LOCATION_CHANGE',
				payload: {
					to: 'foo'
				}
			});
		});
	});

	describe('push', () => {
		it('returns an FSA with a namespaced type of "PUSH" and a payload of provided arguments', () => {
			expect(push('foo', 'bar', 'baz')).toEqual({
				type: '@@redux-first-vue-router/PUSH',
				payload: ['foo', 'bar', 'baz']
			});
		});
	});

	describe('replace', () => {
		it('returns an FSA with a namespaced type of "REPLACE" and a payload of provided arguments', () => {
			expect(replace('foo', 'bar', 'baz')).toEqual({
				type: '@@redux-first-vue-router/REPLACE',
				payload: ['foo', 'bar', 'baz']
			});
		});
	});
});
