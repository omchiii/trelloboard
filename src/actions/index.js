export const createBoard = board => {
	if (!localStorage.getItem("boardCollection")) {
		const parsed = [];
		parsed.push({ id: parsed.length + 1, boardName: board });
		localStorage.setItem("boardCollection", JSON.stringify(parsed));
		return {
			type: "CREATE_BOARD",
			payload: parsed
		};
	}

	const parsed = JSON.parse(localStorage.getItem("boardCollection"));
	parsed.push({ id: parsed.length + 1, boardName: board });
	localStorage.setItem("boardCollection", JSON.stringify(parsed));

	return {
		type: "CREATE_BOARD",
		payload: parsed
	};
};

export const getBoards = () => {
	const parsed = JSON.parse(localStorage.getItem("boardCollection"));
	return {
		type: "GET_BOARDS",
		payload: parsed
	};
};
