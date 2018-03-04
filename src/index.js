import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import AuthBlock from './components/auth-block';
import Content from './components/content';
import Footer from './components/footer';
import UpArrow from './components/up-arrow';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <AuthBlock />
                <Content />
                <Footer />
                <UpArrow />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.wrapper'));