import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

export default class App extends Component {

  state = { currentCategory: "", products: [] };

  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName })
    this.getProducts(category.id);
  };


  getProducts = categoryId => {

    let url = "http://localhost:3000/products";
    if(categoryId){
      url += "?categoryId="+categoryId;
    }

    fetch(url)
      .then(response => response.json())
      .then(datamiz => this.setState({ products: datamiz }));

      
  }

  render() {
    let categoryInfo = { title: "Category List" };
    let productInfo = { title: "Product List", baskaBisey: "bisey" };
    return (
      <div>
        <Container>
          <Row>
            <Navi></Navi>
          </Row>
          <Row>
            <Col md={4}>
              <CategoryList
                changeCategory={this.changeCategory}
                currentCategory={this.state.currentCategory}
                infoo={categoryInfo} />
            </Col>
            <Col md={8}>
              <ProductList
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                infoo={productInfo} />
            </Col>
          </Row>
        </Container>


      </div>
    );
  }
}