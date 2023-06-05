import React, { useState } from "react";
import "./HiddenSearchBar.scss";
/* For font awesome icons */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="hidden-searchbar__container">
      <input
        className="hidden-searchbar__input"
        type="text"
        placeholder="Search..."
      />
      <FontAwesomeIcon
        className="hidden-searchbar__icon"
        icon={faQuestion}
      ></FontAwesomeIcon>
    </div>
  );
};

export default Sidebar;
