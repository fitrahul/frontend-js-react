
import './App.css';
import { Route, Switch } from "react-router-dom"
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Admin from './components/Admin';
import Login from './components/Login';
import Contest from './components/Contest';
import Student from './components/Student';
import Dsa from './components/Dsa';
import Coading from './components/Coading';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/admin">
          <Login />
        </Route>
        <Route exact path="/dsa">
          <Dsa />
        </Route>
        <Route exact path="/coading">
          <Coading />
        </Route>
        <Route>404 Page not found</Route>
      </Switch>
      
    </div>
  );
}

export default App;