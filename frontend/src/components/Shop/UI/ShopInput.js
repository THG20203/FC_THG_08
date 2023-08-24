import "./ShopInput.scss";

const ShopInput = (props) => {
  return (
    <div className="shop-input">
      <label
        className="shop-input__label paragraph-text"
        htmlFor={props.input.id}
      >
        {props.label}
      </label>
      {/* using spread operator to spread props.input. This ensures that all the key value
      pairs in this input object which we recieve on props.input are added as props, to input. */}
      <input className="shop-input__input" {...props.input} />
    </div>
  );
};

export default ShopInput;
