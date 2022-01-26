import React, { Component } from 'react';
import BigPicture from './BigPicture';
import SideNav from './SideNav';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div>
                <BigPicture />
                <SideNav />
            </div>
        );
    }
}

export default HomePage;