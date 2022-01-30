import React, { Component } from 'react';
import SideNav from './SideNav';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div>
                <SideNav />
            </div>
        );
    }
}

export default HomePage;