import { locationChange } from './action-creators.js';

/**
 * @param {Object} Vue
 * @param {Object} options
 * @param {Object} options.router
 * @param {Object} options.store
 */
const install = (Vue, { router, store }) => {
	router.afterEach((to, from) => {
		store.dispatch(locationChange(to));
	});
};

export default { install };
