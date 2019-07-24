import React, { useState, useEffect } from "react";
import "../styles/index.sass";
import { birdData } from "../content/birdData";
import ImgLeaves from "../images/ImgLeaves";
import Card from "../components/Card";
import BtnBiome from "../components/BtnBiome";
import SEO from "../components/seo";

// An array of biomes (categories) from birdData. (`Set` keeps only unique values)
const biomes = Array.from(new Set(birdData.map(data => data.biome)));

const IndexPage = () => {
  // This list gets populated by birdsSelected and is then mapped over to display the birds.
  const [displayBirds, setDisplayBirds] = useState([]);

  //////////////////////////////////
  // Bird biome selection (buttons)
  //////////////////////////////////
  const [birdsSelected, setBirdsSelected] = useState("favorites");

  useEffect(() => {
    setDisplayBirds(
      birdData.filter(data => {
        if (birdsSelected === "favorites") {
          return data.favorite === true;
        } else return data.biome.includes(birdsSelected);
      })
    );
  }, [birdsSelected]);

  //////////////////////////////////
  // Search
  //////////////////////////////////
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // If query is blank reset list to whatever category has been most recently selected.
    // Otherwise set it to birds whose names match the search query.
    searchQuery === ""
      ? setDisplayBirds(
          birdData.filter(data => {
            if (birdsSelected === "favorites") {
              return data.favorite === true;
            } else return data.biome.includes(birdsSelected);
          })
        )
      : setDisplayBirds(
          birdData.filter(data => {
            const birdToLowerCase = data.name.toLowerCase();
            return birdToLowerCase.includes(searchQuery.toLowerCase());
          })
        );
  }, [searchQuery]);

  //////////////////////////////////
  // ↓ Markup begins ↓
  //////////////////////////////////
  return (
    <div className="pageWrap">
      <SEO title="Home" />

      <picture className="imgLeaves imgLeavesTop">
        <ImgLeaves />
      </picture>

      <header className="heroText">
        <h1>199</h1>
        <h1>Birds</h1>
      </header>

      <input
        className="searchInput"
        type="text"
        placeholder="Search all birds"
        onChange={e => setSearchQuery(e.target.value)}
      />

      <nav>
        {biomes.map((biome, i) => (
          <BtnBiome
            handleClick={() => setBirdsSelected(biome)}
            biome={biome}
            birdsSelected={birdsSelected}
            key={i}
          />
        ))}
        <button
          onClick={() => setBirdsSelected("favorites")}
          className={birdsSelected === "favorites" ? "btnSelected" : ""}
        >
          Favorites
        </button>
      </nav>

      <main>
        {displayBirds.length === 0 && (
          <div className="noMatchMessage">
            <h1>No Matches</h1>
            <p>
              There aren't any birds that match your search.{" "}
              <span role="img" aria-label="sad face">
                😢
              </span>
            </p>
          </div>
        )}

        {displayBirds.length > 0 && (
          <picture className="imgLeaves imgLeavesBottom">
            <ImgLeaves />
          </picture>
        )}

        <section>
          <div className="grid">
            {displayBirds.map((bird, i) => (
              <Card {...bird} key={i} />
            ))}
          </div>
        </section>
      </main>

      {displayBirds.length > 0 && <footer></footer>}
    </div>
  );
};

export default IndexPage;
