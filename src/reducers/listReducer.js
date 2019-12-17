export default (state = [], action) => {
	switch (action.type) {
		case "CREATE_LIST":
			return action.payload;

		case "GET_LISTS":
			return action.payload;
		case "DELETE_DATA":
			return action.payload;
		case "CREATE_DATA":
			return action.payload;
		default:
			return state;
	}
};
