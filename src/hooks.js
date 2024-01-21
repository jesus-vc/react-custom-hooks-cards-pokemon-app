import { useState, useEffect } from "react";
import axios from "axios";

const useFlip = () => {
  const [isFacingUp, setIsFacingUp] = useState(true);

  const toggleFlipState = () => {
    setIsFacingUp((isUp) => !isUp);
  };

  return [isFacingUp, toggleFlipState];
};

const useLocalStorage = (key, defaultValue = []) => {
  if (window.localStorage.getItem(key)) {
    defaultValue = JSON.parse(window.localStorage.getItem(key));
  }

  const [state, setState] = useState(defaultValue);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

const useAxios = (baseUrl, localStorageKey, localStorageDefaultValue) => {
  const [cards, setCards] = useLocalStorage(
    localStorageKey,
    localStorageDefaultValue
  );

  const addCard = async (formatter = (data) => data, restofUrl = "") => {
    const url = `${baseUrl}${restofUrl}`;
    const response = await axios.get(url);

    setCards((cards) => [...cards, formatter(response.data)]);
  };
  const deleteAll = () => setCards([]);

  return [cards, addCard, deleteAll];
};

export { useFlip, useAxios };
