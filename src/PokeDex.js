import React from "react";
import PokemonSelect from "./PokemonSelect";
import { useAxios } from "./hooks";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

  const localStorageKey = "pokemon";
  const localStorageDefaultValue = [];

  const [pokemon, setPokemon, clearPokemon] = useAxios(
    baseUrl,
    localStorageKey,
    localStorageDefaultValue
  );

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={setPokemon} deleteAll={clearPokemon} />
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map((cardData) => (
          <PokemonCard key={cardData.id} {...cardData} />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
