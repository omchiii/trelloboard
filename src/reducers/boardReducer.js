export default (state = [{ id: "", boardName: "" }], action) => {
	switch (action.type) {
		case "CREATE_BOARD":
			return action.payload;
		case "GET_BOARDS":
			return action.payload;
		default:
			return state;
	}
};
