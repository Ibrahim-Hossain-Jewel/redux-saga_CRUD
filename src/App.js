import React from 'react';
import Counter from './component/home';
import "./App.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
class App extends React.Component{
  render(){
    return (
      <div className="grid">
        <div className="col-12">
          <h2>بسم اله الرحمن الرحيم</h2>
          <Counter />
        </div>
      </div>
      // <div class="grid">
      //   <div class="col">1</div>
      //   <div class="col">2</div>
      //   <div class="col">3</div>
      // </div>
    );
  }
}

export default App;