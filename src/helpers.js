import { v4 as uuid } from "uuid";

/* Select a random element from values array. */
function choice(values) {
  const randIdx = Math.floor(Math.random() * values.length);
  return values[randIdx];
}

function formatPokemon(responseData) {
  return {
    id: uuid(),
    front: responseData.sprites.front_default,
    back: responseData.sprites.back_default,
    name: responseData.name,
    stats: responseData.stats.map((stat) => ({
      value: stat.base_stat,
      name: stat.stat.name,
    })),
  };
}

function formatCard(responseData) {
  return { id: uuid(), image: responseData.cards[0].image };
}

export { choice, formatPokemon, formatCard };
