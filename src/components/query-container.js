import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

import WhereClause from "./where-clause";
import { createWhereClause } from "../actions";

import "./query-container.css";

export function QueryContainer(props) {
    const whereClauses = props.queries.map((query, idx) => 
        <WhereClause key={idx} idx={idx} />
    );

    return (
        <div className="query-containter">
            {whereClauses}
            <button className="and clickable" onClick={props.createWhereClause}>AND</button>
        </div>
    );
}

QueryContainer.propTypes = {
    queries: PropTypes.array,
    createWhereClause: PropTypes.func
};

const mapStateToProps = state => ({
    queries: state.queries
});

const mapDispatchToProps = dispatch => ({
    createWhereClause: () => {
        dispatch(createWhereClause());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(QueryContainer);