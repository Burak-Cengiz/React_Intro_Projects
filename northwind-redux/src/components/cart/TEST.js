import React, { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import * as productActions from "../../redux/actions/productActions";
import { connect } from "react-redux";
import * as categoryActions from "../../redux/actions/categoryActions";

function TEST({ categories, products, getProductss,getCategories, ...props }) {
  const [count, setCount] = useState(0);
  
  const dispatch = useDispatch();
  getProductss = () => dispatch(productActions.getProducts());
  getCategories = () => dispatch(categoryActions.getCategories());
  function test() {
    
    fetch()
    console.log(props.product,categories);
  }
  const fetch = useCallback(() => {
    if (products.length === 0) {
        getProductss();
      }
      if (categories.length === 0) {
        getCategories();
      }
  }, [categories.length, getCategories]);

  useEffect(()=>{
    setCount(count + 1)
    console.log("use effect")
  },[])

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>You clicked {count} times!</h2>


      <button onClick={() => test()}>TEST</button>
    </div>
  );
}

function productCek(products) {
  let product = products[0];
  return product;
}

function mapStateToProps(state) {
  const product = productCek(state.productListReducer);
  return {
    product: product,
    products: state.productListReducer,
    categories: state.categoryListReducer,
  };
}
export default connect(mapStateToProps,null)(TEST);
