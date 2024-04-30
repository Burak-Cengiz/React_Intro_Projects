import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarBrand,
} from "reactstrap";
import CartSummary from "../cart/CartSummary";
import { Link } from "react-router-dom";
import "../../css/styles/navbar.css"; // Navbar stil dosyasını içe aktar


export default class Navi extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand tag={Link} to="/">Northwind App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <Link to="saveproduct" className="nav-link">Ürün Ekle</Link>
              </NavItem>
              <NavItem>
                <Link to="/" className="nav-link">Ürünler</Link>
              </NavItem>
              <NavItem>
                <Link to="/test" className="nav-link">TEST</Link>
              </NavItem>
              <CartSummary></CartSummary>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
