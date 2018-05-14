import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

import DropDown from "./drop-down";
import TextHolder from "./text-holder";
import Input from "./input";
import { predicates, conditionTypes } from "../config";
import { updateWhereClause, deleteWhereClause } from "../actions";

import "./where-clause.css";

export function WhereClause(props) {
    // Generate some basic info to all for drop downs to be auto-
    // generated and change based on user interactions
    const predList = predicates.map(predicate => predicate.predicate);
    const predType = props.query.predicate
        ? predicates.find(predicate => predicate.predicate === props.query.predicate).type
        : "string";
    
    return (
        <div className="where-clause">
            <TextHolder text={"-"}
                        onClick={props.deleteWhereClause}
                        visible={props.totalCount > 1 ? "visible" : "invisible"} />
            <DropDown options={predList}
                      text={props.query.predicate}
                      onChange={props.updateWhereClause}
                      type={"predicate"} />
            <TextHolder text={"is"}
                        visible={predType === "number" ? "visible" : "none"} />
            <DropDown options={conditionTypes[predType]}
                      text={props.query.condition}
                      onChange={props.updateWhereClause}
                      type={"condition"} />
            <Input text={props.query.values}
                   onInput={props.updateWhereClause("values")}
                   classes={props.query.condition === "between" ? "short" : ""}
                   required={true} />
            <TextHolder text={"and"}
                        visible={props.query.condition === "between" ? "visible" : "none"} />
            <Input text={props.query.values2}
                   onInput={props.updateWhereClause("values2")}
                   classes={props.query.condition === "between" ? "short" : "none"}
                   required={props.query.condition === "between" ? true : false} />
        </div>
    );
}

WhereClause.propTypes = {
    deleteWhereClause: PropTypes.func,
    totalCount: PropTypes.number,
    updateWhereClause: PropTypes.func,
    query: PropTypes.object
};

const mapStateToProps = (state, props) => ({
    totalCount: state.queries.length,
    query: state.queries[props.idx],
});

const mapDispatchToProps = (dispatch, props) => ({
    updateWhereClause: type => value => {
        dispatch(updateWhereClause(type, value, props.idx));
    },

    deleteWhereClause: () => {
        dispatch(deleteWhereClause(props.idx));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(WhereClause);