import React from 'react';


import Basket from './../components/basket/basket'


let Home = React.createClass({

  render() {
    return(<div>
      <div> Home Page </div>

        <Basket />
      </div>);
  }
});

export default Home;
