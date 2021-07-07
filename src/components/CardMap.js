import React from "react";

class CardMap extends React.Component {
  state = { cards: [] };

  componentDidMount() {
    let nums = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];
    let symbols = ["C", "D", "H", "S"];
    let cards = nums.flatMap((n) => symbols.map((s) => n + s));
    this.setState({ cards });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Card Map</h1>
      </div>
    );
  }
}

export default CardMap;
