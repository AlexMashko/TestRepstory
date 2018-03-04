import React, { Component } from "react";

export default class SidebarOpenButton extends Component {
    render() {
        return (
            <button
                onClick={this.openSidebar}
                className="w3-button w3-teal w3-xlarge sidebar-open-button"
                id="sidebar-open-button">☰</button>
        );
    }

    openSidebar() {
        document.getElementById("sidebar").style.cssText="display:block; min-width:25%;transform:scaleX:1.2;";
        document.getElementById("sidebar-open-button").style.display = "none";
    }
};

