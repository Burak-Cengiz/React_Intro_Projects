import React from "react";
import TextInput from "../toolbox/TextInput";
import SelectInput from "../toolbox/SelectInput";

const ProductDetail = ({ categories, product, onSave, onChange ,errors }) => {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "Güncelle" : "Ekle"}</h2>
      <TextInput
        name="productName"
        label="Product Name"
        value={product.productName || ""}
        onChange={onChange}
        error={errors.productName}
        placeHolder="Ürün İsmi Giriniz"
      ></TextInput>
      <SelectInput
        name="categoryId"
        label="Category"
        value={product.categoryId || ""}
        defaultOption="Seçiniz"
        options={categories.map((category) => ({
          value: category.id,
          text: category.categoryName,
          
        }))}
        onChange={onChange}
        error={errors.categoryId}
      ></SelectInput>
      <TextInput
        name="unitPrice"
        label="Unit Price"
        value={product.unitPrice || ""}
        onChange={onChange}
        error={errors.unitPrice}
        placeHolder="Ürün Fiyatı Giriniz"
      ></TextInput>
      <TextInput
        name="quantityPerUnit"
        label="Quantity Per Unit"
        value={product.quantityPerUnit || ""}
        onChange={onChange}
        error={errors.quantityPerUnit}
        placeHolder="Ürün Başına Miktar Giriniz "
      ></TextInput>
      <TextInput
        name="unitsInStock"
        label="Units In Stock"
        value={product.unitsInStock || ""}
        onChange={onChange}
        error={errors.unitsInStock}
        placeHolder="Ürün Stok Adedi Giriniz"
      ></TextInput>
      <button type="submit" className="btn btn-success">
        Kaydet
      </button>
    </form>
  );
};

export default ProductDetail;
