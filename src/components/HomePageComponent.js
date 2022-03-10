import React, { Component } from 'react';
import Main from '../Main';
import SideNav from './SideNav';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div>
                <h1>This is the homepage</h1>                
            </div>
        );
    }
}

export default HomePage;