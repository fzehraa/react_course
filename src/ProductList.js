import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class ProductList extends Component {


  render() {
    return (
      <div>
        <h3>{this.props.infoo.title} - {this.props.currentCategory}</h3>
<table >
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Category Id</th>
            <th>Quantity Per Unit</th>
            <th>Unit Price</th>
            <th>Units In Stock</th>
          </tr>
        </thead>
        <tbody>
            {
              this.props.products
              .map(product => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.productName}</td>
                  <td>{product.categoryId}</td>
                  <td>{product.quantityPerUnit}</td>
                  <td>{product.unitPrice}</td>
                  <td>{product.unitsInStock}</td>
                </tr>

              ))
            }
        </tbody>
        </table>
        <h4>{this.props.infoo.baskaBisey}</h4>
      </div>
    )
  }
}
