import React, { useState } from "react";
import "./styles.css";

const musicDB = {
  Blues: [
    { name: "I'd Rather be Blind", rating: "4/5" },
    { name: "Summertime", rating: "4.2/5" },
    { name: "Bad to the Bone", rating: "3.8/5" },
    { name: "Soul Man", rating: "4.7/5" }
  ],

  Pop: [
    { name: "Call Me Maybe", rating: "4.9/5 " },
    { name: "Sorry", rating: "4.6/5" },
    { name: "Torn ", rating: "4.2/5 " },
    { name: "Toxic ", rating: "4/5 " }
  ],

  Classical: [
    { name: "Symphony No. 5 in C minor", rating: "4.7/5" },
    { name: "Bagatelle No. 25 in A minor", rating: "4.8/5" }
  ],

  Edm: [
    { name: "Digital Love ", rating: "4.9/5" },
    { name: "Clarity", rating: "4.5/5" },
    { name: "All That Matters", rating: "4/5" }
  ],

  Jazz: [
    { name: "So What", rating: "4/5 " },
    { name: "Fly Me To The Moon", rating: "4.2/5" },
    { name: "Take Five", rating: "4/5" },
    { name: "What A Wonderful World", rating: " " },
    { name: "Strange Fruit", rating: " 3/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Blues");

  const genreCLickHandler = (genre) => {
    console.log(genre);
    setGenre(genre);
  };

  return (
    <div className="App">
      <nav></nav>

      <div className="main-container">
        <span className="heading">
          <span role="img">🎵</span> Get Musici-fied!{" "}
        </span>
        <div className="description ">
          {" "}
          Tired of Listening repititve songs on your playlist?
          <br />
          Try our recommendation for every{" "}
          <span style={{ color: "#8b5cf6" }}>mood!</span>
        </div>

        <div class="list-genre">
          {Object.keys(musicDB).map((genre) => (
            <button
              onClick={() => genreCLickHandler(genre)}
              className="genre-list"
            >
              {genre}
            </button>
          ))}
        </div>

        <hr />
        <ul className="list-song">
          {musicDB[selectedGenre].map((song) => (
            <li key={song.name}>
              {" "}
              <div class="div-song">
                {song.name} <br />
                {song.rating}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <footer> </footer>
    </div>
  );
}
