import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import alertify from "alertifyjs";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink,
  NavItem,
  Badge
} from "reactstrap";
import * as cartAction from "../../redux/actions/cartActions";
import { bindActionCreators } from "redux";

class CartSummary extends Component {
  removeFromCart = (product) => {
    this.props.action.removeFromCart(product);
    alertify.error(product.productName + " sepetten silindi");
  };
  renderEmpty() {
    return (
      <NavItem>
        <NavLink>Sepetiniz boş</NavLink>
      </NavItem>
    );
  }
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Sepetiniz
        </DropdownToggle>
        <DropdownMenu end>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              <span
                className="close-button"
                style={{ fontSize: "1.8rem", cursor: "pointer" }}
                onClick={() => this.removeFromCart(cartItem.product)}
              >
                &times; {/* İsteğe bağlı, kapatma işareti */}
              </span>
              {cartItem.product.productName}
              <Badge style={{ marginLeft: "0.5rem" }} color="success">
                {cartItem.quantity}
              </Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>
            <Link to={"/cart"}>Sepete Git</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action: {
      removeFromCart: bindActionCreators(cartAction.removeFromCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
