import React, { Component } from "react";
import ContentItem from "./content-item";

const pageItems = [
    {
        title: 'link1',
        img: '/images/1.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, voluptatem?',

    },
    {
        title: 'link2',
        img: '/images/mountains.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, voluptatem?',
    },
    {
        title: 'link3',
        img: '/images/mountains2.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim molestias, totam tempore deleniti\n' +
        ' nesciunt dolores mollitia temporibus doloribus ut aliquam. Nihil inventore in iusto consequatur\n' +
        ' non sit, omnis obcaecati? Eaque voluptas quae earum consequuntur rem, dignissimos quo dolore nam\n' +
        ' laudantium, voluptatibus culpa assumenda fuga molestiae nisi modi, porro, reprehenderit quisquam\n' +
        ' alias eos. Dicta, et nihil aspernatur similique ipsam, nemo odio, perspiciatis est alias, ad\n' +
        ' voluptatem aliquam explicabo corporis rerum dolorem obcaecati doloremque deleniti sed ipsa\n' +
        ' officiis voluptates sequi laboriosam quam vel! Illo distinctio sit quasi, veritatis et ab, atque\n' +
        ' fuga, recusandae eius maxime fugiat molestias tempora quibusdam neque libero earum.',
    },
];

export default class ContentItemsList extends Component {
    renderItems() {
        return pageItems.map((item) => {
            return <ContentItem key={item.title} item={item} />
        })
    }

    render() {
        return (
            <div>{this.renderItems()}</div>
        );
    }
};
