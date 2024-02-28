import { useState, useEffect } from "react";

function useLocalStorage(key, initValue) {
  const getTaskArray = () => {
    const storageTaskArray = localStorage.getItem(key);

    if (storageTaskArray) {
      return JSON.parse(storageTaskArray);
    }
    return initValue;
  };

  const [array, setArray] = useState(getTaskArray);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(array));
  }, [array]);

  return [array, setArray];
}

export default useLocalStorage;
