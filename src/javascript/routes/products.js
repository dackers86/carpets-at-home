import React from 'react';

import Checkout from './../components/checkout/checkout'

let Products = React.createClass({

  render() {
    return(
      <div>
        <div>Products Page</div>
        <div><Checkout /></div>
      </div>
    );
  }
});

export default Products;
