import React, { useEffect, useState, useCallback } from "react";
import { connect } from "react-redux";
import { saveProduct } from "../../redux/actions/productActions";
import { getCategories } from "../../redux/actions/categoryActions";
import ProductDetail from "./ProductDetail";
import { useParams } from "react-router-dom";
function AddOrUpdateProduct({
  products,
  categories,
  getProducts,
  getCategories,
  saveProduct,
  history,
  ...props
}) {
  const [product, setProduct] = useState({ ...props.product });
  //... kullanılmasının nedeni {} ile product'a atılacak verininin obje olarak gösterilmesi
  //bu yüzden {} içine tek tek değerler girilmeli ya da ... ile girilen değerlerin hepsi otomatik alınabilir.
  //yani ... props'un değil props.product'a ait.
  const [errors, setErrors] = useState({});

  const fetchCategories = useCallback(() => {
    if (categories.length === 0) {
      getCategories();
    }
  }, [categories.length, getCategories]);

  useEffect(() => {
    fetchCategories();
    setProduct({ ...props.product });
  }, [fetchCategories, props.product]);

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
export function getProductById(products, productId) {
  let product = products.find((product) => product.id === productId) || null;
  return product;
}

function mapStateToProps(state) {
  const params = useParams;
  const { productId } = params();
  //BURDA productId 'ye erişmek istiyorum
  const product =
    productId && state.productListReducer.length > 0
      ? getProductById(state.productListReducer, productId)
      : {};

  return {
    product: product,
    products: state.productListReducer,
    categories: state.categoryListReducer,
  };
}

const mapDispatchToProps = {
  getCategories,
  saveProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct);
