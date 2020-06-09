import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialValue, key) => {
  const [value, setValue] = useLocalStorage(initialValue, key);

  const useEffect = (e) => {
    //let isToggled = e.target.classList.contains("toggled");
    if (value) {
      setValue(false);
      document.body.classList.remove("dark-mode");
    } else {
      setValue(true);
      document.body.classList.add("dark-mode");
    }
  };
  return [value, useEffect];
};

export default useDarkMode;
