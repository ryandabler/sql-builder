import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

import QueryContainer from "./components/query-container";

import "./App.css";

class App extends Component {
	constructor(props) {
		super();
		this.props = props;
	}
	
	render() {
		return (
			<div className="App">
				<header>
					<h1>Search for Sessions</h1>
				</header>
				<QueryContainer />
			</div>
		);
	}
}

App.propTypes = {
	queries: PropTypes.array,
	sendQuery: PropTypes.func
};

const mapStateToProps = state => ({
	queries: state.queries
});

export default connect(mapStateToProps)(App);
