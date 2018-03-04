import React from "react";

const HeaderMenuItem = ({ item }) => {
    return (
        <li><a href="{item.link}">{item.label}</a></li>
    );
};

export default HeaderMenuItem;