import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getLists } from "../actions";
import { createData } from "../actions";

const ShowLists = props => {
  const [li, setLi] = useState({});
  const [listId, setListId] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    props.createData(li[listId], listId);
    setLi({ ...li, [listId]: "" });
  };

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
            <ul>{list.listName}</ul>
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
                return <li>{data}</li>;
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

export default connect(mapStateToProps, { getLists, createData })(ShowLists);
