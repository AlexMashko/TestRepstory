import React, { Component } from "react";
import HeaderMenuItem from "./header-menu-item";

const menuItems = [
    { label: 'link1', link: '#link1' },
    { label: 'link2', link: '#link2' },
    { label: 'link3', link: '#link3' },
    { label: 'link4', link: '#link4' },
    { label: 'link5', link: '#link5' },
];

export default class HeaderMenu extends Component {
    renderItems() {
        return menuItems.map((item) => {
            return <HeaderMenuItem key={item.link} item={item} />
        })
    }

    render() {
        return (
            <div className="main-menu">
                <ul>
                    { this.renderItems() }
                </ul>
            </div>
        );
    }
};
