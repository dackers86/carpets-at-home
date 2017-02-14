import React from 'react';
import ReactDOM from 'react-dom';

export default class Basket extends React.Component {

  state = {
    items: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      items: [
              {id: 1, description: "carpet1"},
              {id: 1, description: "carpet1"}
            ]
    };
  }

  render() {
    return(
      <div>
        <label>Count: {this.state.items.length}</label>
      </div>
    )
  }
};
