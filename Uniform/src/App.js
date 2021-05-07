import React from 'react';
import Navbar from './components/header/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import './App.css';
import Home from './components/header/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sign_up from './components/header/loginform';
import SellShirts from './components/header/SellShirts';
import MyAccount from './components/header/MyAccount';
import AccountInformation from './components/header/AccountInformation';
import AccountDashboard from './components/header/AccountDashboard';
import Overview from './components/sidebar/Overview';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './components/sidebar/Reports';
import Team from './components/sidebar/Team';
import Item from './components/sidebar/Item';
import Item2 from './components/sidebar/Item2';
import Item3 from './components/sidebar/Item3';
import Item4 from './components/sidebar/Item4';
import Item5 from './components/sidebar/Item5';
import Item6 from './components/sidebar/Item6';
import Item7 from './components/sidebar/Item7';
import Item8 from './components/sidebar/Item8';
import Item9 from './components/sidebar/Item9';
import Item10 from './components/sidebar/Item10';
import ContactUs from './components/header/ContactUs';
import Footer1 from './components/footer123/Footer1';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/contactus' component={ContactUs} />
        <Route path='/myaccount' component={MyAccount} />
        <Route path='/sign_up' component={Sign_up} />
        <Route path='/sign_up' component={Sign_up} />
        <Route path='/sellShirts' component={SellShirts} />
        <Route path='/accountinformation' component={AccountInformation} />
        <Route path='/accountdashboard' component={AccountDashboard} />
        <Route path='/overview' exact component={Overview} />
        <Route path='/reports' exact component={Reports} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />
        <Route path='/team' exact component={Team} />
        <Route path='/item' exact component={Item} />
        <Route path='/item2' exact component={Item2} />
        <Route path='/item3' exact component={Item3} />
        <Route path='/item4' exact component={Item4} />
        <Route path='/item5' exact component={Item5} />
        <Route path='/item6' exact component={Item6} />
        <Route path='/item7' exact component={Item7} />
        <Route path='/item8' exact component={Item8} />
        <Route path='/item9' exact component={Item9} />
        <Route path='/item10' exact component={Item10} />
      </Switch>
      <Footer1 />
    </Router>
  );
}

export default App;
