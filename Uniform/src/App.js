import React from 'react';
import Navbar from './components/Navbar';
import Sidebar_left from './components/Sidebar_left';
import Side1 from './components/pages/Side1';
import Side2 from './components/pages/Side2';
import Side3 from './components/pages/Side3';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Help from './components/pages/Help';
import MyAccount from './components/pages/MyAccount';
import Sign_up from './components/pages/loginform';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';
import SellShirts from './components/pages/SellShirts';
import AccountInformation from './components/pages/AccountInformation';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar_left />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Help' component={Help} />
        <Route path='/MyAccount' component={MyAccount} />
        <Route path='/sign_up' component={Sign_up} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/consulting' component={Consulting} />
        <Route path='/side1' component={Side1} />
        <Route path='/side2' component={Side2} />
        <Route path='/side3' component={Side3} /> 
        <Route path='/sign_up' component={Sign_up} />
        <Route path='/SellShirts' component={SellShirts} />
        <Route path='/AccountInformation' component={AccountInformation} />
        <SellShirts />
      </Switch>
    </Router>
  );
}

export default App;
