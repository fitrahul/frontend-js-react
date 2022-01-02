
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
import ContestList from './components/ContestList';
import StudentList from './components/StudentList';

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
        <Route exact path="/stu_form">
          <Student />
        </Route>
        <Route exact path="/con_form">
          <Contest />
        </Route>
        <Route exact path="/admin_link">
          <Admin />
        </Route>
        <Route exact path="/contestlist">
          <ContestList />
        </Route>
        <Route exact path="/studentlist">
          <StudentList />
        </Route>
        <br /><Route>404 Page not found</Route>
      </Switch>
    </div>
  );
}

export default App;