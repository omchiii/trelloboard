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

export const createList = (boardId, listName) => {
	if (!localStorage.getItem("listCollection")) {
		const parsed = [];
		parsed.push({
			boardId: boardId,
			listId: parsed.length + 1,
			listName,
			listData: []
		});
		localStorage.setItem("listCollection", JSON.stringify(parsed));
		return {
			type: "CREATE_LIST",
			payload: parsed
		};
	}

	const parsed = JSON.parse(localStorage.getItem("listCollection"));
	parsed.push({
		boardId,
		listId: parsed.length + 1,
		listName,
		listData: []
	});
	localStorage.setItem("listCollection", JSON.stringify(parsed));

	return {
		type: "CREATE_LIST",
		payload: parsed
	};
};

export const getLists = () => {
	const parsed = JSON.parse(localStorage.getItem("listCollection"));
	return {
		type: "GET_LISTS",
		payload: parsed
	};
};
