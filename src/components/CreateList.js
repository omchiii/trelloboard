import React, { useState } from "react";
import { createList } from "../actions";
import { connect } from "react-redux";

const CreateList = props => {
	const [list, setList] = useState("");

	const onSubmit = e => {
		e.preventDefault();
		props.createList(props.id, list);
		setList("");
	};

	return (
		<form onSubmit={onSubmit} className="ui container form">
			<input type="text" onChange={e => setList(e.target.value)} value={list} />
			<br />

			<button className="ui button primary" type="submit">
				Create List
			</button>
		</form>
	);
};

export default connect(null, { createList })(CreateList);
