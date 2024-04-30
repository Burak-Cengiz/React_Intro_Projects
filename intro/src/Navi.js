import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import CartSummary from "./CartSummary";
import {Link} from 'react-router-dom'


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
          <NavbarBrand href="/">Northwind App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ms-auto" navbar >
              <NavItem>
                <NavLink ><Link to="form1" style={{ textDecoration: 'none' }} >Form 1</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink ><Link to="form2" style={{ textDecoration: 'none' }} >Form 2</Link></NavLink>
              </NavItem>
              <NavItem>
              <NavItem>
                <NavLink ><Link to="/" style={{ textDecoration: 'none' }} >Ürünler</Link></NavLink>
              </NavItem>
              </NavItem>
              <CartSummary removeFromCart = {this.props.removeFromCart}
              cart={this.props.cart}
              ></CartSummary>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
