
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Navbar } from './components/Navbar';
import { SubaruHomePage } from './components/pages/SubaruHomePage';
import { ShoppingCartPage } from './components/pages/ShoppingCartPage';
import { AccessoryDetailsPage } from './components/pages/AccessoryDetailsPage';
import { LoginPage } from './components/pages/LoginPage';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <SubaruHomePage />
        </Route>
        <Route path="/cart">
           <ShoppingCartPage />
        </Route>
        <Route path="/accessory/:id">
          <AccessoryDetailsPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
