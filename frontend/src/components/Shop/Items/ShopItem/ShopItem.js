import "./ShopItem.scss";
import ShopInput from "../../UI/ShopInput";

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
          {/* One pair of curly braces to evaluate a javascript expression which is passed in 
          as a value, then the expression inside input is a javascript object, hence the second set of
          curly braces. */}
          <ShopInput
            label="amount"
            input={{
              id: "amount",
              type: "number",
              min: "1",
              max: "5",
              step: "1",
              defaultValue: "1",
            }}
          />
          <button className="btn">+ Add</button>
        </form>
      </div>
    </li>
  );
};

export default ShopItem;
