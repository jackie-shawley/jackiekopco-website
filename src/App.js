
import './App.css';
import BigPicture from './components/BigPicture';
import WebFont from 'webfontloader';
import { useEffect } from 'react';



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
     <BigPicture />
    </div>
  );
}

export default App;
