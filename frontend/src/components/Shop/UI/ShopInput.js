import "./ShopInput.scss";

/* So if input object has type: text, then it'll be added below to input because of 
the destructuring. */
{
  type: "text";
}

const ShopInput = (props) => {
  return (
    <div className="shop-input">
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* using spread operator to spread props.input. This ensures that all the key value
      pairs in this input object which we recieve on props.input are added as props, to input. */}
      <input {...props.input} />
    </div>
  );
};

export default ShopInput;
