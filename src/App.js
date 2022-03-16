import './App.scss';
import WebFont from 'webfontloader';
import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <h1 className='App-Text'>Jackie Kopco</h1>
        <Main />
      </div>
    </Router>
  );
}

export default App;
