import ItemsSummary from "./ItemsSummary";
import AvailableItems from "./AvailableItems";

const ShopItems = () => {
  return (
    <div className="shop-items">
      <ItemsSummary />
      <AvailableItems />
    </div>
  );
};

export default ShopItems;
