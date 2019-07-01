import { LOCATION_CHANGE } from './action-types.json';

export default (state = {}, action = {}) => {
	switch (action.type) {
		case LOCATION_CHANGE:
			return action.payload;

		default:
			return state;
	}
};
