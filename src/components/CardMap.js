import React from "react";
import Card from "./Card";

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
    this.props.updateDeck(cards);
  }

  renderCardList() {
    let cards_html = [];
    let left = 0;
    for (let card of this.state.cards) {
      cards_html.push(<Card src={card} style={{ marginLeft: `${left}%` }} />);
      left += 1.82;
    }

    return cards_html;
  }

  render() {
    if (this.state.cards.length === 0) {
      return (
        <div>
          <h1>Waiting...</h1>
        </div>
      );
    } else {
      return <div className="container-cards">{this.renderCardList()}</div>;
    }
  }
}
export default CardMap;
