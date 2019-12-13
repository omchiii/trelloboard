import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getLists } from "../actions";

const ShowLists = props => {
	useEffect(() => {
		props.getLists();
	}, []);

	const obj = () => {
		if (props.lists) {
			return props.lists
				.filter(x => x.boardId === props.id)
				.map(list => <ul>{list.listName}</ul>);
		}
		return <div></div>;
	};

	return <div>{obj()}</div>;
};

const mapStateToProps = state => {
	return { lists: state.lists };
};

export default connect(mapStateToProps, { getLists })(ShowLists);
