import { BACK, FORWARD, GO, PUSH, REPLACE } from './action-types.js';

export default (router) => () => (next) => (action) => {
	switch (action.type) {
		case PUSH: return router.push(...action.payload);
		case REPLACE: return router.replace(...action.payload);
		case GO: return router.go(action.payload);
		case BACK: return router.back();
		case FORWARD: return router.forward();
		default: return next(action);
	}
};
