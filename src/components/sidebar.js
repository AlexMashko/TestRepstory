import React, { Component } from "react";
import SidebarAdditionFunctions from "./sidebar-addition-functions";

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar" id="sidebar">
                <div className="sidebar-content">
                    <button
                        onClick={this.closeSidebar}
                        className="w3-bar-item w3-button w3-medium w3-display-topright sidebar-close-button"
                        id="sidebar-close-button"> &times;
                    </button>
                    <h3> Sidebar</h3>
                    <ul>
                        <li><a href="#link1">link1</a></li>
                        <li><a href="#link2">link2</a></li>
                        <li><a href="#link3">link3</a></li>
                    </ul>
                    <hr/>
                    <SidebarAdditionFunctions />
                </div>
            </div>
        );
    }

    closeSidebar() {
        document.getElementById("sidebar").style.display = "none";
        document.getElementById("sidebar").style.minWidth = "0%";
        document.getElementById("sidebar-open-button").style.left = "12%";
        document.getElementById("sidebar-open-button").style.display = "block";
    }
}

