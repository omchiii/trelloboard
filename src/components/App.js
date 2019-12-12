import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import CreateBoard from "./CreateBoard";
import BoardList from "./BoardList";
import BoardDetail from "./BoardDetail";

const App = () => {
	return (
		<div className="ui container">
			<BrowserRouter>
				<Route path="/" exact component={CreateBoard} />
				<br />
				<Route path="/" exact component={BoardList} />
				<Route path="/:id" exact component={BoardDetail} />
			</BrowserRouter>
		</div>
	);
};

export default App;
