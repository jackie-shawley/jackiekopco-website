import React, { Component } from 'react';
import BigPicture from './BigPicture';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div>
                <BigPicture />
            </div>
        );
    }
}

export default HomePage;