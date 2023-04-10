import FormInput from "./FormInput";

const ProductItem = ({product, changeHandler, deleteHandler}) => {
  return (
    <div className="form-input__list">
      <FormInput
        name="name"
        label="نام محصول"
        type="text"
        value={product.name}
        onChange={changeHandler}
      />
      <div>
        <FormInput
          name="price"
          label="قیمت"
          type="text"
          value={product.price}
          onChange={changeHandler}
        />
        <FormInput
          name="qty"
          label="تعداد"
          type="number"
          value={product.qty}
          onChange={changeHandler}
        />
      </div>
      <button className="remove__product" onClick={deleteHandler}>remove</button>
    </div>
  );
};

export default ProductItem;
