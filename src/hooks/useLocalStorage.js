import React, { useState } from "react";

const useLocalStorage = (initialValue, key) => {
  const [storedValue, setStoredValue] = useState(() => {
    // access to create stateful logic for setting the state of values
    // Check if key exists

    if (window.localStorage.getItem(key)) {
      //if exists - initialize and return
      return JSON.parse(window.localStorage.getItem(key));
    }
    window.localStorage.setItem(key, JSON.stringify(initialValue));
    return initialValue;
  });

  const setStorageValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setStorageValue];
};

export default useLocalStorage;
