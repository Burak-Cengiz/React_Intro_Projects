import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavLink,
  NavItem
} from "reactstrap";


export default class CartSummary extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Cart - {this.props.cart.length}
        </DropdownToggle>
        {/* <DropdownMenu right>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              {cartItem.product.productName}
              <Badge>{cartItem.quantity}</Badge>
            </DropdownItem>
          ))}
          <DropdownItem>Reset</DropdownItem>
        </DropdownMenu> */}
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => { return (
            <DropdownItem key={cartItem.product.id}>
                <Badge style={{ marginRight: "0.3rem" }} color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)} >Remove</Badge>
              {cartItem.product.productName}
              <Badge style={{ marginLeft: "0.5rem" }}>{cartItem.quantity}</Badge>
            </DropdownItem>
        )})}
          <DropdownItem>
            <Link to="cart">Go To Cart</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  renderEmptyCart() {
    return (
      <NavItem>
        <NavLink>Empty Card</NavLink>
      </NavItem>
    );
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() :this.renderEmptyCart()}
      </div>
    );
  }
}
