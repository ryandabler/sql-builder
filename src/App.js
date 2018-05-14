import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

import QueryContainer from "./components/query-container";
import { sendQueryToServer } from "./actions";

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
				<div className="main-content">
					<QueryContainer />
				</div>
				<button className="search clickable" onClick={() => this.props.sendQuery(this.props.queries)}>Search</button>
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

const mapDispatchToProps = dispatch => ({
	sendQuery: query => 
		dispatch(sendQueryToServer(query))
			.then(({sql}) => console.log(sql))
			.catch(err => console.error(err))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
