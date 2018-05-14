import React from "react";
import { PropTypes } from "prop-types";

import "./text-holder.css";

export default function TextHolder(props) {
    return (
        <div onClick={props.onClick} className={`text-holder ${props.onClick ? "clickable" : ""} ${props.visible}`}>
            {props.text}
        </div>
    );
}

TextHolder.propTypes = {
    onClick: PropTypes.func,
    visible: PropTypes.string,
    text: PropTypes.string
};