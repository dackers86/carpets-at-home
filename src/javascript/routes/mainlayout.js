import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router"


let MainLayout = React.createClass({

  render() {
    return (

          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
            </ul>
            {this.props.children}
          </div>
    );
  }
});

export default MainLayout;
