import React, {Component} from 'react';

import AppHeader from '../App-header';
import Products from '../Products';
import Footer from '../Footer';


export default class App extends Component {



    render() {
        return (
            <div>
                <AppHeader />
                <Products />
                <Footer />
            </div>
        );
    };
}