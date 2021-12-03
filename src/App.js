import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import Login from "./components/Login"
import Header from "./components/Header"
import Home from "./components/Home"
import Detail from "./components/Detail"
import Trailer from "./components/Trailer"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/detail/:id">
            <Detail />
          </Route>
          <Route exact path="/trailer/:id">
            <Trailer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;