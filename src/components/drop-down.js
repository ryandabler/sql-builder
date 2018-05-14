import React from "react";
import { PropTypes } from "prop-types";

import { hideDropDowns } from "../utilities";

import "./drop-down.css";

export default function DropDown(props) {
    function showOptions(e) {
        e.stopPropagation();
        
        // Manually hide any open dropdowns if .drop-down is clicked
        // since event will not propagate up to the window. Don't hide
        // dropdown for clicked item as it will be immediately toggled
        // back on.
        hideDropDowns(dropDownRef);
        dropDownRef.classList.toggle("display");

        // Once-only event listener to clear dropdowns after any click
        window.addEventListener(
            "click",
            hideDropDowns,
            { once: true }
        );
    }
    
    function updateText(e) {
        props.onChange(props.type)(e.target.innerText);
    }

    let dropDownRef;
    const options = props.options.map(option => 
        <span onClick={updateText} key={option}>{option}</span>
    );
    
    return (
        <div className="drop-down-wrapper">
            <div onClick={showOptions} className="drop-down clickable">
                {props.text}
            </div>
            <div className="drop-down-options" ref={ref => dropDownRef = ref}>
                {options}
            </div>
        </div>
    );
}

DropDown.propTypes = {
    onChange: PropTypes.func,
    type: PropTypes.string,
    options: PropTypes.array,
    text: PropTypes.string
};