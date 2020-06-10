import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialValue, key) => {
  const [value, setValue] = useLocalStorage(initialValue, key);

  useEffect(() => {
    //let isToggled = e.target.classList.contains("toggled");
    if (value) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [value]);

  const switchMode = (e) => {
    setValue(!value);
  };
  return [value, switchMode];
};

export default useDarkMode;
