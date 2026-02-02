import React from "react";
import "../styles/MainComponentStyle.scss";
import MainButton from "./MainButton";
import FilmDescriptionComponent from "./FilmDescriptionComponent";

function MainComponent() {
  return (
    <div className="main_component_container">
      <FilmDescriptionComponent />
      <br />
      <MainButton />
    </div>
  );
}

export default MainComponent;
