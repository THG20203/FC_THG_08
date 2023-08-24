import React from "react";
import "./AvailableItems.scss";
import ShopItem from "./ShopItem/ShopItem";

const DUMMY_ITEMS = [
  {
    id: "s1",
    name: "Terrace Scarf",
    description: "Cozy Club Emblem",
    price: 20.0,
  },
  {
    id: "s2",
    name: "Home Shirt",
    description: "Authentic Player Attire",
    price: 80.0,
  },
  {
    id: "s3",
    name: "Away Shirt",
    description: "Official Blues Merchandise",
    price: 65.0,
  },
  {
    id: "s4",
    name: "Victory Mug",
    description: "Supporters' Brew Mug",
    price: 10.0,
  },
];

const AvailableItems = () => {
  /* keeing JSX code lean, only include what I need -> hence map function here */
  /* for every item, want to return a JSX element which represents the item. */
  /* can map to the ShopItem componetn which is the ul list */
  const shopList = DUMMY_ITEMS.map((shop) => (
    <ShopItem
      key={shop.id}
      name={shop.name}
      description={shop.description}
      price={shop.price}
    />
  ));

  return (
    <section className="available-items">
      <ul className="available-items__list">{shopList}</ul>
    </section>
  );
};

export default AvailableItems;
