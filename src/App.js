import React from 'react';
import UserDataInfo from './component/home'
import "./App.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Welcome from './component/Welcome';
class App extends React.Component{
  render(){ 
    return (
      <Router>
        <div className="grid">
          <div className="col-12">
            <h2 className="bismillha" style={{ textAlign: "right" }}>
              بسم اله الرحمن الرحيم
            </h2>
            <Switch>
              <Route path="/" exact>
                <Welcome />
              </Route>

              <Route path="/crud" exact>
                <UserDataInfo />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;