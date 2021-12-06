import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Navbar } from './components/Navbar';
import { AccessoriesHomePage } from './components/pages/AccessoriesHomePage';
import { ShoppingCartPage } from './components/pages/ShoppingCartPage';
import { AccessoryDetailsPage } from './components/pages/AccessoryDetailsPage';
import { LoginPage } from './components/pages/LoginPage';
import { NewAccessoryPage } from './components/pages/NewAccessoryPage';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <AccessoriesHomePage />
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
        <Route path="/new">
          <NewPetPage />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
