import React from "react";

const ColorPicker = () => {
    return (
        <div id="picker-container">
            <div id="color-picker" className="cp-default">
                <div className="picker-wrapper">
                    <div id="picker" className="picker">&nbsp;</div>
                    <div id="picker-indicator" className="picker-indicator">&nbsp;</div>
                </div>
                <div className="pcr-wrapper">
                    <div id="pcr" className="pcr">&nbsp;</div>
                    <div id="pcr-indicator" className="pcr-indicator">&nbsp;</div>
                </div>
                <ul id="color-values">
                    <li><label>RGB:</label><span id="rgb">&nbsp;</span></li>
                    <li><label>HSV:</label><span id="hsv">&nbsp;</span></li>
                    <li><label>HEX:</label><span id="hex">&nbsp;</span></li>
                    <li>
                        <div id="pcr_bg">&nbsp;</div>
                    </li>
                </ul>
            </div>
            <span onClick={() => {this.parentElement.style.display = 'none'}}
                  className="w3-button w3-display-topright">X</span>
        </div>
    );
};

export default ColorPicker;