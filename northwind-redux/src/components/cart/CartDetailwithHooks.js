import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Button } from "reactstrap";
import * as cartAction from "../../redux/actions/cartActions";
import alertify from "alertifyjs";

const CartDetailwithHooks = () => {

  const cart = useSelector((state) => state.cartReducer);
  
  const dispatch = useDispatch();
  const removeFromCart = (product) => {
    dispatch(cartAction.removeFromCart(product));
    alertify.error(product.productName + " sepetten silindi");
  };

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((cartItem) => (
            <tr key={cartItem.product.id}>
              <th scope="row">{cartItem.product.id}</th>
              <td>{cartItem.product.productName}</td>
              <td>{cartItem.product.unitPrice}</td>
              <td>{cartItem.quantity}</td>
              <td>
                <Button
                  color="danger"
                  onClick={() => removeFromCart(cartItem.product)}
                >
                  Sil
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CartDetailwithHooks;
