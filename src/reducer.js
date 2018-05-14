import {
    UPDATE_WHERE_CLAUSE,
    DELETE_WHERE_CLAUSE,
    CREATE_WHERE_CLAUSE
} from "./actions";
import { predicates, conditionTypes } from "./config";

const initialState = {
    queries: [
        {
            predicate: predicates[0].predicate,
            condition: conditionTypes[predicates[0].type][0],
            values: "",
            values2: ""
        }
    ]
};

export const reducer = (state = initialState, action) => {
    if (action.type === UPDATE_WHERE_CLAUSE) {
        const queries = state.queries.map((query, idx) => {
            if (idx === action.idx) {
                const { _type, value } = action;

                // Need to possibly overwrite condition if we are
                // switching from a number-based predicate to a string
                // or vice versa
                if (_type === "predicate") {
                    const predType = predicates.find(predicate => 
                        predicate.predicate === value
                    ).type;

                    if (!conditionTypes[predType].includes(query.condition)) {
                        return { ...query, [_type]: value, condition: conditionTypes[predType][0] };
                    }
                }

                return { ...query, [_type]: value };
            }

            return query;
        });
        
        return { ...state, queries };
    } else if (action.type === DELETE_WHERE_CLAUSE) {
        return {
            ...state,
            queries: state.queries.filter((query, idx) => idx !== action.idx)
        };
    } else if (action.type === CREATE_WHERE_CLAUSE) {
        const newWhereClause = {
            predicate: predicates[0].predicate,
            condition: conditionTypes[predicates[0].type][0],
            values: "",
            values2: ""
        };
        
        return {
            ...state,
            queries: [ ...state.queries, newWhereClause ]
        };
    }

    return state;
}