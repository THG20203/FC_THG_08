import React, { useState } from "react";
import "./HiddenSearchBar.scss";
/* For font awesome icons */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faQuestion } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  // useState Code
  const [uiProps, setUiProps] = useState({
    background: "#0a19a1",
    shadow: "",
    transition: "all 1s ease",
    opacity: 0,
    showJustIcon: true,
  });

  let inputStyle = {
    opacity: uiProps.opacity,
  };

  const showJustIcon = () => {
    setUiProps({
      opacity: 1,
      showJustIcon: false,
    });
  };

  //JSX code
  return (
    <div className="hidden-searchbar__container">
      <input
        style={inputStyle}
        className="hidden-searchbar__input"
        type="text"
        placeholder="Search..."
      />
      {/* if uiProps doesn't exist the search bar disappears */}
      {uiProps.showJustIcon ? (
        <FontAwesomeIcon
          className="hidden-searchbar__icon hidden-searchbar__icon--search"
          icon={faSearch}
          onClick={showJustIcon}
        ></FontAwesomeIcon>
      ) : (
        <FontAwesomeIcon
          className="hidden-searchbar__icon hidden-searchbar__icon--search"
          icon={faSearch}
        ></FontAwesomeIcon>
      )}
      <FontAwesomeIcon
        className="hidden-searchbar__icon hidden-searchbar__icon--question"
        icon={faQuestion}
        onClick={showJustIcon}
      ></FontAwesomeIcon>
    </div>
  );
};

export default Sidebar;
