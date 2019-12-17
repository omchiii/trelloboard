import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import CreateBoard from "./CreateBoard";
import BoardList from "./BoardList";
import BoardDetail from "./BoardDetail";

const App = () => {
	return (
		<BrowserRouter>
			<div class="ui container">
				<Route path="/" exact component={CreateBoard} />
			</div>
			<br />
			<div class="ui container">
				<Route path="/" exact component={BoardList} />
			</div>
			<Route path="/:id" exact component={BoardDetail} />
		</BrowserRouter>
	);
};

export default App;
