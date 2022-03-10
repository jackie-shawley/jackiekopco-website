import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './components/HomePageComponent';
import MusicPage from './components/MusicPage';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';



export default function Main() {
   
    const location = useLocation();
    
    return (
        <div>
            <NavBar />
            <TransitionGroup>
                <CSSTransition key={location.key} className='fade' timeout={300}>
                    <Switch location={location}>
                        <Route exact path='/' component={HomePage} />
                        <Route exact path='/music' component={MusicPage} />
                        <Redirect to='/home' />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}
