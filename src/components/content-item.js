import React from "react";

const ContentItem = ({ item }) => {
    return (
        <div>
            <h3 id={item.title}>
                <center>{item.title}</center>
            </h3>
            <img src={item.img} className="img-thumbnail" alt=""/>
            <p>{item.text}</p>
        </div>
    );
};

export default ContentItem;