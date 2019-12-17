import React from "react";
import { Link } from "react-router-dom";

const Board = props => {
	return (
		<div className="ui cards">
			<div className="card">
				<div className="content">
					<div className="header">{props.board.boardName}</div>
					<br />
					<Link to={`/${props.board.id}`}>
						<div className="ui bottom attached button primary">Show Board!</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Board;
