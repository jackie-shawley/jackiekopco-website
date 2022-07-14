import './App.scss';
import WebFont from 'webfontloader';
import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'reactstrap';
import TempHomePage from './components/temp site/TempHomePageComponent';
import TemporaryFooter from './components/temp site/TemporaryFooter';

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Antic_Slab', 'Cardo', 'Cinzel Decorative', 'Cormorant', 'Rajdhani', 'Red_Hat_Display', 'Julius Sans One', 'Antic', 'Shadows Into Light', 'Arima', 'Quicksand']
      }
    });
  }, []);

  return (
    <div style={{ backgroundColor: 'rgb(242, 242, 242)', width: '100%', height: '100%'}}>
    <Router>
      {/* <div className="app">
        <Row>
          <Col>
            <h1 className='app-text'>Jackie Kopco</h1>
          </Col>
        </Row>
        
        <Main />
        <TempHomePage />
      </div> */}
      <div >
        <TempHomePage />
        <TemporaryFooter />
      </div>
    </Router>
    </div>
  );
}

export default App;
