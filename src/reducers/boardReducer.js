export default (state = {}, action) => {
	switch (action.type) {
		case "CREATE_BOARD":
			return action.payload;
		default:
			return state;
	}
};
