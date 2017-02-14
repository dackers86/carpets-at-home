import React, { PropTypes } from 'react'
import Product from './product'

import axios from 'axios';

const ProductList = ({ products }) => {

  static async getInitialProps () {
   const res = await axios.get('http://api.football-data.org/v1/competitions/426/leagueTable');
   return {data: res.data}
 }

  render (
    <ul>
      {products.map(product =>
        <Product
          key={product.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />
      )}
    </ul>
  )
}
