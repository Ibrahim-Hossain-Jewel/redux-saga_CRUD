import React from "react";
import TopNav from "../TopNav";
class Welcome extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return (
          <div className="grid">
            <div className="col-12">
              <TopNav />
              <h2>Welcome to CRUD Application</h2>
            </div>
          </div>
        );
    }
}
export default Welcome;