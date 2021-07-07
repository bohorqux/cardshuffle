import React from "react";
import Deck from "./components/Deck";
import ShuffleButton from "./components/ShuffleButton";
import CardMap from "./components/CardMap";

const App = () => {
  return (
    <div className="container">
      <Deck />
      <ShuffleButton />
      <CardMap />
    </div>
  );
};

export default App;
