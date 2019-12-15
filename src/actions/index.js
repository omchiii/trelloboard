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
      listId: parsed.length,
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
  const ids = () => {
    if (parsed.length === 1) {
      return parsed.length;
    }
    return parsed.length;
  };

  parsed.push({
    boardId,
    listId: ids(),
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

export const createData = (li, listId) => {
  const parsed = JSON.parse(localStorage.getItem("listCollection"));

  parsed[listId].listData.push({ id: Math.random(), data: li });

  localStorage.setItem("listCollection", JSON.stringify(parsed));
  return {
    type: "CREATE_DATA",
    payload: parsed
  };
};

export const deleteData = (liId, listId) => {
  const parsed = JSON.parse(localStorage.getItem("listCollection"));
  const filtered = parsed[listId].listData.filter(data => data.id !== liId);
  parsed[listId].listData = filtered;

  localStorage.setItem("listCollection", JSON.stringify(parsed));
  return {
    type: "DELETE_DATA",
    payload: parsed
  };
};
