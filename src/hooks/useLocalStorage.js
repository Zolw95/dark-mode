import React, { useState } from "react";

const useLocalStorage = (initialValue, key) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (window.localStorage.getItem(key)) {
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
