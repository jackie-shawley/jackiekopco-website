import React, { Component } from 'react';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div>
                <h1 style={{ color: 'white' }}>This is the homepage</h1>                
            </div>
        );
    }
}

export default HomePage;