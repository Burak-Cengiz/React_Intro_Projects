import { Component } from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";
import FormDemo1 from './FromDemo1'
import FormDemo2 from './FormDemo2'

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = async (categoryId) => {
    try {
      let url = "http://localhost:3000/products";
      if (categoryId) {
        url += "?categoryId=" + categoryId;
      }
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ products: data });
    } catch (error) {
      console.error("Bir hata oluştu: ", error);
    }
  };

  componentDidMount() {
    this.getProducts();
  }

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);

    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart });
    alertify.success(product.productName + " Eklendi", 1);
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + " silindi", 1);

  };

  render() {
    let productInfo = { title: "ProductList" };
    let categoryInfo = { title: "CategoryList" };
    return (
      <Container>
        <Navi
          removeFromCart={this.removeFromCart}
          cart={this.state.cart}
        ></Navi>

        <Row>
          <Col xs="3">
            <CategoryList
              currentCategory={this.state.currentCategory}
              changeCategory={this.changeCategory}
              info={categoryInfo}
            ></CategoryList>
          </Col>
          <Col xs="9">
            <Routes>
              <Route
                path="/"
                element={
                  <ProductList
                    products={this.state.products}
                    addToCart={this.addToCart}
                    currentCategory={this.state.currentCategory}
                    info={productInfo}
                  ></ProductList>
                }
              ></Route>
              <Route
                path="cart"
                element={
                  <CartList
                    cart={this.state.cart}
                    removeFromCart={this.removeFromCart}
                  ></CartList>
                }
              ></Route>
              <Route path="*" element={<NotFound></NotFound>}></Route>
              <Route path="/form1" element={<FormDemo1></FormDemo1>}></Route>
              <Route path="/form2" element={<FormDemo2></FormDemo2>}></Route>
            </Routes>
            {/* <ProductList
              addToCart={this.addToCart}
              products={this.state.products}
              currentCategory={this.state.currentCategory}
              info={productInfo}
            ></ProductList> */}
          </Col>
        </Row>
      </Container>
    );
  }
}
