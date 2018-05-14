import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

import WhereClause from "./where-clause";
import { createWhereClause, sendQueryToServer } from "../actions";

import "./query-container.css";

export function QueryContainer(props) {
    function submitHandler(e) {
        e.preventDefault();

        props.sendQuery(props.queries);
    }

    const whereClauses = props.queries.map((query, idx) => 
        <WhereClause key={idx} idx={idx} />
    );

    return (
        <form onSubmit={submitHandler} className="query-containter">
            {whereClauses}
            <button className="and clickable" onClick={props.createWhereClause}>AND</button>
            <button className="search clickable">Search</button>
        </form>
    );
}

QueryContainer.propTypes = {
    queries: PropTypes.array,
    createWhereClause: PropTypes.func,
    sendQuery: PropTypes.func
};

const mapStateToProps = state => ({
    queries: state.queries
});

const mapDispatchToProps = dispatch => ({
    createWhereClause: (e) => {
        e.preventDefault();

        dispatch(createWhereClause());
    },

    sendQuery: query => {
        dispatch(sendQueryToServer(query))
            .then(({sql}) => console.log(sql))
            .catch(err => console.error(err))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(QueryContainer);