import { locationChange } from './action-creators.js';

/**
 * @param {Object} Vue
 * @param {Object} options
 * @param {Object} options.router
 * @param {Object} options.store
 */
const install = (Vue, { router, store }) => {
	router.beforeEach((to, from, next) => {
		store.dispatch(locationChange(to));
		next();
	});
};

export default { install };
