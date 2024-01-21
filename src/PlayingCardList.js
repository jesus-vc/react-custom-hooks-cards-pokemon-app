import React from "react";
import { formatCard } from "./helpers";
import { useAxios } from "./hooks";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const baseUrl = "https://deckofcardsapi.com/api/deck/new/draw/";

  const localStorageKey = "cards";
  const localStorageDefaultValue = [];

  const [cards, setCards, deleteAll] = useAxios(
    baseUrl,
    localStorageKey,
    localStorageDefaultValue
  );

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => setCards(formatCard)}>
          Add a playing card!
        </button>
        <button onClick={deleteAll}>Erase all!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map((cardData) => (
          <PlayingCard key={cardData.id} front={cardData.image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
