import React from "react";
import { PropTypes } from "prop-types";

import "./input.css";

export default function Input(props) {
    return (
        <input type="text"
               className={`input ${props.classes}`}
               onChange={(e) => props.onInput(e.target.value)}
               value={props.text}
               required={props.required} />
    );
}

Input.propTypes = {
    classes: PropTypes.string,
    onInput: PropTypes.func,
    text: PropTypes.string,
    required: PropTypes.bool
};