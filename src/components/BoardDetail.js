import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getBoards } from "../actions";
import CreateList from "./CreateList";
import ShowLists from "./ShowLists";

const BoardDetail = props => {
	useEffect(() => {
		props.getBoards();
	}, []);

	const renderComponent = () => {
		if (props.boards) {
			const obj = props.boards.find(obj => obj.id == props.match.params.id);
			if (obj) {
				return (
					<div>
						<h2>{obj.boardName}</h2>
						<CreateList id={obj.id} />
						<ShowLists id={obj.id} />
					</div>
				);
			}
		}
		return "No board to show";
	};

	return (
		<div>
			<h2>{renderComponent()}</h2>
		</div>
	);
};

const mapStateToProps = state => {
	return { boards: state.boards };
};

export default connect(mapStateToProps, { getBoards })(BoardDetail);
