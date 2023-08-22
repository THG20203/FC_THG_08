import React from "react";
import "./AvailableItems.scss";

const DUMMY_ITEMS = [
  {
    id: "i1",
    name: "Terrace Scarf",
    description: "Cozy Club Emblem",
    price: 20.0,
  },
  {
    id: "i2",
    name: "Home Shirt",
    description: "Authentic Player Attire",
    price: 80.0,
  },
  {
    id: "i3",
    name: "Away Shirt",
    description: "Official Blues Merchandise",
    price: 65.0,
  },
  {
    id: "i4",
    name: "Victory Mug",
    description: "Supporters' Brew Mug",
    price: 10.0,
  },
];

const AvailableItems = () => {
  /* keeing JSX code lean, only include what I need -> hence map function here */
  /* for every item, want to return a JSX element which represents the item. */
  const itemsList = DUMMY_ITEMS.map((item) => <li>{item.name}</li>);

  return (
    <section className="available-items">
      <ul className="available-items__list">{itemsList}</ul>
    </section>
  );
};

export default AvailableItems;
