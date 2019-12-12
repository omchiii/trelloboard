import React from "react";
import { Link } from "react-router-dom";

const Board = props => {
	return (
		<div className="ui cards">
			<div className="card">
				<div className="content">
					<div className="header">{props.board.boardName}</div>
					<Link to={`/${props.board.id}`}>
						<button className="ui button primary">Show</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Board;
