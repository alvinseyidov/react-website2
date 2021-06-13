import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Aboutus from './components/pages/Aboutus';
import Client from './components/pages/Client';
import Contact from './components/pages/Contact';
import Career from './components/Career';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <div className="main-1 screen ">
      <Router>
        <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services'  component={Services} />
        <Route path='/aboutus'  component={Aboutus} />
        <Route path='/client'  component={Client} />
        <Route path='/career'  component={Career} />
        <Route path='/contact'  component={Contact} />
      </Switch>
      
      </Router>
    </div>
  );
}

export default App;
