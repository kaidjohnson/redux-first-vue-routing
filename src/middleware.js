import { BACK, FORWARD, GO, PUSH, REPLACE, UPDATE } from './action-types.json';

const isEqual = (object1, object2) => JSON.stringify(object1) === JSON.stringify(object2);

export default (router) => () => (next) => (action) => {
	switch (action.type) {
		case PUSH: return router.push(...action.payload);
		case UPDATE:
			const query = { ...router.currentRoute.query, ...action.payload[0] };
			return !isEqual(query, router.currentRoute.query) ? router.push({ query }) : next(action);
		case REPLACE: return router.replace(...action.payload);
		case GO: return router.go(action.payload);
		case BACK: return router.back();
		case FORWARD: return router.forward();
		default: return next(action);
	}
};
