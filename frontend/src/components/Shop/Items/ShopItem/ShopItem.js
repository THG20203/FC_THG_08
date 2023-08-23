import "./ShopItem.scss";

/* get props, cause are rendering dummy items in array in available items */
const ShopItem = (props) => {
  /* dollar sign -> to inject dynamic content into this template literal */
  /* toFixed(2) -> always render two decimal places */
  const price = `£${props.price.toFixed(2)}`;
  return (
    <li>
      <div className="shop-item">
        <h3>{props.name}</h3>
        <div className="shop-description">{props.description}</div>
        <div className="shop-price">{price}</div>
      </div>
      <div></div>
    </li>
  );
};

export default ShopItem;
