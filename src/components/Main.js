import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './HomePageComponent';
import MusicPage from './MusicPage';
import Contact from './Contact';


export default function Main() {
        
    return (
        <div>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/music' component={MusicPage} />
                <Route exact path='/contact' component={Contact} />
                <Redirect to='/' />
            </Switch>
        </div>
    );
}
