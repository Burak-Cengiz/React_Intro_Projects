import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as productActions from "../../redux/actions/productActions";
import * as categoryActions from "../../redux/actions/categoryActions";
import ProductDetail from "./ProductDetail";
import { useParams } from "react-router-dom";



function AddOrUpdateProductH2({
  products,
  categories,
  getCategories,
  saveProduct,
  history
}) {
  products = useSelector((state) => state.productListReducer);
  categories = useSelector((state) => state.categoryListReducer);

  const dispatch = useDispatch();
  getCategories = () => dispatch(categoryActions.getCategories());
  saveProduct = (product) => dispatch(productActions.saveProduct(product));

  const cpyproduct = currentProduct(products);

  const [product, setProduct] = useState({ ...cpyproduct });
  //... kullanılmasının nedeni {} ile product'a atılacak verininin obje olarak gösterilmesi
  //bu yüzden {} içine tek tek değerler girilmeli ya da ... ile girilen değerlerin hepsi otomatik alınabilir.
  //yani ... props'un değil props.product'a ait.
  const [errors, setErrors] = useState({});

  const fetchCategories = useCallback(() => {
    if (categories.length === 0) {
      getCategories();
      
    }
  }, [categories.length, getCategories]);
  
  fetchCategories()


  function handleChange(event) {
    const { name, value } = event.target;
    setProduct((previosProduct) => ({
      ...previosProduct,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));
    validate(name, value);
  }

  function validate(name, value) {
    if (name === "productName" && value === "") {
      setErrors((previousErrors) => ({
        ...previousErrors,
        productName: "Ürün ismi gereklidir.",
      }));
    } else {
      setErrors((previousErrors) => ({
        ...previousErrors,
        productName: "",
      }));
    }
  }

  function handleSave(event) {
    event.preventDefault();
    saveProduct(product)
      .then(() => {
        history.push("/");
      })
      .catch((err) => {});
  }

  return (
    
    <ProductDetail
      product={product}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
    ></ProductDetail>
  );
}
function getProductById(products, productId) {
  let product = products.find((product) => product.id === productId) || null;
  return product;
}

function currentProduct(products) {
  const params = useParams;
  const { productId } = params();

  const product =
    productId && products.length > 0 ? getProductById(products, productId) : {};

  return product;
}

export default AddOrUpdateProductH2;
