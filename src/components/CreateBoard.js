import React, { useState } from "react";
import { connect } from "react-redux";
import { createBoard } from "../actions";

const CreateBoard = props => {
	const [board, setBoard] = useState("");
	const onSubmit = e => {
		e.preventDefault();
		props.createBoard(board);
		setBoard("");
	};
	return (
		<form className="ui form" onSubmit={onSubmit}>
			<label>Create A Board</label>
			<input
				type="text"
				value={board}
				onChange={e => setBoard(e.target.value)}
			/>
			<button className="ui button" type="submit">
				Submit
			</button>
		</form>
	);
};

export default connect(null, { createBoard })(CreateBoard);
