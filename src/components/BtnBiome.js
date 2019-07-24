import React from "react";

const BtnBiome = ({ handleClick, birdsSelected, biome }) => {
  return (
    <button
      onClick={handleClick}
      className={birdsSelected === biome ? "btnSelected" : ""}
      aria-label={biome}
    >
      {biome}
    </button>
  );
};

export default BtnBiome;
