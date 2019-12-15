import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getLists } from "../actions";
import { createData, deleteData } from "../actions";

const ShowLists = props => {
  const [li, setLi] = useState({});
  const [listId, setListId] = useState("");
  const [selectedLiId, setSelectedLiId] = useState("");
  const [selectedLiIdData, setSelectedLiData] = useState("");
  const [oldListId, setOldListId] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    props.createData(li[listId], listId);
    setLi({ ...li, [listId]: "" });
  };

  const onDrop = omer => {
    deleteData(selectedLiId, oldListId);
    createData(selectedLiIdData, omer);
    props.getLists();
  };

  const onDragStart = (id, data, omer2) => {
    setSelectedLiId(id);
    setSelectedLiData(data);
    setOldListId(omer2);
  };

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function onChange(evt) {
    const value = evt.target.value;
    setLi({ ...li, [evt.target.name]: value });
  }

  useEffect(() => {
    props.getLists();
  }, []);

  const obj = () => {
    if (props.lists) {
      return props.lists
        .filter(x => x.boardId === props.id)
        .map(list => (
          <div>
            <ul id={list.listId}>{list.listName}</ul>
            <form className="ui form" onSubmit={onSubmit}>
              <input
                name={list.listId}
                type="text"
                onClick={() => setListId(list.listId)}
                onChange={onChange}
                value={li[list.listId]}
              />
              <button
                className="ui button primary"
                onClick={() => setListId(list.listId)}
                type="submit"
              >
                Submit
              </button>

              {list.listData.map(data => {
                if (data.data) {
                  return (
                    <li
                      onDragStart={() =>
                        onDragStart(data.id, data.data, list.listId)
                      }
                      onDragOver={allowDrop}
                      onDrop={() => onDrop(list.listId)}
                      draggable="true"
                      id={data.id}
                      value={data.data}
                    >
                      {data.data}

                      <button
                        className="ui button red"
                        onClick={() => deleteData(data.id, list.listId)}
                      >
                        Delete
                      </button>
                    </li>
                  );
                }
              })}
            </form>
          </div>
        ));
    }
    return <div></div>;
  };

  return <div>{obj()}</div>;
};

const mapStateToProps = state => {
  return { lists: state.lists };
};

export default connect(mapStateToProps, { getLists, createData, deleteData })(
  ShowLists
);
