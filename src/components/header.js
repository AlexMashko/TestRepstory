import React from "react";
import HeaderMenu from "./header-menu";

const Header = () => {
    return (
        <header className="header clearfix">
            <div className="header-logo">
                <img src="/images/logo.png" className=" header-logo-img" />
            </div>
            <HeaderMenu />
        </header>
    );
};

export default Header;