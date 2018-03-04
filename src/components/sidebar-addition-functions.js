import React from "react";

const SidebarAdditionFunctions = () => {
    return (
        <div id="sidebar-addition-functions" className="form-group ">
            <label htmlFor="fontSizeInput">Шрифт (8-24)px:</label><br/>
            <select name="fontFamilySelect" id="fontFamilySelect">
                <option value="Times New Roman">Times New Roman</option>
                <option value="Georgia">Georgia</option>
                <option value="Verdana">Verdana</option>
                <option value="Comic Sans MS">Comic Sans MS</option>
                <option value="algerian">algerian</option>
                <option value="fantasy">fantasy</option>
                <option value="monospace">monospace</option>
                <option value="TREBUCHET MS">TREBUCHET MS</option>
            </select><br/><br/>
            <input
                id="fontSizeInput"
                className="w3-input fontSizeInput"
                type="number"
                name="fontSizeInput"
                defaultValue="16"/>
            <input
                type="button"
                className="w3-medium w3-bar-itemw 3-input"
                id="fontSizeButton"
                value="Изменить"
            />
            <hr/>
            <button id="buttonOpenColorPicker" className="buttonOpenColorPicker">Цвета фона</button>
            <br/>
            <label htmlFor="fontSizeInput">Удалить последний абзац</label><br/>
            <button className="buttonRemoveLastP" id="buttonRemoveLastP">Удалить</button>
        </div>
    );
};

export default SidebarAdditionFunctions;