import { API_BASE_URL } from "./config";

export const UPDATE_WHERE_CLAUSE = "UPDATE_WHERE_CLAUSE";
export const updateWhereClause = (_type, value, idx) => ({
    type: UPDATE_WHERE_CLAUSE,
    _type,
    value,
    idx
});

export const DELETE_WHERE_CLAUSE = "DELETE_WHERE_CLAUSE";
export const deleteWhereClause = idx => ({
    type: DELETE_WHERE_CLAUSE,
    idx
});

export const CREATE_WHERE_CLAUSE = "CREATE_WHERE_CLAUSE";
export const createWhereClause = idx => ({
    type: CREATE_WHERE_CLAUSE,
    idx
});

export const sendQueryToServer = (query) => () => {
    return (
        fetch(`${API_BASE_URL}/query`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ query })
        })
        .then(res => res.json())
    );
}