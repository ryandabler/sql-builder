// Each predicate has a different set of comparison operators, so
// assign each predicate to its comparison type
export const predicates = [
    {
        predicate: "User email",
        type: "string"
    }, {
        predicate: "Screen width",
        type: "number"
    }, {
        predicate: "Screen height",
        type: "number"
    }, {
        predicate: "# of visits",
        type: "number"
    }, {
        predicate: "First name",
        type: "string"
    }, {
        predicate: "Last name",
        type: "string"
    }, {
        predicate: "Page response time (ms)",
        type: "number"
    }, {
        predicate: "Domain",
        type: "string"
    }, {
        predicate: "Path",
        type: "string"
    }
];

export const conditionTypes = {
    "string": [
        "starts with",
        "does not start with",
        "equals",
        "does not equal",
        "contains",
        "does not contain",
        "in list",
        "not in list",
        "contains all"
    ],
    "number": [
        "less than or equal to",
        "equal to",
        "not equal to",
        "greater than or equal to",
        "between"
    ]
};

export const API_BASE_URL = "http://localhost:8080";