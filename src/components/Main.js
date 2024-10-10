import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './HomePageComponent';
import MusicPage from './music/MusicPage';
import Contact from './Contact';
import SideNav from './SideNav';


export default function Main() {
        
    return (
        <div className='main-body'>
            <SideNav />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/music' component={MusicPage} />
                <Route exact path='/contact' component={Contact} />
                <Redirect to='/' />
            </Switch>
            {/* <Footer /> */}
        </div>
    );
}
