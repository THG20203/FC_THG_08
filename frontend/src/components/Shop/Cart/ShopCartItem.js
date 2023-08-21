import classes from "./ShopCartItem.scss";

const ShopCartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes["shop-cart--item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className="shop-summary">
          <span className="shop-price">{price}</span>
          <span className="shop-amount">x {props.amount}</span>
        </div>
      </div>
      <div className="shop-actions">
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default ShopCartItem;
