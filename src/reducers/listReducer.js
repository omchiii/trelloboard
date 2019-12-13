export default (state = [{ id: "", listName: "" }], action) => {
	switch (action.type) {
		case "CREATE_LIST":
			return action.payload;

		case "GET_LISTS":
			return action.payload;
		case "CREATE_DATA":
			return action.payload;
		default:
			return state;
	}
};
