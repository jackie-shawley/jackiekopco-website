
import './App.scss';
import WebFont from 'webfontloader';
import { useEffect } from 'react';
import HomePage from './components/HomePageComponent';



function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Antic_Slab', 'Cardo', 'Cinzel Decorative', 'Cormorant', 'Rajdhani', 'Red_Hat_Display', 'Julius Sans One', 'Antic']
      }
    });
  }, []);

  return (
    <div className="App">
       {/* Name */}
      <div className='bigPictureText'>
        <h1 className='bigPictureText'>Jackie Kopco</h1>
      </div>
      <HomePage />
    </div>
  );
}

export default App;
