import "./ShopItem.scss";

/* get props, cause are rendering dummy items in array in available items */
const ShopItem = (props) => {
  /* dollar sign -> to inject dynamic content into this template literal */
  /* toFixed(2) -> always render two decimal places */
  const price = `£${props.price.toFixed(2)}`;
  return (
    <li className="shop-item">
      <div>
        <h4 className="heading-4">{props.name}</h4>
        <p className="paragraph-text">{props.description}</p>
        <p className="paragraph-text">{price}</p>
      </div>
      <div>
        <form className="shop-form">
          <input />
          <button className="btn">+ Add</button>
        </form>
      </div>
    </li>
  );
};

export default ShopItem;
