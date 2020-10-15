import { BACK, FORWARD, GO, LOCATION_CHANGE, PUSH, REPLACE } from './action-types.js';

/**
 * @param {Object} obj
 * @param {String} item
 * @returns {Object}
 */
const omit = (obj, item) => {
	const newObj = {};

	for (const prop in obj) {
		if (prop !== item) {
			newObj[prop] = obj[prop];
		}
	}

	return newObj;
};

/**
 * @param {Object|String} location
 * @param {Function} [onComplete]
 * @param {Function} [onAbort]
 * @returns {Object}
 */
export const push = (...payload) => ({
	type: PUSH,
	payload
});

/**
 * @param {Object|String} location
 * @param {Function} [onComplete]
 * @param {Function} [onAbort]
 * @returns {Object}
 */
export const replace = (...payload) => ({
	type: REPLACE,
	payload
});

/**
 * @param {Number} payload
 * @returns {Object}
 */
export const go = (payload) => ({
	type: GO,
	payload
});

/**
 * @returns {Object}
 */
export const back = () => ({
	type: BACK
});

/**
 * @returns {Object}
 */
export const forward = () => ({
	type: FORWARD
});

/**
 * @param {Object} payload
 * @returns {Object}
 */
export const locationChange = (payload) => ({
	type: LOCATION_CHANGE,
	payload: omit(payload, 'matched')
});
