import React from "react";
import Deck from "./components/Deck";
import ShuffleButton from "./components/ShuffleButton";
import CardMap from "./components/CardMap";

class App extends React.Component {
  state = { cards: [] };

  updateDeck = (cards) => {
    console.log(cards);
  };

  render() {
    return (
      <div className="container">
        <Deck />
        <ShuffleButton />
        <CardMap
          cards={this.state.cards}
          updateDeck={(cards) => this.updateDeck(cards)}
        />
      </div>
    );
  }
}

export default App;
