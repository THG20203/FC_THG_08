import React, { useState } from "react";
import "./HiddenSearchBar.scss";
/* For font awesome icons */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  // useState Code
  const [uiProps, setUiProps] = useState({
    background: "#0a19a1",
    shadow: "",
    transition: "all .3s ease",
    opacity: 0,
    showSearchIcon: true,
  });

  //JSX code
  return (
    <div className="hidden-searchbar__container">
      <input
        className="hidden-searchbar__input"
        type="text"
        placeholder="Search..."
      />
      {/* if uiProps doesn't exist the search bar disappears */}
      {!uiProps.showSearchIcon && (
        <FontAwesomeIcon
          className="hidden-searchbar__icon"
          icon={faQuestion}
        ></FontAwesomeIcon>
      )}
    </div>
  );
};

export default Sidebar;
