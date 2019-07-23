import React, { Component } from 'react';

import dataTitle from './data-title';
import AppHeaderItem from './App-header-item';
import AppHeaderSocial from './App-header-social';
import dataSocial from './data-social';

import './App-header.css';

export default class AppHeader extends Component {
        
    state = {
        activeTitle: 0
    };
  
    

    getTitle = (activeTit) => {
        const newDataTitle = dataTitle.map((item) => {
          return (
            <AppHeaderItem title={ item.titleName }
                              key={ item.id }
                              active={ activeTit === item.id}
                              onItemClick={ () => this.onItemClick(item.id) }
            />
          );
        });
        return newDataTitle
    };

    onItemClick = (num) => {
        this.setState({
            activeTitle: num
        });
    };

    getSocial = () => { 
        const socialData = dataSocial.map((item) => {
            return(
                <AppHeaderSocial social={ item.social } 
                                key={ item.id }/>
            );
        });
        return socialData
    };      

    render() {
       
        // console.log(countCart)
        return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-light white scrolling-navbar">
                <div className="container">
                    <a href="/" className="navbar-brand">
                        <strong className="blue-text">Nuvarion</strong>
                    </a>
                    <button className="navbar-toggler" type="button"
                            data-toggle="collapse" data-target="#navbarContent"
                            aria-controls="navbarContent" aia-expanded="false" 
                            aria-label="Toggle navigation">
                    <span className="navbar-toggle-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav mr-auto">
                            {this.getTitle(this.state.activeTitle)}
                        </ul>
                        <ul className="navbar-nav nav-flex-icons">
                            <li className="nav-item">
                                <a href="/" className="nav-link">
                                <span className="badge red z-depth-1 mr-1">13</span>
                                <i className="fa fa-shopping-cart"></i>
                                <span className="clearfix d-none d-sm-inline-block">Cart</span>
                                </a>
                            </li>
                            {this.getSocial()}
                        </ul>
                    </div>
                </div> 
            </nav>

        )
    
}
}
