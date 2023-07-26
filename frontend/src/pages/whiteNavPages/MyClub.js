import React from "react";
import "./MyClub.scss";
import Expenses from "../../components/MyClub/Expenses";

const MyClub = () => {
  return (
    <div className="my-club__container">
      <Expenses />
    </div>
  );
};

export default MyClub;
