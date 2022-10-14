import React from "react";
import { Link } from "react-router-dom";
class TopNav extends React.Component{
    constructor(){
        super();
        this.state = {}
    }
    render(){
        return (
          <div>
            <style jsx="true">
              {`
                .topBar {
                  background-color: #3f51b5;
                  padding: 15px;
                }
                .topBar a {
                  color: white;
                  font-size: 20px;
                  text-decoration: none;
                  padding-left: 20px;
                }
                .topBar a:hover {
                  color: gray;
                }
              `}
            </style>
            <div className="topBar">
              <Link to="/" className="nav">
                Home
              </Link>
              <Link to="/crud">CRUD</Link>
            </div>
            <br />
          </div>
        );
    }
}
export default TopNav;