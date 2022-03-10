
import './App.scss';
import WebFont from 'webfontloader';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePageComponent';
import SideNav from './components/SideNav';
import MusicPage from './components/MusicPage';
import Main from './Main';
import NavBar from './components/NavBar';



function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Antic_Slab', 'Cardo', 'Cinzel Decorative', 'Cormorant', 'Rajdhani', 'Red_Hat_Display', 'Julius Sans One', 'Antic', 'Shadows Into Light']
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
          <div className='bigPictureText'>
            <h1 className='bigPictureText'>Jackie Kopco</h1>
          </div>
          <Main />
      </div>
    </Router>
  );
}

export default App;
