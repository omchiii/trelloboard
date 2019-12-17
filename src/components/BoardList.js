import React, { useEffect } from "react";
import Board from "./Board";
import { connect } from "react-redux";
import { getBoards } from "../actions";
import "./BoardList.css";

const BoardList = ({ getBoards, boards }) => {
	useEffect(() => {
		getBoards();
	}, []);

	const renderList = () => {
		if (boards) {
			return boards.map(board => (
				<Board className="menu" board={board} key={board.id} />
			));
		}

		return <div>No content to show!</div>;
	};
	return <div>{renderList()}</div>;
};

const mapStateToProps = state => {
	return { boards: state.boards };
};

export default connect(mapStateToProps, { getBoards })(BoardList);
