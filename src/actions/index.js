export const createBoard = board => {
	if (!localStorage.getItem("boardCollection")) {
		localStorage.setItem("boardCollection", "[]");
		const parsed = JSON.parse(localStorage.getItem("boardCollection"));
		parsed.push({ id: parsed.length + 1, boardName: board });
		localStorage.setItem("boardCollection", JSON.stringify(parsed));
	}

	const parsed = JSON.parse(localStorage.getItem("boardCollection"));
	parsed.push({ id: parsed.length + 1, boardName: board });
	localStorage.setItem("boardCollection", JSON.stringify(parsed));

	return {
		type: "CREATE_BOARD",
		payload: parsed
	};
};
