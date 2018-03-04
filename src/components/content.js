import React from "react";
import Sidebar from "./sidebar";
import SidebarOpenButton from "./sidebar-open-button";
import ColorPicker from "./color-picker";
import ContentLead from "./content-lead";
import ContentItemsList from "./content-items-list";

const Content = () => {
    return (
        <div className="content-container">
            <Sidebar />
            <div className="content">
                <SidebarOpenButton />
                <ColorPicker />
                <ContentLead />
                <ContentItemsList />
            </div>
        </div>
    );
};

export default Content;