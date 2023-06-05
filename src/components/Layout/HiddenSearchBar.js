import React, { useState } from "react";
import "./HiddenSearchBar.scss";
/* For font awesome icons */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faQuestionCircle,
  faCirclePlay,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  //JSX code
  return (
    <div className="hidden-searchbar__container">
      <FontAwesomeIcon
        className="hidden-searchbar__icon hidden-searchbar__icon--search"
        icon={faSearch}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        className="hidden-searchbar__icon hidden-searchbar__icon--question"
        icon={faQuestionCircle}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        className="hidden-searchbar__icon hidden-searchbar__icon--player"
        icon={faCirclePlay}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        className="hidden-searchbar__icon hidden-searchbar__icon--user"
        icon={faUser}
      ></FontAwesomeIcon>
    </div>
  );
};

export default Sidebar;
