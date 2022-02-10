import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from './components/auth/Landing';
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Dashboard from './components/Dashboard';

function App() {
  return (
  <Router>
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </div>
    </div>
    </Router>
  );
}
export default App;