import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getLists } from "../actions";
import { createData, deleteData } from "../actions";

import "./ShowLists.css";

const ShowLists = props => {
	const [li, setLi] = useState({});
	const [listId, setListId] = useState("");
	const [selectedLiId, setSelectedLiId] = useState("");
	const [selectedLiIdData, setSelectedLiData] = useState("");
	const [oldListId, setOldListId] = useState("");
	const [dragClassName, setdragClassName] = useState("");
	const [dragClassName2, setdragClassName2] = useState("");

	const [selectedObj, setselectedObj] = useState("");
	const [sobjindex, setobjindex] = useState("");

	const onListDragStart = idOfList => {
		const selObj = props.lists.find(list => list.listId === idOfList);
		const selObjIndex = props.lists.findIndex(list => list === selObj);
		setselectedObj(selObj);
		setobjindex(selObjIndex);
		setdragClassName2(idOfList);
	};

	function ondragend2() {
		setdragClassName2("");

		props.getLists();
		setdragClassName2("");
	}

	function onDragLeave() {
		props.getLists();
		const selObjIndex = props.lists.findIndex(
			list => list.listId === selectedObj.listId
		);
		setobjindex(selObjIndex);
	}

	const ondragenter = listejd => {
		if (selectedObj.listId !== listejd) {
			var lists2 = props.lists;
			console.log(listejd.listId);
			const indexof2 = lists2.findIndex(obj => obj.listId === listejd);

			lists2.splice(sobjindex, 1);

			lists2.splice(indexof2, 0, selectedObj);

			localStorage.setItem("listCollection", JSON.stringify(lists2));
			props.getLists();

			setdragClassName2(selectedObj.listId);
		}
	};

	function allowDrop2(ev) {
		ev.preventDefault();
	}

	const onSubmit = e => {
		e.preventDefault();
		props.createData(li[listId], listId);

		setLi({ ...li, [listId]: "" });
	};

	const onDrop = omer => {
		deleteData(selectedLiId, oldListId);
		createData(selectedLiIdData, omer);
		setSelectedLiData("");
		setSelectedLiId("");
		props.getLists();
		setdragClassName("");
	};

	const onDragStart = (id, data, omer2) => {
		setSelectedLiId(id);
		setSelectedLiData(data);
		setOldListId(omer2);
	};

	function allowDrop(ev, listejd) {
		ev.preventDefault();
		setdragClassName(listejd);
	}
	function onClickDiv(id, list) {
		deleteData(id, list);
		props.getLists();
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
					<div
						className={`ui ${dragClassName === list.listId ? "red2" : ""}${
							dragClassName2 === list.listId ? "hide" : ""
						} cards`}
						id="inner_wrapper"
					>
						<div id="box">
							<h1
								draggable="true"
								id={list.listId}
								onDragStart={() => onListDragStart(list.listId)}
								onDragEnter={e => ondragenter(list.listId)}
								onDragOver={e => allowDrop2(e, list.listId)}
								onDragEnd={ondragend2}
								onClick={() => setListId(list.listId)}
								onDragLeave={onDragLeave}
							>
								{list.listName}
							</h1>

							<form className="ui form" onSubmit={onSubmit}>
								<input
									name={list.listId}
									type="text"
									onClick={() => setListId(list.listId)}
									onChange={onChange}
									value={li[list.listId]}
								/>
								<br />
								<button
									className="ui button primary"
									onClick={() => setListId(list.listId)}
									type="submit"
								>
									Create Task
								</button>
								<li
									onDragOver={e => allowDrop(e, list.listId)}
									onDrop={() => onDrop(list.listId)}
									onDragLeave={() => setdragClassName("")}
								>
									Create a task or drop a task!
									<i
										className={
											dragClassName === list.listId
												? "expand arrows alternate icon"
												: ""
										}
									/>
								</li>
								<br />

								{list.listData.map(data => {
									if (data.data) {
										return (
											<div className="cards">
												<div
													className="card"
													onDragStart={() =>
														onDragStart(data.id, data.data, list.listId)
													}
													onDragOver={e => allowDrop(e, list.listId)}
													onDragLeave={() => setdragClassName("")}
													onDrop={() => onDrop(list.listId)}
													draggable="true"
													id={data.id}
													value={data.data}
												>
													<h2 className="header">{data.data}</h2>

													<div
														onClick={() => onClickDiv(data.id, list.listId)}
														className="ui bottom attached button"
													>
														<i className="archive icon"></i>
														Delete
													</div>
												</div>
											</div>
										);
									}
								})}
							</form>
						</div>
					</div>
				));
		}
		return <div></div>;
	};

	return (
		<div id="parentdiv">
			<div>{obj()}</div>
		</div>
	);
};

const mapStateToProps = state => {
	return { lists: state.lists };
};

export default connect(mapStateToProps, { getLists, createData, deleteData })(
	ShowLists
);
